import Vue from 'vue'
import App from './App.vue'
// 全部引入elementUI
import ElementUI from 'element-ui' // 引入elementUI
import 'element-ui/lib/theme-chalk/index.css'
// 按需引入elementUI
import { Message, Button } from 'element-ui'
import router from './router' // 路由
import api from './api' // 导入api接口
import VueLazyLoad from 'vue-lazyload' // 引入懒加载
import VueCookie from 'vue-cookie' // 引入cookie
import store from './store' // 引入vuex
import "./assets/ifont/iconfont.css";
// import axios from 'axios' // 网络请求：axios是一个库，并不是vue中的第三方插件，使用时不能通过Vue.use()安装插件，需要在原型上进行绑定
// import VueAxios from 'vue-axios' // vue-axios是将axios集成到Vue.js的小包装器，可以像插件一样进行安装
// import env from './config/env' // 环境变量

// import '@/assets/scss/reset.scss'; // 引入重置样式表（覆盖浏览器用户代理样式）

// mock开关
// const mock = true;
// // 运行时根据条件动态加载
// if (mock) {
//   require('./mock/api')
// }

// axios默认配置
// axios.defaults.timeout = 8000 // 请求超时
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/xxxxxx' // easy-mock
// axios.defaults.baseURL = '/api' // 接口代理：根据前端的跨域方式做调整
// axios.defaults.baseURL = env.baseURL // 根据环境变量获取不同的请求地址：解决CORS跨域、JSONP跨域
// 响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 与后端约定好接口规范，如格式：{status:0,data:[],msg:''}，状态码最好根据业务来确定。
//   let res = response.data // 接口返回值
//   if (res.status == 0) {
//     return res.data
//   } else if (res.status == 10) { //没有登录
//     window.location.href = '/#/login'
//   } else {
//     alert(res.msg)
//   }
// })

// Vue.use(VueAxios, axios)
// 全部引入elementUI
// 按需引入elementUI
Vue.use(ElementUI)
Vue.prototype.$message = Message;
Vue.use(Button);

Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)
Vue.prototype.$api = api // 将api挂载到vue的原型上
Vue.config.productionTip = false // 关闭生产模式下给出的提示

new Vue({
    render: h => h(App), // h函数会生成一个VNode节点，render函数得到这个VNode节点之后，返回给Vue.js的mount函数渲染成真实DOM节点，并挂载到根节点上。
    router,
    store,
}).$mount('#app')