import { MutationTree } from 'vuex'
import { states } from './states'

export enum AuthMutations {
  SET_TOKEN = 'SET_TOKEN'
}

export const mutations: MutationTree<states> = {
  [AuthMutations.SET_TOKEN] (state, payload: string): void {
    state.token = payload
  }
}
