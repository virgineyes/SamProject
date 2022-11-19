import Vue from "vue"
import Router from "vue-router"

import store from "@/store/index"
import Home from "@/views/default/Home"
import GetToken from "@/views/default/GetToken"
import Error from "@/views/default/Error"
import * as types from '@/store/mutations_types.js'
import {
  getCookie,
  setCookie,
  delCookie
} from "@/util/cookie"

Vue.use(Router)

const router = new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },

    {
      path: "/getToken",
      name: "GetToken",
      component: GetToken,
    },
    {
      path: "/error",
      name: "Error",
      component: Error,
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (!getCookie("LOGIN-ACCOUNT")) {
    setCookie("LOGIN-ACCOUNT", 1, 1000 * 60 * 60 * 5)
  } else {
    setCookie("LOGIN-ACCOUNT", Number(getCookie("LOGIN-ACCOUNT")) + 1, 1000 * 60 * 60 * 5)
  }

  if (to.query.token) {
    setCookie(process.env.VUE_APP_AUTH_TOKEN_NAME, to.query.token, 1000 * 60 * 60 * 5)
    store.commit(types.LOGIN, true)
    store.commit(types.REDIRECT_URL, to.path)
    next({
      path: '/getToken',
    })
  }

  if (getCookie(process.env.VUE_APP_AUTH_TOKEN_NAME)) {
    store.commit(types.LOGIN, true)
    delCookie("LOGIN-ACCOUNT")
    next()
  } else {
    if (to.path==='/home') {
      next()
    } else {
      store.commit(types.LOGIN, false)
      if (Number(getCookie("LOGIN-ACCOUNT")) < 3) {
        if (process.env.VUE_APP_IS_ON_EXTERNAL==="T") {
          window.location.href = `${process.env.VUE_APP_AUTH_URL}#/auth/login?redirectUrl=` + encodeURIComponent(`${process.env.VUE_APP_FRONTEND_URL}/#` + to.path)
        } else {
          window.location.href = `${process.env.VUE_APP_AUTH_URL}api/auth/redirect?redirectUrl=` + encodeURIComponent(`${process.env.VUE_APP_FRONTEND_URL}/#` + to.path)
        } 
      } else {
        window.location.href = `${process.env.VUE_APP_AUTH_URL}#/auth/login?redirectUrl=` + encodeURIComponent(`${process.env.VUE_APP_FRONTEND_URL}/#` + to.path)
      }
    }
  }
})

export default router
