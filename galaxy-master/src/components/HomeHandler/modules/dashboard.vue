<template>

  <!-- dashboard start-->
  <div class="dashboard section">
    <div class="background">
      <div class="main">
        <div class="text">
          <div class="label">{{$t("dashboard.title")}}</div>
          <div class="des">{{$t("dashboard.des")}}</div>
        </div>
        <div class="card">

          <div class="count">
            <div class="num">{{count}}</div>
            <div class="button">Recharge</div>
          </div>
          <div class="data">
            <div class="item">
              <div class="label">7 DAYS</div>
              <div class="value">Return rate
                <span class="up">12</span>
              </div>
            </div>
            <div class="item">
              <div class="label">30 DAYS</div>
              <div class="value">Return rate
                <span class="up">32</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
  <!-- dashboard end -->
</template>

<script>
import { Tween, Easing, autoPlay } from "es6-tween";

export default {
  name: "Dashboard",
  data() {
    return {
      count: 7693.1,
      countMirror: 7693.1
    };
  },
  watch: {
    countMirror(newValue, oldValue) {
      autoPlay(true);
      let t = new Tween({ tweeningNumber: oldValue })
        .easing(Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 1000)
        .on("update", params => {
          this.count = (+params.tweeningNumber).toFixed(2);
        })
        .start();
    }
  },
  mounted() {
    setInterval(() => {
      this.randomCount(1, 10);
    }, 5000);
  },
  methods: {
    randomCount(min, max) {
      let d = (max - min) * Math.random() + min;
      this.countMirror += d;
    }
  }
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";
/* 大型屏幕 */

@media only screen and (min-width: 1280px) {
  .dashboard {
    width: 100%;
    height: 576px;
    background: #2e2a86;
    position: relative;
  }
  .dashboard .background {
    margin: 0 auto;
    width: 1280px;
    height: 576px;
    background: url("@{imgPath}/dashboard.svg") no-repeat center center / 100%;
  }
  .dashboard .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1068px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .dashboard .main .card {
    width: 433px;
    height: 157px;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 14px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .dashboard .card .count {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dashboard .card .count .num {
    font-size: 48px;
    font-weight: 500;
    -webkit-text-stroke: 1px rgba(222, 222, 51, 0.7686274509803922);
    color: #a19768;
    display: flex;
    align-items: flex-start;
    line-height: 1;
  }
  .dashboard .card .count .num::before {
    display: block;
    content: "";
    width: 36px;
    height: 36px;
    background: url("@{imgPath}/coin.png") no-repeat center center / 100%;
  }
  .dashboard .card .count .button {
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 100px;
    width: 120px;
    height: 42px;
    font-size: 16px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dashboard .card .data {
    display: flex;
  }
  .dashboard .card .data .item {
    color: #97a8ff;
    font-size: 12px;
    line-height: 16px;
    margin-right: 48px;
  }
  .dashboard .card .data .item .value {
    margin-top: 6px;
    font-size: 14px;
  }
  .dashboard .card .data .item .value span::after {
    content: "%";
  }
  .dashboard .card .data .item .value span.up {
    color: rgb(75, 202, 188);
  }
  .dashboard .card .data .item .value span.down {
    color: rgb(233, 69, 29);
  }
  .dashboard .main .text {
    width: 512px;
  }
  .dashboard .main .text .label {
    font-weight: 500;
    font-size: 24px;
    color: #70fec3;
    line-height: 30px;
  }
  .dashboard .main .text .des {
    font-size: 16px;
    color: #ffffff;
    margin-top: 24px;
  }
}

@media only screen and (max-width: 1279px) and (min-width: 1025px) {
@rem:  138rem;
  
  .dashboard {
    width: 100%;
    height: 576/@rem;
    background: #2e2a86;
    position: relative;
  }
  .dashboard .background {
    margin: 0 auto;
    width: 1280/@rem;
    height: 576/@rem;
    background: url("@{imgPath}/dashboard.svg") no-repeat center center / 100%;
  }
  .dashboard .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1068/@rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .dashboard .main .card {
    width: 433/@rem;
    height: 157/@rem;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 14/@rem;
    padding: 24/@rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .dashboard .card .count {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dashboard .card .count .num {
    font-size: 48/@rem;
    font-weight: 500;
    -webkit-text-stroke: 1px rgba(222, 222, 51, 0.7686274509803922);
    color: #a19768;
    display: flex;
    align-items: flex-start;
    line-height: 1;
  }
  .dashboard .card .count .num::before {
    display: block;
    content: "";
    width: 36/@rem;
    height: 36/@rem;
    background: url("@{imgPath}/coin.png") no-repeat center center / 100%;
  }
  .dashboard .card .count .button {
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 100/@rem;
    width: 120/@rem;
    height: 42/@rem;
    font-size: 16/@rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dashboard .card .data {
    display: flex;
  }
  .dashboard .card .data .item {
    color: #97a8ff;
    font-size: 12/@rem;
    line-height: 16/@rem;
    margin-right: 48/@rem;
  }
  .dashboard .card .data .item .value {
    margin-top: 6/@rem;
    font-size: 14/@rem;
  }
  .dashboard .card .data .item .value span::after {
    content: "%";
  }
  .dashboard .card .data .item .value span.up {
    color: rgb(75, 202, 188);
  }
  .dashboard .card .data .item .value span.down {
    color: rgb(233, 69, 29);
  }
  .dashboard .main .text {
    width: 512/@rem;
  }
  .dashboard .main .text .label {
    font-weight: 500;
    font-size: 24/@rem;
    color: #70fec3;
    line-height: 30/@rem;
  }
  .dashboard .main .text .des {
    font-size: 16/@rem;
    color: #ffffff;
    margin-top: 24/@rem;
  }
}

/* 小型屏幕 */

@media only screen and (max-width: 1024px) {
@rem:  37.5rem;
  
  .dashboard {
    width: 100%;
    height: 240/@rem;
    background: #2e2a86 url("@{imgPath}/dashboard.svg") no-repeat center 100% ~"/"
      120%;
    position: relative;
  }
  .dashboard .main {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .dashboard .main .text {
    width: 184/@rem;
    margin-left: 24/@rem;
    margin-right: 24/@rem;
  }
  .dashboard .main .text .label {
    font-weight: 500;
    font-size: 14/@rem;
    color: #70fec3;
    line-height: 20/@rem;
  }
  .dashboard .main .text .des {
    font-size: 12/@rem;
    color: #ffffff;
    margin-top: 24/@rem;
    line-height: 16/@rem;
  }
  .dashboard .card {
    width: 433/@rem;
    height: 157/@rem;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 14/@rem;
    padding: 24/@rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    right: -165/@rem;
    transform: translateY(-50%) scale(0.5);
  }
  .dashboard .card .count {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dashboard .card .count .num {
    font-size: 48/@rem;
    font-weight: 500;
    -webkit-text-stroke: 1px rgba(222, 222, 51, 0.7686274509803922);
    color: #a19768;
    display: flex;
    align-items: flex-start;
    line-height: 1;
  }
  .dashboard .card .count .num::before {
    display: block;
    content: "";
    width: 36/@rem;
    height: 36/@rem;
    background: url("@{imgPath}/coin.png") no-repeat center center / 100%;
  }
  .dashboard .card .count .button {
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 100/@rem;
    width: 120/@rem;
    height: 42/@rem;
    font-size: 16/@rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dashboard .card .data {
    display: flex;
  }
  .dashboard .card .data .item {
    color: #97a8ff;
    font-size: 12/@rem;
    line-height: 16/@rem;
    margin-right: 48/@rem;
  }
  .dashboard .card .data .item .value {
    margin-top: 6/@rem;
    font-size: 14/@rem;
  }
  .dashboard .card .data .item .value span::after {
    content: "%";
  }
  .dashboard .card .data .item .value span.up {
    color: rgb(75, 202, 188);
  }
  .dashboard .card .data .item .value span.down {
    color: rgb(233, 69, 29);
  }
}
</style>
