
<template lang='pug'>

	span(
		:class='["icon", type]'
		@click='action'
	)

</template>


<script>
	export default {
		name: 'Icon',
		props: [
			'type',
			'action'
		]
	}
</script>


<style lang='stylus' scoped>

	@import '../styles/variables.styl'
	
	.icon
		display inline-block
		height 40px
		width 40px
		background-position center
		background-repeat no-repeat
		background-size 50% 50%
		transition opacity .1s
		&.delete
			background-image url('~/images/delete-icon.svg')

</style>