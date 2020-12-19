<template>
	<div>
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>选择地址</strong></h4>
			</div>
		</div>
		<ul class="deliverable_address">
			<li v-for="(v,i) in datas" @click="toconfirmOrder(v,i)">
				<svg class="choosed_address default_address" v-if="num==i?!click:click">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#select">
						<svg viewBox="0 0 120 120" id="select"><circle cx="60" cy="60" r="60"></circle><path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"></path></svg>
					</use>
				</svg>
				 <div style="margin-left: .8rem;">
					 <header>
						 <span>{{v.name}}</span> 
						 <span style="margin-right: .2rem;">{{v.sex==true?'先生':'女士'}}</span> 
						 <span>{{v.phone}}</span>
					</header> 
					<div class="address_detail ellipsis">
						<span :style="i==0?'background-color: rgb(76, 217, 100);':'background-color: #ff5722;'">{{v.tag}}</span>
						 <p>{{v.address_detail}}</p>
					</div>
				</div>
			</li>
		</ul>
		<footer @click="toaddAddress">
			<i class="el-icon-circle-plus-outline"></i>
			<span>新增收货地址</span>
		</footer>
		<router-view class="a"></router-view>
	</div>
</template>

<script>
	export default {
		name: "ChooseAddress",
		data(){
			return{
				datas:'',
				click:false,
				num:0
			}
		},
		methods:{
			toaddAddress(){
				this.$router.push({
					path:'/shop/confirmOrder/chooseAddress/addAddress'
				})
			},
			back() {
				this.$router.push({
					path:'/shop/confirmOrder',
				})
			},
			toconfirmOrder(v,i){
				this.click=i
				this.$router.push({
					path:'/shop/confirmOrder',
				})
				this.$store.commit('address',v)
			}
		},
		created() {
			this.datas=this.$store.state.writeAddresses
			console.log(this.$store.state.dizhi)
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
	.content_top {
		width: 100%;
		padding-top: 1.5rem;
		background-color: #3190e8;
		padding-bottom: .4rem;
		overflow: hidden;
		padding-left: .3rem;
		padding-right: .3rem;
	}
	/* 尾部 */
	footer{
		position: absolute;
		bottom: .5rem;
		font-size: .6rem;
		color: #3190e8;
		left: 50%;
		transform: translateX(-50%);
	}
	i{
		vertical-align: middle;
	}
	footer>span{
		font-size: .45rem;
		vertical-align: middle;
		margin-left: .2rem;
	}
	.a{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #fff;
		width: 100%;
		height: 100%;
		z-index: 211;
	}
	/* 展示区域 */
	.deliverable_address{
		margin-top: 1.5rem;
	}
	li{
	    display: flex;
	    align-items: center;
	    border-bottom: .025rem solid #f5f5f5;
	    padding: .2rem;
	    line-height: 1rem;
		position: relative;
	}
	li .default_address{
	    opacity: 1;
	}
	li .choosed_address{
	    width: .5rem;
	    height: .5rem;
	    fill: #4cd964;
	    margin-right: .4rem;
	}
	header{
	    font-size: .4rem;
	    color: #333;
		margin-bottom: -.3rem;
	}
	header span:first-of-type {
	    font-size: .5rem;
	    font-weight: 700;
		margin-right: .2rem;
	}
	.address_detail{
	    width: 100%;
	    display: flex;
	    align-items: center;
	}
	.ellipsis {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.address_detail span{
	    font-size: .3rem;
	    color: #fff;
	    border-radius: .1rem;
	    /* background-color: #ff5722; */
	    height: .4rem;
	    line-height: .4rem;
	    padding: 0 .1rem;
	    margin-right: .3rem;
	}
	.address_detail p{
	    font-size: .4rem;
	    color: #777;
	}
	.choosed_address{
		position: absolute;
		top: 50%;
		left: .3rem;
		transform: translateY(-50%);
	}
</style>
