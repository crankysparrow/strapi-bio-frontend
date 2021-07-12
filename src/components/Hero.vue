<template>
	<div :class="home ? 'hero home' : 'hero'">
		<div class="hero-inner">
			<div class="image" v-if="image">
				<img :src="getStrapiMedia(image.url)" />
			</div>
			<h1>{{ title }}</h1>
		</div>
	</div>
</template>

<script>
import {getStrapiMedia} from '../utils/getStrapiMedia'

export default {
	name: 'Hero',
	props: {
		home: {
			type: Boolean,
		},
		image: {
			type: Object,
		},
		title: {
			type: String,
		},
	},
	methods: {
		getStrapiMedia,
	},
}
</script>

<style scoped lang="scss">
.hero {
	width: 100%;
	max-width: 100vw;
	padding-left: 55px;
	padding-right: 50px;

	.hero-inner {
		position: relative;
		display: flex;
		padding-bottom: 100px;
		padding-top: 60px;
		flex-direction: column;
	}
	h1 {
		margin-top: 100px;
		text-align: right;
	}
	.image {
		img {
			display: block;
			max-width: 250px;
		}
	}
	@include sm {
		.hero-inner {
			flex-direction: row;
			align-items: center;
			justify-content: center;
			max-width: 1000px;
			margin: 0 auto;
			height: 100%;
		}
		.image {
			flex: 0 0 40%;
			padding-right: 50px;
			img {
				max-width: 400px;
				margin-left: auto;
			}
		}
		h1 {
			flex: 0 0 40%;
			margin-top: 100px;
			align-self: flex-end;
		}
	}
	&.home {
		@include sm {
			.hero-inner {
				min-height: 500px;
			}
		}
		@include md {
			min-height: 700px;
			.hero-inner {
				padding-bottom: 200px;
				min-height: 700px;
			}
		}
		h1 {
			// align-self: flex-start;
		}
	}
}
</style>
