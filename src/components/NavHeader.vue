<template>
  <!-- 顶部导航 -->
  <div class="header">
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" placeholder="Search.." name="keyword"><a href="javascript:;"></a>
          </div>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span @click="goToIndex">麦当劳</span>
            <div class="children">
              <ul>
                <li class="outsidePages">
                  <a><b>关于我们</b></a>
                  <ul>
                    <li><a href="https://www.mcdonalds.com.cn/index/McD/about/company">麦当劳全球</a></li>
                    <li><a href="https://www.mcdonalds.com.cn/index/McD/about/brand-25">品牌介绍</a></li>
                    <li><a href="https://www.mcdonalds.com.cn/index/McD/about/value">经营理念</a></li>
                    <li><a href="https://www.mcdonalds.com.cn/index/McD/about/standard-business-conduct">商业道德与合规</a>
                    </li>
                  </ul>
                </li>
                <li class="outsidePages">
                  <a><b>中国发展</b></a>
                  <ul>
                    <li><a href="https://www.mcdonalds.com.cn/index/McD/mcdonalds-china/Serving-Here">品牌观念</a></li>
                    <li><a href="https://www.mcdonalds.com.cn/index/McD/mcdonalds-china/MCD-in-China-2">30年历程</a></li>
                    <li><a
                        href="https://www.mcdonalds.com.cn/index/McD/mcdonalds-china/%E4%B8%9A%E5%8A%A1%E5%B9%B3%E5%8F%B0">业务平台</a>
                    </li>
                    <li><a href="https://www.mcdonalds.com.cn/index/McD/mcdonalds-china/China-management-team">管理层介绍</a>
                    </li>
                  </ul>
                </li>
                <li class="outsidePages">
                  <a><b>加入麦当劳</b></a>
                  <ul>
                    <li><a href="https://www.mcdonalds.com.cn/index/McD/join-us/we-believe-in-youth">人员品牌主张</a></li>
                    <li><a href="https://www.mcdonalds.com.cn/index/McD/join-us/hamburger-university">汉堡大学</a></li>
                    <li><a
                        href="https://www.mcdonalds.com.cn/index/McD/join-us/%E9%BA%A6%E8%83%9E%E6%95%85%E4%BA%8B">麦胞故事</a>
                    </li>
                    <li><a href="https://www.mcdonalds.com.cn/index/McD/join-us/campus-recruitment-4">校园招聘</a></li>
                    <li><a href="https://www.mcdonalds.com.cn/index/McD/join-us/job-vacancy">工作机会</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <!-- <span onclick="javascript:window.open('/#/product')">餐品总览</span> -->
            <span @click="goToAllProduct">餐品总览</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, i) in foodList" :key="i">
                  <a :href="('/#/product')" target="_blank">
                    <div class="pro-img">
                      <img :src="item.img" alt="">
                    </div>
                    <div class="pro-name">{{ item.title }}</div>
                    <!-- <div class="pro-price">{{ item.price }}</div> -->
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <!-- <span onclick="javascript:window.open('/#/menu')">网上订餐</span> -->
            <span @click="goToMenu">网上订餐</span>
          </div>
          <div class="item-menu">
            <span @click="goToAlien">外星页面</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'nav-header',
  data() {
    return {
      foodList: [
        {
          // img: '/images/dishes/burger/01.png',
          img: 'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081011205699.png',
          title: '汉堡',
        },
        {
          // img: '/images/dishes/snacks/01.png',
          img: 'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091547349086.png',
          title: '小食',

        },
        {
          // img: '/images/dishes/beverage/01.png',
          img: 'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091541242793.png',
          title: '饮料',

        },
        {
          // img: '/images/dishes/desserts/01.png',
          img: 'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/05/202005270949182813.png',
          title: '甜点',

        },
        {
          // img: '/images/dishes/breakfast/01.png',
          img: 'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091558498724.png',
          title: '早餐',

        },
        {
          // img: '/images/dishes/cafe/01.png',
          img: 'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208292205408283.png',
          title: '咖啡',

        }
      ],
      // tvList: [
      //   {
      //     img: '/imgs/nav-img/nav-3-1.jpg',
      //     title: '小米壁画电视 65英寸',
      //     price: '5999元'
      //   },
      //   {
      //     img: '/imgs/nav-img/nav-3-2.jpg',
      //     title: '小米全面屏电视 60英寸',
      //     price: '2999元'
      //   },
      //   {
      //     img: '/imgs/nav-img/nav-3-3.png',
      //     title: '小米电视LED 70英寸',
      //     price: '3999元'
      //   },
      //   {
      //     img: '/imgs/nav-img/nav-3-4.jpg',
      //     title: '小米超清电视',
      //     price: '5688元'
      //   },
      //   {
      //     img: '/imgs/nav-img/nav-3-5.jpg',
      //     title: '小米OLED 屏幕电视',
      //     price: '6228元'
      //   },
      //   {
      //     img: '/imgs/nav-img/nav-3-6.png',
      //     title: '小米环绕屏电视 60英寸',
      //     price: '4890元'
      //   }
      // ],
      phoneList: []
    };
  },
  mounted() {
    // this.getProductList();
    let params = this.$route.params;
    console.log('this.$route.params', this.$route.params);
    if (params && params.from == 'login') {
      this.getCartSum();
    }
  },
  computed: {
    // 获取store中state值
    // 方式一：
    // username() {
    //   return this.$store.state.username;
    // },
    // cartCount() {
    //   return this.$store.state.cartCount;
    //
    // }
    // 方式二：
    ...mapState(['username', 'cartCount'])
  },
  filters: {
    // 过滤器处理价格
    currency(val) {
      if (!val) return '0.00';
      return '￥' + val.toFixed(2) + '元';
    }
  },
  methods: {
    // 登录
    goLogin() {
      this.$router.push('/login');
    },
    // 退出
    goLogout() {
      this.$api.mall.logout().then(() => {
        this.$message.success('退出成功');
        // 清除用户ID
        this.$cookie.set('userId', '', { expires: '-1' });
        // 清除用户名
        this.$store.dispatch('saveUserName', '');
        // 清空购物车数量
        this.$store.dispatch('saveCartCount', 0);
      });
    },
    // 获取购物车商品数量
    getCartSum() {
      this.$api.mall.getCartSum({}).then((res = 0) => {
        // 保存到vuex里面
        this.$store.dispatch('saveCartCount', res);
      });
    },
    // 获取手机列表
    // getProductList() {
    //   this.$api.mall
    //     .goodsList({
    //       categoryId: '100012',
    //       pageSize: 6
    //     })
    //     .then((res) => {
    //       this.phoneList = res.list.slice(0, 6);//数组切片
    //     });
    // },
    // 跳转购物车
    // goToCart() {
    //   this.$router.push('/cart');
    // }
    goToMenu() {
      this.$router.push('/menu');
    },
    goToAllProduct() {
      this.$router.push('/product');
    },
    goToIndex() {
      this.$router.push('/index');
    },
    goToAlien() {
      this.$router.push('/alien');
    },
  }
};
</script>

