import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import * as actions from './actions.js'
import quotation from './modules/quotation.js'
import {
  state,
  mutations
} from './mutations.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    quotation
  },
  // strict: true
});
