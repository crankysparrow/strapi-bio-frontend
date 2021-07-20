<template>
	<div class="press-releases">
		<Hero title="Press Releases" :home="false" />

		<div class="press-content">
			<router-view v-slot="{Component}">
				<transition name="pressFade" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script>
import {getStrapiMedia} from '../utils/getStrapiMedia'
import Hero from '../components/Hero.vue'

export default {
	name: 'Press Releases',
	data() {
		return {
			pageLimit: 5,
		}
	},
	methods: {
		getStrapiMedia,
		getResults() {},
	},
	components: {
		Hero,
	},
}
</script>

<style scoped="true" lang="scss">
.press-content {
	// background: $gray;
	width: 100%;
	overflow: hidden;
	position: relative;
	.press-bottom {
		svg {
			display: block;
			height: 1200px;
			width: auto;
		}
		position: absolute;
		bottom: -30px;
		right: -300px;
	}
}

.press-releases {
	position: relative;
}

.pressFade-enter-to,
.pressFade-leave-from {
	opacity: 1;
}

.pressFade-enter-active,
.pressFade-leave-active {
	transition: opacity 500ms linear;
}
.pressFade-enter-from,
.pressFade-leave-active {
	opacity: 0;
}
</style>
