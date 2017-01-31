import { database, firebaseAuth } from '~/firebase/constants'
import createPersistedState from 'vuex-persistedstate'

const plugins = [
    createPersistedState({
        paths: ['user']
    })
];

const authentication = {
  state: {
    user: {
      isAuthed: false,
      authId: '',
      displayName: '',
      userImage: '',
      bio: '',
      website: ''
    },
    authenticating: false
  },
  mutations: {
    loadDbUser (state, user) {
      state.user.isAuthed = true,
      state.user.authId = user.authId,
      state.user.userImage = user.userImage,
      state.user.displayName = user.displayName,
      state.user.bio = user.bio,
      state.user.website = user.website
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
            context.commit('loadDbUser', {
              displayName: dbUser.name,
              email: dbUser.email,
              userImage: dbUser.userImage,
              bio: dbUser.bio,
              website: dbUser.website,
              authId: user.uid
          })
      })
    }
  },
  getters: {
    
  },
  plugins
}

export default authentication