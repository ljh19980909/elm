<template>
	<div class="loading">

		<div class="box">
			<img src="../assets/loading.png" alt="" :style="'top:-'+ top+'rem'">
		</div>

	</div>
</template>

<script>
	export default {
		name: "loading",
		data() {
			return {
				top: 3
			}
		},
		methods: {
			dingshi() {
				setInterval(() => {
					this.top += 1.83
				}, 500)
				if (this.top >= 18) {
					this.top = 3
				}

			}
		},
		watch: {
			top: function(newval, oldval) {
				if (newval >= 18) {
					this.top = 3
				}
			}
		},
		mounted() {
			this.dingshi()
		}
		
		
		// 3
		// 4.7
		// 6.7
		// 8.5
		// 10.4
		// 12.2
		// 14.2
	}
</script>

<style scoped>
	@keyframes loading {
		0% {
			top: 6rem;
		}

		100% {
			top: 7rem;
		}
	}

	.box {
		width: 4rem;
		height: 1.8rem;
		overflow: hidden;
		text-align: center;
		position: fixed;
		top: 50%;
		transform: translate(-50%, -50%);
		left: 30%;
		animation: loading 0.5s linear infinite alternate;
		transform: scale(.7);
	}

	.box>img {
		position: absolute;
		top: 0rem;
		left: 0.4375rem;
		transform: scale(.7);
	}
</style>
