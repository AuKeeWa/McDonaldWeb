/**
 * 环境变量
 * @description 提前配置环境变量：package.json>scripts>--mode=development，通常分为：开发、测试、生产
 */

let baseURL = ''
const env = process.env.NODE_ENV // 获取当前node.js进程中环境变量
switch (env) {
  // 开发环境：npm run serve
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break;
  // 测试环境: npm run test
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    break;
  // 生产环境：npm run build
  case 'production':
    baseURL = 'http://mall-pre.springboot.cn/api'
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    break;
}

export default {
  baseURL
}