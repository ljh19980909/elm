<template>
	<div v-if="datas.cart">
		<!-- 第一部分 -->
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>确认订单</strong></h4>
			</div>
			<a href="#/login" class="head_login" v-if="info==''">
				<span class="login_span">登录|注册</span>
			</a>
			<router-link to="/mine" v-if="info!=''" class="head_login"><i class="el-icon-user"></i></router-link>
		</div>
		<!-- 第二部分 -->
		<div class="middle" @click="chooseAddress" v-if="dizhi==''">
			<span><i class="el-icon-location-outline"></i>请添加一个收货地址</span>
			<span class="el-icon-arrow-right"></span>
		</div>
		<div class="middle" @click="chooseAddress" v-if="dizhi!=''">
			<span><i class="el-icon-location-outline"></i></span>
			<div>
				<div class="showsdiv">
					<span style="font-size: .5rem;"><strong>{{dizhi.name}}</strong></span>
					<span style="margin:0 .2rem;">{{dizhi.sex==true?'先生':'女士'}}</span>
					<span>{{dizhi.phone}}</span>
				</div>
				<div class="address_detail ellipsis">
					<span class="tag">{{dizhi.tag}}</span>
					<span style="color: #777;font-size: .3rem;">{{dizhi.address_detail}}</span>
				</div>
			</div>
			<span class="el-icon-arrow-right" style="line-height:2rem;"></span>
		</div>
		<!-- 第三部分 -->
		<div class="arriveTime">
			<span style="line-height: 2.5rem;"><strong>送达时间</strong></span>
			<div>
				<p>尽快送达 | 预计 {{datas.delivery_reach_time}}</p>
				<p>蜂鸟专送</p>
			</div>
		</div>
		<!-- 第四部分 -->
		<div class="zhifu">
			<li @click="zhifuStyle">
				<span>支付方式</span>
				<span>在线支付<i class="el-icon-arrow-right" style="margin-left: .2rem;"></i></span>
			</li>
			<li>
				<span>红包</span>
				<span>暂时只在饿了么 APP 中支持</span>
			</li>
		</div>
		<!-- 第五部分 -->
		<div class="pagefive">
			<p>
				<img :src="'//elm.cangdu.org/img/'+b.image_path+''" alt="">
				<span>{{b.name}}</span>
			</p>
			<ul>
				<li v-for="v in datas.cart.groups[0]">
					<span>{{v.name}}</span>
					<span>￥{{v.price}}</span>
					<span>{{v.quantity}}</span>
					<span>x</span>
				</li>
			</ul>
			<p v-for="v in datas.cart.extra">
				<span>{{v.name}}</span>
				<span><i>￥</i>{{v.price}}</span>
			</p>
			<p>
				<span>配送费</span>
				<span><i>￥</i>{{datas.cart.deliver_amount}}</span>
			</p>
			<li>
				<p>
					<span>订单</span>
					<span style="margin-left: .1rem;letter-spacing: -.03rem;">￥{{datas.cart.original_total}}</span>
				</p>
				<p class="wait">
					<span>待支付</span>
					<span>￥{{datas.cart.total}}</span>
				</p>
			</li>
		</div>
		<!-- 第六部分 -->
		<div class="zhifu" style="margin-bottom: 1.2rem;">
			<li @click="toremark">
				<span>订单备注</span>
				<span v-if="pianhao==''">口味、偏好等
					<i class="el-icon-arrow-right" style="margin-left: .2rem;"></i>
				</span>
				<span v-if="pianhao!=''" class="ellipsis" style="width: 3rem;display: inline-block;text-align: right;">{{kouwei}}
					<i class="el-icon-arrow-right" style="margin-left: .2rem;float: right;"></i>
				</span>
			</li>
			<li @click="toinvoice">
				<span style="color: #333;font-size: .4rem;">发票抬头</span>
				<span>{{datas.invoice.status_text}}<i class="el-icon-arrow-right" style="margin-left: .2rem;"></i></span>
			</li>
		</div>
		<section class="confrim_order">
			<p>待支付 ¥{{datas.cart.total}}</p>
			<p @click="topayment">确认下单</p>
		</section>
		<!-- 支付遮罩层 -->
		<div class="choose_type_Container" v-if="show" @click="show=false">
			<div class="mask">
				<header>支付方式</header>
				<ul>
					<li>
						<span>{{datas.payments[0].name}}
							<span>{{datas.payments[0].description}}</span>
						</span>
						<i class="el-icon-circle-check" style="color: #eee"></i>
					</li>
					<li class="choose">
						<span>{{datas.payments[1].name}}</span>
						<i class="el-icon-circle-check" style="color: #4cd964;"></i>
					</li>
				</ul>
			</div>
		</div>
		<router-view class="a"></router-view>
	</div>
</template>

