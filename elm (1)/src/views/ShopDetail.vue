<template>
	<div>
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>商家详情</strong></h4>
			</div>
		</div>
		<p class="kongbai"></p>
		<div class="middle">
			<ul>
				<p class="ps">活动与属性</p>
				<li v-for="v in activities">
					<span :style="'background:#'+v.icon_color+''">{{v.icon_name}}</span>
					<span>{{v.description}}(APP专享)</span>
				</li>
				<li v-for="v in supports">
					<span :style="'background:#'+v.icon_color+''">{{v.icon_name}}</span>
					<span class="ellipsis">{{v.description}}(APP专享)</span>
				</li>
				 <!-- v-if="this.$store.state.shop.activities.length>0" -->
			</ul>
		</div>
		<p class="kongbai"></p>
		<div class="third">
			<ul>
				<p class="ps">
					<span>食品监督安全公示</span>
					<span class="xiangqing" @click="toSafe">企业认证详情<i class="el-icon-arrow-right"></i></span>
				</p>
				<div class="picture">
					<span>
						<svg class="shop_status"><use data-v-ca49b092="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#res-well">
						<svg viewBox="0 0 1024 1024" id="res-well"><path fill="#7ED321" fill-rule="evenodd" d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0zM247.808 402.432c0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-16.384-24.576-52.224-52.224-52.224-27.648 0-52.224 35.84-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48zM512 800.768c-132.096 0-239.616-96.256-239.616-215.04 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 96.256 89.088 174.08 198.656 174.08 109.568 0 198.656-77.824 198.656-174.08 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 117.76-107.52 215.04-239.616 215.04zm243.712-377.856c-11.264 0-20.48-9.216-20.48-20.48 0-17.408-24.576-52.224-52.224-52.224-28.672 0-52.224 34.816-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48z"></path></svg></use></svg>
					</span>
					<div>
						<p>
							<span>监督检查结果：</span>
							<span style="color: #7ed321;">良好</span>
						</p>
						<p>
							<span>检查日期：</span>
							<span></span>
						</p>
					</div>
				</div>
			</ul>
		</div>
		<p class="kongbai"></p>
		<div class="fourth">
			<p class="ps">
				<span>商家信息</span>
				<span class="xiangqing"><i class="el-icon-circle-plus"></i></span>
			</p>
			<li><p>{{this.$store.state.shop.name}}</p></li>
			<li><p class="ellipsis">地址：{{this.$store.state.shop.address}}</p></li>
			<li><p>营业时间：[{{this.$store.state.shop.opening_hours[0]}}]</p></li>
			<li><p>{{this.$store.state.shop.name}}</p></li>
			<li><p>营业执照<i class="el-icon-arrow-right"></i></p></li>
			<li><p>餐饮服务许可证<i class="el-icon-arrow-right"></i></p></li>
		</div>
		<router-view class="bbb"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'ShopDetail',
		data(){
			return{
				activities:'',
				supports:''
			}
		},
		methods:{
			back() {
				this.$router.push({
					path:'/shop',
				})
			},
			toSafe(){
				this.$router.push({
					path:'/shop/shopDetail/shopSafe',
				})
			}
		},
		created() {
			this.supports=this.$store.state.shop.supports
			this.activities=this.$store.state.shop.activities
			console.log(this.$store.state.shop.supports)
			console.log(this.$store.state.shop.activities)
		}
	}
</script>

<style scoped>
	.head_top {
		background-color: #3190e8;
		position: fixed;
		z-index: 100;
		top: 0;
		width: 100%;
		height: 1.2rem;
	}
	.back {
		font-size: .6rem;
		color: #FFFFFF;
		line-height: 1.2rem;
		margin-left: .2rem;
		font-weight: 800;
	}
	.top_tittle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: .6rem;
		color: #FFFFFF;
	}
	.kongbai {
		width: 100%;
		height: .3rem;
		background-color: #ebebeb;
		margin-top: 1.2rem;
	}
	.middle{
		width: 100%;
		background-color: #FFFFFF;
	}
	.ps{
		border-bottom: .03rem solid #f1f1f1;
		height: 1.2rem;
		width: 100%;
		line-height: 1.2rem;
		padding:0 .3rem;
		font-size: .5rem;
		color: #333;
	}
	.middle li{
		height: 1.2rem;
		width: 100%;
		line-height: 1.2rem;
		padding-left: .4rem;
	}
	.middle li>span:nth-child(1){
		margin-right: .3rem;
		padding: .1rem;
		color: #fff;
	}
	.middle li>span:nth-child(2){
		padding: .1rem;
		color: #666;
		font-size: .35rem;
	}
	.third{
		width: 100%;
		margin-top: .4rem;
		height: 4.5rem;
		background-color: #FFFFFF;
		position: relative;
	}
	.xiangqing{
		float: right;
		font-size: .43rem;
		color: #bbb;
	}
	.xiangqing i{
		margin-left: .1rem;
	}
	.picture svg{
		transform: scale(.4);
		position: absolute;
		top: .3rem;
		left: -2.7rem;
	}
	.picture div{
		position: absolute;
		top: 2rem;
		left: 2.6rem;
		font-size: .4rem;
		color: #666;
	}
	.picture p{
		margin-bottom:.5rem;
	}
	.fourth{
		width: 100%;
		margin-top: .4rem;
		height: 6rem;
		background-color: #FFFFFF;
		position: relative;
	}
	.el-icon-circle-plus{
		color:#3190e8;
		font-size: .5rem;
	}
	.fourth>li{
		width: 100%;
		height: 1.5rem;
		line-height:1.5rem;
		font-size: .4rem;
		padding-left: .3rem;
		color: #666666;
		float: left;
		border-bottom: .03rem solid #f1f1f1;
		background-color: #FFFFFF;
	}
	.fourth .el-icon-arrow-right{
		float: right;
		line-height:1.5rem;
		margin-right: .3rem;
	}
	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.bbb{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 150%;
		z-index: 1200;
		background-color: #FFFFFF;
	}
</style>
