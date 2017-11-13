
<template lang='pug'>

	transition-group(name='list' tag='ul')
		TodoItem(v-for='todoDataItem in todoData' 
			:key='todoDataItem.id'
			:todoDataItem='todoDataItem'
		)

</template>


<script>
	import TodoItem from './TodoItem';

	export default {
		name: 'TodoList',
		components: {
			TodoItem
		},
		computed: {
			todoData() {
				return this.$store.getters.todoData
			}
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