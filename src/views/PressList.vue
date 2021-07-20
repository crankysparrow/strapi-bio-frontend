<template>
	<div class="press-list">
		<div class="press-list-inner">
			<div v-for="item in press" :key="item.id" class="press-item">
				<router-link :to="'/press/' + item.slug" class="press-item-link">
					<div class="date">{{ item.date }}</div>
					<h3 class="h4">{{ item.title }}</h3>
					<div class="arrow">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M 5.4980469 3.0371094 L 4.0957031 4.4628906 L 11.744141 11.998047 L 4.0507812 19.535156 L 5.4492188 20.964844 L 14.597656 12.001953 L 5.4980469 3.0371094 z M 11.333984 3.0449219 L 9.9160156 4.4550781 L 17.423828 12.005859 L 10.035156 19.550781 L 11.464844 20.949219 L 20.234375 11.994141 L 11.333984 3.0449219 z"
							></path>
						</svg>
					</div>
				</router-link>
			</div>
		</div>

		<div v-if="totalPages > 0" class="pagination">
			<div :class="{'current-marker': true, hovered: markerHovered}" :style="'--left: ' + 36 * (markerLeft - 1) + 'px;'"></div>
			<div v-for="n in totalPages" :class="n == page ? 'page current' : 'page'">
				<router-link :to="'/press/p/' + n" @click="updatePage(n)" @mouseover="hoverPage(n)" @mouseleave="unHoverPage()">{{ n }}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PressList',
	data() {
		return {
			press: [],
			totalPages: 1,
			page: 1,
			pageLimit: 6,
			markerHovered: false,
			markerLeft: 1,
		}
	},
	methods: {
		updatePage(newPage) {
			let getUrl = `${process.env.VUE_APP_STRAPI_URI}/press-releases?_sort=date:desc&_limit=${this.pageLimit}`
			this.page = newPage
			this.markerLeft = this.page
			getUrl += '&_start=' + (this.page - 1) * this.pageLimit
			this.$http.get(getUrl).then((res) => {
				this.press = res?.data
			})
		},
		hoverPage(page) {
			this.markerLeft = page
			this.markerHovered = true
		},
		unHoverPage() {
			this.markerLeft = this.page
			this.markerHovered = false
		},
	},
	mounted() {
		this.page = this.$route?.params?.page
		this.markerLeft = this.page
		this.$http.get(`${process.env.VUE_APP_STRAPI_URI}/press-releases/count`).then((res) => {
			if (res.data) {
				this.totalPages = Math.ceil(res.data / this.pageLimit)
			}
		})

		let getUrl = `${process.env.VUE_APP_STRAPI_URI}/press-releases?_sort=date:desc&_limit=${this.pageLimit}`
		if (this.page) {
			getUrl += '&_start=' + (this.page - 1) * this.pageLimit
		}

		this.$http.get(getUrl).then((res) => {
			this.press = res?.data
		})
	},
}
</script>

<style scoped="true" lang="scss">
.press-list {
	padding-bottom: 150px;
	position: relative;
	// transition: height 200ms linear;
	.pagination {
		// color: $dark;
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		position: relative;
		z-index: 1;
		.current-marker {
			--left: 0;
			position: absolute;
			width: 40px;
			height: 40px;
			border: 2px solid var(--text-primary);
			border-radius: 50%;
			top: -2px;
			left: 0;
			display: block;
			z-index: -1;
			transform: translateX(calc(var(--left) - 2px));
			transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
			&.hovered {
				transform: translateX(calc(var(--left) - 2px)) scale(0.9);
				background: var(--text-primary);
			}
		}
		.page {
			flex: 0 0 36px;
			a {
				display: flex;
				width: 36px;
				height: 36px;
				align-items: center;
				justify-content: center;
				color: var(--accent);
				font-size: size(24);
				&:hover,
				&:focus {
				}
			}
			&.current {
				a {
					color: var(--accent-tertiary);
					&:hover,
					&:focus {
						// color: $purple;
					}
				}
			}
		}
	}
	.press-list-inner {
		padding-left: 50px;
		padding-right: 50px;
		max-width: 1200px;
		margin: 0 auto;
		padding-top: 100px;
		text-align: left;
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: stretch;
		.press-item {
			flex: 0 0 48%;
			margin-bottom: 2rem;
		}
	}
	.press-item-link {
		height: 100%;
		padding: 20px;
		// color: $dark;
		display: grid;
		grid-template-rows: min-content 1fr;
		grid-template-columns: 1fr 80px;
		max-width: 100%;
		background: var(--bg-secondary);
		.date {
			grid-row: 1;
			grid-column: 1;
			font-size: size(18);
			font-weight: 600;
			margin-bottom: 5px;
			color: var(--accent-tertiary);
		}
		h3 {
			grid-row: 2;
			grid-column: 1;
			// color: $dark;
			margin-bottom: 0;
			transition: all 200ms linear;
		}
		.arrow {
			grid-row: 1 / 3;
			grid-column: 2;
			align-self: center;
			opacity: 0;
			transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
			margin-left: 50px;
			transform: translateX(-50px);
			svg path {
				fill: var(--accent-tertiary);
			}
		}

		&:hover,
		&:focus {
			h3 {
				text-decoration: underline;
				text-decoration-color: var(--accent-tertiary);
				text-decoration-thickness: 2px;
				text-underline-offset: 5px;
			}
			.arrow {
				opacity: 1;
				transform: translateX(0);
			}
		}
		@include md {
			grid-template-columns: 1fr 130px;
		}
	}
}
</style>
