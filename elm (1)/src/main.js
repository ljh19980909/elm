import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.prototype.VueAxios = VueAxios;
// axios.defaults.baseURL = "https://elm.cangdu.org";
Vue.use(ElementUI);
axios.defaults.withCredentials=true;

// 页面加载动画
axios.interceptors.request.use((config)=>{
    store.state.load=true
    store.state.loaddingnum.push(0)
    return config;
})

axios.interceptors.response.use(function (response) {
    store.state.num++
    if(store.state.num==store.state.loaddingnum.length){
		store.state.num=0
		 store.state.loaddingnum=[]
        store.state.load=false
    }
    return response;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
