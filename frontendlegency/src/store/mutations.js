import * as types from './mutations_types.js'

export const state = {
  loading: false,
  login: false,
  user: {}
}

export const mutations = {
  [types.LOADING](state, isLoading) {
    state.loading = isLoading;
  },
  [types.LOGIN](state, login) {
    state.login = login
  },
  [types.USER](state, user) {
    state.user = user
  }
}
