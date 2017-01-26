<template>

<nav class="nav">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item">
        <p id="logo">Digestible</p>
      </a>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu">
      <a class="nav-item">
        Add a resource
      </a>
    
      <a class="nav-item">
        <img id="userImage" :src="user.userImage" alt="img">
      </a>
    </div>
  </div>
</nav> 

</template>

<script>

export default {
  name: 'Navigation',
  computed: {
  	user () {
  	  return this.$store.state.authentication.user
  	}
  }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Fredoka+One');

.nav {
  padding-top: 10px;
  padding-bottom: 10px;
}

#logo {
  font-size: 28px;
  font-family: 'Fredoka One', cursive;
  color: #000;
}

#userImage {
  border-radius: 50%
}

</style>