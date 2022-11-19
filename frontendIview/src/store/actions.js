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
  let locale = language.split("-")[0]==="zh" ? language.split("-")[1].toLowerCase() : language.split("-")[0]
  i18n.locale = locale
  commit(types.LANGUAGE, language)
}
export const setToken = ({
  commit
}, token) => {
  commit(types.TOKEN, token)
}
export const setLogin = ({
  commit
}, login) => {
  commit(types.LOGIN, login)
}
export const setSmallDevice = ({
  commit
}, smallDevice) => {
  commit(types.SMALL_DEVICE, smallDevice)
}
export const setUserProfile = ({
  commit
}, userProfile) => {
  commit(types.USER_PROFILE, userProfile)
}
export const setRedirectUrl = ({
  commit
}, redirectUrl) => {
  commit(types.REDIRECT_URL, redirectUrl)
}
export const setGroupCode = ({
  commit
}, groupCode) => {
  commit(types.GROUP_CODE, groupCode)
}
export const setWindowsWidth = ({
  commit
}, windowsWidth) => {
  commit(types.WINDOWS_WIDTH, windowsWidth)
}
export const setWindowsHeight = ({
  commit
}, windowsHeight) => {
  commit(types.WINDOWS_HEIGHT, windowsHeight)
}
export const setContentType = ({
  commit
}, contentType) => {
  commit(types.CONTENT_TYPE, contentType)
}
export const setMenuOptionsLeft = ({
  commit
}, menuOptionsLeft) => {
  commit(types.MENU_OPTIONS_LEFT, menuOptionsLeft)
}



