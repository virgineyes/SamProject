import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { authAxiosInstance } from './util/axiosInstance'
import pinia from './store/store'
// or use cdn, uncomment cdn link in `index.html`

import './styles/index.scss'
import 'uno.css'

// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'
// import '~/styles/element/index.scss'

// import all element css, uncommented next line
import 'element-plus/dist/index.css'

const app = createApp(App)
app.config.globalProperties.$authAxios = { ...authAxiosInstance }
app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')
