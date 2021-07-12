<template>
	<div class="press-releases">
		<Hero title="Press Releases" :home="false" />

		<div class="press-content">
			<router-view></router-view>

			<div class="press-bottom">
				<!-- <Pattern :colors="colors" /> -->
				<Brain />
			</div>
		</div>
	</div>
</template>

<script>
import {getStrapiMedia} from '../utils/getStrapiMedia'
import Hero from '../components/Hero.vue'
import Pattern from '../components/Pattern.vue'
import Brain from '../components/Brain.vue'

export default {
	name: 'Press Releases',
	methods: {
		getStrapiMedia,
		getResults() {},
		updatePagination(newPage) {
			this.page = newPage
			let getUrl = `${process.env.VUE_APP_STRAPI_URI}/press-releases?_sort=date:desc&_limit=10`
			getUrl += '&_start=' + (newPage - 1) * 10
			this.$http.get(getUrl).then((res) => {
				this.press = res?.data
				setTimeout(() => {
					let newHeight = getComputedStyle(list).height
					console.log(newHeight)
				}, 1000)
				// list.style.height = 'auto'
			})
		},
	},
	components: {
		Hero,
		Pattern,
		Brain,
	},
	mounted() {
		// this.$http.get('http://localhost:1337/press-releases/count').then((res) => {
		// 	if (res.data) {
		// 		this.totalPages = Math.ceil(res.data / 10)
		// 	}
		// })
		// let getUrl = 'http://localhost:1337/press-releases?_sort=date:desc&_limit=10'
		// let page = this.$route?.query?.p
		// if (page) {
		// 	this.page = page
		// 	getUrl += '&_start=' + (page - 1) * 10
		// }
		// this.$http.get(getUrl).then((res) => {
		// 	this.press = res?.data
		// })
	},
}
</script>

<style scoped="true" lang="scss">
.press-content {
	background: $gray;
	width: 100%;
	overflow: hidden;
	position: relative;
	// z-index: 1;
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
</style>
