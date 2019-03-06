<template>

  <!-- system start-->
  <div id="feature" class="system section">
    <div class="main">
      <div class="title">Game System</div>
      <div class="des">CryptoGalaxy, a virtual universe powered by blockchain</div>
      <div class="swiper">
        <div class="slides">

          <div class="card" :class="`status-${item.status}`" data-status="1" v-for="(item, index) in ranks" :key="index">
            <i class="rank">{{item.rank}}</i>
            <div class="content">
              <img class="flag" :src="item.flag" alt="">
              <div class="data">
                <p>
                  <span class="label">GALA DIG</span>
                  <span class="value">{{item.galadigg}}</span>
                </p>
                <p>
                  <span class="label">EXPLORER</span>
                  <span class="value">{{item.explorer}}</span>
                </p>
              </div>
              <div class="count">
                <div class="value">{{item.planets}}</div>
                <div class="label">PLANETS</div>
              </div>
            </div>
          </div>

        </div>
        <div class="content">
          <div class="label">{{$t("system.title")}}</div>
          <div class="des">{{$t("system.des")}}</div>
          <a hidden-in-sm class="link" href="##">Coming soon</a>
        </div>
      </div>
    </div>
  </div>
  <!-- system end -->
</template>
<script>
export default {
  name: "System",
  data() {
    return {
      ranks: [
        {
          status: 1,
          rank: 4,
          flag: "/static/img/flag_german.svg",
          galadigg: "9,091",
          explorer: "825",
          planets: "963"
        },
        {
          status: 2,
          rank: 3,
          flag: "/static/img/flag_singapore.svg",
          galadigg: "11,347",
          explorer: "975",
          planets: "1,123"
        },
        {
          status: 3,
          rank: 2,
          flag: "/static/img/flag_korea.svg",
          galadigg: "15,019",
          explorer: "1,040",
          planets: "1,323"
        },
        {
          status: 4,
          rank: 1,
          flag: "/static/img/flag_china.svg",
          galadigg: "18,084",
          explorer: "1,201",
          planets: "1,402"
        },
        {
          status: 5,
          rank: 7,
          flag: "/static/img/flag_japan.svg",
          galadigg: "8,629",
          explorer: "736",
          planets: "634"
        },
        {
          status: 6,
          rank: 6,
          flag: "/static/img/flag_helan.svg",
          galadigg: "7,281",
          explorer: "635",
          planets: "625"
        },
        {
          status: 7,
          rank: 5,
          flag: "/static/img/flag_italy.svg",
          galadigg: "6,521",
          explorer: "524",
          planets: "529"
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
      this.ranks = this.ranks.map((item, index) => {
        item.status = item.status % 7 ? item.status + 1 : 1;
        return item;
      });
    }
  }
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 1280px) {
  .system {
    background: #2e2a86;
  }
  .system .main .title {
    font-weight: 500;
    font-size: 35px;
    color: #70fec3;
    text-align: center;
    margin-top: 80px;
    /* margin-bottom: 20px; */
  }
  .system .main .des {
    font-size: 16px;
    color: #ebf2fc;
    line-height: 24px;
    /* margin-top: 24px; */
    margin-bottom: 60px;
    text-align: center;
  }
  .system .main .swiper {
    display: flex;
    width: 1068px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
  }
  .system .main .swiper .slides {
    position: relative;
    height: 400px;
    width: 470px;
  }
  .system .main .swiper .slides .card {
    position: absolute;
    transition: 0.5s;
  }
  .system .main .swiper .slides .card .rank {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-60%, -50%);
    width: 67px;
    height: 26px;
    border: 1px solid #f8e71c;
    background: #918960;
    border-radius: 100px;
    font-style: normal;
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .system .main .swiper .slides .card .rank::before {
    content: "RANK";
  }
  .system .main .swiper .slides .card .content {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .system .main .swiper .slides .card .content p {
    margin: 0;
  }
  .system .main .swiper .slides .card .content .flag {
    display: block;
    margin-left: 24px;
    margin-right: 24px;
  }
  .system .main .swiper .slides .card .content .data .label {
    font-size: 12px;
    color: #97a8ff;
  }
  .system .main .swiper .slides .card .content .data .value {
    font-size: 12px;
    color: #fff;
  }
  .system .main .swiper .slides .card .content .count .label {
    color: #97a8ff;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
  }
  .system .main .swiper .slides .card .content .count .value {
    color: #fff;
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    text-align: right;
  }
  .system .main .swiper .slides .card.status-1 *,
  .system .main .swiper .slides .card.status-2 *,
  .system .main .swiper .slides .card.status-6 *,
  .system .main .swiper .slides .card.status-7 * {
    opacity: 0;
  }
  .system .main .swiper .slides .card.status-3 *,
  .system .main .swiper .slides .card.status-5 * {
    opacity: 0.8;
  }
  .system .main .swiper .slides .card.status-3 .rank,
  .system .main .swiper .slides .card.status-5 .rank {
    opacity: 0;
  }
  .system .main .swiper .slides .card.status-4 * {
    opacity: 1;
  }
  .system .main .swiper .slides .card.status-1 {
    width: 209px;
    height: 49px;
    background: url("@{imgPath}/status-1.svg") no-repeat center center / 100%;
    top: 0;
    left: 0;
    font-size: 12px;
  }
  .system .main .swiper .slides .card.status-2 {
    width: 316px;
    height: 74px;
    background: url("@{imgPath}/status-2.svg") no-repeat center center / 100%;
    top: 25px;
    left: 22px;
    font-size: 12px;
  }
  .system .main .swiper .slides .card.status-3 {
    width: 362px;
    height: 85px;
    background: rgba(80, 104, 227, 0.5);
    border: 2px solid #5068e3;
    border-radius: 10px;
    top: 50px;
    left: 44px;
    font-size: 12px;
  }
  .system .main .swiper .slides .card.status-3 .flag {
    width: 60px;
    flex-basis: 60px;
  }
  .system .main .swiper .slides .card.status-3 .count {
    margin-left: 60px;
  }
  .system .main .swiper .slides .card.status-4 {
    width: 435px;
    height: 102px;
    background: rgba(74, 144, 226, 0.3);
    border: 2px solid #4a90e2;
    border-radius: 10px;
    top: 155px;
    left: 35px;
    font-size: 12px;
  }
  .system .main .swiper .slides .card.status-4 .flag {
    width: 72px;
    flex-basis: 72px;
  }
  .system .main .swiper .slides .card.status-4 .count {
    margin-left: 100px;
  }
  .system .main .swiper .slides .card.status-4 .count .value {
    font-size: 36px;
    line-height: 40px;
  }
  .system .main .swiper .slides .card.status-5 {
    width: 321px;
    height: 76px;
    background: rgba(50, 50, 50, 0.5);
    border: 2px solid rgba(126, 211, 33, 0.5);
    border-radius: 10px;
    top: 275px;
    left: 44px;
    font-size: 12px;
  }
  .system .main .swiper .slides .card.status-5 .flag {
    width: 52px;
    flex-basis: 52px;
  }
  .system .main .swiper .slides .card.status-5 .count {
    margin-left: 30px;
  }
  .system .main .swiper .slides .card.status-6 {
    width: 261px;
    height: 61px;
    background: url("@{imgPath}/status-6.svg") no-repeat center center ~"/" 100%;
    top: 325px;
    left: 22px;
  }
  .system .main .swiper .slides .card.status-7 {
    width: 218px;
    height: 51px;
    background: url("@{imgPath}/status-7.svg") no-repeat center center ~"/" 100%;
    top: 350px;
    left: 0;
  }
  .system .main .content {
    width: 510px;
  }
  .system .main .content .label {
    font-weight: 500;
    font-size: 24px;
    color: #70fec3;
    line-height: 29px;
  }
  .system .main .content .des {
    font-size: 16px;
    color: #ffffff;
    margin-top: 24px;
    margin-bottom: 36px;
    text-align: left;
  }
  .system .main .content .link {
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    text-decoration: underline;
    display: block;
  }
}

@media only screen and (max-width: 1279px) and (min-width: 1025px) {
@rem:  138rem;
  
  .system {
    background: #2e2a86;
  }
  .system .main .title {
    font-weight: 500;
    font-size: 35/@rem;
    color: #70fec3;
    text-align: center;
    margin-top: 80/@rem;
    /* margin-bottom: 20/@rem; */
  }
  .system .main .des {
    font-size: 16/@rem;
    color: #ebf2fc;
    line-height: 24/@rem;
    /* margin-top: 24/@rem; */
    margin-bottom: 60/@rem;
    text-align: center;
  }
  .system .main .swiper {
    display: flex;
    width: 1068/@rem;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
  }
  .system .main .swiper .slides {
    position: relative;
    height: 400/@rem;
    width: 470/@rem;
  }
  .system .main .swiper .slides .card {
    position: absolute;
    transition: 0.5s;
  }
  .system .main .swiper .slides .card .rank {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-60%, -50%);
    width: 67/@rem;
    height: 26/@rem;
    border: 1px solid #f8e71c;
    background: #918960;
    border-radius: 100/@rem;
    font-style: normal;
    color: #fff;
    font-size: 14/@rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .system .main .swiper .slides .card .rank::before {
    content: "RANK";
  }
  .system .main .swiper .slides .card .content {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .system .main .swiper .slides .card .content p {
    margin: 0;
  }
  .system .main .swiper .slides .card .content .flag {
    display: block;
    margin-left: 24/@rem;
    margin-right: 24/@rem;
  }
  .system .main .swiper .slides .card .content .data .label {
    font-size: 12/@rem;
    color: #97a8ff;
  }
  .system .main .swiper .slides .card .content .data .value {
    font-size: 12/@rem;
    color: #fff;
  }
  .system .main .swiper .slides .card .content .count .label {
    color: #97a8ff;
    font-size: 12/@rem;
    line-height: 16/@rem;
    text-align: right;
  }
  .system .main .swiper .slides .card .content .count .value {
    color: #fff;
    font-size: 24/@rem;
    line-height: 30/@rem;
    font-weight: 500;
    text-align: right;
  }
  .system .main .swiper .slides .card.status-1 *,
  .system .main .swiper .slides .card.status-2 *,
  .system .main .swiper .slides .card.status-6 *,
  .system .main .swiper .slides .card.status-7 * {
    opacity: 0;
  }
  .system .main .swiper .slides .card.status-3 *,
  .system .main .swiper .slides .card.status-5 * {
    opacity: 0.8;
  }
  .system .main .swiper .slides .card.status-3 .rank,
  .system .main .swiper .slides .card.status-5 .rank {
    opacity: 0;
  }
  .system .main .swiper .slides .card.status-4 * {
    opacity: 1;
  }
  .system .main .swiper .slides .card.status-1 {
    width: 209/@rem;
    height: 49/@rem;
    background: url("@{imgPath}/status-1.svg") no-repeat center center / 100%;
    top: 0;
    left: 0;
    font-size: 12/@rem;
  }
  .system .main .swiper .slides .card.status-2 {
    width: 316/@rem;
    height: 74/@rem;
    background: url("@{imgPath}/status-2.svg") no-repeat center center / 100%;
    top: 25/@rem;
    left: 22/@rem;
    font-size: 12/@rem;
  }
  .system .main .swiper .slides .card.status-3 {
    width: 362/@rem;
    height: 85/@rem;
    background: rgba(80, 104, 227, 0.5);
    border: 2px solid #5068e3;
    border-radius: 10/@rem;
    top: 50/@rem;
    left: 44/@rem;
    font-size: 12/@rem;
  }
  .system .main .swiper .slides .card.status-3 .flag {
    width: 60/@rem;
    flex-basis: 60/@rem;
  }
  .system .main .swiper .slides .card.status-3 .count {
    margin-left: 60/@rem;
  }
  .system .main .swiper .slides .card.status-4 {
    width: 435/@rem;
    height: 102/@rem;
    background: rgba(74, 144, 226, 0.3);
    border: 2px solid #4a90e2;
    border-radius: 10/@rem;
    top: 155/@rem;
    left: 35/@rem;
    font-size: 12/@rem;
  }
  .system .main .swiper .slides .card.status-4 .flag {
    width: 72/@rem;
    flex-basis: 72/@rem;
  }
  .system .main .swiper .slides .card.status-4 .count {
    margin-left: 100/@rem;
  }
  .system .main .swiper .slides .card.status-4 .count .value {
    font-size: 36/@rem;
    line-height: 40/@rem;
  }
  .system .main .swiper .slides .card.status-5 {
    width: 321/@rem;
    height: 76/@rem;
    background: rgba(50, 50, 50, 0.5);
    border: 2px solid rgba(126, 211, 33, 0.5);
    border-radius: 10/@rem;
    top: 275/@rem;
    left: 44/@rem;
    font-size: 12/@rem;
  }
  .system .main .swiper .slides .card.status-5 .flag {
    width: 52/@rem;
    flex-basis: 52/@rem;
  }
  .system .main .swiper .slides .card.status-5 .count {
    margin-left: 30/@rem;
  }
  .system .main .swiper .slides .card.status-6 {
    width: 261/@rem;
    height: 61/@rem;
    background: url("@{imgPath}/status-6.svg") no-repeat center center ~"/" 100%;
    top: 325/@rem;
    left: 22/@rem;
  }
  .system .main .swiper .slides .card.status-7 {
    width: 218/@rem;
    height: 51/@rem;
    background: url("@{imgPath}/status-7.svg") no-repeat center center ~"/" 100%;
    top: 350/@rem;
    left: 0;
  }
  .system .main .content {
    width: 510/@rem;
  }
  .system .main .content .label {
    font-weight: 500;
    font-size: 24/@rem;
    color: #70fec3;
    line-height: 29/@rem;
  }
  .system .main .content .des {
    font-size: 16/@rem;
    color: #ffffff;
    margin-top: 24/@rem;
    margin-bottom: 36/@rem;
    text-align: left;
  }
  .system .main .content .link {
    font-weight: 500;
    font-size: 18/@rem;
    color: #ffffff;
    text-decoration: underline;
    display: block;
  }
}

/* 小型屏幕 */

@media only screen and (max-width: 1024px) {
@rem:  37.5rem;
  
  .system {
    background: #2e2a86;
  }
  .system .main .title {
    font-weight: 500;
    font-size: 18/@rem;
    color: #70fec3;
    text-align: center;
    margin-top: 40/@rem;
  }
  .system .main > .des {
    font-size: 12/@rem;
    color: #ebf2fc;
    line-height: 16/@rem;
    margin-bottom: 36/@rem;
    padding-left: 45/@rem;
    padding-right: 15/@rem;
  }
  .system .main .swiper {
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    height: 180/@rem;
  }
  .system .main .swiper .slides {
    position: absolute;
    height: 400/@rem;
    width: 470/@rem;
    top: 50%;
    left: -25/@rem;
    transform-origin: top left;
    transform: scale(0.4) translateY(-50%);
  }
  .system .main .swiper .slides .card {
    position: absolute;
    transition: 0.5s;
  }
  .system .main .swiper .slides .card .rank {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-60%, -50%);
    width: 67/@rem;
    height: 26/@rem;
    border: 1px solid #f8e71c;
    background: #918960;
    border-radius: 100/@rem;
    font-style: normal;
    color: #fff;
    font-size: 14/@rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .system .main .swiper .slides .card .rank::before {
    content: "RANK";
  }
  .system .main .swiper .slides .card .content {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .system .main .swiper .slides .card .content p {
    margin: 0;
  }
  .system .main .swiper .slides .card .content .flag {
    display: block;
    margin-left: 24/@rem;
    margin-right: 24/@rem;
  }
  .system .main .swiper .slides .card .content .data .label {
    font-size: 12/@rem;
    color: #97a8ff;
  }
  .system .main .swiper .slides .card .content .data .value {
    font-size: 12/@rem;
    color: #fff;
  }
  .system .main .swiper .slides .card .content .count .label {
    color: #97a8ff;
    font-size: 12/@rem;
    line-height: 16/@rem;
    text-align: right;
  }
  .system .main .swiper .slides .card .content .count .value {
    color: #fff;
    font-size: 24/@rem;
    line-height: 30/@rem;
    font-weight: 500;
    text-align: right;
  }
  .system .main .swiper .slides .card.status-1 *,
  .system .main .swiper .slides .card.status-2 *,
  .system .main .swiper .slides .card.status-6 *,
  .system .main .swiper .slides .card.status-7 * {
    opacity: 0;
  }
  .system .main .swiper .slides .card.status-3 *,
  .system .main .swiper .slides .card.status-5 * {
    opacity: 0.8;
  }
  .system .main .swiper .slides .card.status-3 .rank,
  .system .main .swiper .slides .card.status-5 .rank {
    opacity: 0;
  }
  .system .main .swiper .slides .card.status-4 * {
    opacity: 1;
  }
  .system .main .swiper .slides .card.status-1 {
    width: 209/@rem;
    height: 49/@rem;
    background: url("@{imgPath}/status-1.svg") no-repeat center center / 100%;
    top: 0;
    left: 0;
    font-size: 12/@rem;
  }
  .system .main .swiper .slides .card.status-2 {
    width: 316/@rem;
    height: 74/@rem;
    background: url("@{imgPath}/status-2.svg") no-repeat center center / 100%;
    top: 25/@rem;
    left: 22/@rem;
    font-size: 12/@rem;
  }
  .system .main .swiper .slides .card.status-3 {
    width: 362/@rem;
    height: 85/@rem;
    background: rgba(80, 104, 227, 0.5);
    border: 2px solid #5068e3;
    border-radius: 10/@rem;
    top: 50/@rem;
    left: 44/@rem;
    font-size: 12/@rem;
  }
  .system .main .swiper .slides .card.status-3 .flag {
    width: 60/@rem;
    flex-basis: 60/@rem;
  }
  .system .main .swiper .slides .card.status-3 .count {
    margin-left: 60/@rem;
  }
  .system .main .swiper .slides .card.status-4 {
    width: 435/@rem;
    height: 102/@rem;
    background: rgba(74, 144, 226, 0.3);
    border: 2px solid #4a90e2;
    border-radius: 10/@rem;
    top: 155/@rem;
    left: 35/@rem;
    font-size: 12/@rem;
  }
  .system .main .swiper .slides .card.status-4 .flag {
    width: 72/@rem;
    flex-basis: 72/@rem;
  }
  .system .main .swiper .slides .card.status-4 .count {
    margin-left: 100/@rem;
  }
  .system .main .swiper .slides .card.status-4 .count .value {
    font-size: 36/@rem;
    line-height: 40/@rem;
  }
  .system .main .swiper .slides .card.status-5 {
    width: 321/@rem;
    height: 76/@rem;
    background: rgba(50, 50, 50, 0.5);
    border: 2px solid rgba(126, 211, 33, 0.5);
    border-radius: 10/@rem;
    top: 275/@rem;
    left: 44/@rem;
    font-size: 12/@rem;
  }
  .system .main .swiper .slides .card.status-5 .flag {
    width: 52/@rem;
    flex-basis: 52/@rem;
  }
  .system .main .swiper .slides .card.status-5 .count {
    margin-left: 30/@rem;
  }
  .system .main .swiper .slides .card.status-6 {
    width: 261/@rem;
    height: 61/@rem;
    background: url("@{imgPath}/status-6.svg") no-repeat center center / 100%;
    top: 325/@rem;
    left: 22/@rem;
  }
  .system .main .swiper .slides .card.status-7 {
    width: 218/@rem;
    height: 51/@rem;
    background: url("@{imgPath}/status-7.svg") no-repeat center center / 100%;
    top: 350/@rem;
    left: 0;
  }
  .system .main .swiper > .content {
    width: 170/@rem;
    margin-left: auto;
    margin-right: 24/@rem;
  }
  .system .main .swiper > .content .label {
    font-weight: 500;
    font-size: 14/@rem;
    color: #70fec3;
    line-height: 20/@rem;
  }
  .system .main .swiper > .content .des {
    font-size: 12/@rem;
    color: #ffffff;
    margin-top: 24/@rem;
    line-height: 16/@rem;
  }
  .system .main .swiper > .content .link {
    font-weight: 500;
    font-size: 18/@rem;
    color: #ffffff;
    text-decoration: underline;
  }
}
</style>
