<template>
	<div id="projectDetails">
		<label class="label">Project Description</label>
		<p>{{project.desc}}</p>
					
		<label id="stepsLabel" class="label">Steps</label>
        <ol class="stepList">
            <li id="stepItem" v-for="(step, index) in project.steps">{{step.text}}</li> 
        </ol>
        <label id="toolLabel" class="label">Tools & resources</label>
        <p>Check out the <a @click="renderTools">tools</a> you'll be using for this project!</p>
    </div>
</template>

<script>
export default {
	name: 'ProjectDetails',
	props: ['project', 'renderTools']
}	
</script>

<style scoped>

#projectDetails {
	padding: 20px;
}

#stepItem {
	margin-left: 20px;
	margin-bottom: 5px;
}

#stepsLabel {
	margin-top: 20px;
	font-size: 20px
}

#toolLabel {
	margin-top: 20px;
	font-size: 20px;
}

.label {
	font-size: 20px
}

.message {
	background-color: #fafafa
}

</style>