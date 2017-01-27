<template>

<div id="projectBuilderContainer">
  
<div class="box">
  <p class="formHeader"><b>Create your project</b></p>
  <p class="formSubText">Layout the details of your project</p>
  <label class="label">Project description</label>
  <p class="control">
    <textarea class="textarea" v-model="project.desc"></textarea>
  </p> 
  
  
  <div id="stepsContainer">
  <label class="label">Steps</label>
  <p class="control is-grouped" v-for="(step, index) in project.steps">
    <input class="step input" v-model="step.text">
    <i class="fa fa-trash-o fa-2x" v-show="index > 0" aria-hidden="true" @click="deleteStep(step)"></i>
  </p>
  </div>

  <a class="button is-info" @click="addStep">Add another step</a>
  
  <div id="toolContainer">
  <label class="label">Additional tools & resources</label>
  <small id="toolHelp">Add links to any additional resources or development tools your user will need to complete the project.</small>
  <div id="toolItem" class="control is-horizontal" v-for="(tool, index) in project.tools">
    <div class="control is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Name" v-model="tool.toolName">
      </p>
      <p class="control is-expanded is-grouped">
        <input class="input" type="url" placeholder="Link" v-model="tool.url">
        <i class="fa fa-trash-o fa-2x" aria-hidden="true" @click="deleteTool(tool)"></i>
      </p>
    </div>
  </div>
  </div>
  <a id="toolBtn" class="button is-info" @click="addTool">Add a tool</a>
  <label class="label">Link to finished project.</label>
  <input class="input" v-model="project.linkToFinished">
  
  <a class="nextBtn button is-medium is-success" @click="submitProject">
    <span>Done</span>
    <span class="icon">
      <i class="thumb fa fa-thumbs-up" aria-hidden="true"></i>
    </span>
  </a>
</div>

</div>

</template>

<script>
import { firebaseAuth, database } from '~/firebase/constants'
import router from '~/router/router'

const createNewStep = () => { 
  return {
    text: '',
  }
}

const createNewTool = () => { 
  return {
    toolName: '',
    url: ''
  }
}

export default {
  name: 'ProjectBuilder',
  data () {
    return {
      project: {
        desc: '',
        steps: [createNewStep()],
        tools: [],
        linkToFinished: ''
      }
    }
  },
  computed: {
    resourceId () {
      return this.$store.state.resourceForm.key
    },
    user () {
      return this.$store.state.authentication.user
    }
  },
  methods: {
    addStep () {
      this.project.steps.push(createNewStep())
    },
    addTool () {
      this.project.tools.push(createNewTool())
    },
    deleteStep (step) {
      var index = this.project.steps.indexOf(step);
      if (index > -1) {
        this.project.steps.splice(index, 1);
      }
    },
    deleteTool (tool) {
      var index = this.project.tools.indexOf(tool);
      if (index > -1) {
        this.project.tools.splice(index, 1);
      }
    },
    submitProject () {
      const user = firebaseAuth.currentUser;
      const updates = {};
      
      updates['/resources/' + this.resourceId + '/project/'] = this.project;
      updates['/users/' + user.uid + '/createdResources/' + this.resourceId + '/project/'] = this.project;
      database.ref().update(updates);
      
      router.push({ path: '/resource/' + this.resourceId});
      
      this.$store.commit('clearKeyRef');
    }
  }
}

</script>

<style scoped>

#projectBuilderContainer {
  
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

#stepsContainer {
  display: flex;
  flex-direction: column;
}

#toolContainer {
  display: flex;
  flex-direction: column;
}

#toolHelp {
  margin-bottom: 5px;
}

#toolItem {
  margin-top: 5px;
}

.box {
  margin-top: 60px;
  margin-bottom: 60px;
  width: 740px;
  font-family: 'Roboto', sans-serif;
  box-shadow: none;
  border-radius: 2px;
  border: 1px solid #eceeef
}

.button {
  margin-top: 20px;
  padding: 10px;
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
  margin-top: 40px;
}

.control {
  display: flex;
  align-items: center;
}

.fa {
  color: #ff3860;
  margin-left: 5px;
  cursor: pointer;
}

.thumb {
  color: #fff;
}

</style>