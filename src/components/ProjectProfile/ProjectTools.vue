<template>
	<div id="projectTools">
		<label class="label">Project Tools</label>
		<div class="toolItem" v-for="(tool, index) in project.tools">
        	<p class="toolName">{{tool.toolName}}</p>
        	<a :href="tool.url">{{tool.url}}</a>
     	</div>
    </div>
</template>

<script>
export default {
	name: 'ProjectTools',
	props: ['project']
}	
</script>

<style scoped>

#projectTools {
	padding: 20px;
}

.label {
	font-size: 20px;
}

.toolItem {
	margin-top: 20px;
}

.toolName {
	font-size: 18px;
}

</style>