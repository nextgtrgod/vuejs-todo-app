
<template lang='pug'>

	ul#filters
		li(
			@click='setFilter("ALL")'
			:class='{ selected: (chosenFilter === "ALL") }') all
		li(
			@click='setFilter("ACTIVE")'
			:class='{ selected: (chosenFilter === "ACTIVE") }') active
		li(
			@click='setFilter("DONE")'
			:class='{ selected: (chosenFilter === "DONE") }') done

</template>


<script>
	export default {
		name: 'Filter',
		computed: {
			chosenFilter() {
				return this.$store.getters.chosenFilter
			}
		},
		methods: {
			setFilter(filterType) { this.$store.dispatch('filterTodo', filterType) }
		}
	}
</script>


<style lang='stylus' scoped>

	@import '../styles/variables.styl'
	@import '../styles/animation.styl'

	ul#filters
		position absolute
		top 65px
		right -37px
		li
			margin 10px 0
			padding 10px
			font-size 11px
			letter-spacing 1px
			font-family: $font-family-orbitron
			writing-mode tb
			// text-orientation upright
			// text-transform uppercase
			color #FFF
			background-color: $color-blue
			cursor pointer
			box-shadow 5px 5px 0px #111
			transition all .2s
			animation fade-in .8s
			user-select none
			&:hover
				transform translateX(5px)
			&.selected
				color #111
				background-color: $color-green
				transform scale(1.1) translateX(5px)
				// transform-origin 100% 50%

</style>