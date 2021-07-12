<template>
	<div class="science">
		<Hero v-if="hero" :title="hero.title" :image="hero.image" :home="true" />

		<div class="page-content" v-if="pageContent">
			<div v-for="block in pageContent" :key="block.id">
				<GeneralContent
					v-if="block.__component == 'blocks.general-content'"
					:id="block.blockID"
					:text="block.text"
					:image="block.image"
					:layout="block.layout ?? 'imageRight'"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import {getStrapiMedia} from '../utils/getStrapiMedia'
import GeneralContent from '../components/GeneralContent.vue'
import Hero from '../components/Hero.vue'

export default {
	name: 'Science',
	data() {
		return {
			hero: {},
			pageContent: [],
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
		this.$http.get(`${process.env.VUE_APP_STRAPI_URI}/science`).then((res) => {
			console.log(res.data)
			this.hero = res?.data?.hero
			this.pageContent = res?.data?.pageContent
		})
	},
}
</script>
