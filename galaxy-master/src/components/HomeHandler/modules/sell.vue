<template>

  <!-- sell start-->
  <div id="gala" class="sell section">
    <div class="hdbg">
      <img class="signal" src="@/assets/img/icon-signal.png" alt="">
    </div>
    <div class="outmain">
      <div class="main">
        <div class="title">{{$t("sell.title")}}</div>
        <div class="des">{{$t("sell.des")}}</div>
        <div class="step">

          <div class="card" v-for="(item, index) in steps" :key="index">
            <img class="icon" :src="item.src">
            <div class="text">
              <div class="label">{{item.label}}</div>
              <div class="des">{{item.value}}</div>
            </div>
          </div>

        </div>
        <!-- <a hidden-in-sm class="link" href="##">Register</a> -->
      </div>
    </div>
  </div>
  <!-- sell end -->

</template>

<script>
export default {
  name: "Sell",
  data() {
    return {
      steps: [
        {
          src: "/static/img/icon_zpt.svg",
          label: this.$t("sell.steps[0].label"),
          value: this.$t("sell.steps[0].value")
        },
        {
          src: "/static/img/icon_wallet.svg",
          label: this.$t("sell.steps[1].label"),
          value: this.$t("sell.steps[1].value")
        },
        {
          src: "/static/img/icon/Gala.png",
          label: this.$t("sell.steps[2].label"),
          value: this.$t("sell.steps[2].value")
        },
        {
          src: "/static/img/icon_gala.svg",
          label: this.$t("sell.steps[3].label"),
          value: this.$t("sell.steps[3].value")
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 1280px) {
  
  .sell {
    position: relative;
    margin-top: -400px;
  }
  .sell .hdbg {
    display: block;
    width: 100%;
    height: 320px;
    background: url("@{imgPath}/background_part3.png") no-repeat center top ~"/"
      cover;
    position: relative;
    .signal {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 246px;
      height: 246px;
    }
  }
  .sell .outmain {
    background: #241b67;
    &::before,
    &::after {
      content: "";
      display: table;
    }
  }
  .sell .main {
    margin: 0 auto 100px;
    width: 982px;
    position: relative;
    z-index: 2;
  }

  .sell .title {
    font-weight: 500;
    font-size: 35px;
    color: #70fec3;
    text-align: center;
  }
  .sell .main > .des {
    text-align: center;
    font-size: 16px;
    color: #dae0ff;
    line-height: 22px;
    width: 560px;
    margin: 20px auto 50px;
  }
  .sell .step {
    display: flex;
    justify-content: space-around;
  }
  .sell .step .card {
    width: 220px;
    height: 300px;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 10px;
  }
  .sell .step .card .icon {
    display: block;
    width: 60px;
    height: 60px;
    margin: 50px auto;
  }
  .sell .step .card .text {
    width: 130px;
    margin-left: auto;
    margin-right: auto;
  }
  .sell .step .card .label {
    font-weight: 500;
    font-size: 20px;
    color: #70fec3;
  }
  .sell .step .card .des {
    font-size: 14px;
    color: #ffffff;
    line-height: 22px;
  }
  .sell .main .link {
    font-weight: 500;
    width: 170px;
    height: 46px;
    display: block;
    border-radius: 100px;
    margin: 48px auto 0;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 44px;
    background: url("@{imgPath}/rectangle.svg") no-repeat center center / 100%;
  }
}

@media only screen and (max-width: 1279px) and (min-width: 1025px) {
@rem:  138rem;
  
  .sell {
    position: relative;
    margin-top: -400/@rem;
  }
  .sell .hdbg {
    display: block;
    width: 100%;
    height: 240/@rem;
    background: url("@{imgPath}/background_part3.png") no-repeat center top ~"/"
      cover;
    position: relative;
    .signal {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 246/@rem;
      height: 246/@rem;
    }
  }
  .sell .outmain {
    background: #241b67;
    &::before,
    &::after {
      content: "";
      display: table;
    }
  }
  .sell .main {
    margin: 0 auto 100/@rem;
    width: 982/@rem;
    position: relative;
    z-index: 2;
  }
  .sell .title {
    font-weight: 500;
    font-size: 35/@rem;
    color: #70fec3;
    text-align: center;
  }
  .sell .main > .des {
    text-align: center;
    font-size: 16/@rem;
    color: #dae0ff;
    line-height: 22/@rem;
    width: 560/@rem;
    margin: 20/@rem auto 50/@rem;
  }
  .sell .step {
    display: flex;
    justify-content: space-around;
  }
  .sell .step .card {
    width: 220/@rem;
    height: 300/@rem;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 10/@rem;
  }
  .sell .step .card .icon {
    display: block;
    width: 60/@rem;
    height: 60/@rem;
    margin: 50/@rem auto;
  }
  .sell .step .card .text {
    width: 130/@rem;
    margin-left: auto;
    margin-right: auto;
  }
  .sell .step .card .label {
    font-weight: 500;
    font-size: 20/@rem;
    color: #70fec3;
  }
  .sell .step .card .des {
    font-size: 14/@rem;
    color: #ffffff;
    line-height: 22/@rem;
  }
  .sell .main .link {
    font-weight: 500;
    width: 170/@rem;
    height: 46/@rem;
    display: block;
    border-radius: 100/@rem;
    margin: 48/@rem auto 0;
    font-size: 20/@rem;
    color: #ffffff;
    text-align: center;
    line-height: 44/@rem;
    background: url("@{imgPath}/rectangle.svg") no-repeat center center / 100%;
  }
}

/* 小型屏幕 */

@media only screen and (max-width: 1024px) {
@rem:  37.5rem;
  
  .sell {
    position: relative;
    margin-top: -96/@rem;
  }
  .sell .hdbg {
    display: block;
    width: 100%;
    height: 100/@rem;
    background: url("@{imgPath}/background_part3.png") no-repeat center top ~"/"
      cover;
    position: relative;
    .signal {
      position: absolute;
      top: -20/@rem;
      left: 50%;
      transform: translateX(-50%);
      width: 120/@rem;
      height: 120/@rem;
    }
  }
  .sell .outmain {
    background: #241b67;
    &::before,
    &::after {
      content: "";
      display: table;
    }
  }
  .sell .main {
    margin: 0 auto 80/@rem;
    width: 100%;
    position: relative;
  }
  .sell .main .title {
    font-weight: 500;
    font-size: 18/@rem;
    color: #70fec3;
    text-align: center;
  }
  .sell .main > .des {
    margin: 6/@rem auto 30/@rem;
    width: 280/@rem;
    text-align: center;
    font-size: 12/@rem;
    color: #dae0ff;
    line-height: 18/@rem;
  }
  .sell .step {
    margin-left: 24/@rem;
    margin-right: 24/@rem;
  }
  .sell .step .card {
    height: 90/@rem;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 10/@rem;
    display: flex;
    align-items: center;
    padding-left: 24/@rem;
    padding-right: 24/@rem;
    margin-bottom: 12/@rem;
  }
  .sell .step .card .icon {
    display: block;
    width: 36/@rem;
    height: 36/@rem;
    margin-right: 18/@rem;
  }
  .sell .step .card .label {
    font-weight: 500;
    font-size: 14/@rem;
    color: #70fec3;
  }
  .sell .step .card .des {
    font-size: 12/@rem;
    color: #ffffff;
    line-height: 18/@rem;
  }
  .sell .main .link {
    font-weight: 500;
    width: 170/@rem;
    height: 46/@rem;
    display: block;
    border-radius: 100/@rem;
    margin: 48/@rem auto 0;
    font-size: 20/@rem;
    color: #ffffff;
    text-align: center;
    line-height: 44/@rem;
    background: url("@{imgPath}/rectangle.svg") no-repeat center center / 100%;
  }
}
</style>
