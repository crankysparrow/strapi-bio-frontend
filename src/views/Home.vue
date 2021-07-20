<template>
	<div class="home">
		<Hero v-if="hero" :title="hero.title" :image="hero.image" :home="true" :path="svgPath" />

		<div class="page-content" v-if="pageContent">
			<div v-for="block in pageContent" :key="block.id">
				<GeneralContent v-if="block.__component == 'blocks.general-content'" :id="block.blockID" :text="block.text" :image="block.image" :layout="block.layout ?? 'imageRight'" />
			</div>
		</div>
	</div>
</template>

<script>
import {getStrapiMedia} from '../utils/getStrapiMedia'
import GeneralContent from '../components/GeneralContent.vue'
import Hero from '../components/Hero.vue'
// @ is an alias to /src

export default {
	name: 'Home',
	data() {
		return {
			hero: {},
			pageContent: [],
			svgPath:
				'path("M43.1,-65.8C58,-57.5,73.6,-49.1,71.6,-37.4C69.5,-25.8,49.7,-10.7,45.6,5.4C41.4,21.5,53,38.7,49.7,43.7C46.4,48.7,28.2,41.4,13.1,46.8C-2,52.2,-14,70.3,-19.9,68.4C-25.9,66.4,-25.9,44.4,-29.7,30.8C-33.5,17.3,-41.2,12.1,-48.4,3.1C-55.7,-5.9,-62.6,-18.8,-57.9,-25.3C-53.2,-31.8,-36.9,-31.9,-25.3,-41.7C-13.7,-51.5,-6.9,-71,3.6,-76.6C14.1,-82.3,28.2,-74,43.1,-65.8Z")',
		}
	},
	methods: {
		getStrapiMedia,
	},
	components: {
		GeneralContent,
		Hero,
	},
	mounted() {
		this.$http.get(`${process.env.VUE_APP_STRAPI_URI}/home`).then((res) => {
			this.hero = res?.data?.hero
			this.pageContent = res?.data?.pageContent
		})
	},
}
</script>
