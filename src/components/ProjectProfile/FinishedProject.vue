<template>
	<div id="finishedProjectContainer" class="message">
		<label class="label">Finished Project</label>
		<p>You're all done! Enter the link to your finished project below. Finished projects are added to your profile so others can see what you have been learning.</p>
		<div>
        	<p class="control">
              <input class="input is-large" type="url" v-on:keypress.enter="saveProject">
            </p>
     	</div>
     	<a class="button is-medium is-success" @click="saveProject">Finish</a>
    </div>
</template>

<script>
import { firebaseAuth, database } from '~/firebase/constants'
import router from '~/router/router'

export default {
	name: 'FinishedProject',
	data () {
	    return {
	        
	    }
	},
	methods: {
	    saveProject () {
    	    var user = firebaseAuth.currentUser;
              
            var completedResource = {
                resourceId: this.resource.resourceId,
                authorId: this.resource.authorId,
                authorName: this.resource.authorName,
                authorPic: this.resource.authorPic,
                timesPassed: this.resource.timesPassed + 1,
                title: this.resource.title,
                mediaType: this.resource.mediaType,
                focus: this.resource.focus,
                url: this.resource.url,
                linkToCompleted: this.linkToCompleted
            }
    
            var updates = {};
              
            updates['/users/' + user.uid + '/completedResources/' + completedResource.resourceId] = completedResource;
            updates['/users/' + user.uid + '/createdResources/' + completedResource.resourceId] = completedResource.timesPassed;
            updates['/resources/' + this.resource.resourceId + '/timesPassed/'] = completedResource.timesPassed;
            updates['/frameworks/' + completedResource.framework + '/' + completedResource.resourceId + '/project/'] = completedResource.timesPassed;
              
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

.label {
	font-size: 20px;
}

.control {
    margin-top: 40px;
}

.button {
    margin-top: 20px;
}

</style>