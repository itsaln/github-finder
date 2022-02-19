import axios from 'axios'

export default {
  state: {
    user: null,
    repos: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setRepos(state, repos) {
      state.repos = repos
    }
  },
  actions: {
    async getUser({commit}, userName) {
      try {
        const {data} = await axios.get(`https://api.github.com/users/${userName}`)
        commit('setUser', data)
        this.commit('clearError')
        return data
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async getRepos({commit}, userRepos) {
      try {
        const {data} = await axios.get(`https://api.github.com/users/${userRepos}/repos`)
        commit('setRepos', data)
        this.commit('clearError')
        return data
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  },
  getters: {
    user: state => state.user,
    repos: state => state.repos
  }
}
