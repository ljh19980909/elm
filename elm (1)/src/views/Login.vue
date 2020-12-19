<template>
	<div class="login">
		<div class="header">
			<div @click="back()"><i class="el-icon-arrow-left heade_i"></i></div>
			<span class="header_city">密码登录</span>
		</div>
		<!-- main 账号密码操作 -->
		<div class="account">
			<div class="div1">
				<input type="text" placeholder="账号" class="input1" maxlength="24" v-model="username" active-text="1">
			</div>
			<div class="div2">
				<input :type="inputSta" placeholder="密码" class="input2" maxlength="24" v-model="password">
				<el-switch v-model="value" @click.native="changeSwitch"> </el-switch>
			</div>
			<div class="div3">
				<input type="text" placeholder="验证码" class="input3" maxlength="4" v-model="numCode">
				<img :src="yzImg" alt="">
				<div class="cut" @click="changImg">
					<p>看不清</p>
					<p class="cut_text">换一张</p>
				</div>
			</div>
		</div>
		<p class="login_tips">温馨提示：未注册过的账号，登录时将自动注册</p>
		<p class="login_tips">注册过的用户可凭账号密码登录</p>
		<input type="button" value="登录" class="login_container" @click="denglu">
		<!-- 动画 -->
		<div class="alter animate__animated animate__heartBeat shezhi" v-if="show">
			<i class="el-icon-warning-outline tb"></i>
			<p class="mes">{{shows}}</p>
			<el-button type="success" size="medium" style="width: 100%;background-color:#4cd964;font-size: .5rem;margin-top: 1rem;"
			 @click="show=!show"><strong>确认</strong></el-button>
		</div>
		<router-link to="/reset" class="reset">重置密码</router-link>
	</div>
</template>

<script>
	import {
		Erweima,
		Denglu
	} from "@/request/api.js"
	export default {
		name: "Login",
		data() {
			return {
				username: '',
				password: '',
				value: true,
				yzImg: "",
				inputSta: 'password',
				numCode: '',
				message: '',
				show: false,
				shows: ''
			}
		},
		created() {
			//获取二维码
			this.changImg()
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			// 改变二维码
			changImg() {
				// this.axios.post('/v1/captchas', {})
				Erweima().then(data => {
					this.yzImg = data.code;
				}).catch(err => {
					console.log(err)
				});
			},
			// 改变密码类型
			changeSwitch() {
				if (this.value) {
					this.inputSta = "password"
				} else {
					this.inputSta = "text"
				}
			},
			//点击登录
			denglu() {
				if (this.username == "") {
					this.show = !this.show
					this.shows = "请输入手机号/邮箱/用户名"
					return
				}
				if (this.password == "") {
					this.show = !this.show
					this.shows = "请输入密码"
					return
				}
				if (this.numCode == "") {
					this.show = !this.show
					this.shows = "请输入验证码"
					return
				}
				Denglu({
						username: this.username,
						password: this.password,
						captcha_code: this.numCode
					}).then(data => {
						console.log(data)
						this.message = data.message;
						if (this.message == "验证码不正确") {
							this.show = !this.show
							this.shows = "验证码不正确"
							this.changImg()
							return
						}
						console.log(this.message)
						if (this.message == "密码错误") {
							this.changImg()
							this.show = !this.show
							this.shows = "密码不正确"
						} else {
							this.$store.commit('achieve', data)
							this.$router.push('/mine').catch(() => {})
							return
						}
					}).catch(err => {
						console.log(err)
					});
			},
		}
	}
</script>

<style scoped>
	.header {
		background-color: #3190e8;
		position: fixed;
		z-index: 100;
		top: 0;
		width: 100%;
		height: 1.5rem;
	}

	.heade_i {
		position: absolute;
		line-height: 1.5rem;
		color: #FFFFFF;
		font-size: .7rem;
	}

	.header_city {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		line-height: 1.5rem;
		font-weight: 700;
		font-size: .5rem;
		color: #FFFFFF;
	}

	.account {
		margin-top: 1.8rem;
	}

	.div2 {
		border-top: .03rem solid #f1f1f1;
		border-bottom: .03rem solid #f1f1f1;
	}

	.input1,
	.input2,
	.input3 {
		outline: none;
		border: none;
		padding: .3rem .5rem;
		font-size: .4rem;
		width: 100%;
	}

	.el-switch {
		position: absolute;
		top: 3.3rem;
		right: .3rem;
	}

	.cut {
		position: absolute;
		top: 4.2rem;
		right: .3rem;
	}

	.div3>img {
		position: absolute;
		top: 4.25rem;
		right: 1.5rem;
	}

	.cut_text {
		color: #3b95e9;
		margin-top: .15rem;
	}

	.login_tips {
		color: red;
		padding-left: .2rem;
		margin: .3rem;
	}

	.login_container {
		width: 90%;
		margin: 0 5%;
		font-size: .5rem;
		color: #fff;
		line-height: 1rem;
		background-color: #4cd964;
		border: none;
		outline: none;
		border-radius: .2rem;
	}

	.reset {
		color: #3b95e9;
		position: absolute;
		top: 8.3rem;
		right: .3rem;
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
		z-index: 1;
	}

	.alter>.tb {
		color: orange;
		font-size: 2rem;
	}

	.alter>.mes {
		color: black;
		margin-top: .7rem;
		font-size: .5rem;
	}

	.shezhi {
		top: 30%;
	}
</style>
