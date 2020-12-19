<template>
	<div>
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>搜索地址</strong></h4>
			</div>
		</div>
		<div class="middle">
			<input type="text" placeholder="请输入小区/写字楼/学校等" v-model="input">
			<el-button type="primary" @click="confirm">确认</el-button>
		</div>
		<p class="choose">为了满足商家的送餐要求，建议您从列表中选择地址</p>
		<ul class="information" v-if="show==true">
			<li v-for="v in info" @click="todizhi(v)">
				<p>{{v.name}}</p>
				<p class="ellipsis">{{v.address}}</p>
			</li>
		</ul>
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
		name: "AddDetail",
		data() {
			return {
				input: '',
				info: '',
				show:false
			}
		},
		methods: {
			back() {
				this.changea()
				this.$router.push({
					path:'/mine/zhuxiao/address/dizhi'
				})
			},
			changea() {
				this.$store.commit("changea")
			},
			confirm() {
				ConfirmAddress(this.input).then(data => {
					this.info = data
				}).catch(err => {
					console.log(err)
				});
				this.show=!this.show
			},
			todizhi(v){
				console.log(v)
				this.$router.push({
					path:'/mine/zhuxiao/address/dizhi',
				})
				this.$store.commit('address',v.name)
			}
		},
		created() {
			this.input=this.$route.query.a
		}
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
	.middle {
		margin-top: 1.5rem;
		padding: .2rem .3rem;
		background-color: #FFFFFF;
	}
	.middle>input {
		height: 1.2rem;
		background-color: #F2F2F2;
		width: 75%;
		border: .03rem solid #ddd;
		border-radius: .2rem;
		padding-left: .2rem;
	}
	.el-button {
		margin-left: .3rem;
	}
	.choose {
		color: #ff883f;
		padding: .2rem .4rem;
		background: #fff6e4;
		font-size: .4rem;
	}
	.point {
		position: absolute;
		top: 50%;
		text-align: center;
		width: 100%;
		font-size: .45rem;
		color: #969696;
	}
	.point>p {
		margin-bottom: .3rem;
	}
	.information{
		padding: .2rem;
		height: 13.75rem;
		overflow-y: scroll;
	}
	.information>li{
		border-bottom: .03rem solid #333;
		height: 1.5rem;
	}
	.information>li>p{
		margin-top: .2rem;
		font-size: .4rem;
		color: #969696;
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
