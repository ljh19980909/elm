<template>
	<div class="service">
		<!-- 顶部信息 -->
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>会员中心</strong></h4>
			</div>
		</div>
		<!-- 客服信息 -->
		<div class="content" v-if="geta">
			<ul class="content_top">
				<li>
					<i class="el-icon-service" style="color: #ff7b52;"></i>
					<p>在线客服</p>
				</li>
				<li>
					<i class="el-icon-phone" style="color: #6ac20b;"></i>
					<p>在线客服</p>
				</li>
			</ul>
			<h2>热门问题</h2>
			<div @click="svipDes()">
				<span>超级会员权益说明</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="signIn()">
				<span>签到规则</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="uLevel()">
				<span>用户等级说明</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="integral()">
				<span>积分问题</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="makeM()">
				<span>教我拍大片</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="payPro()">
				<span>支付问题</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="otherPro()">
				<span>其它问题</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="JusdaPro()">
				<span>准时达问题</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="vipdes()">
				<span>会员说明</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="redPacket()">
				<span>红包问题</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="rules()">
				<span>活动细则</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="retroactive()">
				<span>补签规则</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="privilege()">
				<span>优惠说明</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="disclaimer()">
				<span>免责声明</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="voucher()">
				<span>代金券说明</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="business()">
				<span>商务合作</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="balancePro()">
				<span>余额问题</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="greatBusinesses()">
				<span>超赞商家</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="anonymous()">
				<span>匿名购买</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
			<div @click="activePro()">
				<span>活动问题</span>
				<span><i class="el-icon-arrow-right"></i></span>
			</div>
		</div>
		<!-- 二级路由 -->
		<div class="page">
			<router-view class="a"></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Service",
		data() {
			return {
				a: true
			}
		},
		methods: {
			// 返回上一级
			back() {
				this.$router.go(-1)
			},
			// 超级会员
			svipDes() {
				this.changea()
				this.$router.push('/service/svipdes')
			},
			// 签到规则
			signIn() {
				this.changea()
				this.$router.push('/service/signin')
			},
			// 用户等级
			uLevel() {
				this.changea()
				this.$router.push('/service/ulevel')
			},
			// 积分问题
			integral() {
				this.changea()
				this.$router.push('/service/integral')
			},
			// 拍片
			makeM() {
				this.changea()
				this.$router.push('/service/makem')
			},
			// 支付
			payPro() {
				this.changea()
				this.$router.push('/service/paypro')
			},
			// 其他
			otherPro() {
				this.changea()
				this.$router.push('/service/otherpro')
			},
			// 准时达
			JusdaPro() {
				this.changea()
				this.$router.push('/service/jusdapro')
			},
			// 会员
			vipdes() {
				this.changea()
				this.$router.push('/service/vipdes')
			},
			// 红包
			redPacket() {
				this.changea()
				this.$router.push('/service/redpacket')
			},
			// 活动
			rules() {
				this.changea()
				this.$router.push('/service/rules')
			},
			// 补签
			retroactive() {
				this.changea()
				this.$router.push('/service/retroactive')
			},
			// 优惠
			privilege() {
				this.changea()
				this.$router.push('/service/privilege')
			},
			// 免责
			disclaimer() {
				this.changea()
				this.$router.push('/service/disclaimer')
			},
			// 代金券
			voucher() {
				this.changea()
				this.$router.push('/service/voucher')
			},
			// 商务
			business() {
				this.changea()
				this.$router.push('/service/business')
			},
			// 余额
			balancePro() {
				this.changea()
				this.$router.push('/service/balancepro')
			},
			// 超赞
			greatBusinesses() {
				this.changea()
				this.$router.push('/service/greatbusinesses')
			},
			// 匿名
			anonymous() {
				this.changea()
				this.$router.push('/service/anonymous')
			},
			// 活动
			activePro() {
				this.changea()
				this.$router.push('/service/activepro')
			},
			// 路由改变
			changea() {
				this.$store.commit("changea")
			}
		},
		computed: {
			geta() {
				return this.$store.state.a
			},
		},
		created() {
			this.$store.state.a = true
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

	.content {
		padding-top: 1rem;
		clear: both;
		width: 100%;
		background-color: #FFFFFF;
		margin-top: .3rem;
	}

	.content .content_top {
		padding-left: 0;
		overflow: hidden;
		text-align: center;
	}

	.content_top li {
		float: left;
		padding-top: .4rem;
		padding-bottom: .4rem;
		border-bottom: .01rem solid rgba(229, 229, 229, 0.5);
		border-right: .01rem solid rgba(229, 229, 229, 0.5);
	}

	.content_top li i {
		font-size: .7rem;
		margin-bottom: .2rem;
	}

	.content_top li p {
		font-size: .4rem;
	}

	.content_top li:first-child {
		width: 50%;
	}

	.content_top li:last-child {
		width: 50%;
	}

	.content h2 {
		height: 1.9rem;
		line-height: 1.9rem;
		padding-left: .43rem;
		border-bottom: .01rem solid rgba(229, 229, 229, 0.5);
	}

	.content div {
		position: relative;
		height: 1.26rem;
		line-height: 1.26rem;
		font-size: .45rem;
		padding-left: .43rem;
		border-bottom: .01rem solid rgba(229, 229, 229, 0.5);
	}

	.content div span:first-child {
		color: #666;
		font-size: .375rem;
	}

	.content div span:last-child {
		float: right;
		color: #ababab;
		margin-right: .1rem;
	}
</style>
