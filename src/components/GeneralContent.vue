<template>
	<div :class="'general-content block ' + layout" :id="id ? id : ''">
		<div class="general-content-inner">
			<div class="text" v-html="compiledMarkdown"></div>
			<div class="img" v-if="image">
				<img :src="getStrapiMedia(image.url)" />
			</div>
		</div>
	</div>
</template>

<script>
import {getStrapiMedia} from '../utils/getStrapiMedia'
import marked from 'marked'

export default {
	name: 'GeneralContent',
	props: {
		id: {
			type: String,
		},
		text: {
			type: String,
		},
		image: {
			type: Object,
		},
		layout: {
			type: String,
		},
	},
	methods: {
		getStrapiMedia,
	},
	computed: {
		compiledMarkdown() {
			return marked(this.text, {sanitize: true})
		},
	},
}
</script>

<style scoped lang="scss">
.block.general-content {
	width: 100%;
	padding-top: 100px;

	.general-content-inner {
		display: flex;
		flex-direction: column;

		max-width: 1200px;
		padding-left: 50px;
		padding-right: 50px;
		margin: 0 auto;

		.text {
			font-size: size(20);
			text-align: left;
			padding-bottom: 100px;
		}

		.img {
			img {
				display: block;
				max-width: 100%;
			}
		}
	}
	@include md {
		padding-top: 0;
		padding-bottom: 0;
		.general-content-inner {
			--margin: 50px;
			--base: 35%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.text {
				flex: 0 0 60%;
				padding-top: 100px;
			}
			.img {
				align-self: flex-end;
				flex: 0 0 calc(var(--base) + var(--margin));
			}
		}
		&.imageRight .general-content-inner {
			.img {
				order: 2;
				margin-right: calc(var(--margin) * -1);
			}
			.text {
				order: 1;
			}
		}
		&.imageLeft .general-content-inner {
			.img {
				order: 1;
				margin-left: calc(var(--margin) * -1);
			}
			.text {
				order: 2;
			}
		}
	}

	@include lg {
		.general-content-inner {
			--margin: calc((100vw - 1100px) / 2);
		}
	}
}
</style>

<style lang="scss">
.block#neuroimaging {
	background: $gray;
	color: $dark;
	h2 {
		color: $dark;
	}
	p:last-child {
		text-align: right;
		margin-top: 80px;
	}
	a {
		text-align: right;
		display: inline-block;
		position: relative;
		font-size: size(24);
		color: $tertiary;
		&:after {
			content: '';
			width: 100%;
			height: 2px;
			background: $tertiary;
			bottom: 0;
			left: 0;
			position: absolute;
			transform: scaleX(0);
			transform-origin: left;
			transition: transform 0.3s ease-out;
		}
		&:hover,
		&:focus {
			&:after {
				transform: scale(1);
			}
		}
	}
	@include lg {
		padding-top: 150px;
		.img {
			padding-top: 100px;
		}
	}
}

.block#revolutionaries {
	background: $gray;
	color: $dark;
	@include md {
		.img {
			align-self: center;
		}
	}
}

.block#saving-lives {
	@include md {
		.img {
			align-self: flex-start;
		}
	}
}
</style>
