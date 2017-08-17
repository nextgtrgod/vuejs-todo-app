
<template lang='pug'>
	form
		input(type='text' :placeholder='message')
		button(type='submit') add
</template>


<script>
	export default {
		name: 'AddTodo',
		data: () => {
			return {
				message: 'Hello Vue 2!'
			}
		},
		created: () => console.log('AddTodo is here!')
	}
</script>


<style lang='stylus' scoped>

	@import '../styles/variables.styl'
	@import '../styles/animation.styl'


	form
		position relative
		input
			width 90%
			font-family: $font-family-jura
			font-size 17px
			line-height 30px
			letter-spacing 1px
			border 1px solid #000
			border-top none
			border-left none
			padding 5px 10px
		button
			position absolute
			top 0
			right -50px
			bottom 0
			margin auto
			width 70px
			height 34px
			font-family: $font-family-orbitron
			background-color: $color-green
			font-size 14px
			line-height 34px
			transition box-shadow 0.2s, top .2s
			border 1px solid #000
			color #111
			cursor pointer
			opacity 0
			animation fade-in, move-from-right
			animation-duration .2s
			animation-delay .6s
			animation-fill-mode forwards
			&:hover
				box-shadow 4px 4px 0px #111
</style>