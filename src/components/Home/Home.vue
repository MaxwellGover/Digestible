<template>
  
  <div id="homeBackground">

  <div id="homeContainer" class="container">
  	<div id="feed">
    	<resource-card v-for="(resource, index) in resources" :resource="resource"></resource-card>
  	</div>

    <div id="sidebar">
      <login-widget v-if="!user"></login-widget>
    </div>

  </div>
  
  </div>  

</template>

<script>
import Vue from 'vue'
import VueFire from 'vuefire'
import { firebaseAuth, database } from '~/firebase/constants'
// Import components
import ResourceCard from '~/components/ResourceCard/ResourceCard'
import LoginWidget from '~/components/Widgets/LoginWidget'

Vue.use(VueFire)

export default {
  name: 'Home',
  components: { 
    ResourceCard,
    LoginWidget
  },
  computed: {
    user () {
      return firebaseAuth.currentUser
    }
  },
  firebase: {
  	resources: database.ref('/resources/')
  }
}

</script>

<style scoped>

#homeBackground {
  background-color: #fafafa
}

#homeContainer {
  display: flex;
  justify-content: space-around;
}

#feed {
  margin-top: 60px;
  width: 60%;
}

#sidebar {
  width: 25%;
  margin-top: 60px
}

</style>