<script>
	import { RequestCart } from "@/request/api.js"
	export default {
		name: "ConfirmOrder",
		data() {
			return {
				a: '',
				b: '',
				c: [],
				datas: '',
				dizhi: '',
				info: '',
				show: false,
				pianhao: '',
				kouwei: ''
			}
		},
		created() {
			this.info = this.$store.state.achieves
			console.log(this.info)
			// 购物车获取的数据
			this.a = this.$store.state.food[this.$store.state.shop.id][1]
			this.b = this.$store.state.shop
			this.a.forEach(v => {
				this.c.push({
					attrs: [],
					extra: {},
					id: v.item_id,
					name: v.name,
					packing_fee: v.packing_fee,
					price: v.price,
					quantity: v.count,
					sku_id: v.sku_id,
					specs: [v.specs.length ? v.specs[0].value : ''],
					stock: v.stock,
				})
			})
			//请求加入购物车
			// this.axios.post('v1/carts/checkout',{
			// 	come_from: "web",
			// 	geohash: this.$store.state.msite.geohash,
			// 	restaurant_id: this.b.id,
			// 	entities: [this.c]
			// }).then(data => {
			// 	this.datas = data.data
			// }).catch(err => {
			// 	console.log(err)
			// });
			
			RequestCart(
			{
				come_from: "web",
				geohash: this.$store.state.msite.geohash,
				restaurant_id: this.b.id,
				entities: [this.c]
			}).then(data=>{
				this.datas = data
				
			})
			
			
			
			
			
			
		},
		methods: {
			back() {
				this.$router.push({
					path: '/shop',
				})
			},
			// 去选择地址页
			chooseAddress() {
				this.$router.push({
					path: '/shop/confirmOrder/chooseAddress'
				})
			},
			// 支付方式
			zhifuStyle() {
				this.show = true
			},
			// 去备注页
			toremark() {
				this.$router.push({
					path: '/shop/confirmOrder/remark'
				})
			},
			// 去发票页
			toinvoice() {
				this.$router.push({
					path: '/shop/confirmOrder/invoice'
				})
			},
			// 去在线支付页
			topayment(){
				this.$router.push({
					path: '/shop/confirmOrder/payment'
				})
			}
		},
		updated() {
			//口味
			this.pianhao = this.$store.state.pianhao
			let lajiao, xiangcai, yangcong, cu, cong, bing;
			// 辣
			switch (this.pianhao.lajiao) {
				case '1':
					lajiao = '不要辣,';
					break;
				case '2':
					lajiao = '少点辣,';
					break;
				case '3':
					lajiao = '多点辣,';
					break;
				default:
					lajiao = '';
					break;
			}
			// 香菜
			if (this.pianhao.xiangcai) {
				xiangcai = '不要香菜,'
			} else {
				xiangcai = ''
			}
			// 洋葱
			if (this.pianhao.yangcong) {
				yangcong = '不要洋葱,'
			} else {
				yangcong = ''
			}
			// 醋
			if (this.pianhao.cu) {
				cu = '多点醋,'
			} else {
				cu = ''
			}
			// 葱
			if (this.pianhao.cong) {
				cong = '多点葱,'
			} else {
				cong = ''
			}
			// 冰
			if (this.pianhao.bing == '1') {
				bing = '去冰'
			} else if (this.pianhao.bing == '2') {
				bing = '少冰'
			} else {
				bing = ''
			}
			this.kouwei = lajiao + xiangcai + yangcong + cu + cong + bing + this.pianhao.beizhu
			
			// 修改地址获取的数据
			this.dizhi = this.$store.state.dizhi
			console.log(this.dizhi)
		}
	}
</script>

