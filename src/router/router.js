import Vue from 'vue'
import VueRouter from 'vue-router'

// Import components

import Home from '~/components/Home/Home'
import Login from '~/components/Login/Login'
import ResourceForm from '~/components/ResourceForm/ResourceForm'
import ProjectBuilder from '~/components/ProjectBuilder/ProjectBuilder'
import NotFound from '~/components/NotFound/NotFound'

// Profile 
import Profile from '~/components/Profile/Profile'
import ProfileEdit from '~/components/Profile/ProfileEdit'
import CreatedResources from '~/components/Profile/CreatedResources'
import CompletedResources from '~/components/Profile/CompletedResources'

// Project
import ProjectProfile from '~/components/ProjectProfile/ProjectProfile'
import ProjectDetails from '~/components/ProjectProfile/ProjectDetails'
import ProjectTools from '~/components/ProjectProfile/ProjectTools'
import FinishedProject from '~/components/ProjectProfile/FinishedProject'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/info', component: ResourceForm },
  { path: '/build', component: ProjectBuilder },
  { path: '/profile/:uid', component: Profile, 
      children: [
        { path: '', component: CreatedResources },
        { path: 'completed', component: CompletedResources }
      ]
  },
  { path: '/profile/:uid/edit', component: ProfileEdit },
  { path: '/resource/:resourceId', component: ProjectProfile, 
  		children: [
  			{ path: '', component: ProjectDetails },
  			{ path: 'tools', component: ProjectTools },
  			{ path: 'complete', component: FinishedProject }
  		]
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  routes // short for routes: routes
});

export default router