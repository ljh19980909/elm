<template>
	<div>
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>添加地址</strong></h4>
			</div>
		</div>
		<div class="middle">
			<ul>
				<li>
					<span>联系人</span>
					<input type="text" placeholder="你的名字" v-model="names">
				</li>
				<li>
					<i class="el-icon-circle-check" style="margin-left: 30%;" @click="colors=true" :style="colors?'color: #4cd964;':'color: #ccc;'"></i>
					<span>先生</span>
					<i class="el-icon-circle-check" style="margin-left: -15%;"@click="colors=false" :style="!colors?'color: #4cd964;':'color: #ccc;'"></i>
					<span>女士</span>
				</li>
				<li>
					<span>联系电话</span>
					<input type="text" placeholder="你的手机号" v-model="phones">
					<i class="jia" @click="jia">+</i>
				</li>
				<li v-if="bei">
					<span></span>
					<input type="text" placeholder="备选电话" v-model="beifen">
				</li>
				<li>
					<span>送餐地址</span>
					<input type="text" placeholder="小区/写字楼/学校等" v-model="input" @click="toSearchAddress">
				</li>
				<li>
					<span></span>
					<input type="text" placeholder="详细地址（如门牌号等)" v-model="xiangxi">
				</li>
				<li>
					<span>标签</span>
					<input type="text" placeholder="无/家/学校/公司" v-model="tags">
				</li>
			</ul>
		</div>
		<el-button type="success" @click="sure">确定</el-button>
		<router-view class="a"></router-view>
	</div>
</template>

<script>
	import { AddAddress } from "@/request/api.js"
	export default {
		name: "AddAddress",
		data() {
			return {
				input: '',
				bei: false,
				colors:true,
				names:'',
				phones:'',
				beifen:'',
				tags:'',
				tag:'',
				xiangxi:''
			}
		},
		methods: {
			back() {
				this.$router.push({
					path:'/shop/confirmOrder/chooseAddress',
				})
			},
			jia() {
				this.bei = true
			},
			toSearchAddress() {
				this.$router.push({
					path: '/shop/confirmOrder/chooseAddress/addAddress/searchAddress'
				})
			},
			sure(){
				// 是否填写完整
				if(this.names==''||this.phones==''||this.input==''||this.tags==''){
					alert('请填写详细信息!!')
					return;
				}
				// 标签类型
				switch(this.tags){
					case '家':
						this.tag=2;
						break;
					case '公司':
						this.tag=4;
						break;	
					default:
						this.tag=3;
						break;	
				}
				// 添加地址请求
				AddAddress({
					a:this.$store.state.achieves.id,
					b:{
						geohash:this.$store.state.msite.geohash,
						address: this.input,
						address_detail: this.xiangxi,
						name: this.names,
						phone: this.phones,
						phone_bk: this.beifen,
						sex: (this.colors==true?1:2),
						tag: this.tags,
						tag_type: this.tag,
					}
				}).then(data => {
					console.log(data)
					if(data.status==1){
						this.$router.push({
							path:'/shop/confirmOrder/chooseAddress'
						})
						this.$store.commit('writeAddress',{name:this.names,sex:this.colors,phone:this.phones,tag:this.tags,address_detail:this.input})
					}
					if(data.message=='用户ID参数错误'){
						alert('请先登录账号')
						this.$router.push({
							path:'/login'
						})
					}
				}).catch(err => {
					console.log(err)
				});
			}
		},
		updated() {
			this.input=this.$route.query.address
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
	.middle {
		margin-top: 1.2rem;
		font-size: .45rem;
	}
	.middle li {
		width: 100%;
		height: 1.5rem;
		background-color: #FFFFFF;
		line-height: 1.5rem;
		padding: 0 .3rem;
		border-top: .025rem solid #f5f5f5;
	}
	.middle li>span {
		display: inline-block;
		width: 30%;
	}
	input {
		font-size: .4rem;
		color: #999;
		outline: none;
	}
	.el-icon-circle-check {
		color: #ccc;
		margin-right: .1rem;
		font-size: .5rem;
	}
	.el-button {
		width: 90%;
		margin: .8rem 5%;
		background-color: #4cd964;
		font-size: .45rem;
	}
	.jia {
		font-size: 1rem;
		float: right;
		font-weight: 300;
		color: #3190E8;
	}
	.a{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #fff;
		z-index: 212;
	}
</style>
