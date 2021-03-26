<template>
	<div class="container">
		<h1>Cars</h1>

		<ul>
			<router-link tag="li" v-for="car in 5" :to="'/car/' + car" :key="car">
				<a class="nav-link">Car: {{ car }}</a>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	
}
</script>