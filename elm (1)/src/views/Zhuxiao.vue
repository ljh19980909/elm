<template>
	<div>
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>账户信息</strong></h4>
			</div>
		</div>
		<div class="middle">
			<li class="lis">
				<p>头像</p>
				<p>
					<img :src="'//elm.cangdu.org/img/'+info.avatar+''" class="person" v-if="!imgurl">
					<img :src="'//elm.cangdu.org/img/'+imgurl.data.image_path+''" class="person" v-if="imgurl">
					<span class="el-icon-arrow-right touxiang"></span>
				</p>
				<input name="file" class="upimg" type="file" accept="image/png,image/gif,image/jpeg" @change="update" />
			</li>
			<li class="lis" @click="tosetusername">
				<p>用户名</p>
				<p class="user">
					<span style="margin-right: .2rem;">{{info.username}}</span>
					<span class="el-icon-arrow-right"></span>
				</p>
			</li>
			<li class="lis" @click="toaddress">
				<p>收货地址</p>
				<p>
					<span class="el-icon-arrow-right"></span>
				</p>
			</li>
		</div>
		<p class="kongbai">账号绑定</p>
		<li class="lis" @click="phone=!phone">
			<p>
				<span class="el-icon-mobile-phone"></span>
				<span>手机</span>
			</p>
			<p class="user">
				<span class="el-icon-arrow-right"></span>
			</p>
		</li>
		<p class="kongbai">安全设置</p>
		<li class="lis" @click="toreset">
			<p>登录密码</p>
			<p class="user">
				<span style="margin-right: .2rem;">修改</span>
				<span class="el-icon-arrow-right"></span>
			</p>
		</li>
		<el-button type="danger" @click="quits=!quits">退出登录</el-button>
		<div class="alter animate__animated animate__heartBeat" v-if="quits">
			<i class="el-icon-warning-outline tb"></i>
			<p class="mes">是否退出登录</p>
			<el-row>
				<el-button type="success" size="medium" style="width: 40%;background-color:darkgrey;border: .01rem solid darkgrey"
				 @click="quits=!quits">再等等</el-button>
				<el-button type="success" size="medium" style="width: 40%;background-color:#d8584a;border: .01rem solid #d8584a"
				 @click="quit">退出登录</el-button>
			</el-row>
		</div>
		<div class="alter animate__animated animate__heartBeat shezhi" v-if="phone">
			<i class="el-icon-warning-outline tb"></i>
			<p class="mes">请在手机APP设置</p>
			<el-button type="success" size="medium" style="width: 100%;background-color:#4cd964;font-size: .5rem;" @click="phone=!phone"><strong>确认</strong></el-button>
		</div>
		<router-view class="yhm"></router-view>
	</div>
</template>

<script>
	import { Zhuxiao,Quit } from "@/request/api.js"
	export default {
		name: "Zhuxiao",
		data() {
			return {
				info: '',
				quits: false,
				phone: false,
				imgurl:''
			}
		},
		methods: {
			back() {
				this.changea()
				this.$router.push({
					path: '/mine'
				})
			},
			changea() {
				this.$store.commit("changea")
			},
			toreset() {
				this.$router.push({
					path: "/reset"
				})
			},
			tosetusername() {
				this.$router.push({
					path: "/mine/zhuxiao/setusername"
				})
			},
			toaddress() {
				this.$router.push({
					path: "/mine/zhuxiao/address"
				})
			},
			update(e) { // 上传照片
				let self = this
				let file = e.target.files[0]
				let param = new FormData()
				param.append('file', file)
				// 添加请求头
				Zhuxiao({type:param}).then(res => {
					this.imgurl = res
					this.$store.commit('zhaopian',this.imgurl.data.image_path)
					console.log(this.imgurl)
				})
			},
			quit() {
				this.quits = !this.quits
				Quit().then(data => {
					if (data.message == '退出成功') {
						this.$router.push({
							path: '/mine'
						})
						this.$store.commit('achieve', 'a')
					}
				}).catch(error => {
					console.log(error)
				})
			}
		},
		created() {
			this.info = this.$store.state.achieves
		}
	}
</script>

<style scoped>
	@import "~animate.css";

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

	.person {
		width: 1.2rem;
		border-radius: 50%;
	}

	.lis {
		background-color: #FFFFFF;
		width: 100%;
		border-top: .03rem solid #ddd;
		float: left;
		height: 1.3rem;
		line-height: 1.3rem;
		font-size: .4rem;
		padding: 0 .3rem;
	}

	.middle>li:nth-child(1) {
		margin-top: 1.5rem;
		height: 1.8rem;
		line-height: 1.8rem;
		padding: 0 .3rem;
	}

	.middle>li img {
		margin-top: .3rem;
		margin-right: .7rem;
	}

	.touxiang {
		margin-top: -.5rem;
		font-size: .5rem;
		color: #333;
		position: absolute;
		right: .3rem;
		top: 2.7rem;
	}

	.lis>p:nth-child(1) {
		float: left;

	}

	.lis>p:nth-child(2) {
		float: right;
	}

	.el-icon-arrow-right {
		font-size: .5rem;
	}

	.kongbai {
		height: 1rem;
		width: 100%;
		float: left;
		line-height: 1rem;
		padding-left: .3rem;
	}

	.el-icon-mobile-phone {
		margin-right: .2rem;
		background-color: #00BFFF;
		padding: .08rem;
		color: #fff;
		border-radius: .1rem;
	}

	.el-button {
		width: 100%;
		margin-top: 1rem;
	}

	.yhm {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #F5F5F5;
		z-index: 207;
	}

	.upimg {
		position: absolute;
		left: 2.6rem;
		color: #FFFFFF;
		/* background-color: #FFFFFF; */
		line-height: 1.8rem;
		outline: none;
		border-color: transparent;
		box-shadow: none;
		opacity: 0;
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
		margin-top: .5rem;
		font-size: .5rem;
	}

	.shezhi {
		top: 30%;
	}
</style>
