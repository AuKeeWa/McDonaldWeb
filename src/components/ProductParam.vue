<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-param fuck">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-param',
  props: {
    title:String
  },
  data() {
    return {
      isFixed: false // 是否定位
    };
  },
  mounted() {
    // 监听浏览器滚动
    window.addEventListener('scroll', this.initHeight);
  },
  destroyed() {
    // 销毁监听浏览器滚动
    window.removeEventListener('scroll', this.initHeight, false);
  },
  methods: {
    // 初始化滚动高度
    initHeight() {
      // 当前滚动距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 超过滚动距离，对元素固定定位
      this.isFixed = scrollTop > 152 ? true : false;
    }
  }
};
</script>

<style lang='scss' scoped>
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  background-color: $colorG;
  &.is_fixed {
    z-index: 9;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 5px $colorE;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      font-size: $fontJ;
      span {
        margin: 0 10px;
      }
      a {
        color: $colorC;
      }
    }
  }
}
</style>