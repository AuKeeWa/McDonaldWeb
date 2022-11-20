/**
 * mall模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/api/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const mall = {
    // 商品列表    
    goodsList() {
        return axios.get(`${base.sq}/topics`);
    },
    // 商品详情,演示    
    goodsDetail(id, params) {
        return axios.get(`${base.sq}/topic/${id}`, {
            params: params
        });
    },
    // post提交    
    login(params) {
        return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
    }
    // 其他接口…………
}

export default mall;