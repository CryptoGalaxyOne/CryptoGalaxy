<template>
  <!-- banner start-->
  <div class="banner section" :class="{'fix-sm': timesup === 1}">
      
    <div class="main">
      <!--announcement-->
       <div class="c-announcement" v-if="isAnnouncement == '1'">
         <div class="c-announcement-cent">
           <marquee> {{$t("banner.text")}}</marquee>
         </div>
         <i class="c-announcement-close" @click="closeAnnouncement"></i>
       </div>

      <div class="copywriting">
        <div class="slogan">{{$t("banner.title")}}<br />
          <span hidden-in-sm>{{$t("banner.subtitle")}}</span>
        </div>
        <div hidden-in-lg class="des">{{$t("banner.mobile-subtitle")}}</div>
        <div class="countdown" v-if="timesup === -1">
          <div class="item">
            <div class="value">{{DD}}</div>
            <div class="label">DAY</div>
          </div>
          <div class="item">
            <div class="value">{{HH}}</div>
            <div class="label">HOUR</div>
          </div>
          <div class="item">
            <div class="value">{{MM}}</div>
            <div class="label">MIN</div>
          </div>
          <div class="item">
            <div class="value">{{SS}}</div>
            <div class="label">SEC</div>
          </div>
        </div>
        <div class="countdown" hidden-in-sm v-if="timesup === 1"></div>
      
        <div class="links" v-if="timesup === -1">
          <a href="https://t.me/CryptoGalaxyOne" target="_blank" class="invite">Telegram</a>
          <a href="##" class="getsoon">{{$t("banner.getsoon")}}</a>
        </div>
        <div class="links" v-if="timesup === 1">
          <a href="/#/ios" target="_blank" class="download-android">{{$t("banner.ios")}}</a>
      
          <a href="https://play.google.com/store/apps/details?id=com.zeepin.CryptoGalaxy" target="_blank" class="download-android">{{$t("banner.googlePlay")}}</a>
           
          <a href="http://cdn.zeepin.io/cryptogalaxy/CryptoGalaxy2.0.8.apk" class="download-android">{{$t("banner.android")}}</a>
        </div>
        <div class="countdown-protocol">
          <p>{{$t("marketPlace.text8")}}</p>
          <p v-if="isI18n == 'en'"><a href="/#/TermsOfUse" target="_blank">{{$t("marketPlace.text9")}}</a></p>
          <p v-if="isI18n == 'cn'"><a href="/#/TermsOfUseCN" target="_blank">{{$t("marketPlace.text9")}}</a></p>
          <p>{{$t("marketPlace.text10")}}</p>
          <p><a href="/#/PrivacyPolicy" target="_blank">{{$t("marketPlace.text11")}}</a></p>
        </div>
      </div>
      <img class="vision" src="@/assets/img/vision.png" alt="">
    </div>
  </div>
  <!-- banner end -->
</template>

<script>

import jstracker from 'jstracker'
jstracker.init({
  report: (errorLogs) => {
    alert('banner');
    alert(JSON.stringify(errorLogs));
  }
});


import dateFormat from "dateformat";

