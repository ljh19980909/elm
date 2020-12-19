<template>
	<div class="reset">
		<div class="header">
			<div @click="back()"><i class="el-icon-arrow-left heade_i"></i></div>
			<span class="header_city">重置密码</span>
		</div>
		<!-- main 账号密码操作 -->
		<div class="account">
			<div class="div1">
				<input type="text" placeholder="账号" class="input1" maxlength="24" active-text="1" v-model="username">
			</div>
			<div class="div2">
				<input placeholder="旧密码" class="input2" maxlength="24" v-model="lastP">
				<input placeholder="请输入新密码" class="input2" maxlength="24" v-model="newP">
				<input placeholder="请确认密码" class="input2" maxlength="24" v-model="confP">
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
		<input type="button" value="确认修改" class="login_container" @click="reset">
		<!-- 动画 -->
		<div class="alter animate__animated animate__heartBeat shezhi" v-if="show">
			<i class="el-icon-warning-outline tb"></i>
			<p class="mes">{{shows}}</p>
			<el-button type="success" size="medium" style="width: 100%;background-color:#4cd964;font-size: .5rem;margin-top: 1rem;"
			 @click="show=!show"><strong>确认</strong></el-button>
		</div>
	</div>
</template>

<script>
	// import * from "@/request/api.js"
	import {
		Erweima,
		Chongzhi
	} from "@/request/api.js"
	export default {
		name: "Reset",
		data() {
			return {
				username: '',
				lastP: '',
				newP: '',
				confP: '',
				yzImg: "",
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
			changImg() {
				Erweima().then(data => {
					this.yzImg = data.code;
				}).catch(err => {
					console.log(err)
				});
			},
			reset() {
				if (this.username == "") {
					this.show = !this.show
					this.shows = "请输入正确的账号"
					return
				}
				if (this.lastP == "") {
					this.show = !this.show
					this.shows = "请输入旧密码"
					return
				}
				if (this.newP == "") {
					this.show = !this.show
					this.shows = "请输入新密码"
					return
				}
				if (this.confP == "") {
					this.show = !this.show
					this.shows = "请确认密码"
					return
				}
				if (this.numCode == "") {
					this.show = !this.show
					this.shows = "请输入验证码"
					return
				}
				Chongzhi({
					username: this.username,
					oldpassWord: this.lastP,
					newpassword: this.newP,
					confirmpassword: this.confP,
					captcha_code: this.numCode
				}).then(data => {
					this.message = data.message;
					if (this.message == "密码不正确") {
						this.changImg()
						this.show = !this.show
						this.shows = "密码不正确"
						return
					} else if (this.message == "两次密码不一致") {
						this.show = !this.show
						this.shows = "两次密码不一致"
						this.changImg()
						return
					} else if (this.message == "验证码不正确") {
						this.show = !this.show
						this.shows = "验证码不正确"
						this.changImg()
						return
					} else {
						this.show = !this.show
						this.shows = "密码修改成功"
						return
					}
				}).catch(err => {
					console.log(err)
				});
			}
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
		line-height: 1.5rem;
		color: #FFFFFF;
		font-size: .7rem;
		position: absolute;
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

	.input1,
	.input2,
	.input3 {
		outline: none;
		border: none;
		padding: .3rem .5rem;
		font-size: .4rem;
		width: 100%;
	}

	.input2 {
		width: 100%;
		border-top: .03rem solid #f1f1f1;
		border-bottom: .03rem solid #f1f1f1;
	}

	.input3 {
		margin-bottom: .3rem;
	}

	.cut {
		position: absolute;
		top: 6.6rem;
		right: .3rem;
	}

	.div3>img {
		position: absolute;
		top: 6.6rem;
		right: 1.5rem;
	}

	.cut_text {
		color: #3b95e9;
		margin-top: .18rem;
	}

	.login_container {
		width: 90%;
		margin: 0 5%;
		font-size: .5rem;
		color: #fff;
		line-height: 1.2rem;
		background-color: #4cd964;
		border: none;
		outline: none;
		border-radius: .2rem;
		text-align: center;
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
		margin-top: .7rem;
		font-size: .5rem;
	}

	.shezhi {
		top: 30%;
	}
</style>
