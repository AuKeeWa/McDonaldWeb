<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <!-- 导航类目 -->
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a :href="sub ? '/#/product' + sub.id : ''">
                      <img v-lazy="sub ? sub.img : '/imgs/item-box-1.png'" alt="">
                      {{ sub ? sub.name : '小米9' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"> </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <!-- 轮播图 -->
        <swiper class="swiper-container" :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id"><img v-lazy="item.img" alt=""></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <br> <br> <br> <br>
      <!-- 广告位 -->
      <div class="ads-box">
        <a :href="'/#/product/' + item.id" v-for="(item, i) in adsList" :key="i">
          <img v-lazy="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item1, i) in phoneList" :key="i">
              <div class="item" v-for="(item2, j) in item1" :key="j">
                <span v-if="j % 2 == 0" class="new-pro">新品</span>
                <span v-if="j % 2 != 0" class="kill-pro">秒杀</span>
                <div class="item-img">
                  <img v-lazy="item2.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{ item2.name }}</h3>
                  <p>{{ item2.subtitle }}</p>
                  <p class="price" @click="addCart(item2.id)">{{ item2.price }}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br><br>
        <h2>笔记本 | 平板</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item1, i) in phoneList" :key="i">
              <div class="item" v-for="(item2, j) in item1" :key="j">
                <span v-if="j % 2 == 0" class="new-pro">新品</span>
                <span v-if="j % 2 != 0" class="kill-pro">秒杀</span>
                <div class="item-img">
                  <img v-lazy="item2.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{ item2.name }}</h3>
                  <p>{{ item2.subtitle }}</p>
                  <p class="price" @click="addCart(item2.id)">{{ item2.price }}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal title="提示信息" sureText="查看购物车" btnType="3" modalType="middle" :showModal="showModal" @submit="goCart"
      @cancel="showModal = false">
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar.vue';
import Modal from '@/components/Modal.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  name: 'index',
  components: { ServiceBar, Modal, Swiper, SwiperSlide },
  data() {
    return {
      showModal: false,
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-5.jpg'
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'RedMi k20pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ],
        [
          {
            id: 30,
            img: '/imgs/nav-img/nav-3-1.jpg',
            name: '小米电视6'
          },
          {
            id: 31,
            img: '/imgs/nav-img/nav-3-2.jpg',
            name: '小米电视pro'
          },
          {
            id: 32,
            img: '/imgs/nav-img/nav-3-3.png',
            name: '小米画壁'
          },
          {
            id: 33,
            img: '/imgs/nav-img/nav-3-4.jpg',
            name: '小米电视plus'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化商品列表
    init() {
      this.$api.mall
        .goodsList({
          categoryId: 100012,
          pageSize: 14
        })
        .then((res) => {
          console.log('res', res);
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    // 加入购物车
    addCart(id) {
      let params = {
        productId: id,
        selected: true
      };
      this.$api.mall.addCart(params).then((res = { cartProductVoList: 0 }) => {
        this.$store.dispatch('saveCartCount', res.cartProductVoList.length + 1);
        this.showModal = true;
      });
    },
    // 去购物车
    goCart() {
      this.$router.push('/cart');
    }
  }
};
</script>

<style lang='scss' scoped>
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background: #55585a7a;
      box-sizing: border-box;

      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;

          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;

            &::after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
            }
          }

          &:hover {
            background-color: $colorA;

            .children {
              display: block;
            }
          }

          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;

            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;

              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }

              a {
                color: $colorB;
                font-size: 14px;
              }

              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }

    .swiper-container {
      height: 451px;

      .swiper-button-prev {
        left: 274px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;

    a {
      width: 296px;
      height: 167px;
    }
  }

  .banner {
    margin-bottom: 50px;
  }

  .product-box {
    background: $colorJ;
    padding: 30px 0 50px;

    h2 {
      font-size: 22px;
      height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }

    .wrapper {
      display: flex;

      .banner-left {
        margin-right: 16px;

        img {
          width: 224px;
          height: 619px;
        }
      }

      .list-box {
        .list {
          display: flex;
          @include flex();
          width: 986px;
          margin-bottom: 14px;

          &:last-child {
            margin-bottom: 0;
          }

          .item {
            width: 236px;
            height: 302px;
            background: $colorG;
            text-align: center;

            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              color: $colorG;
              border-radius: 5px;
              margin-top: 5px;

              &.new-pro {
                background: #7ecf68;
              }

              &.kill-pro {
                background: #e82626;
              }
            }

            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }

            .item-info {
              h3 {
                font-size: 14px;
                color: $colorB;
                line-height: 14px;
                font-weight: bold;
              }

              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }

              .price {
                color: #f20a0a;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;

                &::after {
                  content: '';
                  @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>