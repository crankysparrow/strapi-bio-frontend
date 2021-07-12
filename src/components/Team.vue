<template>
	<div class="team">
		<div class="team-inner">
			<div class="titles">
				<h2 class="h3">{{ title }}</h2>
				<div class="callout">{{ description }}</div>
			</div>
			<div class="team-list">
				<div v-for="member in teamMembers" :key="member.id" class="team-list-member">
					<router-link :to="'/team/' + member.id">
						<div class="headshot">
							<img
								v-if="member.headshot"
								:src="getStrapiMedia(member.headshot.url)"
							/>
						</div>
						<h4>{{ member.name }}</h4>
						<div class="h5">{{ member.jobTitle }}</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {getStrapiMedia} from '../utils/getStrapiMedia'

export default {
	name: 'Team',
	props: {
		title: {
			type: String,
		},
		description: {
			type: String,
		},
	},
	data() {
		return {
			teamMembers: [],
		}
	},
	mounted() {
		this.$http.get(`${process.env.VUE_APP_STRAPI_URI}/teams`).then((res) => {
			this.teamMembers = res?.data
		})
	},
	methods: {
		getStrapiMedia,
	},
}
</script>

<style scoped lang="scss">
.team {
	padding-top: 100px;
	padding-bottom: 100px;
	background: $gray;
	color: $dark;
	width: 100vw;
	max-width: 100vw;
	position: relative;
	@include md {
		padding-top: 200px;
	}
	.team-inner {
		padding-left: 50px;
		width: 100%;
		position: relative;

		.team-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			margin-top: 100px;
			.team-list-member {
				width: 150px;
				margin: 0 15px 50px;
				position: relative;
				.headshot {
					width: 100%;
					margin-bottom: 10px;
					img {
						display: block;
						max-width: 100%;
					}
				}
				h4,
				.h5 {
					color: $dark;
					margin-bottom: 10px;
					line-height: 1;
					text-align: right;
				}

				h4 {
					position: relative;
					z-index: 1;
					&:before {
						content: '';
						position: absolute;
						width: 100%;
						height: calc(100% - 10px);
						background: $orange;
						left: 0;
						bottom: 0;
						z-index: -1;
						transition: transform 200ms ease-out;
						transform: scaleX(0);
						transform-origin: right;
					}
				}

				&:hover,
				&:focus {
					h4 {
						&:before {
							transform: scaleX(1);
						}
					}
				}

				@include sm {
					width: 200px;
				}
			}
		}

		@include md {
			display: flex;
			padding-left: 0;
			position: relative;
			.titles {
				width: 35%;
				padding-left: 50px;
				text-align: left;
				align-self: flex-start;
				position: sticky;
				position: -webkit-sticky;
				top: 100px;
				left: 0;
			}
			.team-list {
				justify-content: flex-end;
				margin-top: 0;
				flex: 0 0 65%;
				position: relative;
				margin-left: auto;
				.team-list-member {
					flex: 0 0 250px;
					margin-right: 0;
					margin-left: 30px;
					h4,
					.h5 {
						margin-right: 10px;
					}
				}
			}
		}

		@include lg {
			.titles {
				flex: 0 0 30%;
				width: auto;
			}
			.team-list {
				flex: 0 0 70%;
				width: auto;
				.team-list-member {
					flex: 0 0 250px;
				}
			}
		}
		@include xl {
			max-width: 1500px;
			margin-left: auto;
			.team-list {
				.team-list-member {
					flex: 0 0 280px;
				}
			}
		}
	}
}
</style>
