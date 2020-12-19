<template>
	<div>
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>编辑地址</strong></h4>
			</div>
			<span @click="aditor">{{adit?'编辑':'完成'}}</span>
		</div>
		<ul v-if="writeAddresses!=''">
			<li v-for="(v,i) in writeAddresses">
				<div>
					<p>{{v.address_detail}}</p>
					<p>{{v.phone}}</p>
				</div>
				<span class="el-icon-close" v-if="!adit" @click="del(v,i)"></span>
			</li>
		</ul>
		<li @click="toadd" class="lis" :style="writeAddresses==''?'margin-top: 1.5rem;':''">
			<span>新增地址</span>
			<span class="el-icon-arrow-right"></span>
		</li>
		<router-view class="dizhi"></router-view>
	</div>
</template>

<script>
	export default {
		name: "Address",
		data() {
			return {
				a: true,
				adit: true,
				writeAddresses: ''
			}
		},
		methods: {
			back() {
				this.changea()
				this.$router.push({
					path: '/mine/zhuxiao/'
				})
			},
			changea() {
				this.$store.commit("changea")
			},
			aditor() {
				this.adit = !this.adit
			},
			toadd() {
				this.$router.push({
					path: "/mine/zhuxiao/address/dizhi"
				})
			},
			del(v,i) {
				console.log(i)
				console.log(v)
				// this.axios.DELETE('v1/users/'+this.$store.state.achieves.id+'/addresses/'+this.$store.state.achieves.id+'',{
					
				// }).then(data => {
					
				// }).catch(err => {
					
				// })
			}
		},
		created() {
			this.writeAddresses = this.$store.state.writeAddresses
			console.log(this.$store.state.writeAddresses)
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

	.head_top>span {
		float: right;
		line-height: 1.2rem;
		font-size: .4rem;
		color: #fff;
		margin-right: .2rem;
	}


	.dizhi {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #F5F5F5;
		z-index: 207;
	}

	ul {
		margin-top: 1.5rem;
		float: left;
		background-color: #fff;
		width: 100%;
		margin-bottom: .2rem;
	}

	ul>li {
		height: 1.5rem;
		padding: .3rem;
		border-bottom: 1px solid #d9d9d9;
		font-size: .4rem;
		display: flex;
		justify-content: space-between;
	}

	ul>li:nth-child(1) {
		background: #fff8c3;
	}

	ul>li p {
		line-height: .5rem;
	}

	ul>li span {
		line-height: 1rem;
		font-size: .5rem;
	}

	.lis {
		float: left;
		width: 100%;
		height: 1rem;
		background-color: #FFFFFF;
		line-height: 1rem;
		font-size: .4rem;
		padding: 0 .3rem;
		display: flex;
		justify-content: space-between;
	}

	.el-icon-arrow-right {
		font-size: .5rem;
		margin-top: 0.25rem;
		color: #666;
	}
</style>
