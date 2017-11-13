
<template lang='pug'>
	#app
		AddTodo
		TodoList
		Filters

</template>


<script>
	import AddTodo from './AddTodo';
	import TodoList from './TodoList';
	import Filters from './Filters';

	// component registration
	export default {
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
	@import '../styles/scrollbar.styl'

	#app
		position relative
		width 320px
		min-height 360px
		margin 60px auto
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