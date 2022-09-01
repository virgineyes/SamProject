import Vue from "vue";
import Vuex from "vuex"
import App from "./App.vue";
import router from "./router";
import axios from "axios"
import MaterialKit from "./plugins/material-kit";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL
})

axiosInstance.interceptors.request.use(
  config => {
    // config.headers["Accept-Language"] = store.getters.getLanguage
    // config.headers["Authorization"] = "Bearer " + getCookie(process.env.VUE_APP_AUTH_TOKEN_NAME)
    // config.headers["Content-Type"] = "application/json"
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

Vue.prototype.$http = axiosInstance
Vue.config.productionTip = false;
Vuex.Store.prototype.$http = axiosInstance
Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
