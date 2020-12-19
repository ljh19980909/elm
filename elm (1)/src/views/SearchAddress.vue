<template>
	<div>
		<!-- 第一部分 -->
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>搜索</strong></h4>
			</div>
		</div>
		<!-- 第二部份 -->
		<div class="middle">
			<input type="text" placeholder="请输入小区/写字楼/学校等" v-model="input">
			<el-button type="primary" @click="confirm">搜索</el-button>
		</div>
		<!-- 搜索展示部分 -->
		<ul class="information" v-if="show==true">
			<li v-for="v in info" @click="toaddAddress(v)">
				<p>{{v.name}}</p>
				<p class="ellipsis">{{v.address}}</p>
			</li>
		</ul>
		<!-- 未搜索展示部分 -->
		<div class="point" v-if="show==false">
			<p>找不到地址？</p>
			<p>请尝试输入小区、写字楼或学校名</p>
			<p>详细地址（如门牌号）可稍后输入哦。</p>
		</div>
	</div>
</template>

<script>
	import { ConfirmAddress } from "@/request/api.js"
	export default {
		name: "SearchAddress",
		data(){
			return{
				input:'',
				show:false,
				info:''
			}
		},
		methods:{
			confirm() {
				ConfirmAddress(this.input).then(data => {
					this.info = data
					console.log(this.info)
				}).catch(err => {
					console.log(err)
				});
				this.show=!this.show
			},
			toaddAddress(v){
				this.$router.push({
					path:'/shop/confirmOrder/chooseAddress/addAddress',
					query:{
						address:v.name
					}
				})
			},
			back(){
				this.$router.push({
					path:'/shop/confirmOrder/chooseAddress/addAddress',
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
	.middle {
		margin-top: 1.5rem;
		padding: .1rem .3rem;
		background-color: #FFFFFF;
	}
	.middle>input {
		height: 1rem;
		background-color: #F2F2F2;
		width: 75%;
		border: .03rem solid #ddd;
		padding-left: .2rem;
		border: none;
		outline: none;
	}
	.el-button {
		margin-left: .3rem;
	}
	/* 第三部分 */
	.point {
		position: absolute;
		top: 50%;
		text-align: center;
		width: 100%;
		font-size: .3rem;
		color: #969696;
	}
	.information{
		padding: .2rem;
		height: 15rem;
		overflow-y: scroll;
	}
	.information>li{
		border-bottom: .03rem solid #F2F2F2;
		height: 1.5rem;
	}
	.information>li>p{
		margin-top: .2rem;
		font-size: .4rem;
		color: #969696;
	}
	.information>li>p:nth-child(1){
		font-size: .45rem;
		color: #333333;
	}
	.information>li>p:nth-child(2){
		margin-left: .3rem;
		width: 90%;
	}
	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
