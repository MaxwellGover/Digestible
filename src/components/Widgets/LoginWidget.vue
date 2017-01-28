<template>
	<div class="box" v-show="showWidget">
		<div id="headerContainer">
			<p id="header">Login to Start Learning</p>
			<a class="delete" @click="hideWidget"></a>
		</div>
		<a id="twitterBtn" class="button is-primary" @click="signInWithTwitter">
    		<span class="icon">
      			<i class="fa fa-twitter"></i>
    		</span>
    		<span>Login With Twitter</span>
  		</a>
  		<a id="facebookBtn" class="button is-primary">
    		<span class="icon">
      			<i class="fa fa-facebook" aria-hidden="true"></i>
    		</span>
    		<span>Login with Facebook</span>
  		</a>
	</div>
</template>

<script>

export default {
	name: 'LoginWidget',
	data () {
		return {
			showWidget: true
		}
	}, 
	methods: {
		hideWidget () {
			this.showWidget = false
		},
		signInWithTwitter () {
	      // Start authentication
	      this.$store.commit('startAuthentication');
	      
	      var provider = new firebase.auth.TwitterAuthProvider();
	      firebaseAuth.signInWithPopup(provider).then((result) => {
	        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
	        // You can use these server side with your app's credentials to access the Twitter API.
	        var token = result.credential.accessToken;
	        var secret = result.credential.secret;
	        // The signed-in user info.
	        var user = result.user;

	        // Update Firebase data
	        database.ref('/users/' + user.uid).set({
	          name: user.displayName,
	          email: user.email,
	          userImage: user.photoURL,
	          isAdmin: false,
	          isExpert: false
	        });
	        
	        // Stop authentication
	        this.$store.commit('endAuthentication');
	          
	        // ...
	      }).catch((error) => {
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

#headerContainer {
	display: flex;
	justify-content: space-between;
}

#twitterBtn {
	background-color: #1da1f2;
	margin-top: 10px;
	width: 100%;
}

#facebookBtn {
	background-color: #3b5998;
	margin-top: 10px;
	width: 100%;
}

#header {
	font-size: 16px
}

.box {
	display: flex;
	flex-direction: column;
	border-radius: 2px;
	box-shadow: none;
	border: 1px solid #cecece;
}
</style>