export default {
  name: "Banner",
  data() {
    return {
      d: 0,
      h: 0,
      m: 0,
      s: 0,
      timesup: 0,
      isI18n:"en",
      isAnnouncement:'2'
    };
  },
  computed: {
    DD() {
      return this.d >= 10 ? this.d : "0" + this.d;
    },
    HH() {
      return this.h >= 10 ? this.h : "0" + this.h;
    },
    MM() {
      return this.m >= 10 ? this.m : "0" + this.m;
    },
    SS() {
      return this.s >= 10 ? this.s : "0" + this.s;
    }
  },
  mounted() {
    setInterval(() => {
      this.countDown("2018/4/23 21:00:00", new Date(), 8);
    }, 500);
    if(sessionStorage.getItem('announcement')){
      this.isAnnouncement = sessionStorage.getItem('announcement');
    }

     this.isI18n = this.$i18n.locale;
  },
  methods: {
    countDown(deadLine, now, timeZone) {
      let offset =
        parseInt((Date.parse(new Date(deadLine)) - Date.parse(now)) / 1000) +
        (-timeZone * 60 - now.getTimezoneOffset()) * 60;

      if (offset <= 0) {
        this.timesup = 1;
        offset = 0;
      }else{
        this.timesup = -1
      }

      this.s = parseInt(offset % 60);
      this.m = parseInt((offset / 60) % 60);
      this.h = parseInt((offset / 60 / 60) % 24);
      this.d = parseInt(offset / 60 / 60 / 24);
    },
    closeAnnouncement(){
      this.isAnnouncement = '2';
      sessionStorage.setItem('announcement',this.isAnnouncement);
    },
    toIos(){
      this.$router.push({path:'/ios'});
    }
  }
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 1280px) {
  .banner {
    position: relative;
    width: 100%;
    height: 900px;
    background: url("@{imgPath}/banner.jpg") no-repeat center center ~"/" cover;
  }
  .banner .main {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    width: 1068px;
    height: 660px;
    // background: rgba(0, 0, 0, 0.5);
  }
  .banner .main .copywriting {
    position: absolute;
    top: 42%;
    left: 0;
    transform: translateY(-50%);
    max-width:600px;
  }
  .banner .main .copywriting .countdown {
    width: 360px;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 60px;
    .item {
      .value {
        width: 78px;
        height: 96px;
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 8px;
        font-size: 24px;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .label {
        margin-top: 16px;
        text-align: center;
        font-weight: 500;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
 .countdown-protocol{
    margin-top:20px;
    display: flex;
   /* justify-content: center;
    align-items: center; */
    margin-left:6%;
  }
   .countdown-protocol p{
     font-size: 14px;
     color:#fff;
   }
   .countdown-protocol p >a{
     margin-left:10px;
     margin-right:10px;
     cursor: pointer;
     color:#70fec3;
   }
  .banner .main .copywriting .links {
    // margin-top: 81px;
    display: flex;
    /* justify-content: space-between; */
    width: 540px;
  }
  .banner .main .copywriting .links a {
    display: block;
    width: 166px;
    height: 46px;
    line-height: 46px;
    border-radius: 100px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
  }
  .banner .main .copywriting .links a.download-android{
    margin-left:6%;
  }
  .banner .main .copywriting .links a.invite {
    color: rgba(80, 104, 227, 1);
    background: rgba(112, 254, 195, 1);
  }
  .banner .main .copywriting .links a.getsoon {
    color: #c8c8c8;
    background: #847c7c;
  }
  .banner .main .copywriting .links a.download-ios {
    color: rgba(80, 104, 227, 1);
    background: #fff;
  }
  .banner .main .copywriting .links a.download-android {
    color: #fff;
    background: rgba(80, 104, 227, 1);
  }
  .banner .main .copywriting .slogan {
    font-weight: 500;
    font-size: 36px;
    color: #fff;
    line-height: 1.2;
  }
  .banner .main .vision {
    display: block;
    width: 500px;
    position: absolute;
    top: 50%;
    right: -36px;
    transform: translateY(-50%);
  }
  .banner .main .c-announcement{
    width: 58%;
    position:absolute;
    height:50px;
    background: rgba(0, 0, 0, 0.5) url( '@{imgPath}/cement.png') 20px center  no-repeat;
    background-size:auto 60%;
    z-index: 999;
    top:30px;
    border-radius: 8px;
    display: flex;
    overflow: hidden;
  }
  .banner .main .c-announcement .c-announcement-cent{
    flex:1;
    line-height: 30px;
    padding:10px 10px 10px 60px;
    color:#fff;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 3px;
  }
  .banner .main .c-announcement .c-announcement-close{
    display: block;
    width:50px;
    background: url( '@{imgPath}/colse.png') center center  no-repeat;
    background-size:auto 30% ;
    cursor: pointer;
  }
}

@media only screen and (max-width: 1279px) and (min-width: 1025px) {
  @rem: 138rem;

  .banner {
    position: relative;
    width: 100%;
    height: 900/@rem;
    background: url("@{imgPath}/banner.jpg") no-repeat center center ~"/" cover;
  }
  .banner .main {
    position: absolute;
    top: 120/@rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1068/@rem;
    height: 660/@rem;
    // background: rgba(0, 0, 0, 0.5);
  }
  .banner .main .copywriting {
    position: absolute;
    top: 42%;
    left: 0;
    max-width:600/@rem;
    transform: translateY(-50%);
  }
  .banner .main .copywriting .countdown {
    width: 360/@rem;
    display: flex;
    justify-content: space-between;
    margin-top: 60/@rem;
    margin-bottom: 60/@rem;
    .item {
      .value {
        width: 78/@rem;
        height: 96/@rem;
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 8/@rem;
        font-size: 24/@rem;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .label {
        margin-top: 16/@rem;
        text-align: center;
        font-weight: 500;
        font-size: 14/@rem;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  .banner .main .copywriting .links {
    // margin-top: 81/@rem;
    display: flex;
/*     justify-content: space-between; */
    width: 600/@rem;
  }
  .banner .main .copywriting .links a {
    display: block;
    width: 166/@rem;
    height: 46/@rem;
    line-height: 46/@rem;
    border-radius: 100/@rem;
    text-align: center;
    font-weight: 500;
    font-size: 20/@rem;
    margin-left:20/@rem;
  }
  .banner .main .copywriting .links a.invite {
    color: rgba(80, 104, 227, 1);
    background: rgb(29, 70, 53);
  }
  .banner .main .copywriting .links a.getsoon {
    color: #c8c8c8;
    background: #847c7c;
  }
  .banner .main .copywriting .links a.download-ios {
    color: rgba(80, 104, 227, 1);
    background: #fff;
  }
  .banner .main .copywriting .links a.download-android {
    color: #fff;
    background: rgba(80, 104, 227, 1);
  }
  .banner .main .copywriting .slogan {
    font-weight: 500;
    font-size: 42/@rem;
    color: #fff;
    line-height: 1.2;
  }
  .banner .main .vision {
    display: block;
    width: 500/@rem;
    position: absolute;
    top: 50%;
    right: -36/@rem;
    transform: translateY(-50%);
  }
   .countdown-protocol{
    margin-top:20px;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    margin-left:0;
  }
   .countdown-protocol p{
     font-size: 14px;
     color:#fff;
   }
   .countdown-protocol p >a{
     margin-left:10px;
     margin-right:10px;
     cursor: pointer;
     color:#70fec3;
   }
   .banner .main .c-announcement{
    width: 58%;
    position:absolute;
    height:40px;
    background: rgba(0, 0, 0, 0.5) url( '@{imgPath}/cement.png') 20px center  no-repeat;
    background-size:auto 60%;
    z-index: 999;
    top:20px;
    border-radius: 8px;
    display: flex;
    overflow: hidden;
  }
  .banner .main .c-announcement .c-announcement-cent{
    flex:1;
    line-height: 30px;
    padding:5px 10px 5px 60px;
    color:#fff;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 3px;
  }
  .banner .main .c-announcement .c-announcement-close{
    display: block;
    width:40px;
    background: url( '@{imgPath}/colse.png') center center  no-repeat;
    background-size:auto 30% ;
    cursor: pointer;
  }
}

/* 小型屏幕 */

@media only screen and (max-width: 1024px) {
  @rem: 37.5rem;

  .banner {
    position: relative;
    width: 100%;
    height: 924/@rem;
    background: url("@{imgPath}/banner.jpg") no-repeat center center ~"/" cover;
    &.fix-sm{
      height: 810/@rem;
    }
  }
  .banner .main {
    margin-top: 120/@rem;
  }
  .banner .main .copywriting {
    margin-top: 90/@rem;
  }
  .banner .main .copywriting .slogan {
    font-weight: 500;
    font-size: 22/@rem;
    color: #fff;
    text-align: center;
  }
  .banner .main .copywriting .des {
    font-size: 12/@rem;
    color: #fff;
    text-align: center;
  }
  .banner .main .copywriting .countdown {
    margin: 24/@rem auto;
    width: 270/@rem;
    height: 60/@rem;
    display: flex;
    justify-content: space-between;
    .item {
      .value {
        width: 78/3*2/@rem;
        height: 96/3*2/@rem;
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 8/@rem;
        font-size: 24/@rem;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .label {
        margin-top: 6/@rem;
        text-align: center;
        font-weight: 500;
        font-size: 14/@rem;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  .banner .main .copywriting .links {
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
    width: 178/@rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60/@rem;
  }
  .banner .main .copywriting .links a {
    display: block;
    width: 100%;
    height: 36/@rem;
    line-height: 36/@rem;
    border-radius: 100/@rem;
    text-align: center;
    font-weight: 500;
    font-size: 14/@rem;
    margin-top:15/@rem;
  }
  .banner .main .copywriting .links a:first-child{
    margin-top:0;
  }
  .banner .main .copywriting .links a.invite {
    color: rgba(80, 104, 227, 1);
    background: rgba(112, 254, 195, 1);
  }
  .banner .main .copywriting .links a.getsoon {
    color: #c8c8c8;
    background: #847c7c;
  }
  .banner .main .copywriting .links a.download-ios {
    color: rgba(80, 104, 227, 1);
    background: #fff;
  }
  .banner .main .copywriting .links a.download-android {
    color: #fff;
    background: rgba(80, 104, 227, 1);
  }
  .banner .main .vision {
    display: block;
    width: 330/@rem;
    margin-left: auto;
    margin-right: auto;
  }
   .banner .main .c-announcement{
    width: 90%;
    left:5%;
    position:absolute;
    height:30px;
    background: rgba(0, 0, 0, 0.5) url( '@{imgPath}/cement.png') 20px center  no-repeat;
    background-size:auto 60%;
    z-index: 999;
    top:80px;
    border-radius: 8px;
    display: flex;
    overflow: hidden;
  }
  .banner .main .c-announcement .c-announcement-cent{
    flex:1;
    line-height: 30px;
    padding:0px 0px 0px 50px;
    color:#fff;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 3px;
  }
  .banner .main .c-announcement .c-announcement-close{
    display: block;
    width:50px;
    background: url( '@{imgPath}/colse.png') center center  no-repeat;
    background-size:auto 30% ;
    cursor: pointer;
  }
   .countdown-protocol{
    width: 90%;
    margin:auto;
    margin-top:20px;
    display: flex;
    flex-wrap: wrap;
  }
   .countdown-protocol p{
     font-size: 12px;
     color:#fff;
   }
   .countdown-protocol p >a{
     margin-left:10px;
     margin-right:10px;
     cursor: pointer;
     color:#70fec3;
   }
}
</style>
