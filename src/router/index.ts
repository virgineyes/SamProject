import {
  createRouter,
  createWebHashHistory,
  RouterOptions,
  Router,
  RouteRecordRaw
} from 'vue-router'
import Cookies from 'js-cookie'
import pinia from '../store/store'
import { base } from '../store/base'
const baseI = base(pinia)
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/info', name: 'in-fo', component: () => import('../views/Info.vue') }
]

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes
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
  if (to.query.token) {
    const token = to.query.token as string
    Cookies.set(import.meta.env.VITE_APP_AUTH_TOKEN_NAME, token, {
      expires: 1000 * 60 * 60 * 6
    })
  }
  if (Cookies.get(import.meta.env.VITE_APP_AUTH_TOKEN_NAME)) {
    baseI.token = Cookies.get(import.meta.env.VITE_APP_AUTH_TOKEN_NAME) || ""
    next()
  } else {
    // Home 不需要登入(大寫區分 Redirect )
    if (to.path === '/homeNoAuth') {
      next()
    } else {
      localStorage.setItem(
        'loginAuthCount',
        Number(localStorage.getItem('loginAuthCount') ?? 0) + 1
      )
      let authnURL = import.meta.env.VITE_APP_AUTH_URL
      let frontURL = import.meta.env.VITE_APP_FRONTEND_URL

      if (!ValidateDeltaDomain(authnURL)) {
        authnURL = ''
        next({ name: 'NoAuthorized' })
      }
      if (!ValidateDeltaDomain(frontURL)) {
        frontURL = ''
        next({ name: 'NoAuthorized' })
      }

      if (Number(localStorage.getItem('loginAuthCount')) < 3) {
        window.location.href =
          `${authnURL}api/auth/redirect?redirectUrl=` +
          encodeURIComponent(`${frontURL}#${to.path}`) +
          '&errorUrl=' +
          `${frontURL}#/home`
      } else {
        localStorage.setItem('loginAuthCount', '0')
        window.location.href =
          `${authnURL}#/auth/login?redirectUrl=` +
          encodeURIComponent(`${frontURL}#${to.path}`) +
          '&errorUrl=' +
          `${frontURL}#/home`
      }
    }
  }
})

export default router
