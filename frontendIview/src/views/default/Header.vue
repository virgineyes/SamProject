<template>
  <header class="fixed-top">
    <div class="navbar navbar-expand-lg navbar-light bg-delta-blue">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="javascript:void(0)" @click="router('home')">
          <img class="logo" src="@/assets/logo_w.svg" style="margin-bottom:6px"/>
          <span class="logoTilt" style="font-size:24px;">{{ $t('COMMON_TITLE') }}</span>
        </a>

        <div v-if="isLogin">
          <ul class="navbar-nav" v-show="!isSmallDevice">
            <li class="nav-item">
              <Select v-model="locale" @on-change="changeLang" style="width: 100px">
                <Option value="zh-TW">繁體中文</Option>
                <Option value="en">English</Option>
                <Option value="zh-CN">简体中文</Option>
              </Select>
            </li>
            <li class="nav-item cursor">
              <Dropdown @on-click="authControl($event)" style="margin-left: 18px">
                <Button type="default" ghost style="width: 280px; font-size:18px;" >
                  {{ account }}
                  <Icon type="ios-arrow-down"></Icon>
                </Button>
                <DropdownMenu slot="list">
                  <DropdownItem name="logout" style="font-size:24px;">{{ $t('COMMON_TEXT_LOGOUT') }}</DropdownItem>
                  <DropdownItem v-if="isSystemAdmin" name="switchUser" style="font-size:24px;">{{ $t('COMMON_TEXT_SWITCH_USER') }}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </div>
        <div v-if="!isLogin">
          <ul class="navbar-nav">
            <li class="nav-item text-white logoinUser login" @click="login"><p style="font-size:18px; margin-top:8px">{{ $t('LOGIN') }}</p></li>
            <li class="nav-item cursor" @click="login"><i class="fa fa-3x fa-sign-in" style="align-content: center;"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <NavigationBar v-if="isLogin"></NavigationBar>
    <Modal :z-index="999" :reset-drag-position="true" v-model="switchUserModal" sticky :draggable="true" :title="$t('COMMON_TEXT_SWITCH_USER')" @on-ok="confirmSwitchUser">
      <FormRow :fieldNameArr="[$t('LOGIN_ACCOUNT')]">
        <Input v-model="switchUserName" v-upper-case slot="a" />
      </FormRow>
    </Modal>
  </header>
</template>

<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
import NavigationBar from "@/views/default/NavigationBar"
import { delCookie, setCookie, getCookie } from "@/util/cookie"
import { Translate } from "@/util/common"

export default {
  name: "Header",
  components: {
    NavigationBar,
  },
  data() {
    return {
      locale: this.getLanguage(),
      switchUserModal: false,
      switchUserName: ""
    }
  },
  created() {
    if (getCookie(process.env.VUE_APP_AUTH_TOKEN_NAME) && JSON.stringify(this.getUserProfile().user)==="{}") {
      this.$readUserDetail(this)
    }
  },
  methods: {
    ...mapGetters(["getSmallDevice", "getLogin", "getUserProfile", "getLanguage", "getGroupCode"]),
    ...mapActions(["setLanguage", "setLogin", "setUserProfile", "setGroupCode", "toggleLoading", "setMenuOptionsLeft"]),
    router(path) {
      this.$router.push(`/${path}`, () => {})
    },
    changeLang() {
      this.setLanguage(this.locale)
      this.$buildMenuPage(this, this.menuPages)
      this.setLanguage(this.locale)
      if (this.$router.history.current.fullPath.includes("/account/maintain")) {
        this.$router.push("/home", () => {})
      }
    },
    authControl(action) {
      if (action==="logout") {
        delCookie(process.env.VUE_APP_AUTH_TOKEN_NAME)
        this.setLogin(false)
        if (this.$router.history.current.fullPath !== "/home") {
          this.$router.push("/home")
        }
      } else if (action==="switchUser") {
        this.switchUserModal = true
      }
    },
    confirmSwitchUser() {
      this.toggleLoading(true)
      this.$authHttp.put("switch-user", JSON.stringify({
          username: this.switchUserName
        }))
        .then((response) => {
          this.toggleLoading(false)
          this.switchUserName = ""
          setCookie(process.env.VUE_APP_AUTH_TOKEN_NAME, response.data.access_token, 1000 * 60 * 60 * 5)
          this.setGroupCode(null)
          this.$readUserDetail(this)
        })
        .catch((error) => {
          let text = this.$buildErrorMessage(error)
          this.$Swal.fire({
            icon: "error",
            title: Translate("COMMON_MESSAGE_ERROR"),
            text,
          })
        })
    },
    systemAdminLogin(action) {
      if (action==="manualLogin") {
        window.location.href = `${process.env.VUE_APP_AUTH_URL}#/auth/login?redirectUrl=` + encodeURIComponent(`${process.env.VUE_APP_FRONTEND_URL}/#/home`) 
      } else if (action==="autoLogin") {
        window.location.href = `${process.env.VUE_APP_AUTH_URL}api/auth/redirect?redirectUrl=` + encodeURIComponent(`${process.env.VUE_APP_FRONTEND_URL}/#/home`)
      }
    },
    login() {
      if (process.env.VUE_APP_IS_ON_EXTERNAL==="T") {
        window.location.href = `${process.env.VUE_APP_AUTH_URL}#/auth/login?redirectUrl=` + encodeURIComponent(`${process.env.VUE_APP_FRONTEND_URL}/#/home`)
      } else {
        window.location.href = `${process.env.VUE_APP_AUTH_URL}api/auth/redirect?redirectUrl=` + encodeURIComponent(`${process.env.VUE_APP_FRONTEND_URL}/#/home`)
      } 
    },
  },
  computed: {
    menuPages() {
      return this.getUserProfile().menuPages
    },
    isSmallDevice() {
      return this.getSmallDevice()
    },
    isLogin() {
      return this.getLogin()
    },
    account() {
      return this.getUserProfile().user.username
    },
    isSystemAdmin() {
      return this.getUserProfile() && this.getUserProfile().systemRoles && this.getUserProfile().systemRoles.includes('SYSTEM_ADMIN')
    },
    groupCode: {
      get() {
        return this.getGroupCode() ? this.getGroupCode().code : ""
      },
      set(val){}
    },
    isExternal() {
      return process.env.VUE_APP_IS_ON_EXTERNAL==="T"
    }
  },
  mounted() {
    if (navigator.language.startsWith("en")) {
      this.locale = "en"
    } else {
      this.locale = navigator.language
    }
    this.setLanguage(this.locale)
  },
}
</script>

<style scoped>
#box {
  position: fixed;
  bottom: 30px;
  right: 20px;
  background:  #00a0e9;
  width: 130px;
  height: 50px;
  border-color: black;
  border-style: solid;
  border-width: 2px;
}
</style>
