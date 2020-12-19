import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
	storage: window.localStorage
});

export default new Vuex.Store({
	state: {
		msite: '',
		shoplist: '',
		shop: '',
		show: true,
		food: {},
		total: '',
		a: true,
		achieves: '',
		dizhi: '',
		writeAddresses: [],
		foodDetail: '',
		// 页面加载动画
		load: true,
		loaddingnum: [],
		num: 0,
		pianhao: '',
		hongbao: '',
	},
	mutations: {
		//去商品首页
		tomsite: (state, v) => {
			state.msite = v
		},
		//去清单页
		toshoplist: (state, v) => {
			state.shoplist = v
		},
		//去购物车
		toshop: (state, v) => {
			state.shop = v
		},
		// 商品
		tocart: (state, v) => {
			state.food. [v[0]] = [v[1], v[2]]
			// 判断是否清空
			if (v == state.shop.id) {
				state.food[state.shop.id][1].forEach(v => {
					v.count = 0
				})
			}
		},
		// 个人中心改页面
		changea(state) {
			if (state.a) {
				state.a = false
			} else {
				state.a = true
			}
		},
		//账号密码
		achieve: (state, v) => {
			console.log(v)
			if (v == 'a') {
				state.achieves = ''
			} else {
				state.achieves = v
			}
			console.log(state.achieves)
		},
		//地址
		address: (state, v) => {
			state.dizhi = v
			console.log(state.dizhi)
		},
		//填写地址
		writeAddress: (state, v) => {
			console.log(v)
			state.writeAddresses.push(v)
			console.log(state.writeAddresses)
		},
		// 商品详情
		FoodDetail: (state, v) => {
			state.foodDetail = v
		},
		kouwei: (state, v) => {
			state.pianhao = v
			console.log(v)
		},
		addRedbao: (state, v) => {
			state.hongbao = v
		},
	},
	actions: {},
	modules: {},
	plugins: [vuexLocal.plugin],
})
