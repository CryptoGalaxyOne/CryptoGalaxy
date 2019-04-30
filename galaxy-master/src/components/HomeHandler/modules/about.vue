<template>
  <!-- about start-->
  <div class="about section">
    <div id="about" class="hack-anchor"></div>

    <div class="main">
      <!--  <div class="what">
        <div class="text">
          <div class="title">{{$t("about.title")}}</div>
          <div class="des">{{$t("about.des")}}</div>
          <a href="https://www.youtube.com/watch?v=FIyxKihwLus" target="_blank" class="link">{{$t("about.video-label")}}</a>
        </div>
      </div>-->
      <div class="banner" v-if="bannerList.length >0">
        <el-carousel :interval="5000"  arrow="always">
          <el-carousel-item v-for="(item,index) in bannerList" :key="index">
            <img :src="item.url" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>

      <!--  <div class="how">
        <div class="text">
         <div class="count">{{$t("about.tips-before")}}
            <span style="color:#70FEC3;">4100</span> {{$t("about.tips-after")}}</div> 
        </div>
      </div>-->
      <div class="about-title">
        <p class="title">{{$t("marketPlace.text12")}}</p>
      </div>

      <div class="transaction-box" @click="$emit('setMenu',3)">
        <div class="item" v-for="(itme,index) in refpriceList" :key="index">
          <div class="loge">
            <div class="loge-img">
              <img :src="'/static/img/icon/'+itme.name+'.png'" alt>
            </div>
            <p class="name">{{itme.name}}</p>
          </div>
          <div class="assets-box">
            <div class="center">
              <div class="asstes">
                <div class="loge-img">
                  <img src="/static/img/icon/Gala.png" alt>
                </div>
                <p>{{(itme.gala).toFixed(4)}}</p>
                <!-- <span>Gala</span> -->
              </div>
              <div class="asstes">
                <div class="loge-img">
                  <img src="/static/img/icon/ZUSD.png" alt>
                </div>
                <p>{{(itme.zusd).toFixed(2)}}</p>
                <!--  <span>ZUSD</span> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-title">
        <p class="title">{{$t("marketPlace.text13")}}</p>
      </div>

      <div class="others">
        <div class="card" v-for="(item, index) in cards" :key="index">
          <img class="icon" :src="item.src">
          <div class="text">
            <div class="label">{{item.label}}</div>
            <div class="des">{{item.value}}</div>
          </div>
        </div>
      </div>

      <div class="DEX-box">
        <div class="left">
          <div class="description">
             <p class="title">{{$t("marketPlace.text14")}}</p>
              <p class="centen">
                {{$t("marketPlace.text15")}}
              </p>
              <p>
                {{$t("marketPlace.text16")}}
              </p>
          </div>
         <div class="dex-item">
            <div class="item">
                <div class="log-box">
                  <img src="/static/img/icon/ZeeChain_logoicon_1.png" alt="">
                </div>
                <p>{{$t("marketPlace.text17")}}</p>
            </div>
            <div class="item">
                <div class="log-box">
                  <img src="/static/img/icon/ZeeChain_logoicon_2.png" alt="">
                </div>
                <p>{{$t("marketPlace.text18")}}</p>
            </div>
             <div class="item">
                <div class="log-box">
                  <img src="/static/img/icon/ZeeChain_logoicon_3.png" alt="">
                </div>
                <p>{{$t("marketPlace.text19")}}</p>
            </div>
         </div>
        </div>
        <div class="right">
          <img src="/static/img/icon/CG_DEX.png" alt="">
        </div>
      </div>

    </div>
  </div>
  <!-- about end -->
</template>

<script>
import jstracker from "jstracker";
jstracker.init({
  report: errorLogs => {
    alert("about");
    alert(JSON.stringify(errorLogs));
  }
});

