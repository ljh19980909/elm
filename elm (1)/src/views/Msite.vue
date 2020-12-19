<template>
	<div>
		<div id="app">
			<!-- 顶部导航栏 -->
			<header id="head_top">
				<span class="el-icon-search link_search" @click="toSearch"></span>
				<a href="#/login" class="head_login" v-if="info==''">
					<span class="login_span">登录|注册</span>
				</a>
				<router-link to="/mine" v-if="info!=''" class="head_login"><i class="el-icon-user"></i></router-link>
				<a href="#/home" class="msite_title">
					<span class="title_text ellipsis">{{this.$store.state.msite.name}}</span>
				</a>
			</header>
			<!-- 轮播图 -->
			<div class="msite_nav">
				<swiper ref="mySwiper" :options="swiperOptions" class="swiper-wrapper">
					<swiper-slide>
						<div v-for="(v,i) in a" class="foodlist">
							<div v-if="i<8" @click="toshoplist(v)">
								<img :src="'https://fuss10.elemecdn.com/'+v.image_url">
								<p>{{v.title}}</p>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div v-for="(v,i) in a" class="foodlist">
							<div v-if="i>7" @click="toshoplist(v)">
								<img :src="'https://fuss10.elemecdn.com/'+v.image_url">
								<p>{{v.title}}</p>
							</div>
						</div>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<!-- 下面效果展示 -->
			<div class="shop_list_container">
				<!-- 商家 -->
				<header class="shop_header">
					<span class="el-icon-takeaway-box"></span>
					<span class="shop_header_title">附近商家</span>
				</header>
				<!-- 下面商铺展示 -->
				<ul class="shoplist_container">
					<li v-for="(v,i) in b" class="shop_li" @click="toshop(v)">
						<div class="left">
							<img :src="srcImg+v.image_path" class="shop_img">
						</div>
						<div class="middle">
							<h1 class="brand"><strong>品牌</strong></h1>
							<h3 class="titles ellipsis"><strong>{{v.name}}</strong></h3>
							<div class="star">
								<div>
									<el-rate v-model="v.rating" disabled class="pingfen" style="float: left;"></el-rate>
									<span class="pin">{{v.rating}}</span>
									<span class="mouth">月售{{v.recent_order_num}}单</span>
								</div>
							</div>
							<p class="send">￥{{v.float_minimum_order_amount}}起送 / {{v.piecewise_agent_fee.tips}}</p>
						</div>
						<div class="right">
							<p class="time1">
								<span v-for="(n,i) in v.supports">{{n.icon_name}}</span>
							</p>
							<span class="postStyle">{{v.delivery_mode.text}}</span>
							<span class="arrive">{{v.supports[1].name}}</span>

							<div class="right_dm">
								<span class="distance">{{v.distance}}</span>
								<span class="minute"> / {{v.order_lead_time}}</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<!-- 底部标签 -->
			<section id="foot_guide">
				<li class="guide_item">
					<i class="el-icon-eleme" style="color: #007AFF;"></i>
					<span>外卖</span>
				</li>
				<li class="guide_item" @click="toSearch">
					<i class="el-icon-view"></i>
					<span>搜索</span>
				</li>
				<li class="guide_item" @click="toOrder">
					<i class="el-icon-tickets"></i>
					<span>订单</span>
				</li>
				<li class="guide_item" @click="toMine">
					<i class="el-icon-user"></i>
					<span>我的</span>
				</li>
			</section>
		</div>
	</div>
</template>

<script>
	import {
		Swiper,
		SwiperSlide,
		directive
	} from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	import {
		Lunbo,
		Show
	} from "@/request/api.js"
	export default {
		name: "Msite",
		components: {
			Swiper,
		},
		data() {
			return {
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination',
					},
				},
				a: '',
				b: '',
				srcImg: "https://elm.cangdu.org/img/",
				value: '',
				info: ''
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.$swiper
			},
		},
		created() {
			this.info = this.$store.state.achieves
			// 轮播图
			// this.axios.get('/v2/index_entry', {})
			Lunbo().then(data => {
				this.a = data
			}).catch(err => {
				console.log(err)
			});
			// 商家展示
			Show(this.$store.state.msite.latitude, this.$store.state.msite.longitude).then(data => {
				this.b = data
			}).catch(err => {
				console.log(err)
			});
		},
		methods: {
			toSearch() {
				this.$router.push({
					path: '/search'
				})
			},
			toOrder() {
				this.$router.push({
					path: '/order'
				})
			},
			toMine() {
				this.$router.push({
					path: '/mine'
				})
			},
			toshoplist(n) {
				this.$store.commit('toshoplist', n)
				this.$router.push({
					path: '/shoplist'
				})
			},
			toshop(v) {
				this.$store.commit('toshop', v)
				this.$router.push({
					path: "/shop",
				})
			}
		}
	}
</script>

