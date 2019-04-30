<template>
    <div class="aboutcg">
        <div class="market-box">
            <div class="aboutcg-centen">
                <img src="/static/img/about/c1.jpg" alt="">
                <p><!-- {{$t("marketPlace.text20")}} -->
                    <i18n path="marketPlace.text20" tag="a">
                        <a place="link" href="https://zeescan.io/transaction" target="_blank">ZeeScan</a>
                    </i18n>
                </p>
                <img src="/static/img/about/c2.jpg" alt="">
                <p>{{$t("marketPlace.text21")}}</p>
                <img src="/static/img/about/c3.jpg" alt="">
                <img src="/static/img/about/c4.jpg" alt="">
                <p>{{$t("marketPlace.text22")}}</p>
                <p class="title">{{$t("marketPlace.text23")}}</p>
                <img src="/static/img/about/c5.jpg" alt="">
                <p class="title">{{$t("marketPlace.text24")}}</p>
                <img src="/static/img/about/c6.jpg" alt="">
                <p class="title">{{$t("marketPlace.text25")}}</p>
                <img src="/static/img/about/c7.jpg" alt="">
                <p class="title">{{$t("marketPlace.text27")}}</p>
                <img src="/static/img/about/c8.jpg" alt="">
                <p class="title">{{$t("marketPlace.text26")}}</p>
                <img src="/static/img/about/c9.jpg" alt="">
                <img src="/static/img/about/c10.jpg" alt="">
                <img src="/static/img/about/c11.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.aboutcg{
  position: relative;
  width: 100%;
  background: #241b67;
  padding-top: 100px;
  overflow: hidden;
  .market-box {
    background: #2e2a86;
    position: relative;
    min-height:calc(100vh - 497px) ;
    margin:0;
    box-sizing: border-box;
    overflow: hidden;
    .aboutcg-centen{
        width:1200px;
        padding: 20px 0;   
        margin:0 auto;
        overflow: hidden;
        img{
            width:100%;
            display: block;
            margin-top:20px;
            margin-block-end: 20px;
        }
        p{
            font-size: 16px;
            color: #fff;
            &.title{
                text-align: center;
                font-size: 24px;
                margin-top:30px;
            }
        }
    }
    }
}
@media only screen and (max-width: 1279px) and (min-width: 1025px) {
    .aboutcg{
  position: relative;
  width: 100%;
  background: #241b67;
  padding-top: 100px;
  overflow: hidden;
  .market-box {
    background: #2e2a86;
    position: relative;
    min-height:calc(100vh - 497px) ;
    margin:0;
    box-sizing: border-box;
    overflow: hidden;
    .aboutcg-centen{
        width:1025px;
        padding: 20px 0;   
        margin:0 auto;
        overflow: hidden;
        img{
            width:100%;
            display: block;
            margin-top:20px;
            margin-block-end: 20px;
        }
        p{
            font-size: 14px;
            color: #fff;
          
        }
    }
    }
}
}
@media only screen and (max-width: 1024px) {
    .aboutcg{
  position: relative;
  width: 100%;
  background: #241b67;
  padding-top: 100px;
  overflow: hidden;
  .market-box {
    background: #2e2a86;
    position: relative;
    min-height:calc(100vh - 497px) ;
    margin:0;
    box-sizing: border-box;
    overflow: hidden;
    .aboutcg-centen{
        width:90%;
        padding: 10px 0;   
        margin:0 auto;
        overflow: hidden;
        img{
            width:100%;
            display: block;
            margin-top:10px;
            margin-block-end: 10px;
        }
        p{
            font-size: 12px;
            color: #fff;
             &.title{
                text-align: center;
                font-size: 16px;
                margin-top:10px;
            }
        }
    }
    }
}
}
</style>
