<template>
	<div>
		<div class="header">
			<header>
				<router-link to="/home">ele.me</router-link>
				<router-link to="/login" v-if="info==''">登录|注册</router-link>
				<router-link to="/mine" v-if="info!=''"><i class="el-icon-user"></i></router-link>
			</header>
			<div class="second">
				<span>当前定位城市:</span>
				<span>定位不准时，请在城市列表中选择</span>
			</div>
			<router-link :to="{path:'/citys',query:{a:'郑州',b:32}}" class="a">
				<p>
					<span>郑州</span>
					<span class="el-icon-arrow-right"></span>
				</p>
			</router-link>
			<div class="third">
				<p>热门城市</p>
				<router-link v-for="v in hot" :to="{path:'/citys',query:{a:v.name,b:v.id}}" class="hot">{{v.name}}</router-link>
			</div>
			<div class="fourth">
				<ul>
					<li v-for="(v,i) in group">
						<p>{{v}}</p>
						<router-link v-for="v in groups[group[i]]" :to="{path:'/citys',query:{a:v.name,b:[v.id,v]}}" class="groups">{{v.name}}</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		City
	} from "@/request/api.js"
	console.log(City)
	export default {
		name: "Header",
		data() {
			return {
				hot: "",
				group: '',
				groups: "",
				info: ''
			}
		},
		created() {
			this.info = this.$store.state.achieves
			City({
				type: 'hot'
			}).then(data => {
				console.log(data)
				this.hot = data
			}).catch(err => {
				console.log(err)
			});
			City({
				type:'group'
			}).then(data => {
				this.group = Object.keys(data).sort()
				this.groups = data
			}).catch(err => {
				console.log(err)
			});
		},
	}
</script>

<style scoped>
	header {
		background-color: #3190e8;
		position: fixed;
		width: 100%;
		height: 1.5rem;
		line-height: 1.5rem;
		top: 0;
		padding: 0 .3rem;
	}

	a {
		color: #fff;
		font-size: .4rem;
	}

	a:nth-child(2) {
		float: right;
	}

	.second {
		margin-top: 1.5rem;
		line-height: 1.3rem;
		padding: 0 .3rem;
		background-color: #FFFFFF;
		border-bottom: 1px solid #e4e4e4;
		font-size: .3rem;
	}

	span:nth-child(2) {
		color: #9f9f9f;
		font-weight: 900;
		float: right;
	}

	.a {
		color: #3190e8;
		font-size: .5rem;
	}

	.a>p {
		line-height: 1rem;
		border-bottom: .03rem solid #999;
		padding: 0 .3rem;
	}

	.el-icon-arrow-right {
		line-height: 1rem;
		font-size: .5rem;
		fill: #999;
		float: right;
	}

	.third {
		margin-top: .3rem;
		border-top: .03rem solid #999;
		line-height: 1rem;
		font-size: .4rem;
		font-weight: 700;
		background-color: #FFFFFF;
		text-align: left;
		color: #666;
	}

	.third>p {
		padding: 0 .3rem;
		border-bottom: .03rem solid #999;
	}

	.hot {
		float: left;
		text-align: center;
		color: #3190e8;
		border-bottom: .025rem solid #e4e4e4;
		border-right: .025rem solid #e4e4e4;
		width: 25%;
		height: 1.25rem;
		font: .4rem/1.25rem Microsoft YaHei;
		background-color: #FFFFFF;
	}

	.fourth {
		border-top: 1px solid #999;
		font: .4rem/1.25rem Microsoft YaHei;
	}

	.fourth p {
		width: 100%;
		line-height: 1rem;
		float: left;
		padding: 0 0.3rem;
		font-size: .475rem;
		color: #999;
		margin-top: .4rem;
		background-color: #FFFFFF;
		border-bottom: .03rem solid #999;
		border-top: .03rem solid #999;
	}

	.groups {
		color: #666;
		float: left;
		text-align: center;
		border-bottom: .025rem solid #e4e4e4;
		border-right: .025rem solid #e4e4e4;
		width: 25%;
		height: 1.25rem;
		font: .4rem/1.25rem Microsoft YaHei;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		box-sizing: border-box;
		background-color: #FFFFFF;
		padding: 0 .3rem;
	}

	.el-icon-user {
		font-size: .5rem;
	}
</style>
