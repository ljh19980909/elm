import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
	// 首页重定向
	{
		path: "/",
		redject: "/home",
		component: () => import("../views/Header.vue")
	},
	// 商家代金券
	{
		path: "/coupon",
		component: () => import("../components/Coupon.vue")
	},
	// 首页
	{
		path: "/home",
		component: () => import("../views/Header.vue")
	},
	// 登录
	{
		path: "/login",
		component: () => import("../views/Login.vue")
	},
	// 重置密码
	{
		path: "/reset",
		component: () => import("../views/Reset.vue")
	},
	// 城市搜索
	{
		path: "/citys",
		component: () => import("../views/Citys.vue")
	},
	// 商品首页
	{
		path: "/msite",
		component: () => import("../views/Msite.vue")
	},
	// 商品搜索
	{
		path: "/search",
		component: () => import("../views/Search.vue")
	},
	// 订单
	{
		path: "/order",
		component: () => import("../views/Order.vue")
	},
	// 商品清单
	{
		path: "/shoplist",
		component: () => import("../views/Shoplist.vue")
	},
	// 购物车
	{
		path: "/shop",
		component: () => import("../views/Shop.vue"),
		children: [{
				path: "shopDetail",
				component: () => import("../views/ShopDetail.vue"),
				children: [{
					path: "shopSafe",
					component: () => import("../views/ShopSafe.vue"),
				}]
			},
			{
				path: "confirmOrder",
				component: () => import("../views/ConfirmOrder.vue"),
				children: [{
						path: "chooseAddress",
						component: () => import("../views/ChooseAddress.vue"),
						children: [{
							path: "addAddress",
							component: () => import("../views/AddAddress.vue"),
							children: [{
								path: "searchAddress",
								component: () => import("../views/SearchAddress.vue"),
							}]
						}]
					},
					{
						path: "payment",
						component: () => import("../views/Payment.vue"),
					},
					{
						path: "invoice",
						component: () => import("../views/Invoice.vue"),
					},
					{
						path: "remark",
						component: () => import("../views/Remark.vue"),
					},
				]
			},
			{
				path: "foodDetail",
				component: () => import("../views/FoodDetail.vue"),
			}
		]
	},
	// 个人中心
	{
		path: "/mine",
		component: () => import("../views/Mine.vue"),
		children: [{
			path: "zhuxiao",
			component: () => import("../views/Zhuxiao.vue"),
			children: [{
					path: "setusername",
					component: () => import("../views/Setusername.vue"),
				},
				{
					path: "address",
					component: () => import("../views/Address.vue"),
					children: [{
						path: "dizhi",
						component: () => import("../views/Dizhi.vue"),
						children: [{
							path: "addDetail",
							component: () => import("../views/AddDetail.vue"),
						}]
					}]
				},
			]
		}]
	},
	{
		path: "/myintegral",
		component: () => import("../views/Myintegral.vue")
	},
	// 红包
	{
		path: "/mydiscounts",
		component: () => import("../views/Mydiscounts.vue"),
		children: [{
			path: "commend",
			component: () => import("../views/Commend.vue"),
		}, {
			path: "hbHistory",
			component: () => import("../views/HbHistory.vue"),
		},{
			path: "hbdescription",
			component: () => import("../views/Hbdescription.vue"),
		},{
			path: "exchange",
			component: () => import("../views/Exchange.vue"),
		}],
	},
	{
		path: "/activity",
		component: () => import("../views/Activity.vue")
	},
	{
		path: "/elmvip",
		component: () => import("../views/Elmvip.vue"),
		children: [{
			path: "vipdes",
			component: () => import("../components/Vipdes.vue"),
		}, {
			path: "invoicerecord",
			component: () => import("../views/Invoicerecord.vue"),
		}, {
			path: "usecart",
			component: () => import("../views/Usecart.vue"),
		}]
	},
	{
		path: "/download",
		component: () => import("../views/Download.vue")
	},
	{
		path: "/mybalance",
		component: () => import("../views/Mybalance.vue"),
		children: [{
			path: "detail",
			component: () => import("../components/Detail.vue")
		}, ]
	},
	{
		path: "/service",
		component: () => import("../views/Service.vue"),
		children: [{
				path: "svipdes",
				component: () => import("../components/Svipdes.vue")
			},
			{
				path: "signin",
				component: () => import("../components/Signin.vue")
			},
			{
				path: "ulevel",
				component: () => import("../components/Ulevel.vue")
			},
			{
				path: "integral",
				component: () => import("../components/Integral.vue")
			},
			{
				path: "makem",
				component: () => import("../components/Makem.vue")
			},
			{
				path: "paypro",
				component: () => import("../components/Paypro.vue")
			},
			{
				path: "otherpro",
				component: () => import("../components/Otherpro.vue")
			},
			{
				path: "jusdapro",
				component: () => import("../components/Jusdapro.vue")
			},
			{
				path: "vipdes",
				component: () => import("../components/Vipdes.vue")
			},
			{
				path: "redpacket",
				component: () => import("../components/Redpacket.vue")
			},
			{
				path: "rules",
				component: () => import("../components/Rules.vue")
			},
			{
				path: "retroactive",
				component: () => import("../components/Retroactive.vue")
			},
			{
				path: "privilege",
				component: () => import("../components/Privilege.vue")
			},
			{
				path: "disclaimer",
				component: () => import("../components/Disclaimer.vue")
			},
			{
				path: "voucher",
				component: () => import("../components/Voucher.vue")
			},
			{
				path: "business",
				component: () => import("../components/Business.vue")
			},
			{
				path: "balancepro",
				component: () => import("../components/Balancepro.vue")
			},
			{
				path: "greatbusinesses",
				component: () => import("../components/Greatbusinesses.vue")
			},
			{
				path: "anonymous",
				component: () => import("../components/Anonymous.vue")
			},
			{
				path: "activepro",
				component: () => import("../components/Activepro.vue")
			},
		]
	},
]

const router = new VueRouter({
	routes
})

export default router
