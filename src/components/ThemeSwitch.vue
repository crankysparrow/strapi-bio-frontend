<template>
	<div class="contrast-switch">
		<input @change="toggleTheme" id="contrast" type="checkbox" class="switch-checkbox" />
		<label for="contrast" class="switch-label">
			<span>☀️</span>
			<span>🌙</span>
			<div class="switch-toggle" :class="{'switch-toggle-checked': userTheme == 'light-theme'}"></div>
		</label>
	</div>
</template>

<script>
export default {
	name: 'ContrastSwitch',
	data() {
		return {
			userTheme: 'dark-theme',
		}
	},
	methods: {
		toggleTheme() {
			if (this.userTheme == 'light-theme') {
				this.userTheme = 'dark-theme'
			} else {
				this.userTheme = 'light-theme'
			}
			document.documentElement.className = this.userTheme
		},
	},
}
</script>

<style lang="scss" scoped>
.contrast-switch {
	position: absolute;
	top: 2rem;
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
