<template>
  <div class="product">
    <!-- <product-param :title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param> -->
    <div class="content">
      <!-- 宣传图 -->
      <div v-if="(activeName == 'first')" class="item-bg-1"></div>
      <div v-if="(activeName == 'second')" class="item-bg-2"></div>
      <div v-if="(activeName == 'third')" class="item-bg-3"></div>
      <div v-if="(activeName == 'fourth')" class="item-bg-4"></div>
      <div v-if="(activeName == 'fifth')" class="item-bg-5"></div>
      <div v-if="(activeName == 'sixth')" class="item-bg-6"></div>
      <!-- <h2>{{ product.name }}</h2>
        <h3>{{ product.subtitle }}</h3>
        <p>
          <a href="" id="">全球首款双频 GP</a>
          <span>|</span>
          <a href="" id="">骁龙845</a>
          <span>|</span>
          <a href="" id="">AI 变焦双摄</a>
          <span>|</span>
          <a href="" id="">红外人脸识别</a>
        </p>
        <div class="price">
          <span>￥<em>{{ product.price }}</em></span>
        </div> -->
      <div class="asset-detail-tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="汉堡" name="first">
          </el-tab-pane>
          <el-tab-pane label="小食" name="second">
          </el-tab-pane>
          <el-tab-pane label="饮料" name="third">
          </el-tab-pane>
          <el-tab-pane label="甜点" name="fourth">
          </el-tab-pane>
          <el-tab-pane label="早餐" name="fifth">
          </el-tab-pane>
          <el-tab-pane label="咖啡" name="sixth">
          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- <div class="item-bg-2"></div>
      <div class="item-bg-3"></div> -->
      <!-- 轮播图 -->
      <!-- <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div> -->
      <!-- 视频播放 -->
      <div class="item-video">
        <h2>60帧超慢动作摄影<br />慢慢回味每一瞬间的精彩</h2>
        <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
        <!-- 背景图片 -->
        <div class="video-bg" @click="openVideo"></div>
        <!-- 视频盒子 -->
        <div class="video-box" v-show="showSlide">
          <!-- 遮罩 -->
          <div class="overlay"></div>
          <div class="video" :class="showSlide">
            <!-- 关闭按钮 -->
            <span class="icon-close" @click="closeVideo"></span>
            <!-- 视频 -->
            <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import productParam from '@/components/ProductParam';
export default {
  name: 'product',
  components: {
    // Swiper,
    // SwiperSlide,
    // productParam
  },
  data() {
    return {
      showSlide: '', //控制动画效果
      product: {}, //商品信息
      activeName: 'first',
      // 轮播图插件
      // swiperOption: {
      //   autoplay: true,
      //   loop: true,
      //   slidesPerView: 3,
      //   spaceBetween: 30,
      //   freeMode: true,
      //   pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true
      //   }
      // }
    };
  },
  mounted() {
    // this.getProductInfo();
  },
  methods: {
    handleClick(tab, event) {

      console.log({ tab }, { event });
    },
    // 获取商品信息
    // getProductInfo() {
    //   let id = this.$route.params.id;
    //   this.$api.mall.getProductInfo(id).then((res) => {
    //     this.product = res;
    //   });
    // },
    // 购买
    // buy() {
    //   let id = this.$route.params.id;
    //   this.$router.push(`/detail/${id}`);
    // },
    // 打开视频
    openVideo() {
      this.showSlide = 'slideDown';
    },
    // 关闭视频
    closeVideo() {
      this.showSlide = 'slideUp';
      setTimeout(() => {
        this.showSlide = '';
      }, 600);
    }
  }
};
</script>
<style lang="scss">
.tabs {
  text-align: center;
  top: 0px;
  left: 0px;
  position: relative;
  text-align: center;
  // margin-top: auto;
}

.el-tabs {
  background-color: #ffffff;
  color: #000;
  border-radius: 17px;
  left: 0px;
  top: 0px;
  width: 980px;
  height: 83px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1000px;
  position: relative;
  text-align: center;
}

