/**
 * 接口域名的管理
 * 通过base.js来管理我们的接口域名，不管有多少个都可以通过这里进行接口的定义。即使修改起来，也是很方便的。
 * 暂时采用在：vue.config.js中配置devServer
 */
 const base = {    
  sq: 'https://xxxx111111.com/api/v1',    
  bd: 'http://xxxxx22222.com/api'
}

export default base;