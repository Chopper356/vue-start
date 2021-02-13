<template>
	<div id="app">
		<span >Last date: {{ date }}</span>
		<Counter :counter="counter"></Counter>
		<Start :title="title" :content="content" :date="date" :counter="counter" @changeDate="date = $event" @changeCounter="counter = $event"></Start>
	</div>
</template>

<script>
import Start from './components/Start'
import Counter from './components/Counter'

export default {
	name: 'App',
	data: () => {
		return {
			title: "Hello Vue!",
			content: "Hi!",
			date: "21.09.2021",
			counter: 0,
		}
	},
	components: {
		Start,
		Counter
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
