<template>

<div id="container">
    
    <div class="container">
        <p id="header">Account details</p>
        <div class="box">
            <label class="label">Name</label>
            <p class="control is-expanded">
              <input class="input" type="text">
            </p>
            <label class="label">Bio</label>
            <p class="control is-expanded">
              <input class="input" type="text">
            </p>
            <label class="label">Personal website</label>
            <p class="control is-expanded">
              <input class="input" type="url">
            </p>
            <div id="buttonContainer">
                <a class="button">Update</a>
            </div>
        </div>
    </div>
</div>
   
</template>

<script>

export default {
    name: 'ProfileEdit',
    data () {
        return {
          
        }
    }
}    

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:500');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:700');

#container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-content: center;
  align-items: center;
  border: 2px solid blue;
  background-color: #fafafa;
}

#header {
  font-size: 24px;
  font-family: 'Noto Sans', sans-serif;
  margin-bottom: 20px;
}

.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  border-radius: 1px;
  box-shadow: none;
  border: 1px solid #cecece
}

.container {
  width: 100%;
}

.label {
  margin-top: 10px;
  color: #8f8f8f;
}

#buttonContainer {
  margin-top: 20px;
}

.button {
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  background-color: #23d160;
  color: #fff;
  box-shadow: none;
  border-radius: 2px;
  border-color: #23d160;
}

</style>