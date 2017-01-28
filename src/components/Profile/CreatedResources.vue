<template v-if="createdResourcesRef">

<div id="createdResourcesFeed">
	<resource-card v-for="(resource, index) in createdResourcesRef" :resource="resource"></resource-card>
</div>

</template>

<script>
import { firebaseAuth, database } from '~/firebase/constants'
import ResourceCard from '~/components/ResourceCard/ResourceCard'

export default {
	name: 'CreatedResources',
	components: { ResourceCard },
	created () {
		const user = firebaseAuth.currentUser;
		this.$bindAsArray('createdResourcesRef', database.ref('/users/' + user.uid + '/createdResources/'));
	}
}
	
</script>

<style scoped>

#createdResourcesFeed {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 40px;
}

</style>