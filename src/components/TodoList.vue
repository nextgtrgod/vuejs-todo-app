
<template lang='pug'>
	ul
		li Помыть кота
		li Посушить кота
		li Погладить кота
</template>


<script>
	export default {
		name: 'TodoList',
		// data: () => {
		// 	return {
		// 		message: 'Hello Vue!'
		// 	}
		// },
		created: () => console.log('TodoList is here!')
	}
</script>


<style lang='stylus' scoped>

	@import '../styles/variables.styl'

	ul
		font-family: $font-family-jura
		font-size 17px
		padding 0
		margin-top 30px
		li
			list-style-type none
			padding 10px
			margin 15px auto
			background-color #fff
			transition .2s
			position relative
			opacity 0
			animation move-from-left, fade-in
			animation-duration .2s
			animation-delay .4s
			animation-fill-mode forwards
			animation-timing-function linear
			&:hover
				cursor pointer
				box-shadow 5px 5px 0px #111
			&:before
				content ''
				position absolute
				top 0
				left 0
				width 0
				height 100%
				background-color: $color-green
				transition .4s
				z-index 1
			.task
				&__id
					display none
				&__text
					position relative
					z-index 2

			&.done
				&:before
					width 100%
</style>