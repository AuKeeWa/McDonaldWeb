/**
 * 路由封装
 * 路由懒加载方式一：
 *    1. component: resolve => require(['../pages/Index.vue'],resolve)  // 路由懒加载
 * 路由懒加载方式二：
 *    1. 需要添加 syntax-dynamic-import (opens new window)插件，才能使 Babel 可以正确地解析语法,`cnpm install --save-dev @babel/plugin-syntax-dynamic-import`
 *    2. component: () => import('../pages/Cart.vue'), // 路由懒加载
 */
// 导入vue和vue-router
import Vue from 'vue'
import Router from 'vue-router'
// 导入页面组件
// import Login from '../pages/Login'
import Home from '../pages/Home'
import Index from '../newPages/Index'
// import Product from '../pages/Product'
// import Detail from '../pages/Detail'
// import Cart from '../pages/Cart'
// import Order from '../pages/Order'
// import OrderConfirm from '../pages/OrderConfirm'
// import OrderList from '../pages/OrderList'
// import OrderPay from '../pages/OrderPay'
// import Alipay from '../pages/Alipay'
// 加载路由插件
Vue.use(Router)
    // 导出路由
export default new Router({
    // 路由规则
    routes: [
        // 首页
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index', // 重定向
            // 子路由
            children: [{
                    path: 'index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: 'product', // 动态路由
                    name: 'product',
                    // component: Product,
                    // component: resolve => require(['../pages/Product.vue'],resolve), // 路由懒加载
                    component: () =>
                        import ('../newPages/AllProduct.vue') // 路由懒加载
                },
                {
                    path: 'detail/:id',
                    name: 'detail',
                    // component: Detail,
                    // component: resolve => require(['../pages/Detail.vue'], resolve), // 路由懒加载
                    component: () =>
                        import ('../pages/Detail.vue') // 路由懒加载
                }
            ]
        },
        // 登录
        {
            path: '/login',
            name: 'login',
            // component: Login
            component: () =>
                import ('../pages/Login.vue') // 路由懒加载
        },
        // 购物车
        {
            path: '/cart',
            name: 'cart',
            // component: Cart
            component: () =>
                import ('../pages/Cart.vue') // 路由懒加载
        },
        // 订单
        {
            path: '/order',
            name: 'order',
            component: () =>
                import ('../pages/Order.vue'), // 路由懒加载
            children: [{
                    path: 'list',
                    name: 'order-list',
                    component: () =>
                        import ('../pages/OrderList.vue') // 路由懒加载
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: () =>
                        import ('../pages/OrderConfirm.vue') // 路由懒加载
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: () =>
                        import ('../pages/OrderPay.vue') // 路由懒加载
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: () =>
                        import ('../pages/Alipay.vue') // 路由懒加载
                }
            ]
        }
    ]
})