[TOC]
# 请务必关闭AdGuard
# 1. 项目说明
1. 仿PC端麦当劳中国，采用vue.js(2.x)+elementUI开发。
2. 主要包含页面：商城首页、商品详情页、购物车页、下单页、登录页。
2. 代码分支：master分支为：静态页面+接口交互
3. 前端框架：vue2.x。
4. UI框架：elementUI。
5. 测试用户：  
   * admin1/admin1 
   * jack/jack
6. 效果图
![首页](https://github.com/AuKeeWa/Screenshots/blob/main/HomePage.png "index.png")

# 2. 目录说明
```
xiaomi-mall
├─ public
   ├─ json // 模拟数据
   └─ imgs // 图片资源(建议：大图片放public/imgs，小图片放src/assets)
├─ src
   ├─ api // 接口
      ├─ http.js // axios封装
      ├─ index.js // api接口统一出口
      ├─ base.js // api接口域名管理
      └─ mall.js // 商城模块api映射配置
   ├─ assets // css、iconfont、小图标
   ├─ components // 组件库
   ├─ config // 配置：环境变量
   ├─ mock // mock模拟数据
   ├─ pages // 页面
   ├─ router // 路由
   ├─ storage // 本地数据存储：sessionStorage、localStorage
   ├─ store // vuex
   └─ util // 工具js库
├─ vue.config.js // 配置文件
```

# 3. 插件依赖
```
cnpm i vue-lazyload  sass swiper vue-awesome-swiper vue-axios  vue-cookie mockjs --save-dev
cnpm install sass-loader@8.0.2 --save-dev
cnpm install qs --save-dev
cnpm install element-ui babel-plugin-component --save-dev
cnpm install qrcode --save # 二维码插件
cnpm install vue-infinite-scroll --save # 页面滚动插件
```

# 4. 资源说明
## 4.1 public 静态资源
1. `public/font` 字体文件
2. `public/imgs` 图片文件
   * 图片资源(建议：大图片放public/imgs，小图片放src/assets)
	* 建议图片能够放后端或者云存储的尽量就别放前端，减少包体积和优化加载速度 。
	* 图片如果是复用的图片，不属于某个页面独有的图片，直接放此目录。
	* 图片如果属于某个功能模块独有的，需要建立一个和模块名称同名的文件夹，再存于文件夹下。如：`public/img/pay` 支付模块的图片。

## 4.2 assets 静态资源
1. `assets/scss` css文件

## 4.3 store vuex 缓存
我们采用分模块来管理各个vuex子模块，便于项目的维护和整合。
1. `index.js` 此文件是入口文件，方便整合和引入vuex模块
2. `modules/user.js`  此文件是用户信息相关vuex模块

## 4.4 组件说明
1. 组件命名规范
   * 组件名称：大驼峰，如：GoodsList.vue
   * 组件文件：组件名称/组件名称.vue，一个组件对应一个文件夹，该文件夹下可以有多个类型的文件（如：js、img、css等）。如：`goodsList/GoodsList.vue`
2. 组件存放规范
   * 自定义公共复用组件存放为：`components/Com*/Com*.vue`这里存放自定义复用组件，方便大家开发和复用、共享。如果要修改，uni-ui组件，也建议复制粘贴到这里，然后自定义修改，避免去uni-ui中直接修改，因为后面uni官方组件升级后会导致之前的自定义代码丢失。
   * 自定义非公共组件存放到：`当前页/组件文件`,如：首页的广告组件，`index/childComps/IndexAdv.vue`
因为有的页面组件，自定义或者抽离的组件，也许其他页面根部就不会复用到，只是为了让主页面代码简洁和便于维护，那么这些组件，应该直接放到当前页下的`childComps`文件夹中，独立维护。
3. 组件说明规范
每个自定义组件，组件用法、参数描述应该简单、清晰，应该在组件代码的`<script>`标签内的第一行备注好：组件名称、组件描述、开发人员、组件参数等，因为时间可以淡忘一切，当然也可以让你淡忘掉之前你为什么要传这个参数。
   ```
   <script>
      /*
      * LoadMore 加载更多
      * @description 用于列表中，做滚动加载使用，展示 loading 的各种状态
      * @author JayChou
      * @property {String} status = [more|loading|noMore] loading 的状态
      * 	@value more loading 前
      * 	@value loading loading 中
      * 	@value noMore 没有更多了
      * @property {Number} iconSize 指定图标大小
      */

   </script>
   ```

# 5. 其他规范
1. 命名规范
   * 文件夹名称：小驼峰
   * js文件名称：小驼峰
   * vue文件名称：大驼峰

# 6. 项目部署
1. 登录服务器，进入到服务器根目录
   ```
   cd /
   mkdir soft # 创建软件安装目录
   mkdir workspace # 创建项目目录
   ```
2. 下载软件安装包
   * 安装nginx
      ```
      # 安装nginx
      cd /
      yum install nginx
      # 启动nginx服务（重新加载服务：nginx -s reload，停止服务：nginx -s stop）
      nginx
      # 查看nginx安装目录（默认：安装目录：/usr/sbin/nginx，网页目录：/usr/share/nginx/html，配置文件：/etc/nginx/nginx.conf）
      which nginx
      # 查看nginx配置
      cat /etc/nginx/nginx.conf
      ```
   * 安装nodejs
      ```
      # 在nodejs官网（http://nodejs.cn/download/）复制linux 二进制文件（x64）的下载链接
      cd /soft/
      wget https://npm.taobao.org/mirrors/node/v16.6.2/node-v16.6.2-linux-x64.tar.xz
      # 解压软件包（根据包格式选择解压命令）
      tar -zxvf 压缩文件名.tar.gz
      tar -xvf 压缩文件名.tar
      # 进入node软件bin目录(输入“./node -v”可以查看当前node版本)
      cd node-v16.6.2-linux-x64/bin/
      # 为node、npm命令创建软链接，这样可以全局使用node命令
      ln -s /soft/node-v16.6.2-linux-x64/bin/node /usr/local/bin/node
      ln -s /soft/node-v16.6.2-linux-x64/bin/npm /usr/local/bin/npm
      ```
   * apt-get 可以用于运作deb包，例如在Ubantu系统上对某个软件的管理：
      ```
      安装：apt-get install
      卸载：apt-get remove
      更新：apt-get update
      ```
   * yum 可以用于运作rpm包，类似仓库。如对包的管理操作：
      ```
      安装：yum install
      卸载：yum remove
      更新：yum update
      ```
3. 配置域名
   * 把项目打包`npm run build`后，上传dist文件到服务器项目workspace文件夹
   * 在`/etc/nginx/conf.d`中新建配置文件`xiaomi.conf `并写入内容：
      ```
      # 代理域名后面需要加/,这样在请求的时候会去掉/api，否则请求的时候会包含/api
      server {
         listen 80;
         server_name xiaomi.thinco.top;
         root /workspace/xiaomi-mall;
         index index.html index.htm login.html;
         location ^~/api/ {
            proxy_pass http://mall-pre.springboot.cn/;
         }
         location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
         {
            root /workspace/xiaomi-mall;
         }
         location ~ .*\.(js|html|css)?$
         {
            root /workspace/xiaomi-mall;
            expires 30d;
         }
      }
      ```
   * 重启nginx`nginx -s reload`
