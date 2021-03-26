<template>
	<div class="container">
		<h1>Car id - {{ id }}</h1>
	</div>
</template>

<script>
export default {
	data: function () {
		return { 
			id: this.$route.params['id'],
		}
	},
	watch: {
		$route(toR) {
			this.id = toR.params['id'];
		}
	}
}
</script>