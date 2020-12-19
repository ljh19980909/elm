<template>
	<div>
		<!-- 导航栏 -->
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>{{foodDetail.name}}</strong></h4>
			</div>
		</div>
		<!-- 图片 -->
		<div class="middle">
			<img :src="'//elm.cangdu.org/img/'+foodDetail.image_path+''">
		</div>
		<!-- 描述 -->
		<footer>
			<p class="description">{{foodDetail.description}}</p>
			<p class="desc">{{foodDetail.name}}</p>
			<p class="rating_sale">
				<span>评分</span>
				<el-rate v-model="foodDetail.rating" disabled style="margin-right: .2rem;"> </el-rate>
				<span class="color">{{foodDetail.rating}}</span>
			</p>
			<p class="sales">
				<span>月售 {{foodDetail.month_sales}}单</span>
				<span class="color">售价 ¥{{foodDetail.specfoods[0].price}}</span> 
				<span class="color">起</span>
			</p>
			<p class="pinglun">
				<span>评论数 {{foodDetail.rating_count}}</span> 
				<span>好评率 {{foodDetail.satisfy_rate}}%</span>
			</p>
		</footer>
	</div>
</template>

<script>
	export default {
		name: "FoodDetail",
		data() {
			return {
				foodDetail: '',
			}
		},
		created() {
			this.foodDetail = this.$store.state.foodDetail
			console.log(this.foodDetail)
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
		}
	}
</script>

<style scoped>
	/* 导航栏 */
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
	/* 图片 */
	.middle {
		margin-top: 1.2rem;
		float: left;
		width: 100%;
		height: 63%;
		background-color: #fff;
	}
	.middle>img {
		width: 100%;
	}
	/* 描述 */
	footer{
		width: 100%;
		height: 37%;		
		background-color: #fff;
		position: fixed;
		top: 63%;
	}
	p{
		font-size: .38rem;
		color: #666;
		margin-top: -.1rem;
		line-height: .8rem;
		padding: .3rem .4rem;
	}
	.desc{
		font-size: .5rem;
		color: #333;
		padding: 0rem .4rem;
	}
	.rating_sale,.sales,.pinglun{
		padding: 0rem .4rem;
	}
	.el-rate{
		display: inline-block;
		padding-left: .3rem;
	}
	.color{
		color: #f60;
	}
	p>span{
		margin-right: .2rem;
		font-size: .4rem;
	}
</style>
