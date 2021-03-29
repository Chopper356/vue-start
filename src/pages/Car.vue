<template>
	<div class="container">
		<h1>Car id - {{ id }}</h1>

		<button class="btn btn-cm btn-info" @click="goBackToCars">Back</button>
		<br>
		<router-link tag="button" class="btn btn-info mt-4" :to="{name: 'carFull', params: {id}, query:{name: 'Ford', year: 2012}, hash: '#scroll'}">Full info</router-link>

		<hr>

		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data: function () {
		return { 
			id: this.$route.params['id'],
		}
	},
	methods: {
		goBackToCars() {
			this.$router.push("/cars");
		}
	},
	watch: {
		$route(toR) {
			this.id = toR.params['id'];
		}
	},
	beforeRouteLeave(to, from, next) {
		if (window.confirm('Are you sore to want leave?')) {
			next();
		} else {
			next(false);
		}
	}
}
</script>

<style>
	button {
		color: white !important;
	}
</style>