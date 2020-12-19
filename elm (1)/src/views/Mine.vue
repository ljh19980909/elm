<template>
	<div>
		<!-- 顶部导航栏 -->
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>我的</strong></h4>
			</div>
		</div>
		<!-- 第一部分 -->
		<div class="content_top" @click="zhuxiao()">
			<div class="top_left">
				<div>
					<svg viewBox="0 0 122 122" id="avatar-default"  v-if="info==''">
						<path fill="#DCDCDC" fill-rule="evenodd" d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path>
					</svg>
					<img :src="'//elm.cangdu.org/img/'+info.avatar+''" class="person" v-if="info!=''&&touxiang==''">
					<img :src="'//elm.cangdu.org/img/'+touxiang+''" class="person" v-if="touxiang!=''">
				</div>
				<div>
					<h2 v-if="info!=''">{{info.username}}</h2>
					<h2 v-if="info==''">登录/注册</h2>
					<p><span><i class="el-icon-mobile-phone"></i></span>暂无绑定手机号</p>
				</div>
			</div>
			<div class="top_right">
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
		<div class="content_my">
			<div @click="myBalance()">
				<p><span>0.00</span>元</p>
				<p>我的余额</p>
			</div>
			<div @click="myDiscounts()">
				<p>
					<span v-if="info==''">0</span>
					<span v-if="info!=''">{{info.gift_amount}}</span>个
				</p>
				<p>我的优惠</p>
			</div>
			<div @click="myIntegral()">
				<p><span>0</span>分</p>
				<p>我的积分</p>
			</div>
		</div>
		<div class="content_middle">
			<div @click="toOrder()">
				<span>我的订单</span>
				<span><i class="el-icon-s-data" style="color: #a9a9a9;"></i></span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="toActivity()">
				<span>积分商城</span>
				<span><i class="el-icon-s-goods" style="color: #fc7b53;"></i></span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="toElmvip()">
				<span>饿了么会员卡</span>
				<span><i class="el-icon-star-on" style="color: #ffc636;"></i></span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
		</div>
		<div class="content_middle">
			<div @click="toService()">
				<span>服务中心</span>
				<span><i class="el-icon-phone" style="color: #4aa5f0;"></i></span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="toDownload()">
				<span>下载饿了么APP</span>
				<span><i class="el-icon-platform-eleme" style="color: #3cabff;"></i></span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
		</div>
		<section id="foot_guide">
			<li class="guide_item" @click="toMsite">
				<i class="el-icon-eleme"></i>
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
			<li class="guide_item">
				<i class="el-icon-user" style="color: #007AFF;"></i>
				<span>我的</span>
			</li>
		</section>
		<router-view class="zx"></router-view>
	</div>
</template>

<script>
	export default {
		name: "Mine",
		data(){
			return{
				info:'',
				 a: true,
				 touxiang:''
			}
		},
		methods: {
			zhuxiao(){
				if(this.info==''){
					this.$router.push('/login')
				}else{
					this.changea()
					this.$router.push('/mine/zhuxiao')
				}
			},
			myBalance() {
				this.$router.push('/mybalance')
			},
			myIntegral() {
				this.$router.push('/myintegral')
			},
			myDiscounts() {
				this.$router.push('/mydiscounts')
			},
			toMsite() {
				this.$router.push({
					path: '/msite',
				})
			},
			toSearch() {
				this.$router.push({
					path: '/search',
				})
			},
			toOrder() {
				this.$router.push({
					path: '/order',
				})
			},
			toActivity() {
				this.$router.push('/activity')
			},
			toElmvip() {
				this.$router.push('/elmvip')
			},
			toDownload() {
				this.$router.push('/download')
			},
			toService() {
				this.$router.push('/service')
			},
			back() {
				this.$router.go(-1)
				// console.log(this.$router.go)
			},
			changea(){
			    this.$store.commit("changea")
			}
		},
		created() {
			this.info=this.$store.state.achieves
			this.$store.state.a = true
		},
		computed: {
			geta() {
				return this.$store.state.a
			},
		},
		updated() {
			this.info=this.$store.state.achieves
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

	.top_left {
		float: left;
		width: 95%;
	}

	.top_left div {
		float: left;
	}

	.top_left div:first-child {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		overflow: hidden;
	}

	.top_left div:last-child {
		width: 80%;
		height: 1.6rem;
		margin-left: 2%;
		color: #FFFFFF;
	}
	.person{
		width: 1.5rem;
		position: absolute;
		top: 1.5rem;
		left: .3rem;
		border-radius: 50%;
	}
	#avatar-default {
		background-color: #FFFFFF;
	}

	.top_left div:last-child h2 {
		font-weight: 900;
		margin-top: .1rem;
	}

	.top_left div:last-child p {
		margin-top: .1rem;
		font-size: .4rem;
	}

	.top_right {
		float: right;
		color: #FFFFFF;
		font-size: .4rem;
		margin-top: .5rem;
	}

	.content_my {
		width: 100%;
		overflow: hidden;
		background-color: #FFFFFF;
	}

	.content_my div {
		width: 33.3%;
		height: 2.25rem;
		background-color: #FFFFFF;
		float: left;
		text-align: center;
		padding-top: .3rem;
	}

	.content_my div p:last-child {
		color: #c6c6c6;
		font-size: .35rem;
		margin-top: .2rem;
	}

	.content_my div:nth-child(1) p:first-child span {
		color: #f90;
		font-weight: 900;
		font-size: .7rem;
	}

	.content_my div:nth-child(2) p:first-child span {
		color: #ff5f3e;
		font-weight: 900;
		font-size: .7rem;
	}

	.content_my div:nth-child(3) p:first-child span {
		color: #6ac20b;
		font-weight: 900;
		font-size: .7rem;
	}

	.content_middle {
		clear: both;
		width: 100%;
		background-color: #FFFFFF;
		margin-top: .3rem;
		padding-left: 1rem;
	}

	.content_middle div {
		position: relative;
		height: 1.1rem;
		line-height: 1.1rem;
		font-size: .45rem;
		border-bottom: .01rem solid rgba(229, 229, 229, 0.5);
	}

	.content_middle div span:nth-child(2) {
		position: absolute;
		left: -.6rem;
		top: 0;
	}

	.content_middle div span:last-child {
		float: right;
		color: #ababab;
		margin-right: .1rem;
	}

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
	.zx{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #F5F5F5;
		z-index: 206;
	}
</style>
