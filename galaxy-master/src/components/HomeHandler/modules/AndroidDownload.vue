<template>
  <div class="Android-Download">
    <div class="box">
        <div class="close-box" @click="$emit('openAndroid',false)">
            <img src="../../../assets/img/colse.png" alt="">
        </div>
      <div class="title">CryptoGalaxy</div>
      <div class="version">2.0.9</div>
      <div class="des">Discover &amp; Collect Your Planet</div>
      <div class="subdes">The first ever virtual universe based on blockchain</div>
      <div class="my-bd">
        <p class="prompt">{{$t("banner.prompt1")}}</p>
        <a
          class="link"
          href="http://cdn.zeepin.io/cryptogalaxy/CG_2.0.9_intl.apk"
        >{{$t("banner.prompt4")}}</a>
        <p class="prompt">{{$t("banner.prompt2")}}</p>
        <a
          class="link"
          href="http://cdn.zeepin.io/cryptogalaxy/CG_2.0.9_apc.apk"
        >{{$t("banner.prompt4")}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      doing: false
    };
  },
  methods: {
    download() {
      this.doing = true;
    }
  }
};
</script>
<style lang="less" scoped>
@unit: 1px;
.Android-Download {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 460px;
    padding: 30px;
    border-radius: 8px;
    background: #fff;
    position: relative;
    .close-box{
        position: absolute;
        right: 0px;
        top:14px;
        cursor: pointer;
        img{
            width:50px;
        }
    }
    .title {
      font-weight: 500;
      font-size: 40 / @unit;
      line-height: 56 / @unit;
      text-align: center;
    }
    .version {
      font-weight: 300;
      font-size: 32 / @unit;
      line-height: 40 / @unit;
      margin-bottom: 42 / @unit;
      text-align: center;
    }
    .des {
      font-weight: 300;
      text-align: center;
    }
    .subdes {
      font-weight: 300;
      font-size: 18 / @unit;
      text-align: center;
    }
    .my-bd{
      position: relative;
      width:100%;
      padding:20px;
      box-sizing: border-box;

      p{
        font-weight: 300;
        font-size: 14 / @unit;
        margin-top:30 / @unit;
        margin-bottom: 10 / @unit;
        text-align: center;
      } 
      a{
        display: block;
        height: 50 / @unit;
        background: #5068e3;
        border-radius: 100 / @unit;
        font-weight: 500;
        font-size: 18 / @unit;
        color: #fff;
        text-align: center;
        line-height: 50 / @unit;
      }
    }

  }
}
@media only screen and (max-width: 750px) {
  @unit: 70rem;
 .Android-Download {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  .box {
    width: 460px;
    padding: 15px;
    border-radius: 8px;
    background: #fff;
    position: relative;
    .close-box{
        position: absolute;
        right: 0px;
        top:14px;
        cursor: pointer;
        img{
            width:50px;
        }
    }
    .title {
      font-weight: 500;
      font-size: 40 / @unit;
      line-height: 56 / @unit;
      text-align: center;
    }
    .version {
      font-weight: 300;
      font-size: 32 / @unit;
      line-height: 40 / @unit;
      margin-bottom: 42 / @unit;
      text-align: center;
    }
    .des {
      font-weight: 300;
      text-align: center;
    }
    .subdes {
      font-weight: 300;
      font-size: 18 / @unit;
      text-align: center;
    }
    .my-bd{
      position: relative;
      width:100%;
      padding:15px;
      box-sizing: border-box;

      p{
        font-weight: 300;
        font-size: 14 / @unit;
        margin-top:30 / @unit;
        margin-bottom: 10 / @unit;
        text-align: center;
      } 
      a{
        display: block;
        height: 80 / @unit;
        background: #5068e3;
        border-radius: 100 / @unit;
        font-weight: 500;
        font-size: 26 / @unit;
        color: #fff;
        text-align: center;
        line-height: 80 / @unit;
      }
    }

  }
}
}
</style>