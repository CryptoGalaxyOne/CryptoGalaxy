<template>
  <div class="header section">
    <img class="logo" src="@/assets/img/l-logo.svg" alt="">
    <div class="text">
      <div class="slogan">Discover &amp; Collect Your Planet </div>
      <div class="des">The first ever virtual universe based on blockchain</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style lang="less" scoped>

@media only screen and (min-width: 751px) {
  @unit: 1px;

  .header {
    margin-top: 72/@unit;
    margin-bottom: 60/@unit;
    .logo {
      width: 358/@unit;
      height: 86/@unit;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30/@unit;
    }
    .text {
      text-align: center;
      .slogan {
        font-size: 26/@unit;
        line-height: 32/@unit;
        color: #a6a8aa;
        margin-bottom: 6/@unit;
      }
      .des {
        font-size: 18/@unit;
        color: #a6a8aa;
      }
    }
  }
}



@media only screen and (max-width: 750px) {
  @unit: 70rem;

  .header {
    margin-top: 72/@unit;
    margin-bottom: 60/@unit;
    .logo {
      width: 358/@unit;
      height: 86/@unit;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30/@unit;
    }
    .text {
      text-align: center;
      .slogan {
        font-size: 26/@unit;
        line-height: 32/@unit;
        color: #a6a8aa;
        margin-bottom: 6/@unit;
      }
      .des {
        font-size: 18/@unit;
        color: #a6a8aa;
      }
    }
  }
}
</style>
