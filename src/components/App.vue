
<template lang='pug'>
	#app
		AddTodo(
			:onAdd='handleAdd'
		)
		TodoList(
			:todoData='todoData'
			:onToggle='handleToggle'
			:onDelete='handleDelete'
		)
		Filters(
			:chosenFilter='chosenFilter'
			:onChangeFilter='handleChangeFilter'
		)

</template>


<script>
	import AddTodo from './AddTodo';
	import TodoList from './TodoList';
	import Filters from './Filters';

	// component registration
	export default {
		data: function() {
			return {
				todoData: [],
				chosenFilter: 'ALL'
			}
		},

		created() {
			if (localStorage) {
				this.todoData = JSON.parse(localStorage.getItem('todoData'))
			}
		},

		methods: {
			handleAdd(title) {
				let newTodo = {
					id: (new Date).getTime(),
					title,
					completed: false
				};
				this.todoData.push(newTodo);
			},
			handleEdit(id) {

			},
			handleToggle(id) {
				let todoData = this.$data.todoData; // shorthand

				let index = todoData.findIndex(item => item.id === id);

				todoData[index].completed = !todoData[index].completed;
			},
			handleDelete(id) {
				let index = this.todoData.findIndex(item => item.id === id);

				this.todoData = [
					...this.todoData.slice(0, index),
					...this.todoData.slice(index + 1)
				];
			},

			handleChangeFilter(filter) {
				this.chosenFilter = filter;
				
				let storageData = JSON.parse(localStorage.getItem('todoData'));

				switch (this.chosenFilter) {
					case 'ALL':
						this.todoData = storageData;
						break;
					case 'ACTIVE':
						this.todoData = storageData.filter(item => item.completed !== true);
						break;
					case 'DONE':
						this.todoData = storageData.filter(item => item.completed === true);
						break;
				}
			}
		},
		components: {
			AddTodo,
			TodoList,
			Filters
		}
	}

</script>


<style lang='stylus'>

	@import '../styles/normalize.styl'
	@import '../styles/variables.styl'
	@import '../styles/animation.styl'

	#app
		position relative
		width 350px
		min-height 480px
		margin auto
		margin-top 50px
		background-color: $color-blue
		padding 20px
		opacity 0
		animation fade-in, shadow-black
		animation-duration .2s
		animation-fill-mode forwards
		animation-timing-function linear
		&:before
			content ''
			position absolute
			top -39px
			right -30px
			width 20px
			height 20px
			background-color inherit
			opacity 0
			animation fade-in, move-from-left
			animation-duration .4s
			animation-delay .4s
			animation-fill-mode forwards
		&:after
			content ''
			position absolute
			top -35px
			right -65px
			width 50px
			height 50px
			background-color #111
			opacity 0
			animation fade-in, shadow-blue
			animation-duration .2s
			animation-delay .4s
			animation-fill-mode forwards
</style>