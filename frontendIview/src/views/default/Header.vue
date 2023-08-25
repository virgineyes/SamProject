<template>
  <header class="fixed-top">
    <div v-if="isLogin">
      <ul class="sidenav">
        <li>
          <a href="javascript:void(0)" @click="router('about')">
            <span class="logoTilt" style="font-size:24px; color:black">About</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="router('class')">
            <span class="logoTilt" style="font-size:24px; color:black">課程</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="router('calendar')">
            <span class="logoTilt" style="font-size:24px; color:black">課程行事曆</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="router('about')">
            <span class="logoTilt" style="font-size:24px; color:black">線上商城</span>
          </a>
        </li>
        <li class="cursor right">
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
        <li class="right">
          <Select v-model="locale" @on-change="changeLang" style="width: 100px;">
            <Option value="zh-TW">繁體中文</Option>
            <Option value="en">English</Option>
          </Select>
        </li>
      </ul>
    </div>
    <div v-if="!isLogin">
      <ul>
        <li class="login">
          <a href="javascript:void(0)" @click="login">
            <span class="logoTilt" style="font-size:24px; color:black">{{ $t("LOGIN") }}</span>
          </a>
        </li>
      </ul>
    </div>
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
body {
  background-color: white;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: lightgray;
}

li {
  float: left;
}

li.right {
  float: right;
  padding: 14px 16px;
}

li.login {
  float: right
}

li a,
.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover,
.dropdown:hover .dropbtn {
  background-color: yellow;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
