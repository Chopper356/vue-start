<template>
	<div id="start">
		<h1>{{ title }}</h1>
		<p>{{ content }}</p>
		<span>{{ date }}</span>

		<button @click="chaneDate">Change Date</button>
		<button @click="changeCounter">Change Counter</button>
	</div>
</template>

<script>
export default {
	name: 'start-vue',
	props: {
		title: String,
		content: String,
		date: String,
		counter: Number
	},
	methods: {
		chaneDate() {
			this.date = Date.now();
			this.$emit('changeDate', this.date);
		},
		changeCounter() {
			this.$emit('changeCounter', this.counter + 1);
		}
	}
}
</script>

<style lang="scss" scoped>

</style>