import * as types from './mutations_types.js'

export const state = {
  loading: false,
  language: 'en',
  token: false,
  login: false,
}

export const mutations = {
  [types.LOADING](state, isLoading) {
    state.loading = isLoading;
  },
  [types.LANGUAGE](state, language) {
    state.language = language
  },
  [types.LOGIN](state, login) {
    state.login = login
  }
}
