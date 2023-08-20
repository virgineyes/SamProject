<template>
  <vue-navigation-bar :options="navbarOptions" ref="navbar">
    <!-- <template v-slot:custom-section v-if="isSmallDevice">
      <p>
        <a href="javascript:void(0)" @click="router('home')">
          <span class="logoTilt" style="font-size:24px;">{{ $t('COMMON_TITLE') }}</span>
        </a>
      </p>
      <Select v-model="locale" @on-change="changeLang" style="width: 100px; padding: 5px;">
        <Option value="zh-TW">繁體中文</Option>
        <Option value="en">English</Option>
      </Select>
      <template v-if="isLogin"  style="padding: 2px;">
        <Dropdown @on-click="auhtControl($event)" style="margin-left: 18px">
          <Button style="width: 280px; font-size:18px;" >
            {{ account }}
            <Icon type="ios-arrow-down"></Icon>
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem name="logout" style="font-size:24px;">{{ $t('COMMON_TEXT_LOGOUT') }}</DropdownItem>
            <DropdownItem v-if="isSystemAdmin" name="switchUser" style="font-size:24px;">{{ $t('COMMON_TEXT_SWITCH_USER') }}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </template>
      <template v-if="!isLogin">
        <div class="logoTilt p-1">{{ $t('LOGIN') }} <i class="fa fa fa-sign-in" @click="login"></i></div>
      </template>
    </template> -->
  </vue-navigation-bar>
</template>

<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
import "vue-navigation-bar/dist/vue-navigation-bar.css"
import VueNavigationBar from "vue-navigation-bar"
import { delCookie, setCookie, getCookie } from "@/util/cookie"
import { Translate } from "@/util/common"

export default {
  name: "NavigationBar",
  components: {
    VueNavigationBar,
  },
  methods: {
    ...mapGetters([
      "getUserProfile",
      "getLanguage",
      "getLogin",
      "getSmallDevice",
      "getGroupCode",
      "getMenuOptionsLeft",
    ]),
    ...mapActions(["setLanguage", "setLogin", "setGroupCode", "toggleLoading", "setUserProfile", "setMenuOptionsLeft"]),
    router(path) {
      this.$router.push(`/${path}`, () => {})
    },
    auhtControl(action) {
      if (action === "logout") {
        delCookie(process.env.VUE_APP_AUTH_TOKEN_NAME)
        this.setLogin(false)
        if (this.$router.history.current.fullPath !== "/home") {
          this.$router.push("/home")
        }
      } else if (action === "switchUser") {
        this.switchUserModal = true
      }
    },
    changeLang() {
      this.setLanguage(this.locale)
    },
  },
  data() {
    return {
      locale: this.getLanguage(),
      switchUserModal: false,
      switchUserName: "",
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        collapseButtonOpenColor: "#00a0e9",
        collapseButtonCloseColor: "#00a0e9",
        tooltipAnimationType: "scale",
        menuOptionsLeft: [],
        mobileBreakpoint: 992,
      },
    }
  },
  watch: {
    menuOptionsLeft(val, oldVal) {
      this.navbarOptions.menuOptionsLeft = val
    },
    deep: true,
  },
  computed: {
    menuPages() {
      return this.getUserProfile().menuPages
    },
    isLogin() {
      return this.getLogin()
    },
    account() {
      return this.getUserProfile().user.username
    },
    isSmallDevice() {
      return this.getSmallDevice()
    },
    isSystemAdmin() {
      return (
        this.getUserProfile() &&
        this.getUserProfile().systemRoles &&
        this.getUserProfile().systemRoles.includes("SYSTEM_ADMIN")
      )
    },
    menuOptionsLeft() {
      return this.getMenuOptionsLeft()
    },
  },
}
</script>

<style>
.vnb__collapse-button {
  margin-right: 1.7rem;
}
.vnb__popup__bottom {
  height: 500px;
  overflow-y: auto;
}
.vnb__menu-options--left {
  padding-left: 6%;
}
.vnb__menu-options__option__link {
  font-size: 18px;
}
</style>
