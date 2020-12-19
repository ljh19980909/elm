<template>
	<div>
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>修改用户名</strong></h4>
			</div>
		</div>
		<div class="middle">
			<input v-model="input" placeholder="输入用户名" @input="shuru" :class="{'show':styles}"></input>
		<p v-if="!styles">用户名只能修改一次（5-24字符之间）</p>	
		<p style="color: #ea3106;" v-if="styles">用户名长度在5到24位之间</p>	
		<el-button type="primary" v-if="!styles" @click="sure">确认修改</el-button>
		 <el-button type="primary" disabled v-if="styles">确认修改</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Setusername",
		data() {
			return {
				a: true,
				input: '',
				styles:false
			}
		},
		methods: {
			changea() {
				this.$store.commit("changea")
			},
			back() {
				this.changea()
				this.$router.go(-1)
			},
			shuru(){
				if(this.input.length==0||this.input.length>=5){
					this.styles=false
				}else{
					this.styles=true
				}
			},
			sure(){
				if(this.input==''){
					this.styles=true
				}
			}
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
	.middle{
		margin-top: 1.5rem;
		padding:0 .3rem;
	}
	.middle>p{
		line-height: 1rem;
	}
	.el-button{
		width: 100%;
		margin-top: .3rem;
	}
	input{
		width: 100%;
		height: 1rem;
		padding-left: .3rem;
		border: .03rem solid #333 !important;
		outline: none;
	}
	.show{
		border: .05rem solid red !important;
	}
</style>
