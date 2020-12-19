<template>
	<div>
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>订单列表</strong></h4>
			</div>
		</div>
		<section id="foot_guide">
			<router-link class="guide_item" :to="{path:'/msite',query:{c:this.$route.query.order}}">
				<i class="el-icon-eleme" ></i>
				<span>外卖</span>
			</router-link>
			<router-link class="guide_item" :to="{path:'/search',query:{foods:this.$route.query.order}}">
				<i class="el-icon-view"></i>
				<span>搜索</span>
			</router-link>
			<router-link class="guide_item" :to="{path:'/order',query:{foods:this.$route.query.order}}">
				<i class="el-icon-tickets"  style="color: #007AFF;"></i>
				<span>订单</span>
			</router-link>
			<router-link class="guide_item" :to="{path:'/mine',query:{foods:this.$route.query.order}}">
				<i class="el-icon-user"></i>
				<span>我的</span>
			</router-link>
		</section>
	</div>
</template>

<script>
	export default {
		name: "Order",
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		created() {
			console.log(this.$route.query.order)
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
		height: 1.5rem;
	}

	.back {
		font-size: .8rem;
		color: #FFFFFF;
		line-height: 1.5rem;
		margin-left: .2rem;
		font-weight: 800;
	}

	.top_tittle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-size: .7rem;
		color: #FFFFFF;
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
</style>
