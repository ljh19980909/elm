<template>
	<div>
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>在线支付</strong></h4>
			</div>
		</div>
		<div class="middle">
			<p>支付剩余时间</p>
			<p>
				<span>00</span>
				<span class="dian">:</span>
				<span>{{minutes}}</span>
				<span class="dian">:</span>
				<span>{{seconds<10&&seconds>=1?'0'+seconds:seconds}}</span>
			</p>
		</div>
		<p class="pay">选择支付方式</p>
		<ul>
			<li class="lis">
				<div></div>
				<span class="zhifubao">支付宝</span>
				<i class="el-icon-circle-check" @click="a=!a" :class="a?'new':'old'"></i>
			</li>
			<li class="lis2">
				<svg>
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#weixin">
						<svg viewBox="0 0 72 72" id="weixin">
							<g fill="none" fill-rule="evenodd">
								<path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36z" fill="#45C144"></path>
								<path d="M29 40l-4-8c-.262-.292-.288-.398 0-1 .594-.228.743-.174 1 0l4 4c1.5 1.098 1.5 1.098 3 0l21-10c-3.668-4.964-10.11-8-17-8-12.33 0-22 8.12-22 18 0 5.6 2.91 10.518 7 14 1 .8 1.068.537 1 1 .068.185-.954 4.042-1 4-.027.316-.097.495 0 1-.097.075.225.4 1 0-.22.4 5-3 5-3 1.4.6 5.8 1 9 1 11.533 0 21.2-7.85 21-18 .2-2.899-.692-5.756-2-8L31 41c-1.5.5-2-1-2-1z"
								 fill="#FFF"></path>
							</g>
						</svg>
					</use>
				</svg>
				<span class="weixin">微信</span>
				<i class="el-icon-circle-check" @click="a=!a" :class="!a?'new':'old'"></i>
			</li>
		</ul>
		<el-button type="success" @click="zhifu">确认支付</el-button>
		<!-- 动画 -->
		<div class="alter animate__animated animate__heartBeat shezhi" v-if="show">
			<i class="el-icon-warning-outline tb"></i>
			<p class="mes">{{shows}}</p>
				<el-button type="success" size="medium" style="width: 100%;background-color:#4cd964;font-size: .5rem;margin-top: 1.2rem;"  @click="sure"><strong>确认</strong></el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Payment",
		data() {
			return {
				minutes: 14, //分
				seconds: 59, //秒
				a: false,
				show:false,
				shows:'暂不开放支付功能'
			}
		},
		created() {
			this.show=true
		},
		methods: {
			// 倒计时
			timer() {
				var _this = this;
				var time = window.setInterval(function() {
					if (_this.seconds === 1 && _this.minutes !== 0) {
						_this.seconds = 59;
						_this.minutes -= 1;
					} else if (_this.minutes === 0 && _this.seconds === 0) {
						_this.seconds = 0;
						window.clearInterval(time);
						this.show=true
						this.shows='支付时间已超时'
					} else {
						_this.seconds -= 1;
					}
				}, 1000);
			},
			back() {
				this.$router.go(-1)
			},
			zhifu(){
				this.show=!this.show
				this.shows='当前环境无法支付，请打开官方APP进行付款'
			},
			sure(){
				this.show=!this.show
				if(this.shows=='当前环境无法支付，请打开官方APP进行付款'){
					this.$router.push({
						path:'/order'
					})
				}
			}
		},
		mounted() {
			// 倒计时
			this.timer();
		},
	}
</script>

