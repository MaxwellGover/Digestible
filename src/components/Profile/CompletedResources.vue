<template v-if="createdResourcesRef">

<div id="completedResourcesFeed">
	<completed-resource-card v-for="(resource, index) in completedResourcesRef" :resource="resource"></completed-resource-card>

	<div v-if="noResources">
		<p id="noResourceText">No completed resources yet</p>
	</div>
</div>

</template>

<script>
import { firebaseAuth, database } from '~/firebase/constants'
import ResourceCard from '~/components/ResourceCard/ResourceCard'
import CompletedResourceCard from '~/components/ResourceCard/CompletedResourceCard'

export default {
	name: 'CompletedResources',
	components: { CompletedResourceCard },
	data () {
		return {
			noResources: false
		}
	},
	created () {
		const user = firebaseAuth.currentUser;
		this.$bindAsArray('completedResourcesRef', database.ref('/users/' + user.uid + '/completedResources/'));
		if (this.completedResourcesRef.length === 0) {
			this.noResources = true
		} else if (this.completedResourcesRef.length > 0) {
			this.noResources = false
		};
	}
}
	
</script>

<style scoped>

#completedResourcesFeed {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 40px
}

#noResourceText {
	align-self: center
}

</style>