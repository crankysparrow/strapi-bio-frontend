<template>
	<button class="nav-button">
		<span class="screen-reader-text">open menu</span>
		<svg :class="active ? 'ham active' : 'ham'" viewBox="0 0 100 100" width="80" fill="none" stroke-width="5.5" stroke-linecap="round">
			<path class="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
			<path class="line middle" d="m 70,50 h -40" />
			<path class="line bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
		</svg>
	</button>
</template>

<script>
export default {
	name: 'Hamburger',
	props: {
		active: {
			type: Boolean,
		},
	},
}
</script>

<style scoped lang="scss">
button {
	background: transparent;
	padding: 0;
	border: none;
	cursor: pointer;
}
.ham {
	stroke: var(--text-primary);
	transition: transform 1s cubic-bezier(0.34, 1.56, 0.64, 1);
	.line {
		transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
		&.top {
			stroke-dasharray: 40 120;
		}
		&.bottom {
			stroke-dasharray: 40 120;
		}
	}
	&.active {
		transform: rotate(45deg);
		.line {
			&.top,
			&.bottom {
				stroke-dasharray: 40 120;
				stroke-dashoffset: -68;
			}
		}
	}
}
</style>
