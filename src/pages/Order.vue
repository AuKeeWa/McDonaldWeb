<template>
  <div>
    <router-view />
    <!-- <service-bar /> -->
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from '@/components/NavFooter.vue';
// import ServiceBar from '@/components/ServiceBar.vue';
export default {
  name: 'order',
  components: { NavFooter, },
  data() {
    return {};
  },
  mounted() { }
};
</script>
<style lang='scss' scoped>

</style>