// * {
//   outline: solid #f00 1px !important;
//   background: #000 !important;
//   color: #fff !important;
// }

/* 去除灰色横条 */
.el-tabs__nav-wrap::after {
  position: static !important;
}

/* 设置滑块颜色 */
.el-tabs__active-bar {
  background-color: $colorA !important;
}

/* 设置滑块停止位置 */
.el-tabs__active-bar.is-top {
  height: 45px;
  width: 104px ! important;
  border-radius: 17px;
  top: 0px !important;
  left: 5px !important;
  position: absolute !important;
  z-index: 1;
}

/* 设置当前选中样式 */
.el-tabs__item.is-active {
  color: #ffffff !important;
  z-index: 2;
}

/* 设置未被选中样式 */
.el-tabs__item {
  padding: 0 20px !important;
  width: 154px;
  height: 100px;
  font-size: xx-large;
  box-sizing: border-box;
  display: inline-block;
  position: relative !important;
  color: $colorA !important;
  z-index: 2;
}

.product {
  .content {
    .item-bg-1 {
      background: url('/images/dishes/burger/burger_pro.jpg') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-2 {
      background: url('/images/dishes/snacks/snacks_pro.jpg') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-3 {
      background: url('/images/dishes/beverage/beverage_pro.jpg') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-4 {
      background: url('/images/dishes/desserts/desserts_pro.jpg') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-5 {
      background: url('/images/dishes/breakfast/breakfast_pro.jpg') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-6 {
      background: url('/images/dishes/cafe/cafe_pro.jpg') no-repeat center;
      height: 340px;
      text-align: center;
    }

    // .item-bg-2 {
    //   background: url(/imgs/product/product-bg-2.png) no-repeat center;
    //   height: 480px;
    //   background-size: 1226px 397px;
    // }

    // .item-bg-3 {
    //   background: url(/imgs/product/product-bg-3.png) no-repeat center;
    //   height: 638px;
    //   background-size: cover;
    // }

    // .item-swiper {
    //   margin: 36px auto 52px;

    //   .desc {
    //     font-size: 18px;
    //     color: #333333;
    //     text-align: center;
    //   }

    //   img {
    //     width: 100%;
    //   }
    // }

    .item-video {
      height: 1044px;
      background-color: #070708;
      margin-bottom: 76px;
      color: #ffffff;
      text-align: center;

      h2 {
        font-size: 60px;
        padding-top: 82px;
        margin-bottom: 47px;
      }

      p {
        font-size: 24px;
        margin-bottom: 58px;
      }

      .video-bg {
        background: url('/imgs/product/gallery-1.png') no-repeat center;
        background-size: cover;
        width: 1226px;
        height: 540px;
        margin: 0 auto 120px;
        cursor: pointer;
      }

      // 视频盒子
      .video-box {

        // 遮罩
        .overlay {
          @include position(fixed);
          background-color: #333333;
          opacity: 0.4;
          z-index: 10;
        }

        // 动画下滑
        @keyframes slideDown {
          from {
            top: -50%;
            opacity: 0;
          }

          to {
            top: 50%;
            opacity: 1;
          }
        }

        // 动画上滑
        @keyframes slideUp {
          from {
            top: 50%;
            opacity: 1;
          }

          to {
            top: -50%;
            opacity: 0;
          }
        }

        // 视频
        .video {
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          width: 1000px;
          height: 536px;
          opacity: 1;

          // 下滑
          &.slideDown {
            animation: slideDown 0.6s linear;
            top: 50%; // 动画结束后位置
          }

          // 上滑
          &.slideUp {
            animation: slideUp 0.6s linear;
          }

          // 关闭按钮
          .icon-close {
            position: absolute;
            top: 20px;
            right: 20px;
            @include bgImg(20px, 20px, '/imgs/icon-close.png');
            cursor: pointer;
            z-index: 11;
          }

          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            outline: none;
          }
        }
      }
    }
  }

  button {
    margin-left: 10px;
  }
}
</style>