/**
 * 商城Vuex-actions
 */
 export default {
  // 保存用户名
  saveUserName(context,username) {
    context.commit('saveUserName',username);
  },
  // 保存购物车数量
  saveCartCount(context,count) {
    context.commit('saveCartCount',count);
  }
}