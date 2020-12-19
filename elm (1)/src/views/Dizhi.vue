<template>
	<div>
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>新增地址</strong></h4>
			</div>
		</div>
		<section>
			<div class="input-new">
				<input type="text" placeholder="请填写你的姓名" v-model="name">
			</div>
			<div class="input-new" @click="toadd">
				<input type="text" placeholder="小区/写字楼/学校等" v-model="input">
			</div>
			<div class="input-new">
				<input type="text" placeholder="请填写详细送餐地址" v-model="xiangxi">
			</div>
			<div class="input-new">
				<input type="text" placeholder="请填写能够联系到您的手机号" v-model="phone">
			</div>
			<div class="input-new">
				<input type="text" placeholder="备用联系电话（选填）" v-model="beiyong">
			</div>
		</section>
		<!-- 动画 -->
		<div class="alter animate__animated animate__heartBeat shezhi" v-if="show">
			<i class="el-icon-warning-outline tb"></i>
			<p class="mes">{{shows}}</p>
			<el-button type="success" size="medium" style="width: 100%;background-color:#4cd964;font-size: .5rem;margin-top: 1rem;"
			 @click="show=!show"><strong>确认</strong></el-button>
		</div>
		<el-button type="success" @click="toaddress">新增地址</el-button>
		<router-view class="sousuodizhi"></router-view>
	</div>
</template>

<script>
	import {
		AddAddress
	} from "@/request/api.js"
	export default {
		name: "Dizhi",
		data() {
			return {
				name: '',
				input: '',
				xiangxi: '',
				phone: '',
				beiyong: '',
				show: false,
				shows: ''
			}
		},
		methods: {
			back() {
				this.changea()
				this.$router.push({
					path: '/mine/zhuxiao/address'
				})
			},
			changea() {
				this.$store.commit("changea")
			},
			toadd() {
				this.$router.push({
					path: '/mine/zhuxiao/address/dizhi/addDetail'
				})
			},
			toaddress() {
				AddAddress({
					a: this.$store.state.achieves.id,
					b: {
						geohash: this.$store.state.msite.geohash,
						name: this.name,
						address: this.input,
						address_detail: this.xiangxi,
						phone: this.phone,
						phone_bk: this.beiyong,
						sex: 1,
						tag: "公司",
						tag_type: 4
					}
				}).then(data => {
					console.log(data)
					if (data.status == 1) {
						this.$store.commit('writeAddress', {
							geohash: this.$store.state.msite.geohash,
							name: this.name,
							address: this.input,
							address_detail: this.xiangxi,
							phone: this.phone,
							phone_bk: this.beiyong,
							sex: 1,
							tag: "公司",
							tag_type: 4
						})
						this.$router.push({
							path: '/mine/zhuxiao/address'
						})
					} else {
						if (this.name == '') {
							this.shows = '请填写你的名字！'
							this.show = true
							return
						} else if (this.xiangxi == '') {
							this.shows = '请填写详细送餐地址！'
							this.show = true
							return
						} else if (this.phone == '') {
							this.shows = '请填写能够联系的手机号！'
							this.show = true
							return
						}
					}
				}).catch(err => {
					console.log(err)
				});
			}
		},
		updated() {
			this.input = this.$store.state.dizhi
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

	section {
		margin-top: 1.5rem;
		background-color: #FFFFFF;
		padding: .3rem;
	}

	.input-new {
		margin: .2rem 0;
	}

	.input-new>input {
		background-color: #f2f2f2;
		height: 1.2rem;
		width: 100%;
		padding-left: .3rem;
		border-radius: .2rem;
		outline: none;
	}

	.el-button {
		margin-top: .3rem;
		width: 100%;
		height: 1rem;
	}

	.sousuodizhi {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #F5F5F5;
		z-index: 207;
	}

	/*遮罩层*/
	.alter {
		position: absolute;
		top: 50%;
		left: 15%;
		text-align: center;
		background-color: white;
		width: 70%;
		height: 30%;
	}

	.alter>.tb {
		color: orange;
		font-size: 2rem;
	}

	.alter>.mes {
		color: black;
		margin-top: 1.4rem;
		font-size: .5rem;
	}

	.shezhi {
		top: 30%;
	}
</style>