export default {
  name: "About",
  data() {
    return {
      refpriceList: [],
      cards: [
        {
          src: "/static/img/icon/Planet.png",
          label: this.$t("about.cards[0].label"),
          value: this.$t("about.cards[0].value")
        },
        {
          src: "/static/img/icon/Digger.png",
          label: this.$t("about.cards[1].label"),
          value: this.$t("about.cards[1].value")
        },
        {
          src: "/static/img/icon/Gold.png",
          label: this.$t("about.cards[2].label"),
          value: this.$t("about.cards[2].value")
        },
        {
          src: "/static/img/icon/CG_elves.png",
          label: this.$t("about.cards[3].label"),
          value: this.$t("about.cards[3].value")
        }
      ],
      bannerList:[],
      bannerListCn:[
        {url:'/static/img/icon/banner-01.png'},
        {url:'/static/img/icon/banner-02.jpg'},
      ],
      bannerListEn:[
        {url:'/static/img/icon/banner-en-01.jpg'},
        {url:'/static/img/icon/banner-en-02.jpg'},
      ],

    };
  },
  computed: {

    refpriceData() {
      return this.$store.state.refpriceList;
    },
  },
  watch:{
     refpriceData(){
         let a1 = this.refpriceData.machine;
         this.refpriceList = a1.concat(this.refpriceData.planet,this.refpriceData.mineral[0]);
         console.log(this.refpriceLis);
     }
 },
  mounted(){
    this.$store.dispatch("getRefprice");
    this.bannerList = [];
    if(this.$i18n.locale == 'cn'){
      this.bannerList = this.bannerListCn;
    }else{
      this.bannerList = this.bannerListEn;
    }
  },
};
</script>
<style lang="less">
@imgPath: "../../../assets/img";

