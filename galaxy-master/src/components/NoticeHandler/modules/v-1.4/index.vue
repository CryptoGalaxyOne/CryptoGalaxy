<template>

  <div class="page">
    <img class="image-block" src="./img/001.jpg" />
    <img class="image-block" src="./img/002.jpg" />
    <img class="image-block" src="./img/003.jpg" />
  </div>

</template>
<script>
export default {
  created(){
    document.querySelector('body').style.background = '#fff';
  }
};
</script>
<style lang="less" scoped>
.image-block{
  display: block;
  width: 100%;
}
</style>
