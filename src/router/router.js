import Vue from 'vue'
import VueRouter from 'vue-router'

// import components

import Home from '~/components/Home/Home'
import Login from '~/components/Login/Login'
import ResourceForm from '~/components/ResourceForm/ResourceForm'
import ProjectBuilder from '~/components/ProjectBuilder/ProjectBuilder'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/info', component: ResourceForm },
  { path: '/build', component: ProjectBuilder }
]

const router = new VueRouter({
  routes // short for routes: routes
});

export default router