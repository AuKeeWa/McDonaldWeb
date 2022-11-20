<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{title}}<slot name="tips"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'order-header',
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState(['username', 'cartCount'])
  }
};
</script>

<style lang='scss' scoped>
.order-header {
  padding: 30px 0;
  .header-logo {
    float: left;
  }
  .title,
  .username {
    display: inline-block;
    height: 55px;
    line-height: 55px;
  }
  .title {
    float: left;
    color: $colorB;
    margin-left: 54px;
    h2 {
      font-size: 28px;
      color: $colorB;
    }
    span {
      font-size: 14px;
      margin-left: 17px;
      color: $colorD;
      font-weight: 200;
    }
  }
  .username {
    float: right;
    a {
      color: $colorC;
      font-size: 16px;
    }
  }
}
</style>