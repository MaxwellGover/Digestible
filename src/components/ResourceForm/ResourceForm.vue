<template>

<div id="resourceFormContainer">
  
<div class="box">
  <p class="formHeader"><b>Resource Details</b></p>
  <p class="formSubText">Add some quick details about your resource</p>
  <label class="label">Resource type *</label>
  <p class="control">
    <span class="select">
      <select v-model="resource.mediaType">
        <option value="article">Online article</option>
        <option value="video">Video</option>
      </select>
    </span>
  </p>
  <label class="label">Frontend or backend resource? *</label>
  <p class="control">
    <span class="select">
      <select v-model="resource.focus">
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
      </select>
    </span>
  </p>
  <label class="label">What is the title of your resource? *</label>
  <p class="control">
    <input class="input" type="text" v-model="resource.title">
  </p>
  
  <label class="label">Link to your resource *</label>
  <p class="control">
    <input class="input" type="url" v-model="resource.url">
  </p>
  <small>Copy and paste the URL to your resource.</small>
  <label class="label">What will the user learn? *</label>
    <p class="control">
      <input-tag class="input is-medium" :tags="resource.tags" validate="text" placeholder="Ex. Vuex"></input-tag>
      <small>Add up to 3 tags to help reach users.</small>
    </p>
  <label class="label">Short description of your resource</label>
  <p class="control">
    <textarea class="textarea" v-model="resource.desc"></textarea>
  </p>
  <a class="nextBtn button" @click="saveResource">
    Continue
  </a>
</div>

</div>

</template>

<script>
import InputTag from 'vue-input-tag'
import { database } from '~/firebase/constants'

export default {
  name: 'ResourceForm',
  components: { InputTag },
  data () {
    return {
      resource: {
        title: '',
        mediaType: '',
        focus: '',
        url: '',
        desc: '',
        tags: []
      }
    }
  },
  computed: {
    resourceKey () {
      return database.ref().child('resources').push().key;
    },
    user () {
      return this.$store.state.authentication.user
    }
  },
  methods: {
    saveResource () {
      this.$store.commit('saveKeyRef', {
        resourceId: this.resourceKey
      });

      this.$store.dispatch('storeResource', {
        title: this.resource.title,
        url: this.resource.url,
        mediaType: this.resource.mediaType,
        focus: this.resource.focus,
        tags: this.resource.tags,
        desc: this.resource.desc,
        timesPassed: 0,
        authorName: this.user.displayName,
        authorImage: this.user.userImage,
        authorId: this.user.authId,
        resourceId: this.resourceKey
      })  
    }
  }
}

</script>

<style scoped>

#resourceFormContainer {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #fafafa;
}

.box {
  margin-top: 60px;
  margin-bottom: 60px;
  width: 740px;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  box-shadow: none;
  border-radius: 2px;
  border: 1px solid #eceeef
}

.formHeader {
  font-family: 'Roboto', sans-serif;
  font-size: 36px
}

.formSubText {
  color: #8f8f8f
}

.label {
  margin-top: 20px
}

.input {
  border-radius: 1px;
}

.nextBtn {
  width: 20%;
  margin-top: 40px;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  background-color: #ff3860;
  color: #fff;
  box-shadow: none;
  border-radius: 2px;
  border-color: #ff3860;
}

</style>