<style scoped>
	#head_top {
		background-color: #3190e8;
		position: fixed;
		z-index: 100;
		top: 0;
		width: 100%;
		height: 1.5rem;
	}

	.link_search {
		line-height: 1.5rem;
		margin-left: .3rem;
		font-size: .6rem;
		color: #FFFFFF;
	}

	.msite_title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50%;
		color: #fff;
		text-align: center;
		font-size: .5rem;
	}

	.head_login {
		right: .45rem;
		font-size: .45rem;
		color: #fff;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.msite_nav {
		margin-top: 1.5rem;
		background-color: #fff;
		border-bottom: .025rem solid #e4e4e4;
	}

	.foodlist {
		width: 25%;
		float: left;
		color: #666666;
		box-sizing: border-box;
	}

	.foodlist img {
		width: 60%;
		margin-left: 20%;
	}

	.foodlist p {
		width: 100%;
		text-align: center;
		font-size: .4rem;
		margin-bottom: .65rem;
	}

	.shop_list_container {
		margin-top: .4rem;
		border-top: .025rem solid #e4e4e4;
		background-color: #fff;
		position: relative;
	}

	.el-icon-takeaway-box {
		margin-left: .3rem;
		font-size: .5rem;
		vertical-align: middle;
	}

	.shop_header_title {
		color: #999;
		font-size: .35rem;
		line-height: 1rem;
		margin-left: .2rem;
		vertical-align: middle;
	}

	.shoplist_container {
		background-color: #fff;
	}

	.shop_li {
		border-bottom: .025rem solid #f1f1f1;
		padding: .7rem .3rem;
		height: 3.5rem;
		position: relative;
	}

	.left {
		position: absolute;
		width: 2rem;
		box-sizing: border-box;
		font-size: 0;
	}

	.left>img {
		width: 100%;
	}

	.middle {
		position: absolute;
		left: 2.5rem;
		top: .6rem;
		height: 2.5rem;
		width: 5rem;
		box-sizing: border-box;
	}

	.middle>.brand {
		position: absolute;
		font-size: .3rem;
		background-color: #FFD930;
		font-family: 800;
		padding: 0 .1rem;
	}

	.titles {
		position: absolute;
		left: 1rem;
		top: -.1rem;
		width: 3rem;
		font-size: .45rem;
	}

	.star {
		position: absolute;
		top: .8rem;
	}

	.star>span,
	.star>div {
		float: left;
	}

	.pingfen {
		width: 2.25rem;
		box-sizing: border-box;
		font-size: .4rem;
		color: #ff6000;
	}

	.mouth {
		box-sizing: border-box;
		transform: scale(.8);
		font-size: .25rem;
		color: #666;
		margin-left: .1rem;
	}

	.pin {
		box-sizing: border-box;
		font-size: .35rem;
		color: #ff6000;
		margin-left: -.3rem;
	}

	.send {
		position: absolute;
		top: 1.53rem;
		left: -1.7rem;
		font-size: .65rem;
		width: 7rem;
		color: #999;
		transform: scale(.53);
	}

	.right {
		position: absolute;
		right: .1rem;
		width: 3rem;
		top: .6rem;
		height: 2.5rem;
		color: #999;
	}

	.time1 {
		font-size: .3rem;
		float: right;
	}

	.time1>span {
		margin-left: .1rem;
	}

	.postStyle {
		position: absolute;
		right: .75rem;
		top: .8rem;
		background-color: #3190EB;
		color: #ffffff;
		padding: .02rem;
		box-sizing: border-box;
		transform: scale(.8);
	}

	.arrive {
		position: absolute;
		right: -.07rem;
		top: .8rem;
		color: #3190e8;
		padding: .01rem .01rem;
		border: .025rem solid #3190e8;
		box-sizing: border-box;
		transform: scale(.8);
	}

	.right_dm {
		position: absolute;
		right: -1.5rem;
		top: 1.6rem;
		transform: scale(.6);
		width: 7rem;
		text-align: right;
	}

	.distance {
		font-size: .5rem;
	}

	.minute {
		font-size: .5rem;
		color: deepskyblue;
		margin-right: .2rem;
	}

	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* 底部 */
	.guide_item>i {
		font-size: .6rem;
		margin-top: .3rem;
	}

	.guide_item span {
		font-size: .35rem;
		color: #666;
		position: absolute;
		top: 75%;
		transform: translateY(-50%);
	}

	.guide_item {
		flex: 1;
		display: flex;
		text-align: center;
		flex-direction: column;
		align-items: center;
	}

	.guide_item .icon_style {
		margin-top: .3rem;
		fill: #ccc;
	}

	#foot_guide {
		background-color: #fff;
		position: fixed;
		z-index: 100;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 1.5rem;
		display: flex;
		box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, .1);
	}

	.el-icon-user {
		font-size: .5rem;
	}
</style>
