<template>
  
  <div id="loginContainer">
    
    <p id="logo">Welcome to Digestible!</p>
    
    <div class="box">
      
      <p id="loginHeader">Login and start learning</p>
      <p id="loginSubHeader">Digestible allows you to learn more about programming from authors of online tech content.</p>
      
      <div id="buttonContainer">
        
        <a class="button is-medium" id="twitterBtn" @click="signInWithTwitter">
          <span class="icon">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </span>
          <span id="twitterBtnText">Sign in with Twitter</span>
        </a>
        
        <a class="button is-medium" id="fbookBtn">
          <span class="icon">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </span>
          <span id="fbookBtnText">Sign in with Facebook</span>
        </a>
      
      </div>
      
    </div>

  </div>  

</template>

<script>
import firebase from 'firebase'
import { firebaseAuth } from '~/firebase/constants'
import router from '~/router/router'

export default {
  name: 'Login',
  methods: {
    signInWithTwitter () {
      // Start authentication
      this.$store.commit('startAuthentication');
      
      var provider = new firebase.auth.TwitterAuthProvider();
      firebaseAuth.signInWithPopup(provider).then(function(result) {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = result.credential.accessToken;
        var secret = result.credential.secret;
        // The signed-in user info.
        var user = result.user;
        
        // Auth user 
        this.$store.commit('authUser', user);
        
        // Stop authentication
        this.$store.commit('endAuthentication');
          
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      }).then(() => {
          router.push({ path: '/' })
      });
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Nunito:800');
@import url('https://fonts.googleapis.com/css?family=Fredoka+One');

#loginContainer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

#buttonContainer {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

#twitterBtn {
  background-color: #23b0e6;
  padding: 20px;
}

#fbookBtn {
  background-color: #48629b;
  padding: 20px;
}

#twitterBtnText {
  font-size: 14px;
  color: #fff;
}

#fbookBtnText {
  font-size: 14px;
  color: #fff;
}

#loginHeader {
  font-size: 32px;
  font-family: 'Nunito', sans-serif;
  text-align: center;
}

#loginSubHeader {
  font-size: 18px;
  color: #9fa6ad;
  text-align: center;
}

#logo {
  font-size: 48px;
  font-family: 'Fredoka One', cursive;
  color: #ff3860;
}

.box {
  width: 450px;
  padding: 10px;
  box-shadow: none;
  border: none;
}

.fa {
  color: #fff;
}

</style>