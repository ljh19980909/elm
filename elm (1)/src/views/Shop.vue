<template>
	<div>
		<div class="shop" v-if="this.$store.state.load==false">
			<!-- 选规格弹框 -->
			<div class="alterbig" v-if="guanbi">
				<div class="alter">
					<p>
						<span class="maskTile ellipsis">{{maskv.name}}</span>
						<span class="el-icon-close" @click="guanbi=false"></span>
					</p>
					<li class="pingpais">
						<p class="guige">规格</p>
						<span class="s1" :style="v.specs_name==choosename?'border-color: #3199e8;color: #3199e8;':'border: .025rem solid #ddd;color:#333'"
						 @click="choose(v.specs_name)" v-for="v in maskv.specfoods">{{v.specs_name}}</span>
					</li>
					<li class="moneys">
						<span>¥</span>
						<span>{{maskv.specfoods[0].price}}</span>
						<el-button type="primary" class="join" @click="crease(maskv,$event)">加入购物车</el-button>
					</li>
				</div>
			</div>
			<!-- 头部效果 -->
			<div class="headers" :style="'background-image: url('+srcImg+');'"></div>
			<!-- 活动遮罩层 -->
			<div class="activityMask" v-if="activity">
				<p class="act_title">{{this.$store.state.shop.name}}</p>
				<li>
					<span class="act_infomation">优惠信息</span>
					<div class="act_desc">
						<p v-for="v in this.$store.state.shop.activities">
							<span :style="'background:#'+v.icon_color+''">{{v.icon_name}}</span>
							<span style="margin-left: .3rem;">{{v.description}}(APP专享)</span>
						</p>
					</div>
				</li>
				<li>
					<span class="act_gonggao act_infomation">商家公告</span>
					<p class="act_desc act_sjgg">{{this.$store.state.shop.promotion_info}}</p>
				</li>
				<span class="el-icon-circle-close" @click="activity=false"></span>
			</div>
			<!-- 头部信息 -->
			<div class="header">
				<div @click="toshoplist"><i class="el-icon-arrow-left heade_i"></i></div>
				<img :src="srcImg" class="showImg">
				<h3 class="name" @click="back()">{{this.$store.state.shop.name}}</h3>
				<div @click='toshopDetail()'>
					<p class="money">商家配送／分钟送达／配送费¥{{this.$store.state.shop.float_delivery_fee}}</p>
					<p class="gonggao">公告：{{this.$store.state.shop.promotion_info}}</p>
				</div>
				<div @click="back()"><i class="el-icon-arrow-right heade_i2"></i></div>
			</div>
			<!-- 是否出现优惠 -->
			<p class="kuozhan" v-if="kuozhan.length!=0?'kuozhan':''" @click="acitivityMask">
				<span class="jian">{{kuozhan[0].icon_name}}</span>
				<span class="youhui">{{kuozhan[0].description}}（APP专享）</span>
				<span class="huodong">{{kuozhan.length}}个活动<i class="el-icon-arrow-right heade_i3"></i></span>
			</p>
			<!-- 中间选项 -->
			<div class="middle">
				<div class="left" @click="middles('商品')">
					<span :class="{'new':middle=='商品'}">商品</span>
				</div>
				<div class="right" @click="middles('评价')">
					<span :class="{'new':middle=='评价'}">评价</span>
				</div>
			</div>
			<!-- 商品模块 -->
			<div class="footer" v-if="middle=='商品'">
				<!-- 左边列表 -->
				<div class="f_left" style="background-color:#f5f5f5;">
					<ul>
						<li v-for="v in a" @click="lefts(v.id)" class="olds ellipsis" :style="left==v.id?'background-color:#fff;border-left:.15rem solid #3190e8;':'background-color:#f5f5f5;border-left: .15rem solid #f8f8f8;'">
							<a :href="'#'+v.id">{{v.name}}</a>
							<span class="circles circle" v-show="cir(v)>0">{{cir(v)}}</span>
						</li>
					</ul>
				</div>
				<!-- 右边商品 -->
				<div class="f_right" style="background-color:#f5f5f5;">
					<ul class="shows" style="background-color:#f5f5f5;">
						<li v-for="v in a">
							<!-- 左边匹配头部 -->
							<p class="bangdan" :id="v.id">
								<span class="ellipsis"><strong>{{v.name}}</strong></span>
								<span class="ellipsis">{{v.description}}</span>
								<el-tooltip class="item" effect="dark" :content="v.name+v.description" placement="bottom">
									<span>···</span>
								</el-tooltip>
							</p>
							<!-- 下边商品 -->
							<div class="showsLi" v-for="(n,i) in v.foods" style="background-color: #FFFFFF;overflow: hidden;">
								<!-- 图片 -->
								<div @click="toFoodDetail(n)">
									<img :src="'//elm.cangdu.org/img/'+n.image_path+''">
									<ul v-if="n.attributes.length">
										<li v-for="a in n.attributes" v-if="a?a.icon_name:''">
											<p class="xin" v-if="a.icon_name=='新'">新品</p>
										</li>
									</ul>
								</div>
								<!-- 标题 -->
								<h3 @click="toFoodDetail(n)">
									<strong>
										<span class="ellipsis">{{n.name}}</span>
										<ul v-if="n.attributes.length">
											<li v-for="a in n.attributes" v-if="a?a.icon_name:''">
												<span class="span2" v-if="a.icon_name=='招牌'">招牌</span>
											</li>
										</ul>
									</strong>
								</h3>
								<!-- 描述 -->
								<p class="ellipsis" @click="toFoodDetail(n)">{{n.description}}</p>
								<p class="p3" @click="toFoodDetail(n)">月售{{n.month_sales}}份&nbsp;好评率{{n.satisfy_rate}}%</p>
								<span v-if="n.activity!=null" @click="toFoodDetail(n)">{{n.activity.image_text}}</span>
								<!-- 价格 -->
								<p class="Lastp">
									<span style="font-size: .3rem;margin-right: .1rem;color: #FF6000;">￥</span>
									<span style="color: #FF6000;"><strong>{{n.specfoods[0].price}}</strong></span>
									<span style="font-size: .3rem;margin-left: .1rem;">起</span>
									<!-- 规格 -->
									<el-button type="primary" style="right: -.5rem;z-index: 198;top: -.3rem;" v-if="n.specfoods.length==2||n.specifications.length==1"
									 @click="guige(n)">选规格</el-button>

									<!-- 加号 -->
									<div class="el-icon-circle-plus " v-if="n.specfoods.length==1" @click.stop="crease(n,$event)"></div>
									<!-- 出现动画 -->
									<transition name="move">
										<div :class="n.specfoods.length==1?'plus2':'plus'" v-if="n.specfoods.reduce((total,g)=>{return total+=g.count},0)==0?false:true">
											<!-- 减号 -->
											<span class="el-icon-remove-outline" @click.stop="increase(n)" style="margin-top: .2rem;"></span>
											<!-- 选规格 -->
											<span style="margin-left: .53rem;" v-if="n.specfoods.length>1">{{n.specfoods.reduce((total,g)=>{return total+=g.count},0)==0?'':n.specfoods.reduce((total,g)=>{return total+=g.count},0)}}</span>
											<!-- 加号 -->
											<span v-if="n.specfoods[0].count>0">{{n.specfoods[0].count}}</span>
										</div>
									</transition>
								</p>
							</div>
						</li>
					</ul>
				</div>
				<!-- 底部小购物车 -->
				<footer>
					<div class="footer_left" @click="showshangtuocart">
						<p>
							<span>￥</span>
							<span>{{totals}}.00</span>
						</p>
						<p>配送费￥{{this.$store.state.shop.float_delivery_fee}}</p>
					</div>
					<div class="footer_right" :style="totals>=this.$store.state.shop.float_minimum_order_amount?'background-color:#4cd964;':'background-color: #535356;'"
					 @click="toConfirmOrder">
						{{totals>=this.$store.state.shop.float_minimum_order_amount?'去结算':'还差￥'+this.$store.state.shop.float_minimum_order_amount+'起送'}}
					</div>
				</footer>
				<!-- 底部购物车 -->
				<span class="el-icon-shopping-cart-full" v-if="middle=='商品'"></span>
				<div ref="che" class="yuan" v-if="middle=='商品'" :style="totals>0?'background-color: #00BFFF;':'background-color: #3d3d3f;'"></div>
				<div class="circle" v-if="totals>0">{{countnumbers}}</div>
				<!-- 底部上托购物车 -->
				<transition name="shang">
					<div class="f_carts" v-if="shangtuo==true" @click="cancel">
						<p>
							<span>购物车</span>
							<i class="el-icon-delete"><span style="margin-left: .2rem;" @click="qingkong">清空</span></i>
						</p>
						<ul>
							<li v-for="food in total" v-if="food.count>0">
								<span><strong>{{food.name}}</strong></span>
								<span>{{food.specs_name}}</span>
								<span>￥<strong style="font-size: .5rem;">{{food.price}}</strong></span>
								<span class="el-icon-remove-outline" @click.stop="xiaoincrease(food)"></span>
								<span style="font-size: .4rem;">{{food.count}}</span>
								<span class="el-icon-circle-plus-outline" @click.stop="xiaocrease(food)"></span>
							</li>
						</ul>
					</div>
				</transition>
			</div>
			<!-- 评价模块 -->
			<div class="pingjia" v-if="middle=='评价'">
				<div class="pjtop">
					<div class="pjtop_left">
						<p>{{value.overall_score.toFixed(1)}}</p>
						<p>综合评价</p>
						<p>高于周边商家76.9%</p>
					</div>
					<div class="pjtop_right">
						<p>
							<span>服务态度</span>
							<el-rate v-model="service_score" disabled text-color="#ff9900" score-template="{value}"></el-rate>
							<span class="score">{{value.service_score.toFixed(1)}}</span>
						</p>
						<p>
							<span>菜品评价</span>
							<el-rate v-model="food_score" disabled text-color="#ff9900" score-template="{value}"></el-rate>
							<span class="score">{{value.food_score.toFixed(1)}}</span>
						</p>
						<p>
							<span>送达时间</span>
							<span style="font-size: .3rem;margin-left: .35rem;color: #999;">分钟</span>
						</p>
					</div>
				</div>
				<div class="allpingjia">
					<li v-for="(v,i) in allpingjia" @click="allpingjias(i)" class="allpingjia_li" ref="c">
						{{v.name}}
						({{v.count}})
					</li>
				</div>
				<div class="alldesc">
					<li v-for="v in pdesc">
						<div class="alldescLeft">
							<img :src="v.avatar? ('https://fuss10.elemecdn.com/'+v.avatar):'https://elm.cangdu.org/img/default.jpg'" alt="">
						</div>
						<div class="alldescRight">
							<p class="username">
								<span>{{v.username}}</span>
								<span>{{v.rated_at}}</span>
							</p>
							<p class="pjscore">
								<el-rate v-model="v.rating_star" disabled text-color="#ff9900" score-template="{value}"></el-rate>
								<span>{{v.time_spent_desc}}</span>
							</p>
							<div class="pjimg">
								<img :src="'https://fuss10.elemecdn.com/'+n.image_hash" v-for="n in v.item_ratings" v-if="n.image_hash!=''">
								</p>
								<p>
									<span class="ellipsis" v-for="n in v.item_ratings">{{n.food_name}}</span>
								</p>
							</div>
						</div>
					</li>
				</div>
			</div>
		</div>
		<!-- 子组件路由 -->
		<router-view class="ccc"></router-view>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		name: "Shop",
		data() {
			return {
				a: '',
				srcImg: "",
				kuozhan: '',
				middle: '商品',
				left: 0,
				names: '',
				rightsTitle: '',
				rightsFoods: '',
				value: '',
				service_score: '',
				food_score: '',
				allpingjia: '',
				pjname: '',
				b: "allpingjia_li",
				pscore: 3.5,
				pdesc: '',
				guanbi: '',
				maskv: '',
				choosename: '',
				foods: '',
				food: [],
				total: [],
				totals: '',
				activity: false,
				shops: [],
				qingkongsp: '',
				xiao: true,
				shangtuo: false,
				countnumber: '',
				arr1:[]
			}
		},
		created() {
			let id = this.$store.state.shop.id
			// 判断历史是否是同一个商店
			if (this.$store.state.food[id]) {
				this.a = this.$store.state.food[id][0]
				this.a.forEach(food => {
					food.foods.forEach(v => {
						v.specfoods.forEach(v => {
							this.totals += v.count * v.price
						})
					})
				})
				this.total = this.$store.state.food[id][1]
				this.lefts(this.a[0].id)
			} else {
				// 头部
				this.axios.get('/shopping/v2/menu/?restaurant_id=' + this.$store.state.shop.id + '', ).then(data => {
					// 此处一定深拷贝，否则页面不渲染是址拷贝
					let liu = data.data
					liu.forEach(v => {
						v.foods.forEach(v => {
							v.specfoods.forEach(v => {
								v.count = 0
							})
						})
					})
					this.qingkongsp = JSON.parse(JSON.stringify(liu))
					this.a = JSON.parse(JSON.stringify(liu))
					this.a.forEach(food => {
						food.foods.forEach(v => {
							v.specfoods.forEach(v => {
								this.totals += v.count * v.price
							})
						})
					})
					this.lefts(this.a[0].id)
				}).catch(err => {
					console.log(err)
				});
			}
			//图片
			this.srcImg = 'https://elm.cangdu.org/img/' + this.$store.state.shop.image_path + ''
			this.kuozhan = this.$store.state.shop.activities
			//评价分数
			this.axios.get('ugc/v2/restaurants/' + this.$store.state.shop.id + '/ratings/scores').then(data => {
				this.value = data.data
				this.service_score = data.data.service_score
				this.food_score = data.data.food_score
			}).catch(err => {
				console.log(err)
			});
			//评价
			this.axios.get('ugc/v2/restaurants/' + this.$store.state.shop.id + '/ratings/tags').then(data => {
				this.allpingjia = data.data
			}).catch(err => {
				console.log(err)
			});
			//评价描述
			this.axios.get('ugc/v2/restaurants/' + this.$store.state.shop.id + '/ratings?offset=10&limit=12').then(data => {
				this.pdesc = data.data
			}).catch(err => {
				console.log(err)
			});
		},
		methods: {
			// 中间选项
			middles(v) {
				this.middle = v
			},
			// 左边列表选择
			lefts(v) {
				this.left = v
				// this.$el.querySelector('#a' + String(v)).scrollIntoView();
			},
			// 返回上一级
			toshoplist() {
				this.$router.push({
					path: '/shoplist',
				})
			},
			// 评价信息
			allpingjias(i) {
				this.$refs.c.forEach((s, n) => {
					this.$refs.c[n].style.background = '#EBF5FF'
					this.$refs.c[n].style.color = '#6D7885'
					if (n == 2) {
						this.$refs.c[2].style.background = '#F5F5F5'
						this.$refs.c[2].style.color = '#AAA'
					}
				})
				this.$refs.c[i].style.background = '#3190E8'
				this.$refs.c[i].style.color = '#fff'
			},
			// 规格(遮罩层)
			guige(v) {
				this.choose('默认')
				this.guanbi = true;
				this.maskv = v
			},
			//遮罩层选择
			choose(v) {
				this.choosename = v
			},
			// 去详情页
			toshopDetail() {
				this.$router.push({
					path: '/shop/shopDetail',
				})
			},
			// 上面商品(加)
			crease(v, c) {
				console.log(c)
				// 加号
				let b = 0;
				if (v.specfoods.length == 1) {
					// 存储vuex
					this.a.forEach(item => {
						item.foods.forEach(item => {
							item.specfoods.forEach(item => {
								if (v.specfoods[0].item_id == item.item_id) {
									item.count++
									b = JSON.parse(JSON.stringify(item))
								}
							})
						})
					})

					let left = c.pageX;
					let top = c.pageY;

					let bar = document.createElement('div');
					bar.style.position = 'absolute'
					bar.style.left = (left) + 'px'
					bar.style.top = (top) + 'px'
					bar.style.width = '.5rem'
					bar.style.height = '.5rem'
					bar.style.borderRadius = '50%'
					bar.style.backgroundColor = '#02b6fd'
					bar.style.zIndex=122
					bar.style.transition = 'left .6s linear, top .6s cubic-bezier(0.5, -0.5, 1, 1)'

					document.body.appendChild(bar)
					// 添加动画属性
					setTimeout(() => {
						let target = document.querySelector('.yuan')
						bar.style.left = (target.offsetLeft + target.offsetWidth / 2) + 'px'
						bar.style.top = (target.offsetTop) + 'px'
					}, 0);
					setTimeout(() => {
						bar.remove()
					}, 1000)
					this.$refs.che.classList.remove("animate__heartBeat")
					setTimeout(()=>{
						this.$refs.che.classList.add("animate__heartBeat")
					},800)
					
					
				} else {
					// 规格
					this.guanbi = false
					//规格选择(下标)
					let xiabiao
					v.specfoods.forEach((item, i) => {
						if (item.specs_name == this.choosename) {
							xiabiao = i
							return xiabiao
						}
					})
					//点击加入购物车
					this.a.forEach(item => {
						item.foods.forEach(item => {
							item.specfoods.forEach(item => {
								if (v.specfoods[xiabiao].food_id == item.food_id) {
									item.count++
									b = JSON.parse(JSON.stringify(item))
								}
							})
						})
					})
				}
				// 本地数据存储
				if (this.total.length == 0) {
					this.total.push(b)
				} else {
					let a = 0
					this.total.forEach(item => {
						if (b._id == item._id) {
							a = 1
							item.count++
						}
					})
					if (a == 0) {
						this.total.push(b)
					}
				}
				this.$store.commit('tocart', [this.$store.state.shop.id, this.a, this.total])
			},
			// 上面商品(减)
			increase(v) {
				// 先判断是否<=0
				let sum = 0;
				v.specfoods.forEach(v => {
					sum += v.count
				})
				if (sum <= 0) {
					return
				}
				let b = 0;
				// 判断长度
				if (v.specfoods.length == 1) {
					this.a.forEach(item => {
						item.foods.forEach(item => {
							item.specfoods.forEach(item => {
								if (v.item_id == item.item_id) {
									if (item.count <= 0) {
										return
									} else {
										item.count--
									}
									b = JSON.parse(JSON.stringify(item))
								}
							})
						})
					})
				} else {
					this.openCenter()
					return
				}
				// 存vuex（计算数据的数组）
				if (this.total.length == 0) {
					this.total.push(b)
				} else {
					let a = 0
					this.total.forEach(item => {
						if (b._id == item._id) {
							a = 1
							if (item.count <= 0) {
								return
							} else {
								item.count--
							}
						}
					})
					if (a == 0) {
						this.total.push(b)
					}
				}
				this.$store.commit('tocart', [this.$store.state.shop.id, this.a, this.total])
			},
			//规格弹框
			openCenter() {
				this.$message({
					message: '多规格商品只能去购物车删除哦',
					center: true,
					offset: 250
				});
			},
			// 购物车清空
			qingkong() {
				// 页面修改
				this.total = []
				this.a.forEach(item => {
					item.foods.forEach(item => {
						item.specfoods.forEach(item => {
							item.count = 0
						})
					})
				})
				// 后台修改
				this.$store.commit('tocart', this.$store.state.shop.id)
			},
			// 小加号
			xiaocrease(v) {
				console.log(v)
				let b = 0
				this.a.forEach(item => {
					item.foods.forEach(item => {
						item.specfoods.forEach(item => {
							if (v._id == item._id) {
								console.log(item)
								item.count++
								b = JSON.parse(JSON.stringify(item))
							}
						})
					})
				})
				if (this.total.length == 0) {
					this.total.push(b)
				} else {
					let a = 0
					this.total.forEach(item => {
						if (b._id == item._id) {
							a = 1
							item.count++
						}
					})
					if (a == 0) {
						this.total.push(b)
					}
				}
				this.$store.commit('tocart', [this.$store.state.shop.id, this.a, this.total])
			},
			// 小减号
			xiaoincrease(v) {
				this.arr1.push(v.count)
				console.log(this.arr1)
				let b = 0
				// if(arr[0]==1){
				// 	this.shangtuo=false
				// }
				this.a.forEach(item => {
					item.foods.forEach(item => {
						item.specfoods.forEach(item => {
							if (v._id == item._id) {
								if (item.count <= 0) {
									return
								} else {
									item.count--
								}
								b = JSON.parse(JSON.stringify(item))
							}
						})
					})
				})
				if (this.total.length == 0) {
					this.total.push(b)
				} else {
					let a = 0
					this.total.forEach(item => {
						if (b._id == item._id) {
							a = 1
							if (item.count <= 0) {

								return
							} else {
								item.count--
							}
						}
					})
					if (a == 0) {
						this.total.push(b)
					}
				}
				this.$store.commit('tocart', [this.$store.state.shop.id, this.a, this.total])
			},
			//活动遮罩层
			acitivityMask() {
				this.activity = true
			},
			// 底部上托购物车出现
			showshangtuocart() {
				if (this.totals > 0) {
					this.shangtuo = true
				}
			},
			//底部上托购物车消失
			cancel() {
				this.shangtuo = false
			},
			//左侧圆点
			cir(v) {
				let a = 0
				v.foods.forEach(item => {
					item.specfoods.forEach(item => {
						a += item.count
					})
				})
				return a
			},
			// 去确认订单页
			toConfirmOrder() {
				if (this.totals >= this.$store.state.shop.float_minimum_order_amount) {
					this.$router.push({
						path: "/shop/confirmOrder"
					})
				}
			},
			// 去食品详情页
			toFoodDetail(n) {
				this.$router.push({
					path: '/shop/foodDetail',
				})
				this.$store.commit('FoodDetail', n)
			}
		},
		// 时时刻刻检测总价
		watch: {
			total: {
				handler() {
					this.totals = this.total.reduce((allp, v) => {
						allp += v.count * v.price
						return allp
					}, 0)
				},
				immediate: true,
				deep: true
			}
		},
		//左下角圆点
		computed: {
			countnumbers() {
				let a = 0
				this.total.forEach(v => {
					a += v.count
				})
				return a
			}
		},
	}
