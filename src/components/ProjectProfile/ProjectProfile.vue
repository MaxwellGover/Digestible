<template>
	<div id="projectContainer">

		<div class="container">
		<div id="left">
			<resource-card :resource="resource" :showSocial="showSocial" :showResourceBtn="showResourceBtn"></resource-card>
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
			</div>
		</div>
		<div id="right">
			<login-widget v-if="!user"></login-widget>
		</div>
	</div>	
</template>

<script>
import Vue from 'vue'
import { firebaseAuth, database } from '~/firebase/constants'
import router from '~/router/router'
import ResourceCard from '~/components/ResourceCard/ResourceCard'
import LoginWidget from '~/components/Widgets/LoginWidget'
import VueFire from 'vuefire'

Vue.use(VueFire)

export default {
	name: 'ProjectProfile',
	components: { 
		ResourceCard, 
		LoginWidget 
	},
	data () {
		return {
			showTools: false,
			showDetails: true,
			showResourceBtn: true,
			showFinished: false,
			showSocial: true
		}
	},
	computed: {
		user () {
			return firebaseAuth.currentUser
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
	background-color: #fafafa
}

.container {
	display: flex;
	justify-content: space-around;
	align-content: center;
}

#left {
	display: flex;
	flex-direction: column;
	width: 65%;
	margin-top: 60px
}

#right {
	width: 25%;
	margin-top: 60px
}

#socialSharingContainer {
	display: flex;
	justify-content: center;
	box-shadow: none;
	border-radius: 1px;
	margin-top: 10px;
}

#stepItem {
	margin-left: 20px;
	margin-bottom: 5px;
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

#project {
	box-shadow: none;
	border-radius: 1px;
	border: 1px solid #cecece;
	border-top: none;
	margin-top: -21px
}

.tabs {
	margin-top: 20px;
}

.socialIcon {
	color: #fff;
}
	
</style>