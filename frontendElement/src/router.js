import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Redirect from "./views/Redirect.vue";
import EditUserProfile from "./views/EditUserProfile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import { delCookie, setCookie, getCookie } from "@/util/cookie"

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },   
    {
      path: "/redirect",
      name: "redirect",
      components: { default: Redirect, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/editUserProfile",
      name: "editUserProfile",
      components: { default: EditUserProfile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.path == '/' || to.path == '/redirect') {
    next()
  } else {
    if (getCookie(process.env.VUE_APP_AUTH_TOKEN_NAME)) {
      next()
    } else {
      next({
        path: '/',
      })
    }
  }
})


export default router