<style scoped>
	@import "~animate.css";
	.old {
		color: #ccc;
	}
	.new {
		color: #4cd964;
		;
	}
	/* 第一部分 */
	.head_top {
		background-color: #3190e8;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		width: 100%;
		height: 1.2rem;
		border-bottom: .03rem solid rgba(229, 229, 229, 0.3);
	}
	.back {
		left: .2rem;
		width: .7rem;
		height: .7rem;
		font-size: .7rem;
		color: white;
		position: absolute;
		top: 40%;
		transform: translateY(-50%);
	}
	.top_tittle {
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translateX(-50%);
		font-size: .5rem;
		color: #FFFFFF;
	}
	.middle {
		background-color: #fff;
		width: 100%;
		height: 4rem;
		margin-top: 1.2rem;
	}
	.middle>p:nth-child(1) {
		line-height: 3rem;
		text-align: center;
		font-size: .5rem;
	}
	.middle>p:nth-child(2) {
		margin-top: -1rem;
		font-size: 1rem;
		border: 1xp solid red;
		text-align: center;
	}
	.dian {
		margin: 0 .3rem;
	}
	/* 第三部分 */
	.pay {
		line-height: 1rem;
		padding: 0 .3rem;
		font-size: .4rem;
	}
	ul>li {
		height: 1.5rem;
		background-color: #fff;
		padding: .3rem;
		border-bottom: .025rem solid #f5f5f5;
		display: flex;
		justify-content: space-between;
	}
	.lis>div {
		width: .8rem;
		height: .8rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAIAAABsNpe/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMjgzMDhGREVFQUIxMUU2OUE4QjgyRUYwMDgxQTc4QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMjgzMDhGRUVFQUIxMUU2OUE4QjgyRUYwMDgxQTc4QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQyODMwOEZCRUVBQjExRTY5QThCODJFRjAwODFBNzhBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQyODMwOEZDRUVBQjExRTY5QThCODJFRjAwODFBNzhBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+i3VM1AAACXJJREFUeNrcW3lQlOcZ/+5j99uF5ZAjgHKjgHEUI4LBNlqqqZaUxjRObeuYaGOaVmuS0WQ605p0mrTT5mhjW+xMSTVTkyY0Rm2bRA2iAh4QEDURCYcccsi17PndfRdYZJc9vj04kmc+9g9m9nvf3/tcv+d53oVlWYa+/IIF8V2SDF0aEBqGxBt6sc0kdVvlQU4yiBAKQzoMnkdCsTSSpEHTtehiHZoZggZxaThwbdwYkY52cCe6uMpeHpIUf42AvxmFr48lNsbhSQwymzD+3syVNFkvgd0HJrnRxOPJ5GMpxEzDePUG+/x1i9UoBtPAaeTXi+i9mRQGTz+MsnZuT52lfViYLm9VIX+5V/VEGjldMIyCvPOi6a0v2BmIPKtj8QPL1ZmhaJBhlPfwm6pMAwYRmjFBoIO5zPZUMmgwSprYJ6qMs5IQfraIfn25KggwXrhq+eWn5llMbcWJZFkBExCM5+osLzfMJoYxKYwnPnpA49EA3cuvGuYEBiAfd3Abyw3+wDjQyO6vmxMYxuREO7etyuQbjA9v809dMEJzTEqbrL+5ZlXqG31WKeq4HjJL0JyUjwu134jBvcMorjC838YFvt66eED7CNaeaWAYuniHf7sl0OwZE4J1FoUgsEeiXtrMBQUDBEMAw5OOnOI1CAocRrdeeKbW/EqOyq1v8BL0WJ1p7hdJr1631A+JbmG82GCRTRL0ZRCwVddGBZjfi59ZlL4GhxMZNBR3S6l7WFnr7IdQnApOCMXCCdgzAW0CzI33wi3+3cbWZNE54aizi7983fpcjVKLSg3DLhRqdCTi0Ttci+cNmgV58X9HWoa8FwJbU6nSPLWzUb3eZFWuU6CHMNIWLTw8HuB5eNQYrMMV1U1vfmE12JWGTfDwHr0PJPzyiAioCuO+ThNk6OEEIkWDOFXtxzo5z3U3jsC1CotKGTrSxu0YZfKYvabzsZ62SF6oCgJpcThF4xBwT3bzey8HMxK+286OwRg/mne7uCCHElceIAa7JXaqi+ckeRxGi1HqGwl2WYe6sDebEcJBPqwzvcK4UV3s97NDsymJ/Ot9KqurEyBQKIxw9oIfJOJFcTreTWZicBjwoNNdvm2m6o5QGIPbYNQN+qkKVpTDSB86ZSQKR6Ju1QGs4/SAzzupGbBr43O9nzAsok2naswfQ4mikAS1wxcvgQ357jy1o5u3wWjyl4Cc7OTA45+5P51J/36ZyhGGCLE+76THYIfRaJGCHpQUMGBnizp5269oKU1kcW7GZwMwlKhBHTOjeGrQ/2iJjKfcGRYMXhXpUOoAHwukI4z5Dx+BvxaF5YfjyVqURqFkDUqhUP2gYBJABBcq+oVWsC3Jdc7bMp/ImtTYBBZV1h5QOYWN78kX71gYju1MpbYlE1NjVPbo5sYayYCrnu0TQPyp6OWbzfItO2kl1OgvslWTq9BWo/TJbT5gGGA3Ct0DhV/LUW9egM+jkAn3Bkxfz8tqDKgHRielaRUGr4vFwQNl05/rpS6zeLZXqB7gl4Ri6VqHbPOnG1YoMLu2wQgnkQFOgV3i8OGV6i2JtpMeYKVrw9KJTu54N98IQt7YJhA4gUbWR2ErIvHcCOweFay1U+6FIQh41sbgFpEiHNsBTQbpnYAZnQ1GsgpR0irfn02PYQA2sKXSWNUz1QzkdlYqGRZKGq0QARdEYKsj8W/F4Ssi7nogPSWLgxNJoJAef1MwNEojbNXfDyuNh71NLdQMenmtFpwowJDx4QhnEpUvk6ZGXlpCr4vBVW7yfZ9Vqu4X3mxmj3bx7qKCO1kciV95UGs7pywd+PQCI4tBAQZbExJwY5MvJ8dKN1npu58YVkQTezLIR+a7GPABTyuKI8ADosLbt/j329lavdStVzTQWjoaVGwwcsK8D3Wy7E55uttPOx7ipBSNl4WAukAABM/NEalhWDjewR/q4DwzlDGLtf3lR3rPHhPm4GfpQyKHVqqXhikdgqVpkTQt8Z144ncsfaSNf6+drQTO46ofmz8PG8/igD+vmtIVdWYPdhhTqwivkjMPr1yjmezog6y0rdpU3sN7Lb0AEd6dQZ4v1Nas0f4tX/NtYJOT1qcYdCxTjf/voXgvM+lae5fu0QUERCjmtCgMFi4r0ORNUjhw6OKzxtIW9oFyQ3GFsX5ItChQ8bIw9PEU4nA+0/2w7h/3M7nRBEgAW+Nwhz5Vu0me/96gh7dEaNHza7QgbYHa7ec15gM3rV7NKy0MezqD2uE4gwQYdlwwfXBrkoMhMDiaXQup3AjfmFHDkMhL8rJwzKHdtqHc8J92T+77Ri7zk3TbnkAVf6SNe+aKpX8i8Tny77wofFsytT4Wi1UhThgeOWescMk7aKQ4Ct9/L52leIg8xMk6u13chQEi6cZTI54MRI22PRgSp4In+BygTGf7+A6TNMDKkizH0Eh6CPZQPJ6gQpwa92CNz/Tixgpjq+d2IAztXkTvTKNSNM5vmCqArd0XjjnDALL8fyM1fZ7cLjoELctn8iJ90z4A/MZNdle9GbIqY6A08qM44qcZ1DL3kQ28Exg1ble2A4xjnVzRaYOXNSjkqURyRxoZS8PhHvsJJkEWJAik5331liuDgs+hGod/nETuy6YjSXgqlQavXTnJl5ynTUVnDMduKUpwICuDnJitw7JDEVBsJKhtViCPntO5PqHTLFbfEf4MXhXg8A2Dn0wlt6dSS3R3NdNrlaIohxN0hgHSZ/oHQz6VHyC1JaoQBrWxdGm0s9/KybIpqP07FbL1HuLZTGrR6GWyywPi8nDUEwwgf2xkd829MexY0N+TSuWEo4pGmEA2nzMGPqSbDknUYY0bQnDEZUthihxexWRG4HMOBAK/k8/giLvOiCsieLSAAYliTqH4VwHj5BJeYAABCaj66xqIROYIhoP5zKb5hMc+lRsB0C+s1YBkNOsYSvKY7Sme7od5v091dVhcX2Hsmr7Lhd7kn6s1mxd4IeCKbreBqv/R88ZTnfwMAwAR9ugqRklV58OVyX2fWn57deauJn0viTyYq9Yqm8r6doH1ZDe/s8bcPDjNBqZCSpeqtyb7cLvYn+vEL12zPt9g9nqRwB+BoWezaFB10KhvQxM/b0WP8PIfrltfADWgJUh3TChkbyq1eyEZ7VdgDPSq/aEW9q3W0ZmTn4kZ2hBHgCL2+4lkQFoMyu839Lz80W3+TA9/vl+8OuSttKCQ+3UoqBYKonBA8ohgpCX4q/EzlP8LMABoSAFkOs78cgAAAABJRU5ErkJggg==) no-repeat;
		background-size: 100% 100%;
	}
	.lis2>svg {
		margin-left: -3.6rem;
	}
	.weixin,
	.zhifubao {
		margin-left: -10rem;
		line-height: .8rem;
		font-size: .5rem;
	}
	.zhifubao {
		margin-left: -6rem;
	}
	.el-icon-circle-check {
		line-height: 1rem;
		font-size: .6rem;
	}
	.el-button {
		width: 100%;
		margin-top: .3rem;
		background-color: #4cd964;
		font-size: .5rem;
	}
	/*遮罩层*/
	.alter {
		position: absolute;
		top: 40%;
		left: 15%;
		text-align: center;
		background-color: white;
		width: 70%;
		height: 30%;
		margin-top: -10%;
	}
	.alter>.tb {
		color: orange;
		font-size: 2rem;
	}
	.alter>.mes {
		color: black;
		margin-top: .5rem;
		font-size: .5rem;
	}
	.shezhi{
		top: 30%;
	}
</style>
