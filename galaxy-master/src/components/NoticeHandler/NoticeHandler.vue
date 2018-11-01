<template>
  <div class="notice">
      <component :is="componentLoader"></component>
  </div>
</template>
<script>

export default {
  data() {
    return {
      v: this.$route.params.v || 'ls',
    };
  },
  computed:{
    componentLoader(){
      return () => import(`./modules/v-${this.v}/index.vue`);
    }
  }
};
</script>

<style lang="less" scoped>
.notice{
  width: 100%;
  // max-width: 640px;
  // margin-left: auto;
  // margin-right: auto;
}
</style>
