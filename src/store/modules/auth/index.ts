import { Module } from 'vuex'
import { states } from './states'
import { geters } from './getters'
import { actions } from './actions'
import { rootState } from '~/store/rootStates'
import { mutations } from './mutations'

const authModule: Module<states, rootState> = {
  namespaced: true,
  state: {
    token: '',
    login: false,
    userProfile: {}
  },
  actions,
  getters: geters,
  mutations
}

export default authModule