<style scoped>
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
	.content_top {
		width: 100%;
		padding-top: 1.5rem;
		background-color: #3190e8;
		padding-bottom: .4rem;
		overflow: hidden;
		padding-left: .3rem;
		padding-right: .3rem;
	}
	/* 第二部分 */
	.el-icon-user {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: .3rem;
		color: #FFFFFF;
		font-size: .5rem;
	}
	.login_span{
		font-size: .5rem;
		float: right;
		line-height: 1.2rem;
		color: #FFFFFF;
		margin-right: .2rem;
	}
	.middle {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) 0 100% repeat-x;
		background-size: 1rem;
		height: 2rem;
		width: 100%;
		margin-top: 1.2rem;
		display: flex;
		justify-content: space-between;
		font-size: .4rem;
		line-height: 2rem;
		padding-left: .5rem;
		background-color: #FFFFFF;
	}
	.el-icon-location-outline {
		margin-right: .3rem;
		color: #3190e8;
		font-size: .6rem;
	}
	.middle>span:nth-child(2) {
		color: #999;
		margin: .8rem .2rem 0 0;
	}
	.showsdiv{
		position: absolute;
		top: 1rem;
		left: 1.2rem;
		font-size: .35rem;
	}
	.address_detail{
		position: absolute;
		top: 1.6rem;
		left: 1.2rem;
	}
	.tag{
		background-color: rgb(76, 217, 100);
		padding: 0 .1rem;
		margin-right: .2rem;
		color: #fff;
		border-radius: .1rem;
		font-size: .3rem;
	}
	.el-icon-arrow-right{
		line-height: .7rem;
		font-size: .5rem;
	}
	/* 第三部分 */
	.arriveTime {
		background-color: #FFFFFF;
		margin-top: .3rem;
		width: 100%;
		height: 2.5rem;
		display: flex;
		justify-content: space-between;
		border-left: .1rem solid #3190e8;
		font-size: .5rem;
		padding: 0 .3rem;
	}

	.arriveTime>div {
		text-align: right;
	}

	.arriveTime p:nth-child(1) {
		color: #3190e8;
		font-size: .45rem;
		line-height: 1.6rem;
	}

	.arriveTime p:nth-child(2) {
		background-color: #3190e8;
		color: #fff;
		font-size: .2rem;
		position: absolute;
		right: .3rem;
		padding: .03rem .1rem;
		border-radius: .1rem;
	}

	/* 第四部分 */
	.zhifu {
		width: 100%;
		height: 2.5rem;
		background-color: #fff;
		margin-top: .3rem;
	}

	.zhifu>li {
		float: left;
		width: 100%;
		height: 1.25rem;
		border-bottom: .05rem solid #f2f2f2;
		padding: .2rem .3rem;
		font-size: .35rem;
		display: flex;
		justify-content: space-between;
		color: #aaa;
		line-height: .7rem;
	}

	.zhifu>li:nth-child(1)>span:nth-child(1) {
		color: #333;
		font-size: .4rem;
	}

	/* 第五部分 */
	.pagefive {
		width: 100%;
		background-color: #fff;
		margin-top: .3rem;
	}

	.pagefive>p:nth-child(1) {
		height: 1.5rem;
		padding: .2rem;
		border-bottom: .025rem solid #f5f5f5;
		font-size: .5rem;
	}

	.pagefive img {
		width: .8rem;
		margin-right: .3rem;
		vertical-align: middle;
		margin-top: .2rem;
	}

	.pagefive>p:nth-child(1)>span {
		vertical-align: middle;
		display: inline-block;
		margin-top: .2rem;
	}

	ul {
		padding-top: .2rem;
	}

	ul>li {
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		padding: 0 .3rem;
		font-size: .4rem;
	}

	ul>li>span:nth-child(2) {
		float: right;
	}

	ul>li>span:nth-child(3) {
		float: right;
		margin-right: 2rem;
		color: #f60;
	}

	ul>li>span:nth-child(4) {
		float: right;
		margin-right: .2rem;
		color: #f60;
	}

	.pagefive>p:nth-child(3),
	.pagefive>p:nth-child(4) {
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		padding: 0 .3rem;
		font-size: .4rem;
		display: flex;
		justify-content: space-between;
	}

	.pagefive>li {
		width: 100%;
		height: 2rem;
		display: flex;
		justify-content: space-between;
		padding: 0 1.5rem 0 .3rem;
		font-size: .4rem;
		line-height: 1rem;
	}

	.wait {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		color: #f60;
		text-align: right;
	}

	/* 第六部分 */
	.confrim_order {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 1.3rem;
	}

	.confrim_order p:first-of-type {
		background-color: #3c3c3c;
		width: 70%;
		padding-left: .7rem;
	}

	.confrim_order p {
		line-height: 1.3rem;
		font-size: .45rem;
		color: #fff;
	}

	.confrim_order p:nth-of-type(2) {
		width: 30%;
		background-color: #56d176;
		text-align: center;
	}

	.a {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #F2F2F2;
		z-index: 211;
	}

	.choose_type_Container {
		height: 100%;
		background-color: rgba(0, 0, 0, .3);
		position: fixed;
		bottom: 0;
		width: 100%;
		z-index: 204;
	}

	.mask {
		position: absolute;
		bottom: 0rem;
		width: 100%;
		min-height: 6rem;
		background-color: #fff;
	}

	.choose_type_Container header {
		background-color: #fafafa;
		font-size: .4rem;
		color: #333;
		text-align: center;
		line-height: 1.5rem;
	}

	.choose_type_Container ul li {
		display: flex;
		justify-content: space-between;
		padding: 0 .7rem;
		line-height: 2rem;
		align-items: center;
	}

	.choose_type_Container ul li span {
		font-size: .4rem;
		color: #ccc;
	}

	.choose_type_Container ul .choose span {
		color: #333;
	}

	.choose_type_Container ul li span {
		font-size: .4rem;
		color: #ccc;
	}

	.el-icon-circle-check {
		font-size: .5rem;
	}
</style>
