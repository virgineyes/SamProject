import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import vueDeltaIt from "@deltaww/vue-delta-it"
import "vue-multiselect/dist/vue-multiselect.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import Swal from "sweetalert2/dist/sweetalert2.all.min.js"
import "@sweetalert2/theme-bulma/bulma.min.css"
import "view-design/dist/styles/iview.css"
import Multiselect from "vue-multiselect"
Vue.component("multiselect", Multiselect)
import "@/assets/public.css"
import App from "@/App"
import store from "@/store/index"
import router from "@/config/router"
import i18n from "@/config/lang"
import { menu } from "@/util/menu"
import { Translate, ExceptionHandling } from "@/util/common"
import * as types from "@/store/mutations_types.js"
import { getCookie, delCookie } from "@/util/cookie"


const authAxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL
})

authAxiosInstance.interceptors.request.use(
  config => {
    config.headers["Accept-Language"] = store.getters.getLanguage
    config.headers["Authorization"] = "Bearer " + getCookie(process.env.VUE_APP_AUTH_TOKEN_NAME)
    config.headers["Content-Type"] = "application/json"
    return config
  },
  error => {
    store.commit(types.LOADING, false)
    Swal.fire({
      icon: "error",
      title: Translate("COMMON_MESSAGE_ERROR"),
      text: Translate("COMMON_MESSAGE_SYSTEM_ERROR"),
    })
    return Promise.reject(error)
  }
)

Vue.prototype.$buildErrorMessage = function(error) {
  let text = ""
  if (error.response) {
    if (error.response.status===401) {
      text = Translate("COMMON_MESSAGE_NOT_AUTH")
    } else if (error.response.data) {
      if (Array.isArray(error.response.data.messages)) {
        error.response.data.messages.forEach(message => {
          text = text.concat(message, "\n")
        })
      } else {
        text = error.response.data
      }
    } else {
      text = Translate("COMMON_MESSAGE_SYSTEM_ERROR")
    }
  }
  return text
}

Vue.prototype.$buildMenuPage = function(vueInstance, userPages) {
  var tempPages = Object.assign([], userPages)
  let menuOptionsLeft = []

  menu.forEach(tree => {
    let subMenuOptions = []
    tree.children.forEach(page => {
      if (tempPages.some(userPage => userPage===page.code)) {
        subMenuOptions.push({
          type: "link",
          text: vueInstance.$t(page.name),
          path: { name: `${page.path}` },
          iconLeft: `<i class="fa ${page.icon}"></i>`,
        })
      }
    })

    if (subMenuOptions.length > 0) {
      menuOptionsLeft.push({
        type: "link",
        text: vueInstance.$t(tree.name),
        subMenuOptions,
      })
    }
  })
  vueInstance.setMenuOptionsLeft(menuOptionsLeft)
}

Vue.prototype.$readUserDetail = function(vueInstance) {
  console.log("XX")
  vueInstance.toggleLoading(true)
  vueInstance.$authHttp
    .get("current-user")
    .then((response) => {
      vueInstance.toggleLoading(false)
      vueInstance.setUserProfile(response.data)
    })
    .catch((error) => {
      console.log(error.response)
      vueInstance.toggleLoading(false)
      vueInstance.setLogin(false)
      delCookie(process.env.VUE_APP_AUTH_TOKEN_NAME)
      if (error.response.status===444) {
        let text = vueInstance.$buildErrorMessage(error)
        vueInstance.$Swal.fire({
          icon: "error",
          title: Translate("COMMON_MESSAGE_ERROR"),
          text,
        })
      }
    })
}

Vue.prototype.$authHttp = authAxiosInstance
Vue.prototype.$Swal = Swal

Vuex.Store.prototype.$authHttp = authAxiosInstance
Vuex.Store.prototype.$Swal = Swal
Vuex.Store.prototype.$router = router
Vuex.Store.prototype.$i18n = i18n

Vue.use(vueDeltaIt)

Vue.config.productionTip = false

Vue.directive("upper-case", {
  inserted(el, _, vnode) {
    el.addEventListener("input", async e => {
      e.target.value = e.target.value.toUpperCase()
      vnode.componentInstance.$emit("input", e.target.value.toUpperCase())
    })
  },
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount("#app")
