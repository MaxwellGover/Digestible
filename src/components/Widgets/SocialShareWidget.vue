<template>

<div id="socialSharingContainer">
	<social-sharing url="https://vuejs.org/" inline-template>
		<div>
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

</template>

<script>
import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'

Vue.use(SocialSharing)

export default {
	name: 'SocialShareWidget'
}

</script>

<style scoped>

#socialSharingContainer {
	display: flex;
	justify-content: center;
	box-shadow: none;
	border-radius: 1px;
}
	
</style>