<template>
  <div>
    <nav-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue';
import NavFooter from '@/components/NavFooter.vue';
export default {
  name: 'nav-home',
  components: { NavHeader, NavFooter }
};
</script>

<style lang='scss' scoped>

</style>