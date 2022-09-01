import * as types from './mutations_types.js'
import i18n from "../config/lang"

export const toggleLoading = ({
  commit
}, isLoading) => {
  commit(types.LOADING, isLoading)
}
export const setLanguage = ({
  commit
}, language) => {
  let locale = language.split("-")[0] == "zh" ? language.split("-")[1].toLowerCase() : language.split("-")[0]
  i18n.locale = locale
  commit(types.LANGUAGE, language)
}
export const setLogin = ({
  commit
}, login) => {
  commit(types.LOGIN, login)
}