<template>

  <!-- feature start-->
  <div class="feature">
    <div class="main">
      <div class="swiper">
        <div class="slides">

          <div class="card" :class="`status-${item.status}`" v-for="(item, index) in cards" :key="index">
            <img :src="item.src" alt="" style="display: block; width: 100%;">
          </div>

        </div>
      </div>
      <div class="content">
        <div class="label">{{$t("feature.title")}}</div>
        <div class="des">{{$t("feature.des")}}</div>
      </div>
    </div>

  </div>
  <!-- feature end -->
</template>

<script>
export default {
  name: "Feature",
  data() {
    return {
      cards: [
        {
          status: 1,
          src: "/static/img/card-upgrad.png"
        },
        {
          status: 2,
          src: "/static/img/card-digggalafast.png"
        },
        {
          status: 3,
          src: "/static/img/card-digggalafast2.png"
        }
      ]
    };
  },
  mounted() {
    setInterval(() => {
      this.worker();
    }, 5000);
  },
  methods: {
    worker() {
      this.cards = this.cards.map((item, index) => {
        item.status = item.status % 3 ? item.status + 1 : 1;
        return item;
      });
    }
  }
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 1280px) {
  .feature {
    background: #2e2a86;
    margin-top: -105px;
    position: relative;
    padding-bottom: 120px;
  }
  .feature .main {
    width: 1068px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .feature .main .swiper {
  }
  .feature .main .swiper .slides {
    position: relative;
    width: 520px;
    height: 255px;
  }
  .feature .main .swiper .slides .card {
    position: absolute;
    transition: 0.5s;
  }
  .feature .main .swiper .slides .card.status-1 {
    width: 410px;
    height: 105px;
    /* background: url('../img/card-upgrad.png') no-repeat center center / 100%; */
    top: 0;
    left: 0;
    z-index: 1;
  }
  .feature .main .swiper .slides .card.status-2 {
    width: 410px;
    height: 105px;
    /* background: url('../img/card-digggalafast.png') no-repeat center center / 100%; */
    top: 80px;
    left: 110px;
    z-index: 3;
  }
  .feature .main .swiper .slides .card.status-3 {
    width: 320px;
    height: 80px;
    /* background: url('../img/card-digggalafast2.png') no-repeat center center / 100%; */
    top: 170px;
    left: 40px;
    z-index: 1;
  }
  .feature .main .content {
    width: 400px;
  }
  .feature .main .content .label {
    font-weight: 500;
    font-size: 24px;
    color: #70fec3;
    line-height: 30px;
  }
  .feature .main .content .des {
    font-size: 16px;
    color: #ffffff;
    margin-top: 24px;
  }
}

@media only screen and (max-width: 1279px) and (min-width: 1025px) {
  @rem: 138rem;

  .feature {
    background: #2e2a86;
    margin-top: -105/@rem;
    position: relative;
    padding-bottom: 120/@rem;
  }
  .feature .main {
    width: 1068/@rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .feature .main .swiper {
  }
  .feature .main .swiper .slides {
    position: relative;
    width: 520/@rem;
    height: 255/@rem;
  }
  .feature .main .swiper .slides .card {
    position: absolute;
    transition: 0.5s;
  }
  .feature .main .swiper .slides .card.status-1 {
    width: 410/@rem;
    height: 105/@rem;
    /* background: url('../img/card-upgrad.png') no-repeat center center / 100%; */
    top: 0;
    left: 0;
    z-index: 1;
  }
  .feature .main .swiper .slides .card.status-2 {
    width: 410/@rem;
    height: 105/@rem;
    /* background: url('../img/card-digggalafast.png') no-repeat center center / 100%; */
    top: 80/@rem;
    left: 110/@rem;
    z-index: 3;
  }
  .feature .main .swiper .slides .card.status-3 {
    width: 320/@rem;
    height: 80/@rem;
    /* background: url('../img/card-digggalafast2.png') no-repeat center center / 100%; */
    top: 170/@rem;
    left: 40/@rem;
    z-index: 1;
  }
  .feature .main .content {
    width: 400/@rem;
  }
  .feature .main .content .label {
    font-weight: 500;
    font-size: 24/@rem;
    color: #70fec3;
    line-height: 30/@rem;
  }
  .feature .main .content .des {
    font-size: 16/@rem;
    color: #ffffff;
    margin-top: 24/@rem;
  }
}

/* 小型屏幕 */

@media only screen and (max-width: 1024px) {
  @rem: 37.5rem;

  .feature {
    background: #2e2a86;
    padding-bottom: 60/@rem;
  }
  .feature .main {
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
  .feature .main .swiper {
    position: absolute;
    top: 50%;
    left: -85/@rem;
    transform: translateY(-50%) scale(0.9);
  }
  .feature .main .swiper .slides {
    position: relative;
    width: 260/@rem;
    height: 122/@rem;
  }
  .feature .main .swiper .slides .card {
    position: absolute;
    transition: 0.5s;
  }
  .feature .main .swiper .slides .card.status-1 {
    width: 205/@rem;
    height: 52/@rem;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .feature .main .swiper .slides .card.status-2 {
    width: 205/@rem;
    height: 52/@rem;
    top: 40/@rem;
    left: 55/@rem;
    z-index: 3;
  }
  .feature .main .swiper .slides .card.status-3 {
    width: 160/@rem;
    height: 40/@rem;
    top: 85/@rem;
    left: 20/@rem;
    z-index: 1;
  }
  .feature .main .content {
    width: 170/@rem;
    margin-left: auto;
    margin-right: 24/@rem;
  }
  .feature .main .content .label {
    font-weight: 500;
    font-size: 14/@rem;
    color: #70fec3;
    line-height: 20/@rem;
  }
  .feature .main .content .des {
    font-size: 12/@rem;
    color: #ffffff;
    margin-top: 24/@rem;
    line-height: 16/@rem;
  }
}
</style>
