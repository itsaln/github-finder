import Vue from 'vue'
import Vuex from 'vuex'
import search from './search'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: state => state.error
  },
  modules: {
    search
  }
})
