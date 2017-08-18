
<template lang='pug'>

	transition-group(name='list' tag='ul' appear)
		TodoItem(
			v-for='todoDataItem in todoData' 
			:key='todoDataItem.id'
			:todoDataItem='todoDataItem'
			:onToggle='onToggle'
			:onDelete='onDelete'
		)

</template>


<script>
	import TodoItem from './TodoItem';

	export default {
		name: 'TodoList',
		props: [
			'todoData',
			'onToggle',
			'onDelete'
		],
		components: {
			TodoItem
		}
	}
</script>


<style lang='stylus' scoped>

	@import '../styles/variables.styl'
	@import '../styles/animation.styl'


	ul
		font-family: $font-family-jura
		font-size 17px
		margin-top 30px

</style>