
<template lang='pug'>

	ul#filters
		li(
			@click='onChangeFilter("ALL")'
			:class='{ selected: (chosenFilter === "ALL") }') all
		li(
			@click='onChangeFilter("ACTIVE")'
			:class='{ selected: (chosenFilter === "ACTIVE") }') active
		li(
			@click='onChangeFilter("DONE")'
			:class='{ selected: (chosenFilter === "DONE") }') done

</template>


<script>

	export default {
		name: 'Filter',
		props: [
			'chosenFilter',
			'onChangeFilter'
		]
	}

</script>


<style lang='stylus' scoped>

	@import '../styles/variables.styl'
	@import '../styles/animation.styl'

	ul#filters
		position absolute
		top 10px
		left -55px
		li
			margin 10px 0
			padding 10px
			font-size 11px
			letter-spacing 1px
			font-family: $font-family-orbitron
			color #FFF
			background-color: $color-blue
			cursor pointer
			border 1px solid #111
			transition all .2s
			animation fade-in .4s
			&:hover
				box-shadow 4px 4px 0px #111
			&.selected
				color #111
				background-color: $color-green
				transform scale(1.1)
				transform-origin 100% 50%

</style>