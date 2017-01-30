<template>
	<div id="finishedProjectContainer">
		<label class="label">Finished Project</label>
		<p id="finishedText">You're all done! Enter the link to your finished project below. Finished projects are added to your profile so others can see what you have been learning.</p>
		<div>
        	<p class="control">
              <input class="input is-large" type="url" v-model="linkToCompleted" v-on:keypress.enter="saveProject" :disabled="!fbUser">
            </p>
            <label id="feedbackLabel" class="label">Leave feedback for the author</label>
            <p class="control">
              <textarea class="textarea" type="text" v-model="authorMessage" v-on:keypress.enter="saveProject"></textarea>
            </p>
            <small>Use this to suggest updates to the resource if certain parts were out of date.</small>
     	</div>
     	<a class="button is-medium is-success" @click="saveProject" :disabled="!fbUser">Finish</a>
    </div>
</template>

<script>
import { firebaseAuth, database } from '~/firebase/constants'
import router from '~/router/router'

export default {
	name: 'FinishedProject',
	data () {
	    return {
	        linkToCompleted: '',
            authorMessage: ''
	    }
	},
    created () {
        this.$bindAsObject('resource', database.ref('/resources/' + this.$route.params.resourceId));
    },
    computed: {
        fbUser () {
            return firebaseAuth.currentUser
        }
    },
	methods: {
	    saveProject () {
    	    var user = firebaseAuth.currentUser;
              
            var completedResource = {
                resourceId: this.resource.resourceId,
                authorId: this.resource.authorId,
                authorName: this.resource.authorName,
                authorImage: this.resource.authorImage,
                timesPassed: this.resource.timesPassed + 1,
                title: this.resource.title,
                mediaType: this.resource.mediaType,
                focus: this.resource.focus,
                tags: this.resource.tags,
                description: this.resource.description,
                url: this.resource.url,
                linkToCompleted: this.linkToCompleted
            }
    
            var updates = {};
              
            updates['/users/' + user.uid + '/completedResources/' + completedResource.resourceId] = completedResource;
            updates['/users/' + user.uid + '/createdResources/' + completedResource.resourceId] = completedResource;
            updates['/resources/' + this.resource.resourceId + '/timesPassed/'] = completedResource.timesPassed;
              
            database.ref().update(updates);
              
            database.ref('/users/' + user.uid).once('value').then((snapshot) => {
                snapshot.val().points + 5
            })
              
            router.push({ path: '/profile/' + user.uid + '/completed' })
    	}
	}
}	
</script>

<style scoped>

#finishedProjectContainer {
	padding: 20px;
}

#finishedText {
    margin-bottom: 10px
}

#feedbackLabel {
    margin-top: 20px
}

.button {
    margin-top: 20px;
}

</style>