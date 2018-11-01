<template>
  <div class="do section">
    <div class="title">What you can do with GALA token?</div>
    <div class="des">Gala has been developed to serve the whole galaxy as a utility token that will set the price of any assets, tools available in the game.</div>
  </div>
</template>
<script>
export default {
  name: "DoWhat"
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 751px) {
  @unit: 1px;
  .do {
    padding-top: 540/@unit;
    margin: -90/@unit auto 150/@unit;
    width: 610/@unit;
    background: url("@{imgPath}/icon_do.svg") no-repeat center -20/@unit ~"/" 588/@unit
      588/@unit;
    .title {
      text-align: center;
      font-size: 32/@unit;
      color: #70fec3;
      line-height: 38/@unit;
      text-align: center;
      margin-bottom: 48/@unit;
    }
    .des {
      font-size: 32/@unit;
      color: #ffffff;
      line-height: 38/@unit;
    }
  }
}



@media only screen and (max-width: 750px) {
  @unit: 70rem;
  .do {
    padding-top: 540/@unit;
    margin: -90/@unit auto 150/@unit;
    width: 610/@unit;
    background: url("@{imgPath}/icon_do.svg") no-repeat center -20/@unit ~"/" 588/@unit
      588/@unit;
    .title {
      text-align: center;
      font-size: 32/@unit;
      color: #70fec3;
      line-height: 38/@unit;
      text-align: center;
      margin-bottom: 48/@unit;
    }
    .des {
      font-size: 32/@unit;
      color: #ffffff;
      line-height: 38/@unit;
    }
  }
}
</style>
