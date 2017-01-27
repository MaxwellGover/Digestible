<template>
	<div id="projectContainer" class="container">
		<div id="left">
			<resource-card :resource="resource"></resource-card>
			<div class="tabs is-boxed">
  				<ul>
    				<li :class="{'is-active': showDetails}" @click="renderDetails">
      					<a>
        					<span class="icon is-small"><i class="fa fa-list-ol" aria-hidden="true"></i></i></span>
        					<span>Project details</span>
      					</a>
    				</li>
    				<li :class="{'is-active': showTools}" @click="renderTools">
      					<a>
        					<span class="icon is-small"><i class="fa fa-wrench" aria-hidden="true"></i></span>
        					<span>Tools</span>
      					</a>
    				</li>
    			</ul>
    		</div>
			<div id="project" class="box">
				<router-view :project="project" :renderTools="renderTools"></router-view>
				<!--
				<div id="projectDetails" class="message">
					<label class="label">Project Description</label>
					<p>{{project.desc}}</p>
					
					<label id="stepsLabel" class="label">Steps</label>
                	<ol class="stepList">
                   		<li id="stepItem" v-for="(step, index) in project.steps">{{step.text}}</li> 
                	</ol>
                	<label id="toolLabel" class="label">Tools & resources</label>
                	<p>Check out the <a>tools</a> you'll be using for this project!</p>
                </div>
                -->
			</div>
		</div>
		<div id="right">
			Sidebar
		</div>
	</div>	
</template>

<script>
import { database } from '~/firebase/constants'
import router from '~/router/router'
import ResourceCard from '~/components/ResourceCard/ResourceCard'
import Vue from 'vue'
import VueFire from 'vuefire'

Vue.use(VueFire)

export default {
	name: 'ProjectProfile',
	components: { ResourceCard },
	data () {
		return {
			showTools: false,
			showDetails: true
		}
	},
	created () {
		this.$bindAsObject('resource', database.ref('/resources/' + this.$route.params.resourceId));
		this.$bindAsObject('project', database.ref('/resources/' + this.$route.params.resourceId + '/project/'));
	},
	methods: {
		renderTools () {
			this.showTools = true;
			this.showDetails = false;
			router.push({ path: this.resource.resourceId + '/tools' })
		},
		renderDetails () {
			this.showTools = false;
			this.showDetails = true;
			router.push({ path: '/resource/' + this.resource.resourceId })
		}
	}
}
	
</script>

<style scoped>

#projectContainer {
	display: flex;
	justify-content: space-around;
	align-content: center;
	margin-top: 60px;
}

#left {
	display: flex;
	flex-direction: column;
	
	width: 70%;
}

#right {
	width: 20%;
	border: 2px solid blue;
}

#projectDetails {
	padding: 20px;
}

#stepItem {
	margin-left: 20px;
	margin-bottom: 5px;
}

#project {
	margin-top: -21px
}

#stepsLabel {
	margin-top: 20px;
}

#toolLabel {
	margin-top: 20px;
}

.box {
	box-shadow: none;
	border-radius: 1px;
	border: 1px solid #cecece;
	border-top: none;
}

.tabs {
	margin-top: 20px;
}
	
</style>