import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

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

export default router
