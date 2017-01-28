import Vue from 'vue'
import Vuex from 'vuex'
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
    
  }
})

export default store;