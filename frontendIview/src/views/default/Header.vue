<template>
  <header class="fixed-top">
    <div class="navbar navbar-expand-lg navbar-light bg-delta-gold">
      <div class="container-fluid">
        <a class="navbar-brand" href="javascript:void(0)" @click="router('home')">
          <span class="logoTilt" style="font-size:32px;">{{ $t("COMMON_TITLE") }}</span>
        </a>

        <div v-if="isLogin">
          <ul class="navbar-nav" v-show="!isSmallDevice">
            <a class="nav-item" href="javascript:void(0)" @click="router('about')">
              <span class="logoTilt" style="font-size:24px; color:black">About</span>
            </a>
            <a class="nav-item" href="javascript:void(0)" @click="router('class')">
              <span class="logoTilt" style="font-size:24px; color:black">課程</span>
            </a>
            <a class="nav-item" href="javascript:void(0)" @click="router('calendar')">
              <span class="logoTilt" style="font-size:24px; color:black">課程行事曆</span>
            </a>
            <a class="nav-item" href="javascript:void(0)" @click="router('about')">
              <span class="logoTilt" style="font-size:24px; color:black">線上商城</span>
            </a>
            <li class="nav-item">
              <Select v-model="locale" @on-change="changeLang" style="width: 100px;">
                <Option value="zh-TW">繁體中文</Option>
                <Option value="en">English</Option>
              </Select>
            </li>
            <li class="nav-item cursor">
              <Dropdown @on-click="authControl($event)" style="margin-left: 18px">
                <Button type="default" ghost style="width: 200px; font-size:18px;">
                  {{ account }}
                  <Icon type="ios-arrow-down"></Icon>
                </Button>
                <DropdownMenu slot="list">
                  <DropdownItem name="personalDetail" style="font-size:24px;">個人資料</DropdownItem>
                  <DropdownItem name="logout" style="font-size:24px;">{{ $t("COMMON_TEXT_LOGOUT") }}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </div>

        <div v-if="!isLogin">
          <ul class="navbar-nav">
            <li class="nav-item logoinUser login" @click="login">
              <p style="font-size:18px; margin-top:8px">{{ $t("LOGIN") }}</p>
            </li>
            <li class="nav-item cursor" @click="login">
              <i class="fa fa-3x fa-sign-in" style="align-content: center;"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <NavigationBar v-if="isLogin && isSmallDevice"></NavigationBar>
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
      switchUserName: "",
    }
  },
  created() {
    if (getCookie(process.env.VUE_APP_AUTH_TOKEN_NAME) && JSON.stringify(this.getUserProfile().user) === "{}") {
    }
  },
  methods: {
    ...mapGetters(["getSmallDevice", "getLogin", "getUserProfile", "getLanguage"]),
    ...mapActions(["setLanguage", "setLogin", "setUserProfile", "toggleLoading", "setMenuOptionsLeft"]),
    router(path) {
      this.$router.push(`/${path}`, () => {})
    },
    changeLang() {
      this.setLanguage(this.locale)
      if (this.$router.history.current.fullPath.includes("/account/maintain")) {
        this.$router.push("/home", () => {})
      }
    },
    authControl(action) {
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
    login() {
      this.setLogin(true)
      this.setUserProfile({
        user: {
          username: "Ace.Chiu",
        },
      })
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
  background: #00a0e9;
  width: 130px;
  height: 50px;
  border-color: black;
  border-style: solid;
  border-width: 2px;
}
</style>
