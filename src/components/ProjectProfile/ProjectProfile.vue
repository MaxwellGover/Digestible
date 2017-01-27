<template>
	<div id="projectContainer" class="container">
		<div id="left">
			<resource-card :resource="resource" :showResourceBtn="showResourceBtn"></resource-card>
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
    				<li :class="{'is-active': showFinished}" @click="renderFinished">
      					<a>
        					<span class="icon is-small"><i class="fa fa-link" aria-hidden="true"></i></span>
        					<span>Completed Project</span>
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
			<social-sharing url="https://vuejs.org/" inline-template>
				<div id ="socialSharingContainer">
					<facebook id="facebook">
						<a class="button is-medium is-info" style="background-color: #48629b; width: 70px; margin-right: 10px">
						<span class="icon">
  							<i class="socialIcon fa fa-facebook" aria-hidden="true"></i>
						</span>
						</a>
					</facebook>
					<twitter>
						<a class="button is-medium is-info" style="background-color: #23b0e6; width: 70px; margin-right: 10px">
						<span class="icon">
  							<i class="socialIcon fa fa-twitter" aria-hidden="true"></i>
						</span>
						</a>
					</twitter>
					<linkedin>
						<a class="button is-medium is-info" style="background-color: #0077b5; width: 70px">
						<span class="icon">
  							<i class="fa fa-linkedin" aria-hidden="true"></i>
						</span>
						</a>
					</linkedin>
				</div>
			</social-sharing>
		</div>
	</div>	
</template>

<script>
import Vue from 'vue'
import { database } from '~/firebase/constants'
import router from '~/router/router'
import ResourceCard from '~/components/ResourceCard/ResourceCard'
import SocialSharing from 'vue-social-sharing'
import VueFire from 'vuefire'

Vue.use(VueFire)
Vue.use(SocialSharing)

export default {
	name: 'ProjectProfile',
	components: { 
		ResourceCard, 
		SocialSharing 
	},
	data () {
		return {
			showTools: false,
			showDetails: true,
			showResourceBtn: true,
			showFinished: false
		}
	},
	created () {
		this.$bindAsObject('resource', database.ref('/resources/' + this.$route.params.resourceId));
		this.$bindAsObject('project', database.ref('/resources/' + this.$route.params.resourceId + '/project/'));
	},
	methods: {
		// TODO: Figure out better way to configure these routes :(
		renderTools () {
			this.showTools = true;
			this.showDetails = false;
			this.showFinished = false;
			router.push({ path: this.resource.resourceId + '/tools' })
		
		},
		renderDetails () {
			this.showTools = false;
			this.showDetails = true;
			this.showFinished = false;
			router.push({ path: '/resource/' + this.resource.resourceId })
		},
		renderFinished () {
			this.showTools = false;
			this.showDetails = false;
			this.showFinished = true;
			router.push({ path: this.resource.resourceId + '/complete'})
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
	
	width: 65%;
}

#right {
	width: 25%;
}

#projectDetails {
	padding: 20px;
}

#socialSharingContainer {
	display: flex;
	justify-content: center;
	box-shadow: none;
	border-radius: 1px;
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

#facebook {
	background: #48629b;
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

.socialIcon {
	color: #fff;
}
	
</style>