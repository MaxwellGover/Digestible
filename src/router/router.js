import Vue from 'vue'
import VueRouter from 'vue-router'

// import components

import Home from '~/components/Home/Home'
import Login from '~/components/Login/Login'
import ResourceForm from '~/components/ResourceForm/ResourceForm'
import ProjectBuilder from '~/components/ProjectBuilder/ProjectBuilder'
import Profile from '~/components/Profile/Profile'
import ProjectProfile from '~/components/ProjectProfile/ProjectProfile'
import ProjectDetails from '~/components/ProjectProfile/ProjectDetails'
import ProjectTools from '~/components/ProjectProfile/ProjectTools'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/info', component: ResourceForm },
  { path: '/build', component: ProjectBuilder },
  { path: '/profile/:uid', component: Profile },
  { path: '/resource/:resourceId', component: ProjectProfile, 
  		children: [
  			{ path: '', component: ProjectDetails },
  			{ path: 'tools', component: ProjectTools }
  		]
  }
]

const router = new VueRouter({
  routes // short for routes: routes
});

export default router