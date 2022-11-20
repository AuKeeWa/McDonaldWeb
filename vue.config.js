// webpack使用
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // @/ 是 src/ 的别名
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"，其他是："additionalData"
        prependData: `@import "@/assets/scss/index.scss";` //引入全局变量   
      }
    }
  },
  devServer: {
    host: 'localhost', // 设置主机地址
    port: 8080, // 设置默认端口
    proxy: { // 设置代理
      // 拦截
      '/api': {
        target: 'http://mall-pre.springboot.cn', // 代理的目标URL地址
        ws: true, // 如果要代理 websockets
        changeOrigin: true, // 是否要将host地址更改为target地址
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  /**
   * 部署应用包时的基本 URL（默认值：'/'）。默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
   * 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
   * 例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
   * Default: '/'
   */
  // publicPath:'/my-app/', 

  /**
   * 打包后文件输出目录，默认dist文件夹
   * Default: 'dist'
   */
  // outputDir: 'dest',

  /**
   * 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
   * Default: 'index.html'
   */
  // indexPath: 'index2.html',

  /**
   * 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
   * Default: 'default'
   */
  //  lintOnSave: false,

  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。 
   */
  //  productionSourceMap: false,

  /**
   * 允许对内部的 webpack 配置进行更细粒度的修改
   */
  chainWebpack: (config) => {
    // 删除prefetch预加载，真正实现懒加载
    config.plugins.delete('prefetch');
  }
}