<template>
  <!-- 底部导航 -->
  <div>
    <!-- <div class="footer">
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
      <div class="copyright">Copyright ©2021 <span class="domain">https://weibo.com/MrThinco</span> All Rights Reserved
      </div>
    </div> -->
    <div class="footer_box">
      <div class="footer">
        <div class="footer_top">
          <div class="footer_top_i">
            <a href="https://zh-tw.facebook.com/mcdonalds.tw"><img src="images/facebook.png" alt=""
                class="facebook"></a>
            <a href="https://twitter.com/mcdonalds"><img src="images/twitter.png" alt="" class="twitter"></a>
            <a href="https://www.instagram.com/mcdonaldstw/?hl=zh-tw"><img src="images/instagram.png" alt=""
                class="instagram"></a>
            <a href="https://www.youtube.com/channel/UChkGH0QNU9w56CEotkNjpiA"><img src="images/youtube.png" alt=""
                class="youtube-play"></a>
          </div>
          <div class="footer_top_download">
            <a href="https://apps.apple.com/tw/app/%E9%BA%A5%E7%95%B6%E5%8B%9E%E5%A0%B1%E5%A0%B1/id1094635803"><img
                src="images/appstore.jpg" alt="" class="footer_img"></a>
            <a href="https://play.google.com/store/apps/details?id=tw.com.mcddaily&hl=zh_TW"><img
                src="images/googleplay.jpg" alt="" class="footer_img"></a>
          </div>
        </div>
        <div class="footer_down">
          <div class="footer_down_word">
            <a href="">聯絡我們</a>
            <a href="">隱私政策</a>
            <a href="">條款細則</a>
            <a href="">了解更多</a>
          </div>
          <div class="footer_down_copyright">
            <a href="">© McDonald's. All rights reserved.</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'nav-footer'
};
</script>

<style lang="scss" scoped>
// .footer {
//   height: 234px;
//   border-top: 4px solid $colorA;
//   background: $colorB;
//   color: $colorD;
//   font-size: 16px;
//   text-align: center;

//   .footer-logo {
//     margin-top: 46px;
//     margin-bottom: 31px;

//     img {
//       width: 53px;
//       height: 36px;
//       margin-bottom: 13px;
//     }
//   }

//   .footer-link {
//     a {
//       color: $colorD;
//       display: inline-block;

//       &::after {
//         content: '';
//         border-left: 2px solid $colorD;
//         margin-left: 10px;
//         margin-right: 10px;
//       }

//       &:last-child::after {
//         display: none;
//       }
//     }

//     margin-bottom: 13px;
//   }

//   .copyright {
//     .domain {
//       color: $colorA;
//     }
//   }
// }
.footer_box {
  position: relative;
  background-color: $colorA;
  width: 100%;
  height: 160px;
  border-radius: 15px 15px 0 0;

}

.footer_top {
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 60%;
  border-bottom: 1px solid #DA6C44;
  box-sizing: border-box;
  padding: 25px 20px;
  margin: 0 auto;

}

.footer_top_i i {
  width: 40px;
  height: 40px;
  font-size: 24px;
  color: #DA6C44;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  margin-right: 30px;
  line-height: 40px;
  margin-top: 5px;
}

.facebook {
  width: 40px;
  height: 40px;
  margin-right: 30px;
  line-height: 40px;
  margin-top: 5px;
}

.twitter {
  width: 40px;
  height: 40px;
  margin-right: 30px;
  line-height: 40px;
  margin-top: 5px;
}

.instagram {
  width: 40px;
  height: 40px;
  margin-right: 30px;
  line-height: 40px;
  margin-top: 5px;
}

.youtube-play {
  width: 40px;
  height: 40px;
  margin-right: 30px;
  line-height: 40px;
  margin-top: 5px;
}

.footer_top_i i:hover {
  background-color: #DA6C44;
  color: #fff;
}

.footer_img {
  width: 160px;
  border-radius: 10px;
  margin-left: 20px;
}

.footer_down {
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px 20px;
}

.footer_down_word a {
  text-decoration: none;
  color: #DA6C44;
  margin-right: 15px;
}

.footer_down_copyright a {
  text-decoration: none;
  color: #DA6C44;
}


// * {
//   outline: solid #f00 1px !important;
//   background: #000 !important;
//   color: #fff !important;
// }
</style>