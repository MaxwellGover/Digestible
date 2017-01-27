import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import modules
import authentication from './modules/authentication'
import resourceForm from './modules/resourceForm'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    authentication,
    resourceForm
  },
  state: {
  
  },
  mutations: {
    
  },
  actions: {
    
  },
  getters: {
    
  },
  plugins: [createPersistedState()]
})

export default store;