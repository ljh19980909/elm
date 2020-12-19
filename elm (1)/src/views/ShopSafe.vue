<template>
	<div>
		<div class="head_top">
			<div @click="back()" class="back">
				<i class="el-icon-arrow-left"></i>
			</div>
			<div class="top_tittle">
				<h4><strong>食品监督安全公示</strong></h4>
			</div>
		</div>
		<div class="second">
			<ul>
				<p class="ps">
					<span>食品监督安全公示</span>
				</p>
				<div class="picture">
					<span>
						<svg class="shop_status">
							<use data-v-ca49b092 xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#res-well">
								<svg viewBox="0 0 1024 1024" id="res-well">
									<path fill="#7ED321" fill-rule="evenodd" d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0zM247.808 402.432c0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-16.384-24.576-52.224-52.224-52.224-27.648 0-52.224 35.84-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48zM512 800.768c-132.096 0-239.616-96.256-239.616-215.04 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 96.256 89.088 174.08 198.656 174.08 109.568 0 198.656-77.824 198.656-174.08 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 117.76-107.52 215.04-239.616 215.04zm243.712-377.856c-11.264 0-20.48-9.216-20.48-20.48 0-17.408-24.576-52.224-52.224-52.224-28.672 0-52.224 34.816-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48z"></path>
								</svg></use>
						</svg>
					</span>
					<div>
						<p>
							<span>监督检查结果：</span>
							<span style="color: #7ed321;">良好</span>
						</p>
						<p>
							<span>检查日期：</span>
							<span></span>
						</p>
					</div>
				</div>
			</ul>
		</div>
		<p class="kongbai"></p>
		<div class="third">
			<p class="ps">
				<span>工商登记信息</span>
			</p>
			<li>
				<p>企业名称</p>
			</li>
			<li>
				<p>工商执照注册号</p>
			</li>
			<li>
				<p>注册资本</p>
			</li>
			<li>
				<p>注册地址</p>
			</li>
			<li>
				<p>属地监管所</p>
			</li>
			<li>
				<p>法定代表人</p>
			</li>
			<li>
				<p>经营范围</p>
			</li>
		</div>
		<div class="fourth">
			<p class="ps">
				<span>餐饮许可证</span>
			</p>
			<ul>
				<li>
					<p>营业范围</p>
				</li>
				<li>
					<p>许可证有效期</p>
				</li>
				<li>
					<p>许可证号</p>
				</li>
				<li>
					<p>发证时间</p>
				</li>
				<li>
					<p>发证机关</p>
				</li>
			</ul>
		</div>
		<p class="kongbai"></p>
		<div class="fourth">
			<p class="ps">
				<span>许可证书</span>
			</p>
			<p>
				<img data-v-22ee73da="" src="https://fuss10.elemecdn.com/1/60/e91e0a9f2163.png.png"> 
				<img data-v-22ee73da="" src="https://fuss10.elemecdn.com/1/60/e91e17fa2164.png.png">
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ShopSafe",
		methods: {
			back() {
				this.$router.push({
					path: '/shop/shopDetail',
				})
			},
		},
		created() {
			console.log(this.$store.state.shop)
		}
	}
</script>

<style scoped>
	.head_top {
		background-color: #3190e8;
		position: fixed;
		z-index: 100;
		top: 0;
		width: 100%;
		height: 1.2rem;
	}

	.back {
		font-size: .6rem;
		color: #FFFFFF;
		line-height: 1.2rem;
		margin-left: .2rem;
		font-weight: 800;
	}

	.top_tittle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: .6rem;
		color: #FFFFFF;
	}

	.second {
		width: 100%;
		margin-top: 1.4rem;
		height: 4.5rem;
		background-color: #FFFFFF;
		position: relative;
	}

	.ps {
		border-bottom: .03rem solid #f1f1f1;
		height: 1.2rem;
		width: 100%;
		line-height: 1.2rem;
		padding: 0 .3rem;
		font-size: .5rem;
		color: #333;
	}

	.xiangqing {
		float: right;
		font-size: .43rem;
		color: #bbb;
	}

	.xiangqing i {
		margin-left: .1rem;
	}

	.picture svg {
		transform: scale(.4);
		position: absolute;
		top: .3rem;
		left: -2.7rem;
	}

	.picture div {
		position: absolute;
		top: 2rem;
		left: 2.6rem;
		font-size: .4rem;
		color: #666;
	}

	.picture p {
		margin-bottom: .5rem;
	}

	.kongbai {
		width: 100%;
		height: .3rem;
		background-color: #ebebeb;
	}

	.third {
		width: 100%;
		padding-bottom: .5rem;
	}

	.third>li,.fourth li {
		width: 100%;
		height: 1rem;
		font-size: .4rem;
		line-height: 1rem;
		padding-left: .6rem;
	}
	.fourth>p:nth-child(2){
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		padding-left: .5rem;
		background-color: #ebebeb;
	}
	.fourth>p:nth-child(2)>img{
		margin-left: .2rem;
	}
</style>
