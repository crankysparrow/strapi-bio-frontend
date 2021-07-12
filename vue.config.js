module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
                    @import "@/scss/_variables.scss";
					@import "@/scss/_fonts.scss";
					@import "@/scss/_global.scss";
                `,
			},
		},
	},
}
