import { database, firebaseAuth } from '~/firebase/constants'

const authentication = {
  state: {
    user: {
      isAuthed: false,
      authId: '',
      displayName: '',
      userImage: ''
    },
    authenticating: false
  },
  mutations: {
    loadDbUser (state, user) {
      state.user.isAuthed = true,
      state.user.authId = user.authId,
      state.user.userImage = user.userImage,
      state.user.displayName = user.displayName
    },
    startAuthentication (state) {
      state.authenticating = true
    },
    endAuthentication (state) {
      state.authenticating = false
    }
  },
  actions: {
    getDbUser (context, user) {
      database
        .ref('users')
        .child(user.uid)
        .once('value')
        .then(snapshot => {
          const dbUser = snapshot.val()
            context.commit('getCurrentUser', {
              displayName: dbUser.name,
              email: dbUser.email,
              userImage: dbUser.userImage,
              authId: user.uid
          })
      })
    }
  },
  getters: {
    
  }
}

export default authentication