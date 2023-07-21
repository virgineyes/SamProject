import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Cookies from 'js-cookie'
import axios, { AxiosError } from 'axios'
import pinia from './store/store'
// or use cdn, uncomment cdn link in `index.html`

import './styles/index.scss'
import 'uno.css'

// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'
// import '~/styles/element/index.scss'

// import all element css, uncommented next line
import 'element-plus/dist/index.css'

const axiosInstance = (
  baseURL: string,
  condtionPopMessageWhenError: (error: AxiosError) => boolean,
  condtionPopMessageWhenNotError: (error: AxiosError) => boolean
) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-type': 'application/json'
    }
  })

  instance.interceptors.request.use(
    (config) => {
      // config.headers['Accept-Language'] = store.getters.getLanguage
      config.headers.Authorization = 'Bearer ' + Cookies.get(process.env.VUE_APP_AUTH_TOKEN_NAME)
      config.headers['Content-Type'] = 'application/json'
      // store.commit(types.LOADING, true)
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      // store.commit(types.LOADING, false)
      return response
    },
    (error) => {
      if (error.response.status === 444 && condtionPopMessageWhenError(error)) {
        return Promise.reject(error)
      }

      if (error.response.status !== 444 && condtionPopMessageWhenNotError(error)) {
        return Promise.reject(error)
      }
      return Promise.reject(error)
    }
  )
  return instance
}

const authAxiosInstance = axiosInstance(
  process.env.NODE_ENV === 'development'
    ? process.env.VUE_APP_AUTH_BACKEND_URL
    : process.env.VUE_APP_BACKEND_URL + '/auth',
  (error: Error | AxiosError) => {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      return true
    } else {
      // Just a stock error
      return true
    }
  },
  (error: Error | AxiosError) => {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      return true
    } else {
      // Just a stock error
      return true
    }
  }
)

const app = createApp(App)
app.config.globalProperties.$authAxios = { ...authAxiosInstance }
app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')
