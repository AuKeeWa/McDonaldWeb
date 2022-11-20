/**
 *@description Cookie localStorage sessionStorage区别？
 * 存储大小：Cookie 4K、Storage 5M
 * 有效期：Cookie拥有有效期，localStorage永久存储，sessionStorage会话存储
 * Cookie会发送到服务器端，存储在内存中，也会存储到本地浏览器端。localStorage存储在浏览器端，sessionStorage存储在浏览器内存中
 * 路径：Cookie有路径限制，localStorage存储在域名下，没有路径限制
 * API：Cookie没有特定的API，Storage有对应的API
 * 
 *@description 为什么封装Storage？
 * Storage本身有API，但是只是简单的key/value形式
 * Storage只存储字符串，需要人工转换成json对象
 * Storage只能一次性清空，不能单个清空
 */

/**
 * sessionStorage封装
 */
const STORAGE_KEY = 'mall'
export default {
  // 存储值
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      let val = this.getStorage() // 获取storage
      val[key] = value // 新增属性值
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val)) // 更新storage
    }
  },
  // 获取值
  getItem(key, module_name) {
    // 获取某个模块下面的属性，如：user下面的userName
    if (module_name) {
      let val = this.getItem(module_name)
      if (val) return val[key]
    }
    return this.getStorage()[key]
  },
  // 获取所有存储
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 清除值
  clear(key, module_name) {
    let val = this.getStorage()
    if (module_name) {
      if (!val[module_name]) return;
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val)) // 更新storage
  }
}
