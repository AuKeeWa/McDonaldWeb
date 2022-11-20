import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';


// 1.安装插件
Vue.use(Vuex)
// 2.state对象
const state = {
  username: '', // 登录用户名
  cartCount: 0, // 购物车商品数量
}
// 3.store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store