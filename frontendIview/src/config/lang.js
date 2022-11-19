import Vue from "vue"
import VueI18n from "vue-i18n"

import twjs from "@/config/locale/tw.json"
import cnjs from "@/config/locale/cn.json"
import enjs from "@/config/locale/en.json"
import en from "view-design/dist/locale/en-US"
import cn from "view-design/dist/locale/zh-CN"

Vue.use(VueI18n)

const messages = {
  tw: twjs,
  en: Object.assign(enjs, en),
  cn: Object.assign(cnjs, cn),
}

const i18n = new VueI18n({
  locale: navigator.language.split("-")[0]==="zh" ?
    navigator.language.split("-")[1].toLowerCase() :
    navigator.language.split("-")[0],
  messages,
  Silenttranslationwarn: true
})

export default i18n
