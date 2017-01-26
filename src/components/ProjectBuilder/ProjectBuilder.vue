<template>

<div id="projectBuilderContainer">
  
<div class="box">
  <p class="formHeader"><b>Create your project</b></p>
  <p class="formSubText">Layout the details of your project</p>
  <label class="label">Project description</label>
  <p class="control">
    <textarea class="textarea"></textarea>
  </p> 
  
  <label class="label">Steps</label>
  <p class="control is-grouped" v-for="(step, index) in project.steps">
    <input class="step input">
    <i class="fa fa-trash-o fa-2x" v-show="index > 0" aria-hidden="true"></i>
  </p>

  <a class="button" @click="addStep">Add another step</a>

  <label class="label">Additional tools & resources</label>
  <small>Add links to any additional resources or development tools your user will need to complete the project.</small><br />
  <div id="toolContainer" class="control is-horizontal" v-for="(tool, index) in project.tools">
    <div class="control is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Name">
      </p>
      <p class="control is-expanded">
        <input class="input" type="url" placeholder="Link">
      </p>
      <i class="fa fa-trash-o fa-2x" v-show="index > 0" aria-hidden="true"></i>
    </div>
  </div>
  <a class="button" @click="addTool">Add another tool</a>
  <label class="label">Link to finished project.</label>
  <input class="input">
</div>

</div>

</template>

<script>
import { database } from '~/firebase/constants'

const createNewStep = () => { 
  return {
    text: '',
  }
}

const createNewTool = () => { 
  return {
    text: '',
    url: ''
  }
}

export default {
  name: 'ProjectBuilder',
  data () {
    return {
      project: {
        description: '',
        steps: [createNewStep()],
        tools: [createNewTool()],
        linkToFinished: ''
      }
    }
  },
  computed: {
    resourceId () {
      return this.$store.state.resourceForm.key
    }
  },
  methods: {
    addStep () {
      this.project.steps.push(createNewStep())
    },
    addTool () {
      this.project.tools.push(createNewTool())
    },
  }
}

</script>

<style scoped>

#projectBuilderContainer {
  
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  border: 1px solid red;
}

.button {
  width: 30%;
}

#toolContainer {
  display: flex
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
  width: 30%;
  margin-top: 40px;
}

.control {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.fa {
  color: #ff3860;
  margin-left: 10px
}

</style>