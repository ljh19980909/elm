<template>
	<div>
		<!-- 第一部分 -->
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>订单备注</strong></h4>
			</div>
		</div>
		<!-- 第二部份 -->
		<div class="middle">
			<p>快速备注</p>
			<ul class="remark_arr_list_ul">
				<li class="remark_arr_list_li">
					<span class="remark_item_li first" style="margin-right: -.1rem;" @click="click('1')" :class="lajiao=='1'?'new':'old'">不要辣</span>
					<span class="remark_item_li" @click="click('2')" :class="lajiao=='2'?'new':'old'" style="border: .025rem solid #3190e8;">少点辣</span>
					<span class="remark_item_li last" @click="click('3')" :class="lajiao=='3'?'new':'old'">多点辣</span>
				</li>
				<li class="remark_arr_list_li">
					<span class="remark_item_li first last" @click="xiangcai=!xiangcai" :class="xiangcai?'new':'old'">不要香菜</span>
				</li>
				<li class="remark_arr_list_li">
					<span class="remark_item_li first last" @click="yangcong=!yangcong" :class="yangcong?'new':'old'">不要洋葱</span>
				</li>
				<li class="remark_arr_list_li">
					<span class="remark_item_li first last" @click="cu=!cu" :class="cu?'new':'old'">多点醋</span>
				</li>
				<li class="remark_arr_list_li">
					<span class="remark_item_li first last" @click="cong=!cong" :class="cong?'new':'old'">多点葱</span>
				</li>
				<li class="remark_arr_list_li">
					<span class="remark_item_li first" @click="clicks('1')" :class="bing=='1'?'new':'old'">去冰</span>
					<span class="remark_item_li last" @click="clicks('2')" :class="bing=='2'?'new':'old'">少冰</span>
				</li>
			</ul>
		</div>
		<!-- 第三部分 -->
		<div class="second">
			<p>其他备注</p>
			<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入备注内容(可不填)" v-model="textarea2">
			</el-input>
		</div>
		<el-button type="success" @click="sure">确定</el-button>
	</div>
</template>

<script>
	export default {
		name: "Remark",
		data() {
			return {
				a: true,
				textarea2: '',
				lajiao: 0,
				xiangcai: false,
				yangcong: false,
				cu: false,
				cong: false,
				bing: 0
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			// 辣
			click(v) {
				this.lajiao = v
			},
			// 冰
			clicks(v) {
				this.bing = v
			},
			//确定
			sure() {
				switch (this.lajiao) {
					case 1:
						'不要辣';
						break;
					case 2:
						'少点辣';
						break;
					case 3:
						'多点辣';
						break;
				}
				// '不要香菜'=this.xiangcai?true,false
				this.$router.push({
					path: '/shop/confirmOrder',
				})
				this.$store.commit('kouwei', {
					lajiao: this.lajiao,
					xiangcai:this.xiangcai,
					yangcong:this.yangcong,
					cu:this.cu,
					cong:this.cong,
					bing: this.bing,
					beizhu: this.textarea2
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

	.el-button {
		width: 90%;
		margin-top: .3rem;
		background-color: #4cd964;
		margin-left: 5%;
	}

	/* 第二部份 */
	.middle,
	.second {
		margin-top: 1.5rem;
		background-color: #FFFFFF;
		width: 100%;
		padding: .3rem .3rem;
	}

	.middle>p,
	.second>p {
		line-height: 1rem;
		font-size: .4rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
	}

	li {
		margin-right: .6rem;
		margin-bottom: .6rem;
	}

	ul li .first {
		border-left: .025rem solid #3190e8;
		border-top-left-radius: .2rem;
		border-bottom-left-radius: .2rem;
	}

	ul li span {
		font-size: .4rem;
		color: #333;
		padding: .1rem .2rem;
		border: .025rem solid #3190e8;
		border-left: 0;
	}

	ul li .last {
		border-top-right-radius: .2rem;
		border-bottom-right-radius: .2rem;
	}

	/* 第三部分 */
	.second {
		margin-top: .3rem;
	}

	.new {
		background-color: #3190e8;
		color: #fff;
	}

	.old {
		background-color: #fff;
		color: #000;
	}
</style>
