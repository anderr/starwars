import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../plugins/api'

Vue.use(Vuex);

// Обычно делаю так в последнее время, чтобы можно было сбрасывать vuex
const getDefaultState = () => {
  return {
    globalLoader: false
  }
}

export default new Vuex.Store({
  modules: {},
  state: getDefaultState(),
  mutations: {
    setGlobalLoader(state, bool) {
      state.globalLoader = bool
    },

    deleteIndexData(state) {
      Object.assign(state, getDefaultState())
    }
  },
  getters: {},
  actions: {}
})
