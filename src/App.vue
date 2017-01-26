<template>
  <div id="app">
    <router-view></router-view>  
  </div>
</template>

<script>
import { firebaseAuth } from '~/firebase/constants'

export default {
  name: 'app',
  created () {
    firebaseAuth.onAuthStateChanged((user) => {
      console.log(this.$store.state.authentication);
      console.log(user);
      this.$store.dispatch('updateFbUser', user);
    });
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
