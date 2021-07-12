<template>
	<div class="about">
		<Hero v-if="hero" :title="hero.title" :image="hero.image" :home="false" />

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
