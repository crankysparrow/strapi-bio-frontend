<template>
	<div id="nav">
		<Hamburger :active="hamActive" @click="toggleMenu()"></Hamburger>

		<transition name="menuSlide">
			<div class="menu" v-if="navActive">
				<ul>
					<li v-for="link in navLinks" :key="link.url">
						<router-link :to="link.url" @click="linkClicked">{{ link.name }}</router-link>
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script>
import Hamburger from './Hamburger.vue'

export default {
	name: 'Nav',
	components: {
		Hamburger,
	},
	props: {
		navActive: {
			type: Boolean,
		},
		hamActive: {
			type: Boolean,
		},
		navLinks: {
			type: Array,
		},
	},
	data() {
		return {
			animating: false,
		}
	},
	methods: {
		toggleMenu() {
			this.$emit('menutoggle')
		},
		linkClicked() {
			this.$emit('linkclicked')
		},
	},
}
</script>

<style scoped lang="scss">
#nav {
	.nav-button {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 999;
		height: 60px;
		width: 60px;
		@include md {
			height: 80px;
			width: 80px;
		}
	}
}

.menu {
	padding-top: 15vh;
	position: fixed;
	background: var(--bg-secondary);
	width: 100%;
	max-width: 550px;
	height: 100%;
	top: 0;
	right: 0;
	z-index: 998;
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			padding: 0;
			margin: 30px;
			a {
				font-size: size(40);
				color: var(--text-primary);
				position: relative;
				display: block;
				z-index: 0;
				transition: color 200ms linear;
				transition-delay: 100ms;
				&:before {
					content: '';
					position: absolute;
					width: 100%;
					height: calc(100% - 10px);
					background: var(--text-primary);
					left: 0;
					z-index: -1;
					transform: scaleX(0);
					transform-origin: right;
					transition: transform 200ms ease-out;
				}
				&:hover,
				&:focus {
					color: var(--bg-secondary);
					&:before {
						transform: scaleX(1);
					}
				}
			}
		}
	}
}

.menuSlide-enter-active,
.menuSlide-leave-active {
	transition: transform 500ms ease-out;
}
.menuSlide-enter-from,
.menuSlide-leave-to {
	transform: translateX(100%);
}
</style>