@media only screen and (min-width: 1280px) {
  .hack-anchor {
    width: 0px;
    height: 0px;
  }
  .about {
    padding-bottom: 480px;
    position: relative;
    background: url("@{imgPath}/background_part1.png") no-repeat 0 bottom ~"/" 900px,
      url("@{imgPath}/background_part2.png") no-repeat right 636px ~"/" 720px,
      #2c2560;
  }
  .about .main {
    width: 1068px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 999;
  }
  .about .what {
    width: 1068px;
    height: 432px;
    background: url("@{imgPath}/planets_pic.png") no-repeat 20px center ~"/" 502px,
      linear-gradient(138deg, #3a1b6f 0%, #5068e3 100%);
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: -60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .about .what .text {
    width: 512px;
    margin-left: auto;
    margin-right: 46px;
  }
  .about .what .text .title {
    font-weight: 500;
    font-size: 26px;
    color: #70fec3;
    line-height: 36px;
  }
  .about .what .text .des {
    font-size: 16px;
    color: #ebf2fc;
    line-height: 24px;
    margin-top: 24px;
    margin-bottom: 40px;
  }
  .about .what .text .link {
    font-weight: 500;
    font-size: 18px;
    color: #fafffd;
    display: flex;
    align-items: center;
  }
  .about .what .text .link::before {
    content: "";
    display: block;
    width: 28px;
    height: 28px;
    background: url("@{imgPath}/icon-video.png") no-repeat center center ~"/" 100%;
    margin-right: 16px;
  }

  .about .banner {
    width: 1068px;
    height: 432px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: -60px;
    overflow: hidden;
    .el-carousel__container{
      height:432px;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 432px;
    margin: 0;
  }


  .about .how {
    display: flex;
    padding: 0 10px 50px 10px;
    justify-content: space-around;
    align-items: center;
  }
  .about .how .text .count {
    font-weight: 300;
    font-size: 24px;
    color: #ffffff;
    line-height: 38px;
    width: 840px;
  }
  .about .how .text .launch {
    font-size: 20px;
    color: #fff;
  }
  .about .how .text .name {
    color: #70fec3;
  }
  .about .how .text .launch .datetime {
    font-size: 20px;
    color: #ffffff;
    margin-left: 12px;
  }
  .about .how .icon {
    width: 130px;
    height: 45px;
    border: 2px solid #50e3c2;
    border-radius: 100px;
    font-size: 20px;
    color: #70fec3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about .others {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    z-index: 999;
    position: relative;
  }
  .about .others .card {
    width: 520px;
    height: 150px;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 28px;
  }
  .about .others .card .icon {
    display: block;
    width: 94px;
    height: 94px;
    margin-right: 30px;
  }
  .about .others .card .text .label {
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    line-height: 30px;
  }
  .about .others .card .text .des {
    font-size: 14px;
    line-height: 20px;
    color: #dae0ff;
    width: 330px;
  }

 .about .banner {
    width: 1068px;
    height: 432px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: -60px;
    overflow: hidden;
    .el-carousel__container{
      height:432px;
       .el-carousel__item{
        img{
          width:100%;
        }
      }
    }
  }
   .about .about-title {
    width: 100%;
    position: relative;
    padding: 0 10px 20px 0;
    .title {
      font-weight: 300;
      font-size: 24px;
      color: #ffffff;
      line-height: 38px;
    }
  }

  .transaction-box {
    display: flex;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 10px;
    padding: 33px 20px;
    margin-bottom: 70px;
    cursor: pointer;
    .item {
      position: relative;
      width: 25%;
      display: flex;
      .loge {
        width: 80px;
        .loge-img {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 60px;
          }
        }
        .name {
          width: 100%;
          font-size: 14px;
          color: rgba(176, 213, 255, 0.3);
          text-align: center;
        }
      }
      .assets-box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .center {
          margin-left: 15px;
          .asstes {
            display: flex;
            /*   height: 40px; */
            .loge-img {
              width: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 100%;
              }
            }
            p {
              margin-left: 10px;
              font-size: 16px;
              color: #b0d5ff;
              line-height: 30px;
            }
            span {
              display: block;
              margin-left: 10px;
              color: rgba(176, 213, 255, 0.3);
              line-height: 30px;
            }
          }
        }
      }
    }
  }
  .about .DEX-box{
    position: relative;
    width:100%;
    display: flex;
    .left{
      flex:1;
      .description{
        margin-top:80px;
        margin-block-end: 50px;
        p{
          font-size:14px;
          color:#fff;
          line-height: 30px;
        }
        .title{
          font-weight: 300;
          font-size: 24px;
          color: #ffffff;
          line-height: 38px;
          margin-bottom: 20px;
        }

      }
      .dex-item{
        display: flex;
        .item{
          width: 160px;
          margin-right:20px;
          .log-box{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          p{
            text-align: center;
            font-size:14px;
            padding:0 6px;
            color:#fff;
            line-height: 26px;
          }
        }
      }
    }
    .right{
      width:520px;
      img{
        width:100%;
      }
    }
  }
}

@media only screen and (max-width: 1279px) and (min-width: 1025px) {
  @rem: 138rem;

  .hack-anchor {
    width: 0px;
    height: 0px;
  }
  .about {
    padding-bottom: 480 / @rem;
    position: relative;
    background: url("@{imgPath}/background_part1.png") no-repeat 0 bottom ~"/" 900 /
        @rem,
      url("@{imgPath}/background_part2.png") no-repeat right 636 / @rem ~"/" 720 /
        @rem,
      #2c2560;
  }
  .about .main {
    width: 1068 / @rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 999;
  }
  .about .what {
    width: 1068 / @rem;
    height: 432 / @rem;
    background: url("@{imgPath}/planets_pic.png") no-repeat 20 / @rem center ~"/"
        502 / @rem,
      linear-gradient(138deg, #3a1b6f 0%, #5068e3 100%);
    border-radius: 10 / @rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: -60 / @rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .about .what .text {
    width: 512 / @rem;
    margin-left: auto;
    margin-right: 46 / @rem;
  }
  .about .what .text .title {
    font-weight: 500;
    font-size: 26 / @rem;
    color: #70fec3;
    line-height: 36 / @rem;
  }
  .about .what .text .des {
    font-size: 16 / @rem;
    color: #ebf2fc;
    line-height: 24 / @rem;
    margin-top: 24 / @rem;
    margin-bottom: 40 / @rem;
  }
  .about .what .text .link {
    font-weight: 500;
    font-size: 18 / @rem;
    color: #fafffd;
    display: flex;
    align-items: center;
  }
  .about .what .text .link::before {
    content: "";
    display: block;
    width: 28 / @rem;
    height: 28 / @rem;
    background: url("@{imgPath}/icon-video.png") no-repeat center center ~"/" 100%;
    margin-right: 16 / @rem;
  }
  .about .how {
    display: flex;
    padding: 0 10 / @rem 50 / @rem 10 / @rem;
    justify-content: space-around;
    align-items: center;
  }
  .about .how .text .count {
    font-weight: 300;
    font-size: 24 / @rem;
    color: #ffffff;
    line-height: 38 / @rem;
    width: 840 / @rem;
  }
  .about .how .text .launch {
    font-size: 20 / @rem;
    color: #fff;
  }
  .about .how .text .name {
    color: #70fec3;
  }
  .about .how .text .launch .datetime {
    font-size: 20 / @rem;
    color: #ffffff;
    margin-left: 12 / @rem;
  }
  .about .how .icon {
    width: 130 / @rem;
    height: 45 / @rem;
    border: 2 / @rem solid #50e3c2;
    border-radius: 100 / @rem;
    font-size: 20 / @rem;
    color: #70fec3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about .others {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    z-index: 999;
    position: relative;
  }
  .about .others .card {
    width: 520 / @rem;
    height: 150 / @rem;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 10 / @rem;
    display: flex;
    align-items: center;
    padding: 20 / @rem;
    margin-bottom: 28 / @rem;
  }
  .about .others .card .icon {
    display: block;
    width: 94 / @rem;
    height: 94 / @rem;
    margin-right: 30 / @rem;
  }
  .about .others .card .text .label {
    font-weight: 500;
    font-size: 16 / @rem;
    color: #ffffff;
    line-height: 30 / @rem;
  }
  .about .others .card .text .des {
    font-size: 14 / @rem;
    line-height: 20 / @rem;
    color: #dae0ff;
    width: 330 / @rem;
  }

  .about .banner {
    width: 864px;
    height: 350px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: -60px;
    overflow: hidden;
    .el-carousel__container{
      height:350px;
      .el-carousel__item{
        img{
          width:100%;
        }
      }
    }
  }
   .about .about-title {
    width: 100%;
    position: relative;
    padding: 0 10px 20px 0;
    .title {
      font-weight: 300;
      font-size: 20px;
      color: #ffffff;
      line-height: 38px;
    }
  }

  .transaction-box {
    display: flex;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 10px;
    padding: 33px 20px;
    margin-bottom: 70px;
    cursor: pointer;
    .item {
      position: relative;
      width: 25%;
      display: flex;
      .loge {
        width: 80px;
        .loge-img {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 60px;
          }
        }
        .name {
          width: 100%;
          font-size: 14px;
          color: rgba(176, 213, 255, 0.3);
          text-align: center;
        }
      }
      .assets-box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .center {
          margin-left: 15px;
          .asstes {
            display: flex;
            /*   height: 40px; */
            .loge-img {
              width: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 100%;
              }
            }
            p {
              margin-left: 10px;
              font-size: 16px;
              color: #b0d5ff;
              line-height: 30px;
            }
            span {
              display: block;
              margin-left: 10px;
              color: rgba(176, 213, 255, 0.3);
              line-height: 30px;
            }
          }
        }
      }
    }
  }
  .about .DEX-box{
    position: relative;
    width:100%;
    display: flex;
    .left{
      flex:1;
      .description{
        margin-top:60px;
        margin-bottom: 30px;
        p{
          font-size:12px;
          color:#fff;
          line-height: 30px;
        }
        .title{
          font-weight: 300;
          font-size: 20px;
          color: #ffffff;
          line-height: 38px;
          margin-bottom: 20px;
        }

      }
      .dex-item{
        display: flex;
        .item{
          width: 130px;
          margin-right:20px;
          .log-box{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          p{
            text-align: center;
            font-size:12px;
            padding:0 6px;
            color:#fff;
            line-height: 20px;
          }
        }
      }
    }
    .right{
      width:426px;
      img{
        width:100%;
      }
    }
  }
}

/* 小型屏幕 */

@media only screen and (max-width: 1024px) {
  @rem: 37.5rem;

  .about {
    padding-bottom: 2.8rem;
    background: #2c2560 url("@{imgPath}/part2_bgcomp.png") no-repeat center
      25rem ~"/" 10rem;
  }
  .about .main {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .about .what {
    width: 320 / @rem;
    height: 468 / @rem;
    background: url("@{imgPath}/planets_pic.png") no-repeat center -30 / @rem ~"/"
        340 / @rem 340 / @rem,
      linear-gradient(138deg, #3a1b6f 0%, #5068e3 100%);
    border-radius: 10 / @rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: -60 / @rem;
  }
  .about .what .text {
    width: 100%;
    position: relative;
    top: 200 / @rem;
  }
  .about .what .text .title {
    font-weight: 500;
    line-height: 36 / @rem;
    font-size: 16 / @rem;
    color: #70fec3;
    padding-left: 45 / @rem;
  }
  .about .what .text .des {
    font-size: 12 / @rem;
    color: #ebf2fc;
    line-height: 16 / @rem;
    margin-top: 12 / @rem;
    margin-bottom: 20 / @rem;
    padding-left: 45 / @rem;
    padding-right: 15 / @rem;
  }
  .about .what .text .link {
    font-weight: 500;
    font-size: 14 / @rem;
    color: #fafffd;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
  .about .what .text .link::before {
    content: "";
    display: block;
    width: 20 / @rem;
    height: 20 / @rem;
    background: url("@{imgPath}/icon-video.png") no-repeat center center ~"/" 100%;
    margin-right: 8 / @rem;
  }
  .about .how {
    margin: -24 / @rem 24 / @rem 50 / @rem 24 / @rem;
    position: relative;
  }
  .about .how .text .count {
    font-weight: 500;
    font-size: 16 / @rem;
    color: #ffffff;
    line-height: 26 / @rem;
  }
  .about .how .text .launch {
    font-size: 12 / @rem;
    color: #fff;
    margin-top: 18 / @rem;
  }
  .about .how .text .name {
    color: #70fec3;
  }
  .about .how .text .launch .datetime {
    display: block;
    font-size: 12 / @rem;
    color: #ffffff;
  }
  .about .how .icon {
    width: 86 / @rem;
    height: 30 / @rem;
    border: 1px solid #50e3c2;
    border-radius: 100 / @rem;
    font-size: 14 / @rem;
    color: #70fec3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 88 / @rem;
    right: 12 / @rem;
  }
  .about .others {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .about .others .card {
    height: 110 / @rem;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 10 / @rem;
    display: flex;
    align-items: center;
    padding: 12 / @rem;
    margin: 6 / @rem 24 / @rem;
  }
  .about .others .card .icon {
    display: block;
    width: 45 / @rem;
    height: 45 / @rem;
    margin-right: 16 / @rem;
  }
  .about .others .card .text {
    width: 240 / @rem;
  }
  .about .others .card .text .label {
    font-weight: 500;
    font-size: 14 / @rem;
    color: #ffffff;
    line-height: 18 / @rem;
  }
  .about .others .card .text .des {
    font-size: 12 / @rem;
    color: #dae0ff;
    line-height: 16 / @rem;
    margin-top: 6 / @rem;
  }

    
  .about .banner {
   width:327px;
  /*     height: 432px;
    background: url("@{imgPath}/planets_pic.png") no-repeat 20px center ~"/" 502px,
      linear-gradient(138deg, #3a1b6f 0%, #5068e3 100%); */
    height: 132px;
    border-radius: 10 / @rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: -60 / @rem;
    overflow: hidden;
    .el-carousel__container{
      height:132px;
      .el-carousel__item{
        img{
          width:100%;
        }
      }
    }
  }
   .about .about-title {
    width: 327px;
    margin:auto;
    position: relative;
    padding: 0 10 / @rem 20/ @rem 0;
    .title {
      font-weight: 300;
      font-size: 20/ @rem;
      color: #ffffff;
      line-height: 38/ @rem;
      text-align: center;
    }
  }

  .transaction-box {
    display: flex;
    background: rgba(80, 104, 227, 0.3);
    border: 1px solid #5068e3;
    border-radius: 10px;
    padding:0 20px;
    width:327px;
    min-height: 153px;
    margin:auto;
    flex-wrap: wrap;
    margin-bottom: 30 / @rem;
    cursor: pointer;
    .item {
      position: relative;
      width: 100%;
      display: flex;
      border-bottom: 1px solid rgba(80, 104, 227, 0.3);
      .loge {
        width: 80px;
        .loge-img {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 60px;
          }
        }
        .name {
          width: 100%;
          font-size: 14px;
          color: rgba(176, 213, 255, 0.3);
          text-align: center;
        }
      }
      .assets-box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .center {
          margin-left: 15px;
          .asstes {
            display: flex;
            /*   height: 40px; */
            .loge-img {
              width: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 100%;
              }
            }
            p {
              margin-left: 10px;
              font-size: 14px;
              color: #b0d5ff;
              line-height: 30px;
            }
            span {
              display: block;
              margin-left: 10px;
              color: rgba(176, 213, 255, 0.3);
              line-height: 30px;
            }
          }
        }
      }
      &:last-child{
        border-bottom:none;
      }
    }
  }
  .about .DEX-box{
    position: relative;
    width:327px;
    margin:auto;
    display: block;
    .left{
      .description{
        margin-top:40px;
        margin-bottom: 15px;
        p{
          font-size:12px;
          color:#fff;
          line-height: 26px;
          text-align: center;
        }
        .title{
          font-weight: 300;
          font-size: 20px;
          color: #ffffff;
          line-height: 38px;
          margin-bottom: 30px;
        }

      }
      .dex-item{
        display: flex;
        .item{
          width: 33%;
          margin-right:10px;
          .log-box{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width:80%;
            }
          }
          p{
            text-align: center;
            font-size:12px;
            padding:0 6px;
            color:#fff;
            line-height: 20px;
          }
        }
      }
    }
    .right{
      width:100%;
      img{
        width:100%;
      }
    }
  }
}
</style>
