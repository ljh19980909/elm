<template>
	<div>
		<!-- 第一部分 -->
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>选择发票抬头</strong></h4>
			</div>
		</div>
		<!-- 第二部份 -->
		<li>
			<span>不需要开发票</span>
			<i class="el-icon-circle-check" @click="a=!a" :style="a?'color:#999;':'color:#4cd964;'"></i>
		</li>
		<el-button type="success" @click="sure">确定</el-button>
	</div>
</template>

<script>
	export default {
		name: 'Invoice',
		data(){
			return{
				a:true
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			sure(){
				this.$router.push({
					path:"/shop/confirmOrder"
				})
			}
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

	/* 第二部份 */
	li{
		margin-top: 1.5rem;
		display: flex;
		justify-content: space-between;
		padding: 0 .3rem;
		width: 100%;
		line-height: 1.5rem;
		font-size: .4rem;
		background-color: #fff;
	}
	.el-icon-circle-check{
		margin-top: .5rem;
		font-size: .5rem;
		color: #999;
	}
	.el-button{
		width: 90%;
		margin-top: .3rem;
		background-color: #4cd964;
		margin-left: 5%;
	}
</style>
