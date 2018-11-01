<template>
  <div class="header section">
    <a v-if="!screenshot" class="goback" href="uniwebview://back">{{backText}}</a>
    <img class="logo" src="@/assets/img/l-logo.svg" alt="">
    <div class="text">
      <div class="slogan">Discover &amp; Collect Your Planet </div>
      <div class="des">The first ever virtual universe based on blockchain</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderWithBack",
  props: {
    backText: {
      default: "Back",
      type: String
    },
    screenshot: {
      default: false,
      type: Boolean
    }
  }
};
</script>
<style lang="less" scoped>
@unit: 2px;
@imgPath: "../../../assets/img";

.header {
  padding-top: 100 / @unit;
  padding-bottom: 50 / @unit;
  position: relative;
  .goback {
    position: absolute;
    top: 30 / @unit;
    left: 40;
    font-size: 28 / @unit;
    color: #ffffff;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      width: 32 / @unit;
      height: 26 / @unit;
      display: block;
      background: url("@{imgPath}/icon_back.svg") no-repeat center center ~"/" cover;
      margin-right: 15 / @unit;
    }
  }
  .logo {
    width: 358 / @unit;
    height: 86 / @unit;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30 / @unit;
  }
  .text {
    text-align: center;
    .slogan {
      font-size: 26 / @unit;
      line-height: 32 / @unit;
      color: #a6a8aa;
      margin-bottom: 6 / @unit;
    }
    .des {
      font-size: 18 / @unit;
      color: #a6a8aa;
    }
  }
}
</style>
