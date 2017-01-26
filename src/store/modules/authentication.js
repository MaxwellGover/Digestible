import { database, firebaseAuth } from '~/firebase/constants'

const authentication = {
  state: {
    user: {
      isAuthed: false,
      authId: '',
      name: '',
      userImage: ''
    },
    authenticating: false
  },
  mutations: {
    authUser (state, user) {
      state.user.isAuthed = true,
      state.user.authId = user.uid,
      state.user.userImage = user.photoURL,
      state.user.name = user.displayName
    },
    startAuthentication (state) {
      state.authenticating = true
    },
    endAuthentication (state) {
      state.authenticating = false
    }
  },
  actions: {
    updateFbUser (context, user) {
      database.ref('/users/' + user.uid).set({
        name: user.displayName,
        userImage: user.photoURL,
        email: user.email
      })  
    }  
  },
  getters: {
    
  }
}

export default authentication