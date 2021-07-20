<template>
	<div class="about">
		<Hero v-if="hero" :title="hero.title" :image="hero.image" :home="false" :path="svgPath" />

		<Team :title="teamTitle" :description="teamDescription" />
	</div>
</template>

<script>
import {getStrapiMedia} from '../utils/getStrapiMedia'
import GeneralContent from '../components/GeneralContent.vue'
import Hero from '../components/Hero.vue'
import Team from '../components/Team.vue'
// @ is an alias to /src

export default {
	name: 'About',
	data() {
		return {
			hero: {},
			teamTitle: '',
			teamDescription: '',
			svgPath:
				'path("M44.7,-53.5C57.9,-42.2,68.6,-28.1,67.6,-14.7C66.6,-1.3,54.1,11.3,45.4,26C36.7,40.7,31.8,57.4,23.5,57.3C15.1,57.3,3.3,40.4,-13.5,35.2C-30.4,29.9,-52.2,36.3,-63.4,30.2C-74.5,24,-75.1,5.4,-67.3,-7.2C-59.6,-19.9,-43.6,-26.4,-31,-37.8C-18.4,-49.2,-9.2,-65.4,3.3,-69.3C15.8,-73.2,31.5,-64.8,44.7,-53.5Z")',
		}
	},
	methods: {
		getStrapiMedia,
	},
	components: {
		Hero,
		Team,
	},
	mounted() {
		this.$http.get(`${process.env.VUE_APP_STRAPI_URI}/about`).then((res) => {
			this.hero = res?.data?.hero
			this.teamTitle = res?.data?.teamTitle
			this.teamDescription = res?.data?.teamDescription
		})
	},
}
</script>
