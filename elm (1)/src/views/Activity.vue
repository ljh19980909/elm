<template>
	<div class="activity">
		<h3>请重新进入</h3>
		<p>请返回后重新进入积分商城或活动~</p>
		<img src="//yun.duiba.com.cn/webapp/img/retrylogin.png">
	</div>
</template>

<script>
	export default {
		name: "Activity",
	}
</script>

<style scoped>
	.activity {
		text-align: center;
		overflow: hidden;
		position: absolute;
		top: 80%;
		left: 50%;
		transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
	}

	h3 {
		font-size: 26px;
		color: #0d7fd5;
		margin-bottom: 15px;
	}

	p {
		font-size: 14px;
		color: #666;
		margin-bottom: 19px;
	}

	img {
		width: 176px;
		height: 176px;
	}
</style>
