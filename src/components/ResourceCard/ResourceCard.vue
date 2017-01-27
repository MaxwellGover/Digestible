<template>

<div class="card">

  <header class="card-header">
    <img id="authorImage" :src="resource.authorImage" alt="author image">
    <p class="card-header-title">
      {{resource.authorName}}
    </p>
  </header>
  <div class="card-content">
    <p id="title">{{resource.title}}</p>
    <p id="description">{{resource.description}}</p>
    <div id="topics">
      <div id="tags">
        <p style="color: black">Topics: </p><a id="tag" v-for="(tag, index) in resource.tags">{{tag}}</a>
      </div>
    </div>
    <a class="button" id="learnBtn">View resource</a>
  </div>
  <footer class="card-footer">
    <div id="timesPassedContainer">
      <i class="fa fa-check" aria-hidden="true"></i>
      <p id="timesPassed">{{resource.timesPassed}}</p>
    </div>
    <div>
      <a id="focus">{{resource.focus}}</a>
      <a id="mediaType">{{resource.mediaType}}</a>
      <i id="bookmarkFilled" class="fa fa-bookmark" aria-hidden="true" v-if="bookmarked"></i>
      <i id="bookmarkOutline" class="fa fa-bookmark-o" aria-hidden="true" @click="bookmarkResource" v-else></i>
    </div>
  </footer>

</div>

</template>

<script>
import { firebaseAuth, database } from '~/firebase/constants'

export default {
  name: 'ResourceCard',
  props: ['resource'],
  data () {
    return {
      bookmarked: false
    }
  },
  methods: {
    bookmarkResource () {
      const user = firebaseAuth.currentUser;
      this.bookmarked = true;
      database.ref('/users/' + user.uid + '/savedResources/' + this.resource.resourceId).set({
          resourceId: this.resource.resourceId,
          authorId: this.resource.authorId,
          authorImage: this.resource.authorImage,
          authorName: this.resource.authorName,
          description: this.resource.description,
          focus: this.resource.focus,
          mediaType: this.resource.mediaType,
          tags: this.resource.tags,
          timesPassed: this.resource.timesPassed,
          title: this.resource.title,
          url: this.resource.url
      })
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:700');

#authorImage {
  height: 40px;
  width: 40px;
  border-radius: 50%
}

#title {
  font-size: 36px;
  font-family: 'Noto Sans', sans-serif;
}

#topics {
  margin-top: 20px
}

#timesPassed {
  margin-left: 10px
}

#learnBtn {
  margin-top: 20px
}

#timesPassedContainer {
  display: flex
}

#tags {
  display: flex;
  color: #ff3860;
}

#mediaType {
  margin-left: 5px;  
}

#bookmarkOutline {
  margin-left: 30px;
  margin-right: 10px;
  color: #ff3860;
  cursor: pointer;
}

#bookmarkFilled {
  margin-left: 30px;
  margin-right: 10px;
  color: #ff3860;
  cursor: pointer;
}

#tag {
  margin-right: 2px;
  margin-left: 5px;
}

.card-header {
  display: flex;
  align-items: center;
  padding: 10px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.card-content {
  margin-left: -10px;
  margin-top: -10px;
}

.fa {
  color: #23d160;
}


</style>