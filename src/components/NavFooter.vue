<template>
<!-- 底部导航 -->
  <div>
    <div class="footer">
      <div class="footer-logo">
        <img src="/imgs/logo-footer.png" alt="">
        <p>小米商城</p>
      </div>
      <div class="footer-link">
        <a href="https://blog.csdn.net/MrThinco" target="_blank">MrThinco博客</a>
        <a href="https://weibo.com/MrThinco" target="_blank">MrThinco微博</a>
        <a href="https://gitee.com/mrthinco" target="_blank">MrThinco码云</a>
        <a href="" target="_blank">全栈工程师</a>
      </div>
      <div class="copyright">Copyright ©2021 <span class="domain">https://weibo.com/MrThinco</span> All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
};
</script>

<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background: $colorB;
  color: $colorD;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: $colorD;
      display: inline-block;
      &::after {
        content: '';
        border-left: 2px solid $colorD;
        margin-left: 10px;
        margin-right: 10px;
      }
      &:last-child::after{
        display: none;
      }
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: $colorA;
    }
  }
}
</style>