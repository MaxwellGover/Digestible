<template>
  
  <div id="profileContainer">
    <div id="header" class="box">
      <div id="infoContainer" class="container">
        <img id="profileImage" :src="user.userImage" alt="profile image">
        <div id="nameContainer">
            <p id="userName">{{user.displayName}}</p>
            <p id="bio">{{user.bio}}</p>
            <a id="website">{{user.website}}</a>
        </div>
        <div id="socialLinks">
            <i id="twitter" class="fa fa-twitter" aria-hidden="true"></i>
            <i id="facebook" class="fa fa-facebook" aria-hidden="true"></i>
            <a class="button" v-show="showEdit" @click="goToEdit">Edit</a>
        </div>
      </div>
    </div>
    <nav class="nav has-shadow">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item" :class="{'is-active': showCreated}" @click="renderCreated">
              Created Resources
            </a>
            <a class="nav-item" :class="{'is-active': showCompleted}" @click="renderCompleted">
              Completed Resources
            </a>
          </div>
        </div>
    </nav>
    
    <div id="feed">
      <router-view></router-view>
    </div>
  
  </div>  

</template>

<script>
import Vue from 'vue'
import VueFire from 'vuefire'
import { firebaseAuth, database } from '~/firebase/constants'
import router from '~/router/router'
import ResourceCard from '~/components/ResourceCard/ResourceCard'

Vue.use(VueFire)

export default {
  name: 'Profile',
  components: { ResourceCard },
  data () {
    return {
      showCreated: true,
      showCompleted: false,
      showEdit: false
    }
  },
  computed: {
    user () {
      return this.$store.state.authentication.user
    }
  },
  created () {
    if (this.user.authId === this.$route.params.uid) {
      this.showEdit = true
    }
  },
  methods: {
    goToEdit () {
      router.push({ path: '/profile/' + this.user.authId + '/edit'})
    },
    renderCreated () {
      this.showCompleted = false;
      this.showCreated = true;
      router.push({ path: '/profile/' + this.user.authId }) 
    },
    renderCompleted () {
      this.showCompleted = true;
      this.showCreated = false;
      router.push({ path: '/profile/' + this.user.authId + '/completed' }) 
    }
  }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans:700');

#profileContainer {
  display: flex;
  flex-direction: column;
  background-color: #fafafa
}

#header {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  box-shadow: none
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

#feed {
  width: 50%;
  align-self: center
}

.fa {
  margin-right: 5px;
}

.nav {
  margin-top: -20px;
}

.button {
  margin-top: -5px;
  margin-left: 20px;
}

a:active {
  color: #ff3860;
}
</style>