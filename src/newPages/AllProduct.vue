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
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="inner">
                  <div class="product-info">
                    <h3>汉堡</h3>
                    <p></p>
                  </div>
                  <div class="food-list container-fluid">
                    <div class="row">
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Big-Mac">
                          <!-- <a href="javascript:;"> -->
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081011205699.png"
                              alt="">
                          </div>
                          <span class="name">巨无霸</span>
                        </a>
                        <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Hamburger">
                          <!-- <a href="javascript:;"> -->
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081011488477.png"
                              alt="">
                          </div>
                          <span class="name">汉堡包</span>
                        </a>
                        <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Spicy-Chicken-Filet">
                          <!-- <a href="javascript:;"> -->
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081012023493.png"
                              alt="">
                          </div>
                          <span class="name">麦辣鸡腿汉堡</span>
                        </a>
                        <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Grilled-Chicken-Sandwich">
                          <!-- <a href="javascript:;"> -->
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081012161806.png"
                              alt="">
                          </div>
                          <span class="name">原味板烧鸡腿堡</span>
                        </a>
                        <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/McChicken">
                          <!-- <a href="javascript:;"> -->
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081013011355.png"
                              alt="">
                          </div>
                          <span class="name">麦香鸡</span>
                        </a>
                        <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Filet-O-Fish">
                          <!-- <a href="javascript:;"> -->
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081013175111.png"
                              alt="">
                          </div>
                          <span class="name">麦香鱼</span>
                        </a>
                        <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Cheeseburger">
                          <!-- <a href="javascript:;"> -->
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081013284833.png"
                              alt="">
                          </div>
                          <span class="name">吉士汉堡包</span>
                        </a>
                        <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Double-Cheeseburger">
                          <!-- <a href="javascript:;"> -->
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081013411846.png"
                              alt="">
                          </div>
                          <span class="name">双层吉士汉堡</span>
                        </a>
                        <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/beef-sausage">
                          <!-- <a href="javascript:;"> -->
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081014088917.png"
                              alt="">
                          </div>
                          <span class="name">不素之霸双层牛堡</span>
                        </a>
                        <!-- <button class="like">
                                            <i class="iconfont">&#xe60c;</i><span style="display:none">+1</span>
                                        </button> -->
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/double-fof">
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208111413054231.png"
                              alt="">
                          </div>
                          <span class="name">双层深海鳕鱼堡</span>
                        </a>
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Thick-Angus-Beef-Burger-with-Bacon">
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081022028042.png"
                              alt="">
                          </div>
                          <span class="name">安格斯MAX厚牛培根堡</span>
                        </a>
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Cheese-Angus">
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081022182900.png"
                              alt="">
                          </div>
                          <span class="name">安格斯MAX厚牛芝士堡</span>
                        </a>
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Thick-Angus-Double-Beef-Burger-with-Bacon">
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081022345223.png"
                              alt="">
                          </div>
                          <span class="name">双层安格斯MAX厚牛培根堡</span>
                        </a>
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Thick-Angus-Double-Beef-Burger-with-Cheese-Sauce">
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081023547031.png"
                              alt="">
                          </div>
                          <span class="name">双层安格斯MAX厚牛芝士堡</span>
                        </a>
                      </div>
                      <div class="col-md-3 col-sm-4 col-xs-6">
                        <a href="/product/Bacon-Lettuce-Tomato-Double-Beef-Burger">
                          <div class="pic">
                            <img
                              src="https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/09/202209261029176483.png"
                              alt="">
                          </div>
                          <span class="name">培根蔬萃双层牛堡</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
<style lang="scss" >
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
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/06/27/202206271514102834/202206271514102834_1120_340.jpg?&rand=0827') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-2 {
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/18/202006181627374124/202006181627374124_1120_340.jpg?&rand=0827') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-3 {
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/18/202006181627596520/202006181627596520_1120_340.jpg?&rand=0827') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-4 {
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/18/202006181626316868/202006181626316868_1120_340.jpg?&rand=0827') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-5 {
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/18/202006181627189078/202006181627189078_1120_340.jpg?&rand=0827') no-repeat center;
      height: 340px;
      text-align: center;
    }

    .item-bg-6 {
      background: url('https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/08/30/202208301823392793/202208301823392793_1120_340.jpg?&rand=0827') no-repeat center;
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

.row {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #2d2d2d;
  font: normal 12px/1.5 "speedee", -apple-system, "Helvetica Neue", Helvetica,
    "PingFang SC", "Source Han Sans SC", "Noto Sans CJK SC", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  box-sizing: border-box;
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-12 col-sm-12 col-xs-12 {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #2d2d2d;
  font: normal 12px/1.5 "speedee", -apple-system, "Helvetica Neue", Helvetica,
    "PingFang SC", "Source Han Sans SC", "Noto Sans CJK SC", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  box-sizing: border-box;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  float: left;
  width: 100%;
}

.inner {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #2d2d2d;
  font: normal 12px/1.5 "speedee", -apple-system, "Helvetica Neue", Helvetica,
    "PingFang SC", "Source Han Sans SC", "Noto Sans CJK SC", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding-bottom: 50px;
  background: #f7f7f7;
}

.product-info {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #2d2d2d;
  font: normal 12px/1.5 "speedee", -apple-system, "Helvetica Neue", Helvetica,
    "PingFang SC", "Source Han Sans SC", "Noto Sans CJK SC", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  box-sizing: border-box;
  max-width: 645px;
  margin: 0 auto;
  padding: 40px 0 20px;
}

.food-list container-fluid {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #2d2d2d;
  font: normal 12px/1.5 "speedee", -apple-system, "Helvetica Neue", Helvetica,
    "PingFang SC", "Source Han Sans SC", "Noto Sans CJK SC", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  max-width: 645px;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.row {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #2d2d2d;
  font: normal 12px/1.5 "speedee", -apple-system, "Helvetica Neue", Helvetica,
    "PingFang SC", "Source Han Sans SC", "Noto Sans CJK SC", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  box-sizing: border-box;
  margin: 0 -10px;
}


.col-md-3 col-sm-4 col-xs-6 {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: #2d2d2d;
  font: normal 12px/1.5 "speedee", -apple-system, "Helvetica Neue", Helvetica,
    "PingFang SC", "Source Han Sans SC", "Noto Sans CJK SC", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  box-sizing: border-box;
  position: relative;
  min-height: 1px;
  float: left;
  width: 25%;
  margin-bottom: 30px;
  padding: 0 10px;
  text-align: center;
}

.a {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font: normal 12px/1.5 "speedee", -apple-system, "Helvetica Neue", Helvetica,
    "PingFang SC", "Source Han Sans SC", "Noto Sans CJK SC", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: center;
  box-sizing: border-box;
  background-color: transparent;
  color: #337ab7;
  text-decoration: none;
  outline: none;
}

.pic {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font: normal 12px/1.5 "speedee", -apple-system, "Helvetica Neue", Helvetica,
    "PingFang SC", "Source Han Sans SC", "Noto Sans CJK SC", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  color: #337ab7;
  box-sizing: border-box;
  display: block;
  margin: 0 auto 5px auto;
  text-align: center;
  font-size: 0;
  height: 270px;
  width: 270px;
}
</style>