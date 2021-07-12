<template>
	<Nav :navActive="navActive" :hamActive="hamActive" :navLinks="navLinks" v-on:menutoggle="menuToggle" v-on:linkclicked="closeMenuAfterClick" />
	<router-view v-slot="{Component}">
		<transition :name="$route.meta.transitionName || 'fade'" :mode="$route.meta.transitionMode || 'out-in'">
			<component :is="Component" />
		</transition>
	</router-view>
	<Footer />
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	data() {
		return {
			navActive: false,
			hamActive: false,
			navAnimating: false,
			navLinks: [
				{url: '/', name: 'Home'},
				{url: '/team', name: 'About'},
				{url: '/science', name: 'Science'},
				{url: '/press', name: 'Press Releases'},
			],
		}
	},
	methods: {
		menuToggle() {
			if (!this.navAnimating) {
				this.navActive = !this.navActive
				this.hamActive = !this.hamActive
			}
		},
		closeMenuAfterClick() {
			this.navAnimating = true
			gsap.timeline({})
				.to('.menu', {maxWidth: 'none', width: '100vw', duration: 0.6, ease: 'sine.in'})
				.to('.menu', {xPercent: -100, duration: 0.4, ease: 'sine.out'})
				.then(() => {
					this.navActive = false
					this.hamActive = false
					this.navAnimating = false
				})
		},
	},
	components: {
		Nav,
		Footer,
	},
}
</script>

<style lang="scss">
body {
	margin: 0;
	background: $dark;
}
#app {
	font-family: Space Grotesk, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $gray;
	width: 100vw;
}

a {
	font-weight: bold;
	color: $orange;
	text-decoration: none;
	&:hover,
	&:focus {
		color: $secondary;
	}
}

#nav {
	padding: 30px;
}

.fade-enter-to,
.fade-leave-from {
	opacity: 1;
	z-index: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 500ms linear;
}
.fade-enter-from,
.fade-leave-active {
	opacity: 0;
}
</style>
