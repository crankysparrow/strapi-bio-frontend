<template>
	<div class="press-release">
		<div class="press-inner">
			<h2>{{ item.title }}</h2>
			<div class="content">
				{{ item.content }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PressRelease',
	data() {
		return {
			item: {},
		}
	},
	mounted() {
		let slug = this.$route?.params?.slug
		let getUrl = `${process.env.VUE_APP_STRAPI_URI}/press-releases?slug=${slug}`
		this.$http.get(getUrl).then((res) => {
			console.log(res)
			this.item = res.data[0]
		})
	},
}
</script>

<style lang="scss" scoped>
.press-release {
	text-align: left;
	.press-inner {
		padding-left: 50px;
		padding-right: 50px;
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		padding-top: 100px;
		padding-bottom: 200px;
	}
	.content {
		color: white;
	}
}
</style>
