
<template lang='pug'>
	form(@submit.prevent='add')
		input(
			placeholder='enter task name'
			maxlength='27'
			v-model='todoTitle'
		)
		button(type='submit') Add
</template>


<script>
	export default {
		name: 'AddTodo',
		data: function() {
			return {
				todoTitle: ''
			}
		},
		methods: {
			add() {
				this.todoTitle = this.todoTitle.trim();
				if(this.todoTitle) {
					this.$store.dispatch('addTodo', this.todoTitle);
					this.todoTitle = ''; // clear input
				}
			}
		}
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
			letter-spacing 1px
			background-color: $color-green
			font-size 14px
			line-height 34px
			transition box-shadow 0.2s, top .2s
			border 1px solid #000
			color #111
			cursor pointer
			opacity 0
			animation fade-in, move-from-right
			animation-duration .4s
			animation-delay .6s
			animation-fill-mode forwards
			&:hover
				box-shadow 4px 4px 0px #111

</style>