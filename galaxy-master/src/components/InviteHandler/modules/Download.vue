<template>

  <div class="download section">
    <a class="link ios" href="https://cryptogalaxy.one/#/ios">iOS Download</a>
    <a class="link android" href="https://cryptogalaxy.one/static/Galaxy_1.6.0.apk">Android Download</a>
  </div>
</template>

<script>
export default {
  name: "Download"
};
</script>
<style lang="less" scoped>

@media only screen and (min-width: 751px) {
  @unit: 1px;

  .download {
    .link {
      display: block;
      width: 680/@unit;
      height: 90/@unit;
      line-height: 90/@unit;
      text-align: center;
      margin-top: 30/@unit;
      margin-bottom: 30/@unit;
      font-weight: 500;
      font-size: 30/@unit;
      border-radius: 100/@unit;
      
      &.ios {
        color: #5068e3;
        background: #70fec3;
      }
      &.android {
        color: #70fec3;
        background: #5068e3;
      }
    }
  }
}


@media only screen and (max-width: 750px) {
  @unit: 70rem;

  .download {
    .link {
      display: block;
      width: 630/@unit;
      height: 90/@unit;
      line-height: 90/@unit;
      text-align: center;
      margin-top: 30/@unit;
      margin-bottom: 30/@unit;
      font-weight: 500;
      font-size: 30/@unit;
      border-radius: 100/@unit;
      
      &.ios {
        color: #5068e3;
        background: #70fec3;
      }
      &.android {
        color: #70fec3;
        background: #5068e3;
      }
    }
  }
}
</style>
