<template>
	<div class="team-member">
		<div class="team-close-button">
			<router-link to="/team">
				<Hamburger active="false"></Hamburger>
			</router-link>
		</div>
		<div class="headshot" v-if="member.headshot">
			<img :src="getStrapiMedia(member.headshot.url)" />
		</div>
		<div class="content">
			<h2 v-if="member.name">{{ member.name }}</h2>
			<div class="h4" v-if="member.jobTitle">{{ member.jobTitle }}</div>
			<div class="bio" v-if="member.bio">{{ member.bio }}</div>
		</div>
	</div>
</template>

<script>
import {getStrapiMedia} from '../utils/getStrapiMedia'
import Hamburger from '../components/Hamburger.vue'

export default {
	name: 'Team Member',
	data() {
		return {
			member: {},
		}
	},
	mounted() {
		this.$http
			.get(`${process.env.VUE_APP_STRAPI_URI}/teams/${this.$route.params.id}`)
			.then((res) => {
				this.member = res?.data
			})
	},
	methods: {
		getStrapiMedia,
	},
	components: {
		Hamburger,
	},
}
</script>

<style lang="scss" scoped="true">
.team-member {
	&.teamFade-enter-to,
	&.teamFade-leave-from {
		transform: scaleY(1);
	}

	&.teamFade-enter-from,
	&.teamFade-leave-to {
		transform: scaleY(0);
		.headshot,
		.content,
		.team-close-button {
			opacity: 0;
		}
	}

	&.teamFade-enter-active,
	&.teamFade-leave-active {
		transform-origin: bottom;

		.headshot,
		.content,
		.team-close-button {
			opacity: 0;
			transition: opacity 300ms linear;
		}
	}

	&.teamFade-leave-active {
		.headshot,
		.content,
		.team-close-button {
			transition: opacity 100ms linear;
		}
	}

	&.teamFade-leave-active {
		transition: transform 500ms ease-out;
	}

	&.teamFade-enter-active {
		transition: transform 500ms ease-in;
	}
}

.team-member {
	background: $dark;
	width: 100vw;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	padding-top: 100px;
	padding-left: 50px;
	padding-right: 50px;
	z-index: 999;

	.team-close-button,
	.headshot,
	.content {
		opacity: 1;
		transition: opacity 300ms linear;
	}

	.team-close-button {
		position: absolute;
		top: 0;
		right: 0;
		@include md {
			top: 40px;
			right: 40px;
		}
	}

	.headshot {
		flex: 0 0 300px;
		align-self: flex-start;
		position: relative;
		&:before {
			position: absolute;
			display: block;
			content: '';
			width: 2px;
			height: 60%;
			top: -30px;
			left: -40px;
			background: $tertiary;
		}
	}
	.content {
		max-width: 600px;
		text-align: left;
		margin-left: 50px;
		h2 {
			position: relative;
			display: inline-block;
			&:before {
				width: calc(100% + 20px);
				height: 70%;
				bottom: 0;
				left: -10px;
				background-color: $tertiary;
				content: '';
				display: block;
				position: absolute;
				z-index: -1;
			}
		}
	}
	@include lg {
		padding-left: 150px;
		padding-right: 150px;
		padding-top: 200px;
	}
}
</style>
