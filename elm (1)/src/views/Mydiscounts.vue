<template>
	<div class="mydiscounts">
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>我的优惠</strong></h4>
			</div>
		</div>
		<div v-if="show">
			<div class="header">
				<div @click="changeM"><span :style="M?'color: #3190E8;border-bottom: .1rem solid #3190E8;':''">红包</span></div>
				<div @click="changeM"><span :style="M?'':'color: #3190E8;border-bottom: .1rem solid #3190E8;'">商家代金券</span></div>
			</div>
			<div class="content" v-if="M">
				<h3>
					<span>有<span>{{this.$store.state.hongbao.length||0}}</span>个红包即将过期</span>
					<span @click="toHbdescription"><i class="el-icon-question"></i>红包说明</span>
				</h3>
				<ul class="red_packet">
					<li v-for="n in hongbao">
						<div class="li_left">
							<h3>
								<span>￥</span><span>{{n.amount%1===0?n.amount:Math.floor(n.amount)}}</span><span>.{{n.amount%1===0?0:Math.ceil(n.amount)}}</span>
							</h3>
							<p>{{n.description_map.sum_condition}}</p>
						</div>
						<div class="li_right">
							<div>
								<h4>{{n.name}}</h4>
								<p>{{n.description_map.validity_periods}}</p>
								<p>{{n.description_map.phone}}</p>
							</div>
							<div>{{n.description_map.validity_delta}}</div>
						</div>
					</li>

					<p>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
				</ul>
				<p @click="tohbhistory"><span>查看历史红包</span><i class="el-icon-arrow-right"></i></p>
			</div>
			<div class="footer" v-if="M">
				<div @click="toExchange">兑换红包</div>
				<div @click="toCommend">推荐有奖</div>
			</div>
		</div>
		<Loading v-if="!show"></Loading>
		<Coupon v-if="!M"></Coupon>
		<router-view class="router"></router-view>
	</div>
</template>

<script>
	import Loading from "../components/Loading.vue"
	import Coupon from "../components/Coupon.vue"
	import { LishiHongbao } from "@/request/api.js"
	export default {
		name: "Mydiscounts",
		data() {
			return {
				M: true,
				yzImg: '',
				hongbao: "",
				show: true
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			changeM(a) {
				this.M = !this.M
			},
			toExchange() {
				this.$router.push('/mydiscounts/exchange')
			},
			toCommend() {
				this.$router.push('/mydiscounts/commend')
			},
			toHbdescription() {
				this.$router.push('/mydiscounts/hbdescription')
			},
			tohbhistory(){
				this.$router.push('/mydiscounts/hbHistory')
			}
		},
		created() {
			if (this.$store.state.achieves != '') {
				LishiHongbao(this.$store.state.achieves.user_id).then(
					data => {
						this.hongbao = data;
						this.$store.commit("addRedbao", data)
						if (this.hongbao == "") {
							this.show = false
						}

						// console.log(this.$store.state.hongbao)
					}).catch(err => {
					console.log(err)
				});
			}

		},
		components: {
			Loading,
			Coupon,
		},

	}
</script>

<style scoped>
	.head_top {
		background-color: #3190e8;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		width: 100%;
		height: 1.2rem;
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
		left: 40%;
		font-size: .5rem;
		color: #FFFFFF;
	}

	.header {
		padding-top: 1.2rem;
		background-color: #FFFFFF;
	}

	.header>div {
		width: 50%;
		float: left;
		text-align: center;
		font-size: .4rem;
		line-height: 1.25rem;
		background-color: #FFFFFF;
		border-right: .01rem solid rgba(229, 229, 229, 0.5);
	}

	.content {
		padding-left: .5rem;
		padding-right: .5rem;
	}

	.content>h3 {
		line-height: 1.5rem;
	}

	.content>h3>span:first-child {
		color: #666666;
	}

	.content>h3>span:first-child span {
		color: #ff5340;
	}

	.content>h3>span:last-child {
		float: right;
		font-size: .32rem;
		color: #3190e8;
	}

	.content>h3>span:last-child i {
		font-size: .36rem;
		margin-right: .1rem;
	}

	.red_packet li {
		padding-top: .3rem;
		padding-bottom: .3rem;
		overflow: hidden;
		border-radius: .15rem;
		line-height: .65rem;
		margin-bottom: .3rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAIBAMAAAALs8LeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURUxpcf9TQf9aS/9TQP9TQP9TQv9TQf9UQP9bSP9TQCdGiZQAAAAJdFJOUwBPEZzKPX2/HKJFz58AAAAkSURBVAjXY5gJBwzEMScHNXpCmQIMDMwQ5jQGIKgEMyeBmJIAtqcnWdDMwKsAAAAASUVORK5CYII=) repeat-x #fff;
		background-size: .3rem;
	}

	.red_packet li>div {
		float: left;
	}

	.li_left {
		width: 30%;
		padding-left: .3rem;
		padding-top: .3rem;
		border-right: .01rem solid rgba(204, 204, 204, 0.8);
	}

	.li_left h3 {
		color: #ff5340;
		font-size: .48rem;
	}

	.li_left p {
		font-size: .25rem;
		color: #999999;
	}

	.li_left h3>span:nth-child(2) {
		font-size: .92rem;
	}

	.li_left h3>span:nth-child(3) {
		font-size: .5rem;
		font-weight: 700;
	}

	.li_right {
		width: 70%;
		padding-left: .3rem;
	}

	.li_right>div {
		float: left;
	}

	.li_right>div h4 {
		font-size: .44rem;
	}

	.li_right>div p {
		font-size: .25rem;
		color: #999999;
		line-height: initial;
	}

	.li_right>div:first-child {
		padding-top: .1rem;
	}

	.li_right>div:last-child {
		width: 25%;
		float: right;
		font-size: .46rem;
		color: #ff5340;
	}

	.red_packet>p {
		list-style-type: disc;
		font-size: .25rem;
		color: #999;
		text-align: center;
	}

	.content>p {
		text-align: center;
		color: #999;
		margin-top: .8rem;
	}

	.footer {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.footer>div {
		width: 50%;
		float: left;
		text-align: center;
		font-size: .4rem;
		line-height: 1.25rem;
		background-color: #FFFFFF;
		border-right: .01rem solid rgba(229, 229, 229, 0.5);
	}

	.router {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background-color: #f1f1f1;
	}
</style>
