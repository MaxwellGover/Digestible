<template>
  
  <div id="profileContainer">
    <div id="header" class="box">
      <div id="infoContainer" class="container">
        <img id="profileImage" :src="user.userImage" alt="profile image">
        <div id="nameContainer">
            <p id="userName">{{user.displayName}}</p>
            <p id="bio">This is my user bio section</p>
            <a id="website">www.maxwellgover.com</a>
        </div>
        <div id="socialLinks">
            <i id="twitter" class="fa fa-twitter" aria-hidden="true"></i>
            <i id="facebook" class="fa fa-facebook" aria-hidden="true"></i>
            <a class="button">Edit</a>
        </div>
      </div>
    </div>
    <nav class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              Created Resources
            </a>
            <a class="nav-item">
              Completed Resources
            </a>
          </div>
        </div>
    </nav>
   
    
  </div>  

</template>

<script>
import Vue from 'vue'
import VueFire from 'vuefire'
import { database } from '~/firebase/constants'
import ResourceCard from '~/components/ResourceCard/ResourceCard'

Vue.use(VueFire)

export default {
  name: 'Profile',
  components: { ResourceCard },
  computed: {
    user () {
      return this.$store.state.authentication.user
    }
  }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans:700');

#profileContainer {
  display: flex;
  flex-direction: column;
}

#header {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  border: 4px solid yellow;
}

#infoContainer {
  display: flex;
  align-content: center;
  align-items: center;
}

#nameContainer {
  display: flex;
  flex-direction: column;
}

#userName {
  font-family: 'Noto Sans', sans-serif;
  font-size: 28px;
  margin-left: 20px;
}

#profileImage {
  height: 100px;
  width: 100px;
  border-radius: 50%
}

#bio {
  margin-left: 20px;
  color: #8f8f8f;
}

#website {
  margin-left: 20px
}

#socialLinks {
  align-self: flex-start;
  margin-top: 20px;
  margin-left: 15px;
}

#twitter {
  color: #23b0e6;
}

#facebook {
  color: #48629b;
}

.fa {
  margin-right: 5px;
}

.nav {
  border: 2px solid green;
  margin-top: -20px;
}

.button {
  margin-top: -5px;
  margin-left: 20px;
}
</style>