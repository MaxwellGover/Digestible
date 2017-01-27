<template>
    <div id="notFoundContainer">
       <p id="logo">Whoops! Page Not Found</p>
       <router-link to="/" class="button is-link is-large">Back to home</router-link>
    </div>       
</template>

<script>
    
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Fredoka+One');

#notFoundContainer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}   

#logo {
  font-size: 48px;
  font-family: 'Fredoka One', cursive;
  color:#ff802c;
}

.button {
  margin-top: 20px;
}

</style>