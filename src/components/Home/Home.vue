<template>
  
  <div id="homeContainer" class="container">

  	<div id="resourceFeed">
    	<resource-card v-for="(resource, index) in resources" :resource="resource"></resource-card>
  	</div>
  
  </div>  

</template>

<script>
import Vue from 'vue'
import VueFire from 'vuefire'
import { database } from '~/firebase/constants'

import ResourceCard from '~/components/ResourceCard/ResourceCard'

Vue.use(VueFire)

export default {
  name: 'Home',
  components: { ResourceCard },
  firebase: {
  	resources: database.ref('/resources/')
  }
}

</script>

<style scoped>

#homeContainer {
  display: flex;
}

#resourceFeed {
  margin-top: 60px;
  width: 60%;
}

</style>