<template>
	<div class="shoplist">
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>{{content}}</strong></h4>
			</div>
		</div>
		<section class="sort_container">
			<!-- 分类 -->
			<div class="sort_item">
				<div class="sort_item_container">
					<div class="sort_item_border">
						<span @click="all1" :class="[fenlei?'old':'new']">{{content}}</span>
						<svg width="10" height="10" class="sort_icon" :class="[fenlei?'go':'aa']">
							<polygon points="0,3 10,3 5,8"></polygon>
						</svg>
					</div>
				</div>
				<transition name="sub-comments">
					<section class="category_container sort_detail_type" v-if="fenlei" style="margin-top: -.6rem;overflow: hidden;">
						<section class="category_left">
							<ul>
								<li :class="{'category_left_li':v.name == t}" v-for="(v,i) in a" @click="catgory(v)" class="category_left_lis">
									<section>
										<img :src="'https://fuss10.elemecdn.com/'+v.image_url" class="category_icon" v-if="i>=1&&i!=7">
										<img src="//elm.cangdu.org/img/default.jpg" class="category_icon" v-if="i==7">
										<span>{{v.name}}</span>
									</section>
									<section>
										<span class="category_count" style="color: white;">{{v.count}}</span>
										<svg width="8" height="8" class="category_arrow" style="padding-left: .5rem;" v-if="i>=1">
											<path d="M0 0 L6 4 L0 8" stroke="#bbb" stroke-width="1" fill="none"></path>
										</svg>
									</section>
								</li>
							</ul>
						</section>
						<section class="category_right">
							<ul>
								<li class="category_right_li" v-for="(v,i) in b" v-if="i>0" @click="types(v)">
									<span>{{v.name}}</span>
									<span>{{v.count}}</span>
								</li>
							</ul>
						</section>
					</section>
				</transition>
			</div>
			<!-- 排序 -->
			<div class="sort_item">
				<div class="sort_item_container">
					<div class="sort_item_border">
						<span @click="all2" :class="[paixu?'old':'new']">排序</span>
						<transition name="b">
							<svg width="10" height="10" class="sort_icon" :class="[paixu?'go':'aa']">
								<polygon points="0,3 10,3 5,8"></polygon>
							</svg>
						</transition>
					</div>
				</div>
				<transition name="sub-comments">
					<section class="sort_detail_type" style="top: 1rem;overflow: hidden;" v-if="paixu">
						<ul class="sort_list_container">
							<li class="sort_list_li" @click="sorts(4,'智能排序')">
								<svg style="width: .5rem;">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default">
										<svg viewBox="0 0 33 32" id="default">
											<path fill="#3b87c8" d="M13.374 29.064a.94.94 0 0 1-.941-.941V6.476l-7.285 6.899a.942.942 0 0 1-1.299-1.364l8.876-8.424a.94.94 0 0 1 1.59.681v23.855a.94.94 0 0 1-.941.941zM20.904 29.355h-.008a.94.94 0 0 1-.375-.078.943.943 0 0 1-.559-.86V3.944a.94.94 0 1 1 1.882 0v22.287l7.238-6.842a.94.94 0 0 1 1.289 1.366l-8.818 8.338a.943.943 0 0 1-.649.264z"></path>
										</svg>
									</use>
								</svg>
								<p>
									<span :class="{'sort_list_li_p':'智能排序'==h}">智能排序</span>
									<span class="el-icon-check" v-if="h=='智能排序'"></span>
								</p>
							</li>
							<li class="sort_list_li" @click="sorts(5,'距离最近')">
								<svg style="width: .5rem;">
									<use data-v-6cc1fce6="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#distance">
										<svg viewBox="0 0 32 32" id="distance">
											<path fill="#2a9bd3" d="M15.884 31.236l-.042.001a.888.888 0 0 1-.59-.224l-7.91-7.91a7.548 7.548 0 0 1-.498-.471 12.752 12.752 0 0 1-3.747-9.045C3.097 6.523 8.824.796 15.888.796s12.791 5.727 12.791 12.791c0 3.532-1.432 6.73-3.747 9.045-.196.196-.409.391-.613.578l-7.813 7.804a.886.886 0 0 1-.589.223l-.035-.001zm0-28.667C9.818 2.59 4.908 7.513 4.908 13.582c0 3.023 1.218 5.762 3.19 7.752l.461.435 7.316 7.316 7.2-7.2q.284-.249.551-.516a10.977 10.977 0 0 0 3.225-7.787c0-6.066-4.905-10.987-10.965-11.013z"></path>
											<path fill="#2a9bd3" d="M15.884 18.524a5.707 5.707 0 0 1-4.07-1.732l-.001-.001a5.76 5.76 0 1 1 4.119 1.734h-.05zm-2.817-2.942a3.982 3.982 0 1 0 0-5.626c-.726.717-1.175 1.713-1.175 2.813s.449 2.096 1.175 2.813z"></path>
										</svg>
									</use>
								</svg>
								<p>
									<span :class="{'sort_list_li_p':'距离最近'==h}">距离最近</span>
									<span class="el-icon-check" v-if="h=='距离最近'"></span>
								</p>
							</li>
							<li class="sort_list_li" @click="sorts(6,'销量最高')">
								<svg style="width: .5rem;">
									<svg viewBox="0 0 23 32" id="hot">
										<path fill="#f07373" d="M9.859 29.375c-3.489-.771-6.362-3.097-7.187-5.551-.882-2.623-1.029-6.873-.238-9.318l-1.727.037.001.002.001.004.004.01.011.029.038.091c.039.09.086.191.142.3.155.304.349.627.586.955a7.477 7.477 0 0 0 2.711 2.318c.583.153.583.153 1.087-.188.187-.263.187-.263.224-.39.028-.094.041-.176.05-.28.01-.109.016-.238.022-.47.063-2.219.162-3.38.562-4.943a10.05 10.05 0 0 1 .814-2.185c1.433-2.723 4.843-6.053 6.699-7.021l-1.325-.962c-.064.382-.127.992-.131 1.722-.008 1.252.169 2.393.616 3.329.261.547.525.968 1.132 1.862l.23.339c.86 1.281 1.161 1.986 1.069 2.653l-.009.125c.069.517.069.517.781.906.451-.026.451-.026.578-.104.144-.093.144-.093.19-.136.041-.037.079-.077.123-.125.068-.076.153-.178.245-.295.22-.279.458-.615.677-.963.648-1.028 1.045-1.988 1.037-2.845l-.914.009-.706.581c.295.358.809 1.075 1.33 1.936.826 1.363 1.492 2.791 1.898 4.209 1.1 3.845.3 9.288-2.245 11.75a9.652 9.652 0 0 1-1.659 1.29 10.232 10.232 0 0 1-3.471 1.332c-.794.151-1.385.191-2.064.191h-.009a2.75 2.75 0 0 1-.373-.03 6.007 6.007 0 0 1-.585-.115 7.765 7.765 0 0 1-.536-.15l-.578 1.735a9.182 9.182 0 0 0 1.445.341c.221.031.43.048.627.048h.009a12.546 12.546 0 0 0 2.407-.224 12.011 12.011 0 0 0 4.088-1.572c.699-.431 1.358-.94 1.971-1.533 3.098-2.998 4-9.132 2.731-13.567-.455-1.591-1.188-3.161-2.092-4.653-.569-.939-1.134-1.727-1.482-2.15l-1.645-1.998.024 2.588c.004.412-.281 1.1-.756 1.853a9.64 9.64 0 0 1-.569.809 4.528 4.528 0 0 1-.158.195c.028-.027.028-.027.16-.113.122-.075.122-.075.57-.101.71.388.71.388.778.902h-.914l.906.125c.174-1.262-.261-2.281-1.362-3.922l-.235-.347c-.554-.817-.787-1.189-.995-1.624-.306-.642-.444-1.53-.438-2.53a10.566 10.566 0 0 1 .107-1.431L14.44.304l-1.628.85c-2.18 1.138-5.862 4.733-7.471 7.791a11.873 11.873 0 0 0-.967 2.583 19.2 19.2 0 0 0-.511 3.147c-.036.423-.061.839-.079 1.273-.011.281-.019.531-.029.924-.005.191-.01.298-.015.354a.403.403 0 0 1 .019-.077c.027-.099.027-.099.203-.346.492-.332.492-.332 1.112-.157a5.745 5.745 0 0 1-2.54-2.496 3.456 3.456 0 0 1-.093-.197l-.018-.044-.002-.006v.001l.001.002v.002l-.915-2.473-.812 2.51c-.917 2.836-.757 7.485.245 10.463 1.042 3.099 4.442 5.852 8.526 6.754l.395-1.785z"></path>
									</svg>
								</svg>
								<p>
									<span :class="{'sort_list_li_p':'销量最高'==h}">销量最高</span>
									<span class="el-icon-check" v-if="h=='销量最高'"></span>
								</p>
							</li>
							<li class="sort_list_li" @click="sorts(1,'起送价最低')">
								<svg style="width: .5rem;">
									<use data-v-6cc1fce6="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#price">
										<svg viewBox="0 0 32 32" id="price">
											<path fill="#e6b61a" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
											<path fill="#e6b61a" d="M23.14 6.06l-5.12 8.65h4.48v1.54h-5.49v2.43h5.49v1.54h-5.49v5.1h-2.02v-5.1H9.53v-1.54h5.46v-2.43H9.53v-1.54h4.45L8.8 6.06h2.24l4.99 8.48 4.93-8.48h2.18z"></path>
										</svg>
									</use>
								</svg>
								<p>
									<span :class="{'sort_list_li_p':'起送价最低'==h}">起送价最低</span>
									<span class="el-icon-check" v-if="h=='起送价最低'"></span>
								</p>
							</li>
							<li class="sort_list_li" @click="sorts(2,'配送速度最快')">
								<svg style="width: .5rem;">
									<use data-v-6cc1fce6="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#speed">
										<svg viewBox="0 0 32 32" id="speed">
											<path fill="#37c7b7" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
											<path fill="#37c7b7" d="M15 7v11.002l5.678 4.882 1.304-1.517-5.33-4.583.348.758V6.999h-2z"></path>
										</svg>
									</use>
								</svg>
								<p>
									<span :class="{'sort_list_li_p':'配送速度最快'==h}">配送速度最快</span>
									<span class="el-icon-check" v-if="h=='配送速度最快'"></span>
								</p>
							</li>
							<li class="sort_list_li" @click="sorts(3,'评分最高')">
								<svg style="width: .5rem;">
									<use data-v-6cc1fce6="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating">
										<svg viewBox="0 0 33 32" id="rating">
											<path fill="#eba53b" d="M27.087 31.84L16.8 25.553 6.504 31.84l2.824-11.727-9.186-7.878 12.019-.941L16.801.16l4.631 11.134 12.019.941-9.158 7.849zM16.8 23.369l7.407 4.527-2.014-8.471 6.588-5.647-8.659-.696L16.8 5.063l-3.341 8.019-8.659.696 6.588 5.647-2.014 8.471z"></path>
										</svg>
									</use>
								</svg>
								<p>
									<span :class="{'sort_list_li_p':'评分最高'==h}">评分最高</span>
									<span class="el-icon-check" v-if="h=='评分最高'"></span>
								</p>
							</li>
						</ul>
					</section>
				</transition>
			</div>
			<!-- 筛选 -->
			<div class="sort_item">
				<div class="sort_item_container">
					<div class="sort_item_border">
						<span @click="all3" :class="[shaixuan?'old':'new']">筛选</span>
						<transition name="b">
							<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon" :class="[shaixuan?'go':'aa']">
								<polygon points="0,3 10,3 5,8"></polygon>
							</svg>
						</transition>
					</div>
				</div>
				<transition name="sub-comments">
					<section class="sort_detail_type filter_container" style="top:1.01rem;overflow: hidden;" v-if="shaixuan">
						<section style="width: 100%;">
							<header class="filter_header_style">配送方式</header>
							<ul class="filter_ul">
								<li class="filter_li" @click="mores()" style="width: 3rem;">
									<svg v-if="more==true">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fengniao">
											<svg viewBox="0 0 32 32" id="fengniao">
												<path fill="#27a9e1" d="M5.953 2.793s-.117 1.801.857 3.56c.361.255 10.458 6.218 10.458 6.218L5.953 2.794z"></path>
												<path fill="#b8e5fa" d="M9.604.889s-.333 1.404.069 3.147c.254.307 7.801 8.116 7.801 8.116L9.604.889z"></path>
												<path fill="#0089cf" d="M29.282 14.601l-4.861-.361s-.133-.001-.147-.226h-.002a2.652 2.652 0 0 0-2.978-2.357h-.003l-.011.001-.12.019-.004.001c-.432.075-1.812.374-3.038 1.285 0 0-.167.121-.421.33L2.665 6.043s3.254 8.665 12.207 11.98c-1.6 2.849-7.407 13.48-7.407 13.48l2.446-1.306s.775-2.853 1.884-4.957c.609-.936 1.211-.992 1.498-1.141.291-.151 3.707-.765 6.431-4.339.897-1.166 1.244-2.666 1.723-4.261.28-.061 3.008-.651 3.789-.718 1.068-.092 4.045-.181 4.045-.181z"></path>
												<path fill="#0089cf" d="M7.392 17.849c-1.567-1.368-2.199-3.219-2.035-5.217-.232-.288-.45-.572-.654-.851-.484 2.903.555 4.854 2.176 6.269 1.538 1.342 3.635 1.85 5.466 1.577-1.674.109-3.563-.565-4.953-1.778z"></path>
												<path fill="#0089cf" d="M12.345 19.628h.002zm-7.642-7.846c.204.279.421.563.654.851-.164 1.998.468 3.849 2.035 5.217 1.292 1.128 3.016 1.79 4.597 1.79.12 0 .238-.004.356-.011a6.554 6.554 0 0 1-.975.071c-1.568 0-3.22-.54-4.49-1.648-1.621-1.415-2.66-3.366-2.176-6.269z"></path>
											</svg>
										</use>
									</svg>
									<i class="el-icon-check niao" v-if="more==false"></i>
									<span style="margin-left: -.5rem;" :style="more?'color: #000000;':'color:#3190E8'">蜂鸟专送</span>
								</li>
							</ul>
						</section>
						<section style="width: 100%;">
							<header class="filter_header_style">商家属性（可以多选）</header>
							<ul class="filter_ul" style="padding-bottom: 0.5rem;">
								<li class="filter_li" @click="pings('8')">
									<span class="filter_icon" style="color: rgb(63, 189, 230); border-color: rgb(63, 189, 230);font-size: .6rem;"
									 v-if="ping==true">品</span>
									<i class="el-icon-check niao" v-if="ping==false" style="margin-right: -.6rem;"></i>
									<span :style="ping?'color: #000000;':'color:#3190E8'">品牌商家</span>
								</li>
								<li class="filter_li" @click="baos('7')">
									<span class="filter_icon" style="color: rgb(153, 153, 153); border-color: rgb(153, 153, 153);font-size: .6rem;"
									 v-if="bao==true">保</span>
									<i class="el-icon-check niao" v-if="bao==false" style="margin-right: -.6rem;"></i>
									<span :style="bao?'color: #000000;':'color:#3190E8'">外卖保</span>
								</li>
								<li class="filter_li" @click="zhuns('9')">
									<span class="filter_icon" style="color: rgb(63, 189, 230); border-color: rgb(63, 189, 230);font-size: .6rem;"
									 v-if="zhun==true">准</span>
									<i class="el-icon-check niao" v-if="zhun==false" style="margin-right: -.6rem;"></i>
									<span :style="zhun?'color: #000000;':'color:#3190E8'">准时达</span>
								</li>
								<li class="filter_li" @click="xins('5')">
									<span class="filter_icon" style="color: rgb(255, 78, 0); border-color: rgb(255, 78, 0);font-size: .6rem;" v-if="xin==true">新</span>
									<i class="el-icon-check niao" v-if="xin==false" style="margin-right: -.6rem;"></i>
									<span :style="xin?'color: #000000;':'color:#3190E8'">新店</span>
								</li>
								<li class="filter_li" @click="fus('3')">
									<span class="filter_icon" style="color: rgb(255, 78, 0); border-color: rgb(255, 78, 0);font-size: .6rem;" v-if="fu==true">付</span>
									<i class="el-icon-check niao" v-if="fu==false" style="margin-right: -.6rem;"></i>
									<span :style="fu?'color: #000000;':'color:#3190E8'">在线支付</span>
								</li>
								<li class="filter_li" @click="piaos('4')">
									<span class="filter_icon" style="color: rgb(153, 153, 153); border-color: rgb(153, 153, 153);font-size: .6rem;"
									 v-if="piao==true">票</span>
									<i class="el-icon-check niao" v-if="piao==false" style="margin-right: -.6rem;"></i>
									<span :style="piao?'color: #000000;':'color:#3190E8'">开发票</span>
								</li>
							</ul>
						</section>
						<footer class="confirm_filter">
							<div class="clear_all filter_button_style" @click="qingkong">清空</div>
							<div class="confirm_select filter_button_style" style="background-color: #56D176;color: #FFFFFF;" @click="sure">确定
								<span class="last_span" v-if="more==0||ping==0||bao==0||zhun==0||xin==0||fu==0||piao==0">({{alls}})</span>
							</div>
						</footer>
					</section>
				</transition>
			</div>
		</section>
		<!-- 页面展示 -->
		<div class="shop_list_container">
			<ul class="shoplist_container">
				<li v-for="(v,i) in shop" class="shop_li" @click="toshop(v)">
					<div class="left">
						<img :src="srcImg+v.image_path" class="shop_img">
					</div>
					<div class="middle">
						<h1 class="brand"><strong>品牌</strong></h1>
						<h3 class="titles ellipsis"><strong>{{v.name}}</strong></h3>
						<div class="star">
							<el-rate v-model="v.rating" disabled class="pingfen"></el-rate>
							<span class="pin">{{v.rating}}</span>
							<span class="mouth">月售{{v.recent_order_num}}单</span>
						</div>
						<p class="send">￥{{v.float_minimum_order_amount}}起送 / {{v.piecewise_agent_fee.tips}}</p>
					</div>
					<div class="right">
						<p class="time1">
							<span v-for="(n,i) in v.supports">{{n.icon_name}}</span>
						</p>
						<span class="postStyle">蜂鸟专送</span>
						<span class="arrive">准时达</span>

						<div class="right_dm">
							<span class="distance">{{v.distance}}</span>
							<span class="minute"> / {{v.order_lead_time}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {
		Product,
		DaohanglanShow,
		Show
	} from "@/request/api.js"
	export default {
		name: "Shoplist",
		data() {
			return {
				a: '',
				b: '',
				fenlei: false,
				paixu: false,
				shaixuan: false,
				shop: '',
				srcImg: "https://elm.cangdu.org/img/",
				t: '异国料理',
				content: '',
				id: '',
				n: '',
				h: '',
				more: true,
				ping: true,
				bao: true,
				zhun: true,
				xin: true,
				fu: true,
				piao: true,
				alls: 0,
				moeres: null,
				_id: ''
			}
		},
		methods: {
			all1() {
				this.fenlei = !this.fenlei
				this.paixu = false
				this.shaixuan = false
				this.content = '分类'
				this.catgory(this.a[1])
			},
			all2() {
				this.fenlei = false
				this.paixu = !this.paixu
				this.shaixuan = false
			},
			all3() {
				this.fenlei = false
				this.paixu = false
				this.shaixuan = !this.shaixuan

			},
			back() {
				this.$router.push({
					path: '/msite',
				})
			},
			catgory(v) {
				this.t = v.name
				this.b = v.sub_categories
				console.log(v)
			},
			types(v) {
				this.content = v.name
				this.id = v.id
				//分类
				Product(
					this.$store.state.msite.latitude,
					this.$store.state.msite.longitude,
					this.id,
					null,
					null,
					4
					).then(data => {
					this.shop = data
				}).catch(err => {
					console.log(err)
				});
				this.fenlei = false
			},
			sorts(n, i) {
				// 排序
				Product(
					this.$store.state.msite.latitude,
					this.$store.state.msite.longitude,
					this.id,
					n,
					null,
					4
					).then(data => {
					this.shop = data
				}).catch(err => {
					console.log(err)
				});
				this.h = i
				this.paixu = false
			},
			mores() {
				this.more = !this.more
				if (this.more == false) {
					this.moeres = 1
					index++
					this.alls++
					return
				}
				let index = 0
				if (index % 2 == 0) {
					this.alls--
					this.moeres = null
				}
			},
			pings(v) {
				this._id = v
				this.ping = !this.ping
				if (this.ping == false) {
					this.alls++
					return
				}
				let index = 0
				if (index % 2 == 0) {
					this.alls--
				}
			},
			zhuns(v) {
				this._id = v
				this.zhun = !this.zhun
				if (this.zhun == false) {
					this.alls++
					return
				}
				let index = 0
				if (index % 2 == 0) {
					this.alls--
				}
			},
			xins(v) {
				this._id = v
				this.xin = !this.xin
				if (this.xin == false) {
					this.alls++
					return
				}
				let index = 0
				if (index % 2 == 0) {
					this.alls--
				}
			},
			fus(v) {
				this._id = v
				this.fu = !this.fu
				if (this.fu == false) {
					this.alls++
					return
				}
				let index = 0
				if (index % 2 == 0) {
					this.alls--
				}
			},
			piaos(v) {
				this._id = v
				this.piao = !this.piao
				if (this.piao == false) {
					this.alls++
					return
				}
				let index = 0
				if (index % 2 == 0) {
					this.alls--
				}
			},
			baos(v) {
				this._id = v
				this.bao = !this.bao
				if (this.bao == false) {
					this.alls++
					return
				}
				let index = 0
				if (index % 2 == 0) {
					this.alls--
				}
			},
			sure() {
				Product(
					this.$store.state.msite.latitude,
					this.$store.state.msite.longitude,
					this.id,
					1,
					null,
					this._id
					).then(data => {
					this.shop = data
				}).catch(err => {
					console.log(err)
				});
				this.shaixuan = !this.shaixuan
			},
			qingkong() {
				this.more = 1
				this.ping = 1
				this.bao = 1
				this.zhun = 1
				this.xin = 1
				this.fu = 1
				this.piao = 1
				this.alls = 0
			},
			toshop(v) {
				this.$store.commit('toshop', v)
				this.$router.push({
					path: "/shop",
				})
			}
		},
		created() {
			//所有种类
			DaohanglanShow().then(data => {
				this.a = data
			}).catch(err => {
				console.log(err)
			});
			//页面展示
			Show(this.$store.state.msite.latitude, this.$store.state.msite.longitude).then(data => {
				this.shop = data
			}).catch(err => {
				console.log(err)
			});
			if (this.$store.state.shoplist.title) {
				this.content = this.$store.state.shoplist.title
			} else {
				this.content = '准时达'
			}
		},
	}
</script>

<style scoped>
	@import "../../node_modules/animate.css/animate.min.css";

	.last_span {
		line-height: 1.3rem;
	}

	.niao {
		font-size: .7rem;
		color: #3190E8;
		font-weight: 800;
		width: 1rem;
		margin-left: -.1rem;
	}

	.el-icon-check {
		font-size: .6rem;
		padding-right: 1rem;
		color: #3190E8;
	}

	.old {
		color: #3190E8;
	}

	.new {
		color: #666;
	}

	.aa {
		transition: all .3s;
	}

	.go {
		transform: rotate(-180deg);
		transition: all .3s;
	}

	.olds {
		color: #3190E8;
	}

	.news {
		color: #666;
	}

	.sub-comments-leave-active,
	.sub-comments-enter-active {
		transition: max-height .4s;
	}

	.sub-comments-enter,
	.sub-comments-leave-to {
		max-height: 0;
	}

	.sub-comments-enter-to,
	.sub-comments-leave {
		max-height: 10rem;
	}

	.clear_all {
		background-color: #fff;
		margin-right: .5rem;
		border: .025rem solid #fff;
	}

	.filter_button_style {
		width: 50%;
		font-size: .6rem;
		line-height: 1.3rem;
		border-radius: .2rem;
	}

	.confirm_filter {
		display: flex;
		background-color: #f1f1f1;
		width: 100%;
		padding: .3rem .2rem;
	}

	.filter_li span {
		font-size: .4rem;
	}

	.filter_icon {
		transform: scale(.7);
		margin-right: -.5rem;
		margin-left: -.2rem;
		width: 1rem;
		padding: .2rem 0.15rem;
		border: .025rem solid #e4e4e4;
		border-radius: .15rem;
		line-height: .4rem;
		text-align: center;
	}

	.filter_li svg {
		width: 1.3rem;
		margin-right: .125rem;
	}

	.filter_li {
		display: flex;
		align-items: center;
		border: .025rem solid #eee;
		border-radius: .125rem;
	}

	.filter_li>span:nth-child(2) {
		width: 4rem;
		margin-left: .4rem;
	}

	.filter_ul {
		display: flex;
		flex-wrap: wrap;
		padding: 0 .5rem;
		background-color: #fff;
	}

	.filter_header_style {
		font-size: .4rem;
		color: #333;
		line-height: 1.5rem;
		text-align: left;
		padding-left: .5rem;
		background-color: #fff;
	}

	.filter_li span {
		font-size: .3rem;
		width: 2rem;
		color: #333;
	}

	.filter_li {
		width: 2.75rem;
		height: .8rem;
		margin-right: .25rem;
		border-radius: .125rem;
		padding: 0 .25rem;
		margin-bottom: .25rem;
	}

	.filter_ul {
		display: flex;
		flex-wrap: wrap;
		padding: 0 .5rem;
		background-color: #fff;
	}

	.filter_header_style {
		font-size: .3rem;
		color: #333;
		line-height: 1rem;
		text-align: left;
		padding-left: .5rem;
		background-color: #fff;
	}

	.filter_container {
		flex-direction: column;
	}

	.sort_detail_type {
		width: 100%;
		position: absolute;
		display: flex;
		top: 1.6rem;
		left: 0;
		border-top: .025rem solid #e4e4e4;
		background-color: #fff;
		width: 10rem;
	}

	.sort_list_li p {
		line-height: 1.6rem;
		flex: auto;
		text-align: left;
		text-indent: .25rem;
		border-bottom: .025rem solid #e4e4e4;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.sort_list_li_p {
		line-height: 1.6rem;
		flex: auto;
		text-align: left;
		text-indent: .25rem;
		border-bottom: .025rem solid #e4e4e4;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #3190E8;
	}

	.sort_list_li {
		height: 1.6rem;
		display: flex;
		align-items: center;
		width: 10rem;
	}

	.sort_list_li svg {
		width: .7rem;
		height: .7rem;
		margin: 0 .3rem 0 .8rem;
	}

	svg:not(:root) {
		overflow: hidden;
	}

	.sort_container {
		background-color: #fff;
		border-bottom: .025rem solid #f1f1f1;
		position: fixed;
		top: 1.2rem;
		right: 0;
		width: 100%;
		display: flex;
		z-index: 13;
		box-sizing: border-box;
	}

	.sort_item {
		font-size: .35rem;
		color: #444;
		width: 33.3%;
		height: 1rem;
		text-align: center;
		line-height: .4rem;
	}

	.sort_item_container {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 14;
		background-color: #fff;
		box-sizing: border-box;
		padding-top: .3rem;
	}

	.sort_item_border {
		height: .5rem;
		border-right: .025rem solid #e4e4e4;
	}

	.sort_icon {
		vertical-align: middle;
		margin-left: .2rem;
		fill: #3190E8;
	}

	.category_count {
		background-color: #CCCCCC;
		border-radius: .3rem;
		padding: 0rem .1rem;
		margin-right: -.15rem;
	}

	.sort_detail_type {
		width: 100%;
		position: absolute;
		display: flex;
		top: 1.6rem;
		left: 0;
		border-top: .025rem solid #e4e4e4;
		background-color: #fff;
	}

	.category_left {
		float: left;
		width: 50%;
		flex: 1;
		background-color: #f1f1f1;
		overflow-y: auto;
	}

	.category_left_li {
		background-color: #FFFFFF;
		height: 1rem;
		display: flex;
		justify-content: space-between;
		padding: 0 .3rem;
	}

	.category_left_lis {
		height: 1rem;
		display: flex;
		justify-content: space-between;
		padding: 0 .3rem;
	}

	.category_icon {
		width: .5rem;
		vertical-align: middle;
		padding-right: .3rem;
	}

	.category_left span {
		font-size: .3rem;
		color: #666;
		line-height: 1rem;
	}

	.category_right {
		float: right;
		width: 50%;
		flex: 1;
		background-color: #fff;
		padding-left: .5rem;
		overflow-y: scroll;
		height: 9rem;
	}

	.category_right_li {
		display: flex;
		justify-content: space-between;
		height: 1rem;
		line-height: 1rem;
		padding-right: .5rem;
		border-bottom: .025rem solid #e4e4e4;
	}

	.category_right_li span {
		color: #666;
	}

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

	.shop_list_container {
		margin-top: 2.22rem;
		border-top: .025rem solid #e4e4e4;
		background-color: #fff;
		position: relative;
	}

	.el-icon-takeaway-box {
		margin-left: .3rem;
		font-size: .5rem;
		vertical-align: middle;
	}

	.shop_header_title {
		color: #999;
		font-size: .35rem;
		line-height: 1rem;
		margin-left: .2rem;
		vertical-align: middle;
	}

	.shoplist_container {
		background-color: #fff;
	}

	.shop_li {
		border-bottom: .025rem solid #f1f1f1;
		padding: .7rem .3rem;
		height: 3.5rem;
		position: relative;
	}

	.left {
		position: absolute;
		width: 2rem;
		box-sizing: border-box;
		font-size: 0;
	}

	.left>img {
		width: 100%;
	}

	.middle {
		position: absolute;
		left: 2.5rem;
		top: .6rem;
		height: 2.5rem;
		width: 5rem;
		box-sizing: border-box;
	}

	.middle>.brand {
		position: absolute;
		font-size: .3rem;
		background-color: #FFD930;
		font-family: 800;
		padding: 0 .1rem;
	}

	.titles {
		position: absolute;
		left: 1rem;
		top: -.1rem;
		width: 3rem;
		font-size: .45rem;
	}

	.star {
		position: absolute;
		top: .8rem;
	}

	.star>span,
	.star>div {
		float: left;
	}

	.pingfen {
		width: 2.25rem;
		box-sizing: border-box;
		font-size: .4rem;
		color: #ff6000;
	}

	.mouth {
		box-sizing: border-box;
		transform: scale(.8);
		font-size: .35rem;
		color: #666;
	}

	.pin {
		box-sizing: border-box;
		font-size: .35rem;
		color: #ff6000;
	}

	.send {
		position: absolute;
		top: 1.53rem;
		left: -1.7rem;
		font-size: .65rem;
		width: 7rem;
		color: #999;
		transform: scale(.53);
	}

	.right {
		position: absolute;
		right: .1rem;
		width: 3rem;
		top: .6rem;
		height: 2.5rem;
		color: #999;
	}

	.time1 {
		font-size: .3rem;
		float: right;
	}

	.time1>span {
		margin-left: .1rem;
	}

	.postStyle {
		position: absolute;
		right: .75rem;
		top: .8rem;
		background-color: #3190EB;
		color: #ffffff;
		padding: .02rem;
		box-sizing: border-box;
		transform: scale(.8);
	}

	.arrive {
		position: absolute;
		right: -.07rem;
		top: .8rem;
		color: #3190e8;
		padding: .01rem .01rem;
		border: .025rem solid #3190e8;
		box-sizing: border-box;
		transform: scale(.8);
	}

	.right_dm {
		position: absolute;
		right: -1.5rem;
		top: 1.6rem;
		transform: scale(.6);
		width: 7rem;
		text-align: right;
	}

	.distance {
		font-size: .5rem;
	}

	.minute {
		font-size: .5rem;
		color: deepskyblue;
		margin-right: .2rem;
	}

	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
