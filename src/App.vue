<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      res: {}
    };
  },
  mounted() {
    // 本地加载请求静态json文件的形式
    // this.axios.get('/json/user/login.json').then((res) => {
    //   this.res = res;
    // })
    // 通过easy-mock平台实现mock
    // 将axios中axios.defaults.baseURL = ''地址换为easy-mock项目地址
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res;
    // })
    // 通过mockjs实现mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res;
    // })
    if (this.$cookie.get('userId')) {
      this.getUserInfo();
      this.getCartSum();
    }
  },
  methods: {
    // 获取用户信息
    getUserInfo() {
      this.$api.mall.getUserInfo({}).then((res = {}) => {
        // 保存到vuex里面
        this.$store.dispatch('saveUserName', res.username);
      });
    },
    // 获取购物车商品数量
    getCartSum() {
      this.$api.mall.getCartSum({}).then((res = 0) => {
        // 保存到vuex里面
        this.$store.dispatch('saveCartCount', res);
      });
    }
  }
};
</script>

<style lang="scss">
// @import '@/assets/scss/index.scss'; // 引入重置样式表（覆盖浏览器用户代理样式）
// @import '@/assets/scss/modal.scss'; // 引入模态框样式表
</style>
