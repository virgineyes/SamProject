import { ActionTree } from 'vuex'
import { states } from './states'
import { rootState } from '~/store/rootStates'

export const actions: ActionTree<states, rootState> = {
  setToken ({ commit }, payload: string): void {
    commit('SET_TOKEN', payload)
  }
}
