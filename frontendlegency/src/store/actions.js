import * as types from './mutations_types.js'

export const toggleLoading = ({
  commit
}, isLoading) => {
  commit(types.LOADING, isLoading)
}
export const setLogin = ({
  commit
}, login) => {
  commit(types.LOGIN, login)
}
export const setUser = ({
  commit
}, user) => {
  commit(types.USER, user)
}