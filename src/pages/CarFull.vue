<template>
	<div>
		<h4>Car name: {{ $route.query.name }}</h4>
		<h5>Car year: {{ year }}</h5>

		<div class="scroll"></div>

		<div id="scroll">Hello from the bottom</div>

		<div class="scroll"></div>
	</div>
</template>

<script>
export default {
	computed: {
		year() {
			return this.$route.query.year
		}
	},
	beforeRouteEnter(to, from, next) {
		console.log("Route enter");

		next();
	}
}
</script>

<style>
	.scroll {
		height: 1200px;
		width: 200px;
		background-color: #ccc;
	}
</style>