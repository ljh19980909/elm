import {
	get,
	post
} from './http'
//城市列表
export const City = p => get('/v1/cities?', p);
//城市搜索
export const CitySearch = (p, q) => get('/v1/pois?city_id=' + p + '&keyword=' + q + '&type=search');
//二维码
export const Erweima = p => post('/v1/captchas', p);
//登录请求
export const Denglu = p => post('/v2/login', p);
//重置密码
export const Chongzhi = p => post('/v2/changepassword', p);
//商品首页轮播图/页面展示
export const Lunbo = p => get('/v2/index_entry', p);
export const Show = (p, q) => get('/shopping/restaurants?latitude=' + p + '&longitude=' + q + '');
//商品搜索
export const ProductSearch = (p, q) => get('v4/restaurants?geohash=' + p + '&keyword=' + q + '');
//商品列表筛选
export const Product = (a, b, c, d, e, f) => get('/shopping/restaurants?latitude=' + a + '&longitude=' + b + '&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=' + c + '&order_by=' + d + '&delivery_mode[]=' + e + '&support_ids[]=' + f + '');
//商品列表导航栏
export const DaohanglanShow = p => get('/shopping/v2/restaurant/category', p);
// 请求加入购物车
export const RequestCart = p => post('v1/carts/checkout', p);
//注销(头像上传/退出)
// 有问题
export const Zhuxiao = p => post('v1/addimg/', p);
export const Quit = p => get('v2/signout', p);
// 添加地址
export const AddAddress = p => post('/v1/users/' + p.a + '/addresses', p.b);
//确认地址
export const ConfirmAddress = p => get('v1/pois?type=nearby&keyword=' + p + '');
//红包
export const Exchange = p => get('/v1/users/' + p + '/hongbao/exchange');
//历史红包
export const LishiHongbao = p => get('promotion/v2/users/' + p + '/expired_hongbaos?limit=20&offset=0');
