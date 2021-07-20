<template>
	<div :class="home ? 'hero home' : 'hero'">
		<div class="hero-inner">
			<!-- <div class="image" v-if="image"> -->
			<!-- <img :src="getStrapiMedia(image.url)" /> -->
			<!-- </div> -->
			<svg class="hero-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path
					:style="{d: path}"
					transform="translate(100 100)"
					d="M55.7,-47.9C68.4,-42.9,72.3,-21.5,66,-6.3C59.7,8.9,43.2,17.7,30.4,30.9C17.7,44,8.9,61.4,-6,67.4C-20.8,73.3,-41.6,67.9,-54,54.7C-66.4,41.6,-70.3,20.8,-68,2.3C-65.7,-16.2,-57.1,-32.3,-44.7,-37.3C-32.3,-42.3,-16.2,-36,2.6,-38.7C21.5,-41.3,42.9,-52.9,55.7,-47.9Z"
				/>
			</svg>

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
		path: {
			type: String,
		},
	},
	methods: {
		getStrapiMedia,
	},
	mounted() {
		console.log(this.path)
	},
}
</script>

<style scoped lang="scss">
.hero {
	width: 100%;
	max-width: 100vw;
	padding-left: 55px;
	padding-right: 50px;

	svg {
		path {
			transition: all 1s $ease_out_back;
			fill: var(--accent);
			// d: path(
			// 	'M35.2,-49.6C43.5,-34.9,46.8,-21.9,53.8,-6C60.8,9.9,71.5,28.6,68.2,44.2C65,59.8,47.9,72.1,31.6,71.2C15.4,70.3,0.1,56.2,-15.3,48C-30.6,39.8,-45.9,37.6,-58.2,28C-70.5,18.3,-79.7,1.3,-79.6,-16.6C-79.5,-34.5,-70,-53.3,-55.2,-66.9C-40.3,-80.5,-20.2,-88.8,-3.4,-84.8C13.4,-80.8,26.8,-64.3,35.2,-49.6Z'
			// );
		}
	}

	.hero-inner {
		position: relative;
		display: flex;
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
		svg {
			// flex: 0 0 30%;
			max-width: 500px;
			// margin-left: auto;
		}

		h1 {
			flex: 0 0 40%;
			padding-bottom: 5%;
			align-self: flex-end;
		}
	}
}
</style>
