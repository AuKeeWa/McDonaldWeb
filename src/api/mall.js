/**
 * 商城模块接口列表
 */
import axios from '@/api/http.js'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

// get传参格式
// axios.get('demo/url', {
//     params: {
//         id: 18,
//         name: 'jay',
//     },
//    timeout: 1000,
//   ...//其他相关配置
// })

// post传参格式
// axios.post('demo/url', {
//     id: 18,
//     name: 'jay',
// },{
//    timeout: 1000,
//     ...//其他相关配置
// })

const mall = {
    // 商品列表
    goodsList(params) {
        return axios.get(`api/products`, { params });
    },
    // 登录
    login(params) {
        return axios.post(`api/user/login`, params);
    },
    // 退出
    logout(params) {
        return axios.post(`api/user/logout`, params);
    },
    // 注册
    register(params) {
        return axios.post(`api/user/register`, params);
    },
    // 获取用户信息
    getUserInfo() {
        return axios.get('api/user');
    },
    // 加入购物车
    addCart(params) {
        return axios.post('api/carts', params);
    },
    // 获取购物车列表
    getCart() {
        return axios.get('api/carts');
    },
    // 更新购物车数量和单选状态
    updateCart(id, params) {
        return axios.put(`api/carts/${id}`, params);
    },
    // 删除购物车商品
    deleteCart(id) {
        return axios.delete(`api/carts/${id}`);
    },
    // 全选购物车
    allCheckCart(url) {
        return axios.put(`api/${url}`);
    },
    // 获取购物车商品数量
    getCartSum() {
        return axios.get('api/carts/products/sum');
    },
    // 获取商品信息
    getProductInfo(id) {
        return axios.get(`api/products/${id}`);
    },
    // 获取收货地址
    getAddress() {
        return axios.get('api/shippings');
    },
    // 收货地址增删改
    handleAddress(method, url, params) {
        return axios[method](url, params);
    },
    // 提交订单
    submitOrder(params) {
        return axios.post('api/orders', params);
    },
    // 获取订单详情
    getOrder(id) {
        return axios.get(`api/orders/${id}`);
    },
    // 获取订单详情
    getOrderList(params) {
        return axios.get('api/orders', { params });
    },
    // 提交支付
    submitPay(params) {
        return axios.post('api/pay', params);
    }
}

export default mall;