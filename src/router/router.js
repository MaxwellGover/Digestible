import Vue from 'vue'
import VueRouter from 'vue-router'

// import components

import Home from '~/components/Home/Home'
import Login from '~/components/Login/Login'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes // short for routes: routes
});

export default router