</script>

<style scoped>
	@import "~animate.css";
	.shop {
		overflow: hidden;
		background-color: rgba(0, 0, 0, .1);
	}

	.header {
		color: rgba(0, 0, 0, .5);
		font-size: .3rem;
	}

	.headers {
		width: 100%;
		height: 2.5rem;
		background-repeat: no-repeat;
		background-size: 100%;
		filter: blur(10px);
		-webkit-filter: blur(10px);
		-moz-filter: blur(10px);
		-ms-filter: blur(10px);
		-o-filter: blur(10px);
	}

	.heade_i {
		position: absolute;
		top: 0rem;
		font-size: .7rem;
		font-weight: 800;
		z-index: 100;
	}

	.showImg {
		width: 2rem;
		height: 2rem;
		border-radius: .2rem;
		position: absolute;
		top: .2rem;
		left: .3rem;
	}

	.name {
		position: absolute;
		top: .2rem;
		left: 2.5rem;
		font-size: .5rem;
		font-weight: 900;
		color: rgba(0, 0, 0, .5);
	}

	.money {
		position: absolute;
		top: 1.1rem;
		left: 2.5rem;
	}

	.gonggao {
		position: absolute;
		top: 1.8rem;
		left: 2.5rem;
	}

	.heade_i2 {
		position: absolute;
		right: 0rem;
		top: .8rem;
		font-size: .7rem;
		z-index: 100;
	}

	.kuozhan {
		padding: 0.2rem 0rem .3rem .2rem;
		overflow: hidden;
		display: block;
	}

	.jian {
		float: left;
		color: #FFFFFF;
		background-color: #f07373;
		padding: .08rem 0 0 .08rem;
		font-weight: 800;
		border-radius: .1rem;
		margin-right: .3rem;
	}

	.youhui {
		float: left;
		color: #FFFFFF;
	}

	.huodong {
		float: right;
		color: #FFFFFF;
	}

	.heade_i3 {
		font-size: .5rem;
		margin-right: .2rem;
	}

	.middle {
		height: 1.5rem;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		line-height: 1.5rem;
		font-size: .4rem;
		border-bottom: .03rem solid #ebebeb;
	}

	.left {
		margin-left: 25%;
		transform: translateX(-50%);
	}

	.right {
		margin-right: 25%;
		transform: translateX(-50%);
	}

	.middle span {
		padding-bottom: .1rem;
	}

	.old {
		border-bottom: .1rem solid transparent;
		color: black;
	}

	.new {
		border-bottom: .1rem solid #3190E8;
		color: #3190E8;
	}

	.footer {
		width: 100%;
	}

	.f_left {
		width: 22%;
		overflow-y: scroll;
		float: left;
		height: 12.5rem;
	}

	.olds {
		height: 1.5rem;
		line-height: 1.5rem;
		padding-left: .3rem;
		font-size: .38rem;
		border-bottom: .025rem solid #ededed;
		box-sizing: border-box;
		position: relative;
	}

	/* 右边大的列表 */
	.f_right {
		width: 78%;
		overflow-y: scroll;
		float: left;
		height: 12.5rem;
		scroll-behavior: smooth
	}

	.bangdan {
		height: 1.2rem;
		width: 100%;
		background-color: #F8F8F8;
		line-height: 1.2rem;
		position: relative;
	}

	.bangdan span:nth-child(1) {
		font-size: .5rem;
		margin-left: .3rem;
		color: #666666;
		width: 3rem;
		position: absolute;
		width: 2rem;
	}

	.bangdan span:nth-child(2) {
		font-size: .36rem;
		color: #999999;
		position: absolute;
		left: 2.3rem;
	}

	.bangdan span:nth-child(3) {
		font-size: .5rem;
		float: right;
		margin-right: .3rem;
		color: #999999;
	}

	.shows {
		background-color: #FFFFFF;
		height: 10rem;
	}

	.showsLi {
		width: 100%;
		height: 3.3rem;
		border-bottom: .02rem solid #f8f8f8;
		padding: .3rem .2rem;
		position: relative;
	}

	.showsLi img {
		width: 1.3rem;
		height: 1.3rem;
		position: absolute;
		top: .3rem;
		left: .2rem;
	}

	.showsLi>h3 {
		position: absolute;
		top: .2rem;
		left: 1.5rem;
		width: 80%;
		padding: 0rem .2rem;
	}

	.showsLi>h3 span:nth-child(1) {
		font-size: .5rem;
		font-weight: 600;
		display: inline-block;
	}

	.span2 {
		position: absolute;
		top: 0rem;
		right: 0.2rem;
		border: .02rem solid rgb(240, 115, 115);
		border-radius: .2rem;
		transform: scale(.6);
		color: rgb(240, 115, 115);
		padding: 0rem .1rem;
	}

	.xin {
		position: absolute;
		top: -.65rem;
		left: -.65rem;
		background-color: #4CD964;
		transform: rotateZ(-45deg);
		width: 1.3rem;
		height: 1.3rem;
		line-height: 2.2rem;
		padding-left: .35rem;
		color: #FFFFFF;
	}

	.showsLi>p {
		position: absolute;
		left: 1.5rem;
		width: 80%;
		padding: 0.05rem .2rem;
		color: #999999;
	}

	.showsLi>p:nth-child(3) {
		top: .85rem;
	}

	.p3 {
		top: 1.4rem;
	}

	.showsLi>span {
		color: #999999;
		position: absolute;
		left: 1.6rem;
		top: 2rem;
		border: .02rem solid #f1884f;
		border-radius: .2rem;
		padding: 0rem .1rem;
		color: #f1884f;
		transform: scale(.9);
	}

	.Lastp {
		top: 2.5rem;
		font-size: .4rem;
	}

	.el-button {
		transform: scale(.5);
		font-size: .6rem;
		border-radius: .2rem;
		vertical-align: middle;
		margin-left: .9rem;
		position: absolute;
		top: -.4rem;
	}

	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	footer {
		background-color: #333333;
		width: 100%;
		height: 1.4rem;
		float: left;
		color: #FFFFFF;
		font-size: .4rem;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		z-index: 200;
	}

	.footer_left {
		width: 65%;
		float: left;
		height: 100%;
		padding-left: 20%;
	}

	.footer_left p:nth-child(1) {
		padding-top: .2rem;
	}

	.footer_left span:nth-child(2) {
		margin-left: .1rem;
		font-weight: 800;
	}

	.footer_left p:nth-child(2) {
		font-size: .2rem;
		font-weight: 800;
		padding-left: .1rem;
	}

	.footer_right {
		padding: 0 3%;
		width: 35%;
		background-color: #535656;
		float: right;
		height: 100%;
		line-height: 1.5rem;
		font-weight: 800;
		text-align: center;
	}

	.el-icon-circle-plus {
		position: absolute;
		top: 2.5rem;
		right: .8rem;
		font-size: .6rem;
		color: #3190e8;
		z-index: 198;
	}

	.el-icon-shopping-cart-full {
		color: #FFFFFF;
		font-size: 1rem;
		position: absolute;
		bottom: .7rem;
		z-index: 202;
		left: .5rem;
	}

	.yuan {
		border-radius: 50%;
		background-color: #333;
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		bottom: .5rem;
		left: .3rem;
		z-index: 201;
		border: .1rem solid #444;
	}

	.pjtop {
		width: 100%;
		height: 3rem;
		background-color: #FFFFFF;
	}

	.pjtop_left {
		width: 40%;
		height: 100%;
		float: left;
	}

	.pjtop_left>p:nth-child(1) {
		font-size: .8rem;
		padding: .3rem 0 0 1.8rem;
		color: #ff6600;
	}

	.pjtop_left>p:nth-child(2) {
		font-size: .43rem;
		margin: 0 0 0 1.5rem;
		color: #666;
	}

	.pjtop_left>p:nth-child(3) {
		font-size: .3rem;
		margin: 0.1rem 0 0 .9rem;
		color: #999;
	}

	.pjtop_right {
		width: 60%;
		height: 100%;
		float: left;
	}

	.pjtop_right>p:nth-child(1) {
		padding-top: .5rem;
		padding-left: .3rem;
		font-size: .43rem;
		color: #666666;
	}

	.el-rate {
		display: inline;
		margin: 0 .4rem 0 .3rem;
	}

	.pjtop_right>p:nth-child(2) {
		padding-top: .1rem;
		padding-left: .3rem;
		font-size: .43rem;
		color: #666666;
	}

	.pjtop_right>p:nth-child(3) {
		padding-top: .1rem;
		padding-left: .3rem;
		font-size: .43rem;
		color: #666666;
	}

	.score {
		font-size: .36rem;
		color: #FF6600;
		vertical-align: top;
	}

	.allpingjia {
		float: left;
		background-color: #fff;
		width: 100%;
		margin-top: .3rem;
		height: 4.8rem;
		padding: .3rem .3rem 0 .3rem;
	}

	.allpingjia_li {
		padding: .2rem;
		background-color: #EBF5FF;
		color: #6D7885;
		font-size: .35rem;
		border-radius: .15rem;
		float: left;
		margin: 0 .2rem .15rem 0;
		box-sizing: border-box;
	}

	.allpingjia_li:nth-child(1) {
		padding: .2rem;
		background-color: #3190E8;
		color: #fff;
		font-size: .35rem;
		border-radius: .15rem;
		float: left;
		margin: 0 .2rem .15rem 0;
		box-sizing: border-box;
	}

	.allpingjia_li:nth-child(3) {
		padding: .2rem;
		background-color: #F5F5F5;
		color: #AAA;
		font-size: .35rem;
		border-radius: .15rem;
		float: left;
		margin: 0 .2rem .15rem 0;
		box-sizing: border-box;
	}

	.alldesc {
		float: left;
		width: 100%;
		overflow-y: scroll;
		height: 6.6rem;
	}

	.alldesc>li {
		width: 100%;
		height: 5rem;
		padding: .2rem .3rem;
		border-top: .02rem solid #f1f1f1;
		border-bottom: .02rem solid #f1f1f1;
		box-sizing: border-box;
		background-color: #fff;
	}

	.alldescLeft {
		width: 10%;
		height: 100%;
		float: left;
	}

	.alldescLeft>img {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
	}

	.alldescRight {
		width: 90%;
		height: 100%;
		float: right;
		padding-left: .4rem;
		font-size: .4rem;
	}

	.username {
		height: .8rem;
		line-height: .8rem;
		color: #666;
	}

	.username>span:nth-child(2) {
		float: right;
		color: #999;
	}

	.pjscore {
		margin-left: -.4rem;
		vertical-align: bottom;
	}

	.el-rate {
		font-size: .2rem;
	}

	.pjscore>span {
		font-size: .4rem;
		margin-left: -.1rem;
		color: #666;
	}

	.pjimg {
		margin-top: .1rem;
	}

	.pjimg img {
		width: 1.7rem;
		height: 1.7rem;
		margin-right: .1rem;
	}

	.pjimg span {
		line-height: .8rem;
		border: .025rem solid #ebebeb;
		padding: 0 .15rem;
		width: 1.5rem;
		display: block;
		float: left;
		margin-right: .1rem;
		margin-left: -.15rem;
		transform: scale(.8);
	}

	/* 弹框 */
	.alterbig {
		width: 100%;
		height: 18rem;
		background-color: rgba(0, 0, 0, .3);
		position: fixed;
		z-index: 210;
	}

	.alter {
		background-color: #fff;
		z-index: 200;
		width: 70%;
		height: 30%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		left: 50%;
		border-radius: .3rem;
	}

	.maskTile {
		position: absolute;
		top: .7rem;
		transform: translate(-50%, -50%);
		left: 50%;
		font-size: .55rem;
		display: block;
		width: 4rem;
	}

	.el-icon-close {
		position: absolute;
		top: .1rem;
		right: .2rem;
		font-size: .8rem;
		color: #666;
	}

	.pingpais {
		width: 100%;
		height: 3rem;
		margin-top: 2rem;
		padding-left: .2rem;
		overflow-y: scroll;
	}

	.guige {
		position: absolute;
		top: 1.5rem;
		left: .8rem;
		transform: translate(-50%, -50%);
		font-size: .45rem;
		color: #666;
	}

	.s1 {
		border: .025rem solid #ddd;
		padding: .2rem .4rem;
		font-size: .45rem;
		border-radius: .1rem;
		float: left;
		transform: scale(.8);
		height: 1rem;
	}

	.moneys {
		position: absolute;
		bottom: 0;
		background-color: #f5f5f5;
		width: 100%;
		height: 1.5rem;
		line-height: 1.5rem;
	}

	.moneys>span {
		color: #ff6600;
		margin-left: .3rem;
		font-size: .4rem;
	}

	.moneys>span:nth-child(2) {
		margin-left: .1rem;
		font-size: .5rem;
		font-weight: 800;
	}

	.join {
		font-size: .8rem;
		position: absolute;
		bottom: -.3rem;
		right: -1rem;
	}

	.plus {
		width: 2rem;
		position: absolute;
		top: 2.37rem;
		right: .9rem;
		font-size: .58rem;
		color: #3190e8;
	}

	.plus>span:nth-child(2) {
		font-size: .46rem;
		margin-left: 0.75rem;
		margin-top: -.7rem;
		display: block;
		color: #666;
		text-align: center;
		width: .6rem;
	}

	.plus2 {
		width: 2rem;
		position: absolute;
		top: 2.35rem;
		right: .9rem;
		font-size: .58rem;
		color: #3190e8;
	}

	.plus2>span:nth-child(2) {
		font-size: .46rem;
		margin-left: 0.65rem;
		margin-top: -.7rem;
		display: block;
		color: #666;
		text-align: center;
		width: .8rem;
	}

	/* 动画 */
	.move-enter-active {
		animation: move .8s;
	}

	.move-leave-active {
		animation: move .8s reverse;
	}

	@keyframes move {
		0% {
			right: -.9rem;
			opacity: 0;
		}

		100% {
			right: .9rem;
			opacity: 1;
		}
	}

	/* 子集路由界面 */
	.ccc {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 210;
		background-color: #F2F2F2;
	}

	/* 活动遮罩层 */
	.activityMask {
		width: 100%;
		height: 100%;
		background-color: #333;
		position: fixed;
		z-index: 205;
		margin-top: -2.5rem;
		color: #FFFFFF;
	}

	.act_title {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 1rem;
		font-size: .6rem;
	}

	.act_infomation {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 3.5rem;
		font-size: .35rem;
		letter-spacing: .04rem;
		border: .025rem solid #555;
		padding: .15rem .2rem;
		border-radius: .4rem;
	}

	.act_gonggao {
		top: 7rem;
	}

	.act_desc {
		position: absolute;
		float: left;
		top: 4.7rem;
		padding-left: .8rem;
		font-size: .35rem;
	}

	.act_sjgg {
		top: 8.2rem;
	}

	.el-icon-circle-close {
		font-size: 1.5rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 1rem;
		color: #FFFFFF;
	}

	.f_carts {
		width: 100%;
		position: absolute;
		bottom: 1.4rem;
		background-color: #FFFFFF;
		z-index: 200;
	}

	.f_carts>p {
		height: 1rem;
		line-height: 1rem;
		font-size: .4rem;
		background-color: #eceff1;
		padding: 0 .3rem;
	}

	.f_carts>p>i {
		float: right;
		margin-top: .3rem;
	}

	.f_carts li {
		height: 1.7rem;
		line-height: 1.7rem;
		padding: 0 .2rem;
		font-size: .4rem;
		position: relative;
	}

	.f_carts li span {
		position: absolute;
	}

	.f_carts li span:nth-child(2) {
		position: absolute;
		top: .4rem;
		font-size: .3rem;
		margin-left: .1rem;
	}

	.f_carts li>span:nth-child(3) {
		right: 40%;
		color: #FF6600;
	}

	.f_carts li>span:nth-child(4) {
		right: 1.2rem;
		top: 50%;
		transform: translateY(-50%);
		color: #3190e8;
	}

	.f_carts li>span:nth-child(5) {
		right: .7rem;
	}

	.f_carts li>span:nth-child(6) {
		top: 50%;
		transform: translateY(-50%);
		right: .1rem;
		color: #3190e8;
	}

	.circle {
		position: absolute;
		width: .5rem;
		height: .5rem;
		background-color: red;
		border-radius: 50%;
		bottom: 1.6rem;
		left: 1.5rem;
		z-index: 210;
		color: #FFFFFF;
		line-height: .5rem;
		padding-left: .03rem;
		text-align: center;
	}

	.circles {
		top: 0;
		width: .4rem;
		height: .4rem;
		left: 1.63rem;
		line-height: .4rem;
		font-size: .3rem;
	}

	.guigejian {
		position: absolute;
		top: 55%;
		z-index: 999;
		transform: scale(.8);
		margin-left: .2rem;
	}

	/* 底部购物车动画 */
	.shang-enter-active {
		animation: shangs .8s;
	}

	.shang-leave-active {
		animation: shangs .8s reverse;
	}

	@keyframes shangs {
		0% {
			bottom: 1.4rem;
			opacity: 0;
			max-height: 0;
		}

		100% {
			opacity: 1;
			max-height: 20rem;
		}
	}

	a {
		color: #000000;
	}


	/* 小球滚 */
	.point-outer.point-pre {
		border: 1px solid red;
		z-index: 99999;
	}

	.point-outer {
		position: absolute;
		z-index: 50;
		-webkit-transition: all 0.5s cubic-bezier(0.39, -0.4, 0.83, 0.23) 0s;
		transition: all 0.5s cubic-bezier(0.39, -0.4, 0.83, 0.23) 0s;
	}

	.point-inner {
		width: 1rem;
		height: 1rem;
		line-height: 1rem;
		border-radius: 50%;
		background-color: #09BE03;
		-webkit-transition: all 0.5s linear 0s;
		color: #ffffff;
		text-align: center;
		font-size: 0.7rem;
		border: 1px solid red;
	}
</style>
