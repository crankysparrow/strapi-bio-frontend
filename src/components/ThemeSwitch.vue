<template>
	<div class="contrast-switch">
		<input v-model="lightTheme" id="contrast" type="checkbox" class="switch-checkbox" />
		<label for="contrast" class="switch-label">
			<span>☀️</span>
			<span>🌙</span>
			<div class="switch-toggle" :class="{'switch-toggle-checked': userTheme == 'light-theme'}"></div>
		</label>
	</div>
</template>

<script>
export default {
	name: 'ThemeSwitch',
	data() {
		return {
			userTheme: 'dark-theme',
			lightTheme: false,
		}
	},
	mounted() {
		const currentTheme = localStorage.getItem('user-theme')
		console.log(currentTheme)
		if (currentTheme == 'light-theme') {
			this.lightTheme = true
		} else if (currentTheme == 'dark-theme') {
			this.lightTheme = false
		} else {
			const initUserTheme = this.getMediaPreference()
			this.setTheme(initUserTheme)
		}
	},
	watch: {
		lightTheme: {
			handler: function(newVal, oldVal) {
				if (newVal == true) {
					this.setTheme('light-theme')
				} else {
					this.setTheme('dark-theme')
				}
			},
		},
	},
	methods: {
		getMediaPreference() {
			const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
			if (hasDarkPreference) {
				return 'dark-theme'
			} else {
				return 'light-theme'
			}
		},
		setTheme(theme) {
			localStorage.setItem('user-theme', theme)
			this.userTheme = theme
			document.documentElement.className = this.userTheme
		},
	},
}
</script>

<style lang="scss" scoped>
.contrast-switch {
	position: absolute;
	top: 0px;
	left: 2rem;
}
.switch-checkbox {
	height: 0;
	width: 0;
	visibility: hidden;
	// display: none;
}
.switch-label {
	align-items: center;
	background: var(--text-secondary);
	// border: 2px solid var(--accent);
	border-radius: calc(var(--contrastSize) * 0.5);
	cursor: pointer;
	display: flex;
	font-size: calc(var(--contrastSize) * 0.3);
	height: calc(var(--contrastSize) * 0.5);
	position: relative;
	padding: calc(var(--contrastSize) * 0.1);
	transition: background 0.5s ease;
	justify-content: space-between;
	width: var(--contrastSize);
	z-index: 1;
	.switch-toggle {
		position: absolute;
		background: var(--bg-secondary);
		border-radius: 50%;
		top: calc(var(--contrastSize) * 0.05);
		left: calc(var(--contrastSize) * 0.05);
		width: calc(var(--contrastSize) * 0.4);
		height: calc(var(--contrastSize) * 0.4);
		transform: translateX(0);
		transition: transform 0.3s ease, background-color 0.5s ease;
	}
}

.switch-checkbox:checked + .switch-label {
	.switch-toggle {
		transform: translateX(calc(var(--contrastSize) * 0.5));
	}
}

.switch-toggle-checked {
	transform: translateX(calc(var(--contrastSize) * 0.5));
}
</style>
