<template>
  <!-- 顶部导航 -->
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="goLogin()">登录</a>
          <a href="javascript:;" v-if="username" @click="goLogout()">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a class="my-cart" href="javascript:;" @click="goToCart()"><span class="icon-cart"></span>购物车({{ cartCount
          }})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, i) in redmiList" :key="i">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img :src="item.img" alt="">
                    </div>
                    <div class="pro-name">{{ item.title }}</div>
                    <div class="pro-price">{{ item.price }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, i) in tvList" :key="i">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img :src="item.img" alt="">
                    </div>
                    <div class="pro-name">{{ item.title }}</div>
                    <div class="pro-price">{{ item.price }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword"><a href="javascript:;"></a>
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
      redmiList: [
        {
          img: '/imgs/nav-img/nav-6.png',
          title: 'RedMi红米 K50pro',
          price: '5999元'
        },
        {
          img: '/imgs/nav-img/nav-5.png',
          title: 'RedMi红米 note6',
          price: '2999元'
        },
        {
          img: '/imgs/nav-img/nav-4.png',
          title: 'RedMi红米 Mix',
          price: '3999元'
        },
        {
          img: '/imgs/nav-img/nav-3.png',
          title: 'RedMi红米 k40 plus',
          price: '5688元'
        },
        {
          img: '/imgs/nav-img/nav-2.png',
          title: 'RedMi红米 K50',
          price: '6228元'
        },
        {
          img: '/imgs/nav-img/nav-1.png',
          title: 'RedMi红米 8plus',
          price: '4890元'
        }
      ],
      tvList: [
        {
          img: '/imgs/nav-img/nav-3-1.jpg',
          title: '小米壁画电视 65英寸',
          price: '5999元'
        },
        {
          img: '/imgs/nav-img/nav-3-2.jpg',
          title: '小米全面屏电视 60英寸',
          price: '2999元'
        },
        {
          img: '/imgs/nav-img/nav-3-3.png',
          title: '小米电视LED 70英寸',
          price: '3999元'
        },
        {
          img: '/imgs/nav-img/nav-3-4.jpg',
          title: '小米超清电视',
          price: '5688元'
        },
        {
          img: '/imgs/nav-img/nav-3-5.jpg',
          title: '小米OLED 屏幕电视',
          price: '6228元'
        },
        {
          img: '/imgs/nav-img/nav-3-6.png',
          title: '小米环绕屏电视 60英寸',
          price: '4890元'
        }
      ],
      phoneList: []
    };
  },
  mounted() {
    this.getProductList();
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
    getProductList() {
      this.$api.mall
        .goodsList({
          categoryId: '100012',
          pageSize: 6
        })
        .then((res) => {
          this.phoneList = res.list.slice(0, 6);
        });
    },
    // 跳转购物车
    goToCart() {
      this.$router.push('/cart');
    }
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

      .header-logo {
        border-radius: 19px;
      }

      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;

        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;

          span {
            cursor: pointer;
          }

          &:hover {
            color: $colorA;

            .children {
              height: 220px;
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
          border: 1px solid #e0e0e0;
          @include flex();

          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }

          a {
            @include bgImg(18px, 18px, '/imgs/icon-search.png');
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
    }
  }
}
</style>