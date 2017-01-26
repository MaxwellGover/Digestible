<template>

<div class="card">

  <header class="card-header">
    <img id="authorImage" :src="resource.authorImage" alt="author image">
    <p class="card-header-title">
      {{resource.authorName}}
    </p>
    <small>11:09 PM - 1 Jan 2016</small>
  </header>
  <div class="card-content">
    <p id="title">{{resource.title}}</p>
    <p id="description">{{resource.description}}</p>
    <div id="topics">
      <p>What you'll learn</p>
      <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
    </div>
    <a class="button" id="learnBtn">View project</a>
  </div>
  <footer class="card-footer">
    <div id="timesPassedContainer">
      <i class="fa fa-check" aria-hidden="true"></i>
      <p id="timesPassed">{{resource.timesPassed}}</p>
    </div>
    <a id="focus">{{resource.focus}}</a>
  </footer>

</div>

</template>

<script>

export default {
  name: 'ResourceCard',
  props: ['resource']
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
  margin-top: 10px
}

#timesPassedContainer {
  display: flex
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