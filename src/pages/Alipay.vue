<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div v-html="content">
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading';
export default {
  name: 'alipay',
  components: {
    Loading
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    };
  },
  mounted() {
    this.submitPay();
  },
  methods: {
    submitPay() {
      this.$api.mall
        .submitPay({
          orderId: this.orderId,
          orderName: '麦当劳', // 扫码支付时订单名称
          amount: 0.01, // 单位元
          payType: 1 // 1支付宝，2微信
        })
        .then((res) => {
          // 通过v-html解析content中html代码
          this.content = res.content;
          // 提交content中form表单，自动跳转支付页面
          this.$nextTick(() => {
            document.forms[0].submit();
          });
        }, 100);
    }
  }
};
</script>

<style lang='scss' scoped>

</style>