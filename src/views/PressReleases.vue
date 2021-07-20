<template>
	<div class="press-releases">
		<Hero title="Press Releases" :home="false" />

		<div class="press-content" :style="{height: containerHeight}">
			<router-view v-slot="{Component}">
				<transition name="pressFade" mode="out-in" @beforeLeave="beforeLeave" @afterEnter="afterEnter">
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
			prevHeight: 0,
			containerHeight: 'auto',
		}
	},
	methods: {
		getStrapiMedia,
		beforeLeave(element) {
			this.prevHeight = getComputedStyle(element).height
			this.containerHeight = this.prevHeight
		},
		afterEnter(element) {
			const {height} = getComputedStyle(element)
			this.containerHeight = height
			setTimeout(() => {
				this.containerHeight = 'auto'
			}, 1000)
		},
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
	transition: height 500ms ease;
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
	transition: all 500ms linear;
	overflow: hidden;
}
.pressFade-enter-from,
.pressFade-leave-active {
	opacity: 0;
}
</style>
