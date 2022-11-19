import * as types from './mutations_types.js'

export const state = {
  loading: false,
  language: 'en',
  token: false,
  login: false,
  smallDevice: false,
  userProfile: {
    user: {}
  },
  redirectUrl: '',
  groupCode: null,
  tableHeight: '400',
  windowsWidth: window.screen.width,
  contentType: 'application/json',
  menuOptionsLeft: []
}

export const mutations = {
  [types.LOADING](state, isLoading) {
    state.loading = isLoading;
  },
  [types.LANGUAGE](state, language) {
    state.language = language
  },
  [types.TOKEN](state, token) {
    state.token = token
  },
  [types.LOGIN](state, login) {
    state.login = login
  },
  [types.SMALL_DEVICE](state, smallDevice) {
    state.smallDevice = smallDevice
  },
  [types.USER_PROFILE](state, userProfile) {
    state.userProfile = userProfile
  },
  [types.REDIRECT_URL](state, redirectUrl) {
    state.redirectUrl = redirectUrl
  },
  [types.GROUP_CODE](state, groupCode) {
    state.groupCode = groupCode
  },
  [types.WINDOWS_WIDTH](state, windowsWidth) {
    state.windowsWidth = windowsWidth
  },
  [types.WINDOWS_HEIGHT](state, windowsHeight) {
    state.windowsHeight = windowsHeight
  },
  [types.CONTENT_TYPE](state, contentType) {
    state.contentType = contentType
  },
  [types.MENU_OPTIONS_LEFT](state, menuOptionsLeft) {
    state.menuOptionsLeft = menuOptionsLeft
  }
}
