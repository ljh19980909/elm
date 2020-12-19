<template>
	<div class="city">
		<div class="city_container">
			<!-- 头部导航栏 -->
			<div id="head_top">
				<router-link to="/home">
					<i class="el-icon-arrow-left heade_i"></i>
				</router-link>
				<div class="title_head ellipsis">
					<span>{{this.$route.query.a}}</span>
				</div>
				<router-link to="/home" class="change_city">切换城市</router-link>
			</div>
			<!-- 搜索框 -->
			<div>
				<el-input v-model="input" placeholder="输入学校、商务楼、地址" class="text"></el-input>
				<el-button type="primary" icon="el-icon-search" class="submit" @click="a">提交</el-button>
			</div>
			<!-- 搜索历史 -->
			<div class="search_history">
				<h4>搜索历史</h4>
				<ul class="getpois_ul">
					<!-- 现搜 -->
					<li v-for="v in name" @click="d(v)" v-if="Bool">
						<div @click="tomsite(v)">
							<h4 class="pois_name ellipsis">{{v.name}}</h4>
							<p class="pois_address ellipsis">{{v.address}}</p>
						</div>
					</li>
					<!-- 历史 -->
					<li v-if="!Bool">
						<div @click="tomsite(v)" v-for="(v,i) in historys">
							<h4 class="pois_name ellipsis">{{v.name}}</h4>
							<p class="pois_address ellipsis">{{v.address}}</p>
						</div>
					</li>
					<el-button type="primary" class="submit" @click="clear">清空</el-button>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Loading from "../components/Loading.vue"
	import {
		CitySearch
	} from "@/request/api.js"
	export default {
		name: "Citys",
		data() {
			return {
				input: '',
				name: "",
				Bool: false,
				history: [],
				historys: [],
			}
		},
		methods: {
			// 点击搜索框搜索
			a() {
				this.Bool = true
				CitySearch(
					this.$route.query.b[0],
					this.input
				).
				then(data => {
					this.name = data
				}).catch(err => {
					console.log(err)
				});
			},
			// 搜索
			d(v) {
				this.history = [...JSON.parse(localStorage.a)]
				this.history.unshift({
					name: v.name,
					address: v.address,
					geohash: v.geohash,
					latitude: v.latitude,
					longitude: v.longitude
				})
				let obj = {},
					arr = [];
				arr = this.history.reduce(function(item, next) {
					obj[next.name] ? '' : obj[next.name] = true && item.push(next);
					return item;
				}, []);
				localStorage.a = JSON.stringify(this.history)
			},
			// 清空
			clear() {
				this.historys = []
				localStorage.a = '[]'
			},
			// 去商品页
			tomsite(v) {
				this.$store.commit('tomsite', v)
				this.$router.push({
					path: '/msite'
				})
			}
		},
		created() {
			if (localStorage.a) {
				this.historys = JSON.parse(localStorage.a)
			} else {
				localStorage.a = '[]'
			}
		},
	}
</script>

<style scoped>
	#head_top {
		background-color: #3190e8;
		position: fixed;
		z-index: 100;
		top: 0;
		width: 100%;
		height: 1.5rem;
	}

	.heade_i {
		line-height: 1.5rem;
		float: left;
		color: #FFFFFF;
		font-size: .8rem;
	}

	.title_head {
		line-height: 1.5rem;
		text-align: center;
		font-size: .7rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		color: #FFFFFF;
		font-weight: 600;
	}

	.change_city {
		float: right;
		color: #FFFFFF;
		font-size: .45rem;
		line-height: 1.5rem;
		margin-right: .3rem;
	}

	.city_container {
		padding-top: 1.8rem;
	}

	.text {
		width: 90%;
		margin-left: 5%;
		margin-bottom: .3rem;
	}

	.submit {
		width: 90%;
		margin-left: 5%;
		color: #FFFFFF;
		margin-bottom: .3rem;
	}

	.search_history {
		background-color: #f5f5f5;
	}

	.search_history>h4 {
		border-top: .03rem solid #e4e4e4;
		border-bottom: .03rem solid #e4e4e4;
		padding-left: .5rem;
		font: .4rem/.6rem Microsoft YaHei;
	}

	.getpois_ul {
		background-color: #fff;
		border-top: .03rem solid #e4e4e4;
	}

	.getpois_ul li {
		margin: 0 auto;
		padding-top: .45rem;
		border-bottom: .03rem solid #e4e4e4;
	}

	.pois_name {
		margin: 0 auto .35rem;
		width: 90%;
		font-size: .45rem;
		color: #333;
	}

	.pois_address {
		width: 90%;
		margin: 0 0 .45rem 1rem;
		font-size: .35rem;
		color: #999;
	}

	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
