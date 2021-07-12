<template>
	<footer class="footer">
		<img src="../assets/biolive.svg" />
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style scoped lang="scss">
.footer {
	height: 300px;
	background: $white;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		display: block;
	}
}
</style>
