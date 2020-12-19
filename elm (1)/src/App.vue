<template>
	<div id="app">
		<div v-if="this.$store.state.load==true">
			<Loading></Loading>
		</div>
		<transition name="slide-fade">
			<router-view class="ggh"></router-view>
		</transition>
	</div>
</template>


<style>
	@import "~animate.css";

	a,
	article,
	aside,
	b,
	body,
	button,
	dd,
	div,
	dl,
	dt,
	figcaption,
	figure,
	footer,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	header,
	i,
	input,
	li,
	nav,
	p,
	section,
	select,
	span,
	textarea,
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		font-style: normal;
		text-decoration: none;
		border: none;
		font-weight: 400;
		font-family: Microsoft Yahei;
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;
	}

	body {
		background-color: #F5F5F5;
	}

	.el-rate__icon {
		margin-right: -.14rem !important;
	}

	input {
		outline: none;
	}


	.loading {
		position: fixed;
		top: 0rem;
		left: 0rem;
		z-index: 230;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.1);
	}

	a {
		color: #333333;
	}

	.slide-fade {
		position: absolute;
		left: 0;
		right: 0;
		opacity: 0;
	}

	.slide-fade-enter-active {
		transition: all 1s ease;
	}

	.slide-fade-leave-active {
		transition: all 1s ease;
	}

	.slide-fade-enter,
	.slide-fade-leave-to {
		left: 0;
		right: 0;
		opacity: 0;
	}

	.loaddings {
		height: 500px;
	}

	.ggh {
		transition: all 1s linear;
		position: absolute;
		z-index: 122;
		width: 100%;
		height: 100%;
	}


	.slide-fade {
		position: absolute;
		left: 0;
		right: 0;
	}

	.slide-fade-enter-active {
		transition: all 1.2s ease;
	}

	.slide-fade-leave-active {

		transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
	}

	.slide-fade-enter,
	.slide-fade-leave-to {
		left: 0;
		right: 0;
		transform: translateX(50px);
		opacity: 0;
	}
</style>
<script>
	import Loading from "./components/Loading.vue"
	export default {
		components: {
			Loading,
		},
	}
</script>
