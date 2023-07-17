import { GetterTree } from 'vuex'
import { states } from './states'
import { rootState } from '~/store/rootStates'

export const geters: GetterTree<states, rootState> = {
  getToken (state): string {
    return state.token
  }
}
