import {
  createRouter,
  createWebHashHistory,
  RouterOptions,
  Router,
  RouteRecordRaw,
} from 'vue-router'
import Cookies from 'js-cookie'
import pinia from '../store/store'
import { base } from '../store/base'
import { getCurrentUser } from '../util/api/auth'
import { ElMessage } from 'element-plus'
import scrollToTop from '~/util/composables/basic'

const baseI = base(pinia)
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/info', name: 'in-fo', component: () => import('../views/Info.vue') },
  {
    path: '/demo1/tableDemo',
    name: 'DEMO1_TABLEDEMO',
    component: () => import('../views/TableDemo.vue')
  },
  {
    path: '/demo2/fileUploaderDemo',
    name: 'DEMO2_FILEUPLOADERDEMO',
    component: () => import('../views/FileUploaderDemo.vue')
  },
  { path: '/:pathMatch(.*)*', name: 'Error', component: () => import('../views/ErrorPage.vue') },
]

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
      }
    } else {
      scrollToTop()
    }
  },


}

const router: Router = createRouter(options)

const ValidateDeltaDomain = (url: string) => {
  if (
    process.env.NODE_ENV.trim() === 'development' ||
    process.env.NODE_ENV.trim() === 'dev' ||
    process.env.NODE_ENV.trim() === 'qas' ||
    process.env.NODE_ENV.trim() === 'prod'
  ) {
    return true
  }
  const validDomain = process.env.VUE_APP_DOMAIN
  const host = new URL(url).hostname
  return host === validDomain || host.endsWith('.' + validDomain)
}

router.beforeEach((to, from, next) => {
  console.log("1")
  baseI.loading = true
  const token = to.query.token as string
  if (token) {
    console.log("2")
    Cookies.set(import.meta.env.VITE_APP_AUTH_TOKEN_NAME, token, {
      expires: 1000 * 60 * 60 * 6
    })
    baseI.setLogin(true)
    baseI.setRedirectUrl(to.path)
  }
  if (Cookies.get(import.meta.env.VITE_APP_AUTH_TOKEN_NAME)) {
    console.log("3")
    if (Object.keys(baseI.getUser)?.length === 0) {
      console.log("4")
      getCurrentUser()
        .then((response: any) => {
          console.log("5")
          baseI.setUser(response.data)
        })
        .catch((error: any) => {
          Cookies.remove(import.meta.env.VITE_APP_AUTH_TOKEN_NAME)
          ElMessage.error({
            message: error,
            duration: 5000
          })
        })
        .finally(() => {
          console.log("6")
          baseI.loading = false
        })
    }
    console.log("7")
    next()
  } else {
    console.log("8")
    // Home 不需要登入(大寫區分 Redirect )
    if (to.name === 'Error') {
      console.log("9")
      next()
    } else {
      console.log("10")
      localStorage.setItem(
        'loginAuthCount',
        `${Number(localStorage.getItem('loginAuthCount') ?? 0) + 1}`
      )
      let authnURL = import.meta.env.VITE_APP_AUTH_URL
      let frontURL = import.meta.env.VITE_APP_FRONTEND_URL

      if (!ValidateDeltaDomain(authnURL)) {
        console.log("11")
        authnURL = ''
        next({ name: 'Error', query: { errorCode: "403", redirect: "false" } })
      }
      if (!ValidateDeltaDomain(frontURL)) {
        console.log("12")
        frontURL = ''
        next({ name: 'Error', query: { errorCode: "403", redirect: "false" } })
      }

      if (Number(localStorage.getItem('loginAuthCount')) < 3) {
        console.log("13")
        window.location.href =
          `${authnURL}api/auth/redirect?redirectUrl=` +
          encodeURIComponent(`${frontURL}#${to.path}`) +
          '&errorUrl=' +
          `${frontURL}#/home`
      } else {
        console.log("14")
        localStorage.setItem('loginAuthCount', '0')
        window.location.href =
          `${authnURL}#/auth/login?redirectUrl=` +
          encodeURIComponent(`${frontURL}#${to.path}`) +
          '&errorUrl=' +
          `${frontURL}#/home`
      }
    }
    console.log("15")
    baseI.loading = false
  }
})
router.afterEach(() => {
  console.log("16")
  baseI.loading = false
})
export default router
