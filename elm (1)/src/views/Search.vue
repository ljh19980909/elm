<template>
	<div class="search">
		<!-- 顶部导航栏 -->
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>搜索</strong></h4>
			</div>
		</div>
		<div class="content">
			<!-- 搜索框 -->
			<div class="search_nav">
				<el-input v-model="shopInp" placeholder="请输入商家或美食名称" class="search_input"></el-input>
				<el-button type="primary" @click="a">提交</el-button>
				<div class="el-icon-close da" v-if="shopInp!=''" @click="qingdiao"></div>
			</div>
			<!-- 展示 -->
			<ul class="content_ul">
				<h3 v-if="!Bool">搜索历史</h3>
				<!-- 无结果 -->
				<li class="nosearch" v-if="nosearch">很抱歉！无搜索结果</li>
				<!-- 有结果 -->
				<li v-for="v in shopMsg" v-if="Bool" class="ul_li" @click="toshop(v)">
					<div class="li_left">
						<img :src="'//elm.cangdu.org/img/'+v.image_path">
					</div>
					<div class="li_right">
						<p>
							<span>{{v.name}}</span>
							<span class="pay">
								<p><strong>支付</strong></p>
								<span></span>
							</span>
						</p>
						<p>月售 {{v.recent_order_num}} 单</p>
						<p>{{v.float_minimum_order_amount}} 元起送 / 距离{{v.distance}}</p>
					</div>
				</li>
				<!-- 无点击 -->
				<li v-if="!Bool" style="background-color: #F5F5F5;"  v-for="(v,i) in history">
					<p class="history">
						<span @click="tiaosousuo(v)">{{v.History}}</span>
						<span class="el-icon-close cha" @click="qingchu(v.History,i)"></span>
					</p>
				</li>
				<el-button type="primary" class="submit" @click="clear" v-if="!Bool">清空</el-button>
			</ul>
		</div>
		<!-- 底部跳转 -->
		<section id="foot_guide">
			<li class="guide_item" @click="toMsite" >
				<i class="el-icon-eleme"></i>
				<span>外卖</span>
			</li>
			<li class="guide_item" style="color: #007AFF;">
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
</template>

<script>
	import { ProductSearch } from "@/request/api.js"
	export default {
		name: "Search",
		data() {
			return {
				shopInp: '',
				shopMsg: "",
				Bool: false,
				history: [],
				nosearch:false
			}
		},
		methods: {
			// 搜索
			a() {
				// 搜索
				this.Bool = true
				ProductSearch(this.$store.state.msite.geohash,this.shopInp).then(data => {
					this.shopMsg = data
					if(this.shopMsg.length==0){
						this.nosearch=true
					}
					console.log(this.shopMsg)
				}).catch(err => {
					console.log(err)
				});
				// 存历史
				this.history = [...JSON.parse(localStorage.b)]
				this.history.unshift({
					History:this.shopInp
				})
				let obj = {},
					arr = [];
				arr = this.history.reduce(function(item, next) {
					obj[next.History] ? '' : obj[next.History] = true && item.push(next);
					return item;
				}, []);
				localStorage.b = JSON.stringify(arr)
				this.history=localStorage.b
			},
			//返回上一步
			back() {
				this.$router.go(-1)
			},
			// 清空所有
			clear() {
				this.history = []
				localStorage.b='[]'
			},
			toMsite(){
				this.$router.push({
					path:'/msite'
				})
			},
			toOrder(){
				this.$router.push({
					path:'/order'
				})
			},
			toMine(){
				this.$router.push({
					path:'/mine'
				})
			},
			// 搜索清空
			qingdiao(){
				this.shopInp=''
				this.Bool=false
				this.history = [...JSON.parse(localStorage.b)]
				this.nosearch=false
			},
			// 单个清除
			qingchu(v,i){
				this.history.forEach(item=>{
					if(item.History==v){
						this.history.splice(i,1)
					}
				})
				localStorage.b=JSON.stringify(this.history)
			},
			// 去购物车
			toshop(v){
				this.$store.commit('toshop',v)
				this.$router.push({
					path:"/shop",
				})
			},
			//去搜索
			tiaosousuo(v){
				this.shopInp=v.History
				this.a()
			}
		},
		created() {
			if(localStorage.b){
				this.history = JSON.parse(localStorage.b)
			}else{
				localStorage.b='[]'
			}
		}
	}
</script>

<style scoped>
	.submit {
		width: 90%;
		margin-left: 5%;
		color: #FFFFFF;
		margin-bottom: .3rem;
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
		left: 45%;
		font-size: .5rem;
		color: #FFFFFF;
	}
	.content {
		padding-top: 1.5rem;
		background-color: #FFFFFF;
	}
	.search_nav {
		padding-left: .4rem;
		padding-bottom: .2rem;
	}
	.search_input {
		width: 75%;
		margin-right: .2rem;
	}
	.da{
		position: absolute;
		top: 1.8rem;
		right: 2.5rem;
		font-size: .5rem;
	}
	.content_ul{
		margin-bottom: 1.5rem;
	}
	.content_ul>h3 {
		padding-left: .4rem;
		height: 1rem;
		line-height: 1rem;
		background-color: #f5f5f5;
		font-weight: 700;
		color: #666;
	}
	.ul_li {
		margin-top: .2rem;
		padding-top: .3rem;
		padding-left: .4rem;
		padding-bottom: .3rem;
		height: 2.5rem;
		border-bottom: .025rem solid #e4e4e4;
	}
	.content_ul>li div {
		float: left;
	}
	.li_left {
		width: 12%;
		height: 2rem;
	}
	.li_left img {
		width: 100%;
	}
	.li_right {
		width: 80%;
		color: #333;
		margin-left: 0.2rem;
		border-bottom: .025rem solid #e4e4e4;
	}
	.li_right p {
		margin-bottom: .1rem;
	}
	.pay {
		position: relative;
		display: inline-block;
		width: .8rem;
		height: .5rem;
		border: 1px solid rgb(255, 96, 0);
		color: #333;
		transform: skew(-20deg);
		font-size: .2rem;
		color: rgb(255, 96, 0);
		font-weight: 800;
		margin-left: .4rem;
		top: 0.1rem;
	}
	.pay p {
		position: absolute;
		height: 100%;
		top: -.05rem;
		left: 0.02rem;
		transform: skew(20deg);
	}
	.pay span {
		position: absolute;
		bottom: .03rem;
		width: .78rem;
		border-bottom: 0.05rem rgb(255, 96, 0) solid;
	}
	.history{
		width: 100%;
		line-height: 1.3rem;
		border-bottom: .025rem solid #e4e4e4;
		margin-bottom: .2rem;
		font-size: .4rem;
		padding: 0 .3rem;
		background-color: #FFFFFF;
		width: 100%;
	}
	.history>span:nth-child(1){
		display: inline-block;
		width: 80%;
	}
	.cha{
		float: right;
		line-height: 1.3rem;		
		font-size: .5rem;
	}
	.nosearch{
		 font-size: .4rem;
		 text-align: center;
		 line-height: 1rem;
		 background-color: #F5F5F5;
	}
</style>