<style lang="scss" scoped>
// @import "./../assets/scss/base.scss";
// @import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;

    .container {
      @include flex();

      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }

      .my-cart {
        width: 110px;
        background-color: $colorA;
        text-align: center;
        color: #fff;
        margin-right: 0;

        .icon-cart {
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }

  .nav-header {
    .container {
      height: 112px;
      @include flex();

      // .header-logo {
      //   // border-radius: 19px;
      // }

      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 20px;

        .item-menu {
          display: inline-block;
          color: $colorA;
          font-weight: bold;
          font-size: 25px;
          line-height: 60px;
          margin-right: 60px;
          border-radius: 20px;

          span {
            cursor: pointer;
          }

          &:hover {
            color: #ffffff;
            background-color: $colorA;
            transition: 0.5s;

            .children {
              height: 230px;
              opacity: 1;
            }
          }

          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid $colorH;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: height 0.5s;
            background-color: #fff;

            .outsidePages {
              // display: inline-block;
              all: initial;
              width: 110px;
              font-size: 20px;
              text-align: match-parent;

              b {
                font-size: larger;
                color: $colorA;
              }

              li {

                // display: inline-block;
                // float: left;
                font-weight: bold;
                color: $colorD;
              }

              ul {
                width: 250px;
                overflow: hidden;
                float: left;
                // white-space: nowrap;
                // display: inline-block;
              }

              a {

                color: $colorC;
                display: block;
              }
            }

            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;

              a {
                display: inline-block;
              }

              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }

              .pro-img {
                height: 137px;
              }

              .pro-name {
                font-size: large;
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }

              .pro-price {
                color: $colorA;
              }

              &::before {
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }

              &:last-child::before {
                display: none;
              }
            }
          }
        }
      }

      .header-search {
        width: 319px;

        .wrapper {
          height: 50px;
          border: 3px solid $colorA;
          border-radius: 12px;
          margin-left: 60px;
          margin-right: auto;
          @include flex();

          input {
            border: $colorA;
            // box-sizing: border-box;
            border-right: 2px solid $colorA;
            border-radius: 12px;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            outline: $colorA;
          }

          a {
            @include bgImg(18px, 18px, '/imgs/icon-search.png');
            margin-left: 18px;
            margin-right: 18px;
            transition: 0.5s;
          }

          &:hover {
            color: #ffffff;
            background-color: $colorA;
            transition: 0.5s;
          }
        }
      }
    }
  }
}
</style>