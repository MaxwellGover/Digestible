<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>  
  </div>
</template>

<script>
import { firebaseAuth } from '~/firebase/constants'
import Navigation from '~/components/Navigation/Navigation'

export default {
  name: 'app',
  created () {
    firebaseAuth.onAuthStateChanged((user) => {
      console.log(this.$store.state.authentication);
      console.log(user);
      this.$store.dispatch('getDbUser', user);
    });
  },
  components: {
    Navigation
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
