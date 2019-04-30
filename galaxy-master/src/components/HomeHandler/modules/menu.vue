<template>
  <div class="menu">
    <div class="main">
      <a href="##" class="logo">galaxy</a>
      <div hidden-in-lg class="trigger" @click="openMenu"></div>
      <nav class="nav" :class="{open: trigger}" @click="closeMenu">
        <a class="item" :class="{'active':activeIndex == 'home'}" href="##" @click="scrollTo('home')">{{$t("menu.home")}}</a>
        <a class="item" :class="{'active':activeIndex == 'about-us'}" href="##" @click="scrollTo('about-us')">{{$t("menu.about-us")}}</a>
        <a class="item" :class="{'active':activeIndex == 'market-place'}" href="##" @click="scrollTo('market-place')">{{$t("menu.market-place")}}</a>
    <!--     <a class="item" :class="{'active':activeIndex == 'community'}" href="##" @click="scrollTo('community')">{{$t("menu.community")}}</a>
        <a class="item" :class="{'active':activeIndex == 'introduction'}" href="##" @click="scrollTo('introduction')">{{$t("menu.introduction")}}</a> -->
<!--         <a class="item" :class="{'active':activeIndex == 'introduction'}" href="##" @click="scrollTo('introduction')">{{$t("menu.introduction")}}</a>
 --><!--         <a class="item" :class="{'active':activeIndex == 'about'}" href="javascript:;" @click="scrollTo('about')">{{$t("menu.about")}}</a>
        <a class="item" :class="{'active':activeIndex == 'gala'}" href="javascript:;" @click="scrollTo('gala')">{{$t("menu.gala")}}</a>
        <a class="item" :class="{'active':activeIndex == 'feature'}" href="javascript:;" @click="scrollTo('feature')">{{$t("menu.feature")}}</a> -->
        <a class="item" :class="{'active':activeIndex == 'faq'}" @click="scrollTo('faq')" >{{$t("menu.faq")}}</a>
        <!-- <a class="item" href="http://arting365.com/galaxy/ticket" target="_blank">{{$t("menu.roadshow")}}</a> -->
        <a class="item" :class="{'active':activeIndex == 'quick'}" @click="scrollTo('quick')" >{{$t("menu.quick")}}</a>
        <a class="i18n" href="javascript:;">
          <i hidden-in-sm class="icon" :class="flag"></i>
          <div class="icons">
            <i class="icon en" @click="i18n('en')"></i>
            <i class="icon cn" @click="i18n('cn')"></i>
          </div>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>


import jstracker from 'jstracker'
jstracker.init({
  report: (errorLogs) => {
    //alert('menu');
    //alert(JSON.stringify(errorLogs));
  }
});

import { getQuery } from "@/utils";
// import smoothscroll from "smoothscroll-polyfill";
// smoothscroll.polyfill();
export default {
  name: "Menu",
  data() {
    return {
      trigger: false,
      timer: 0,
      flag: getQuery("lan") || "en",
      activeIndex:'home',
    };
  },
  mounted() {
    document.querySelector(".i18n").addEventListener("mouseenter", () => {
      if (document.documentElement.getBoundingClientRect().width <= 1024) {
        clearTimeout(this.timer);
        return;
      }
      document.querySelector(".i18n .icons").style.display = "block";
      clearTimeout(this.timer);
    });

    document.querySelector(".i18n").addEventListener("mouseleave", () => {
      if (document.documentElement.getBoundingClientRect().width <= 1024) {
        clearTimeout(this.timer);
        return;
      }
      this.timer = setTimeout(() => {
        document.querySelector(".i18n .icons").style.display = "none";
      }, 500);
    });
  },
  methods: {
    scrollTo(anchor) {
      if(this.activeIndex == anchor) return;
      this.activeIndex = anchor;
      
      // document.querySelector(`#${anchor}`).scrollIntoView({
        // behavior: "smooth"
      // });
      switch(anchor){
        case 'home':
          //this.$router.push({path:'/'});
          this.$emit("setMenu",1);
          break;
        case 'about-us':
          this.$emit("setMenu",2);
          //this.$router.push({path:'/AboutUs'});
          break;
        case 'market-place':
          this.$emit("setMenu",3);
          //this.$router.push({path:'/MarketPlace'});
          //location.href="/MarketPlace";
          break;
        case 'community':
          this.$emit("setMenu",4);
          //this.$router.push({path:'/Community'});
          break;
        case 'introduction':
          this.$emit("setMenu",5);
          //this.$router.push({path:'/Introduction'});
          break;
        case 'faq':
          window.open('https://medium.com/@zeepin/crypto-galaxy-faq-2c47a6ed5310');
          break;
        case 'quick':
          window.open('https://xzusd.com/payment');
          break;
        default:
        //location.hash = `#${anchor}`;
      }
    },
    openMenu() {
      this.trigger = true;
      document.querySelector("body").style.overflow = "hidden";
    },
    closeMenu() {
      this.trigger = false;
      document.querySelector("body").style.overflow = "unset";
    },
    i18n(lan) {
      window.location.href = `?lan=${lan}`;
    }
  }
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 1280px) {
  .menu {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
    z-index: 99;
  }
  .menu .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu .logo {
    display: block;
    width: 200px;
    height: 48.6px;
    background: url("@{imgPath}/logo.svg") no-repeat center center ~"/" 100% 100%;
    text-indent: -99999em;
  }
  .menu .nav {
    display: flex;
    align-items: center;
  }
  .menu .nav a {
    color: #fff;
    font-size: 18px;
  }
  .menu .nav a.active {
    color: #70fec3;
    border-bottom:1px solid #70fec3;
  }
  .menu .nav a:hover {
    color: #fff;
    border-bottom:1px solid #fff;
    cursor: pointer;
  }
  .menu .nav a:hover:last-child,
  .menu .nav a:active:last-child{
    border:none;
  }
  .menu .nav .item {
    margin-left: 36px;
  }
  .menu .i18n {
    display: flex;
    align-items: center;
    margin-left: 60px;
    position: relative;
  }
  .menu .i18n::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border: 6px solid transparent;
    border-top-color: #fff;
    margin-left: 6px;
    transform: translateY(25%);
  }
  .menu .i18n .icon {
    display: block;
    width: 40px;
    height: 29px;
  }
  .menu .i18n .icon.cn {
    background: url("@{imgPath}/i18n_cn.svg") no-repeat center center / 100%;
  }
  .menu .i18n .icon.en {
    background: url("@{imgPath}/i18n_en.png") no-repeat center center / 100%;
  }
  .menu .i18n .icons {
    display: none;
    position: absolute;
    top: 46px;
    right: 6px;
    background: #fff;
    border-radius: 8px;
    &::before {
      content: "";
      width: 12px;
      height: 12px;
      transform: translate(-50%, -50%) rotate(45deg);
      position: absolute;
      top: 0;
      left: 50%;
      background: #fff;
    }
    .icon {
      margin: 12px;
    }
  }
}

@media only screen and (max-width: 1279px) and (min-width: 1025px) {
  @rem: 138rem;

  .menu {
    position: absolute;
    top: 60/@rem;
    left: 50%;
    transform: translateX(-50%);
    width: 1200/@rem;
    z-index: 99;
  }
  .menu .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu .logo {
    display: block;
    width: 200/@rem;
    height: 48.6/@rem;
    background: url("@{imgPath}/logo.svg") no-repeat center center ~"/" 100% 100%;
    text-indent: -99999em;
  }
  .menu .nav {
    display: flex;
    align-items: center;
  }
  .menu .nav a {
    color: #fff;
    font-size: 18/@rem;
  }
   .menu .nav a.active {
    color: #70fec3;
    border-bottom:1px solid #70fec3;
  }
  .menu .nav a:hover {
    color: #fff;
    border-bottom:1px solid #fff;
    cursor: pointer;
  }
  .menu .nav a:hover:last-child,
  .menu .nav a:active:last-child{
    border:none;
  }
  .menu .nav .item {
    margin-left: 60/@rem;
  }
  .menu .i18n {
    display: flex;
    align-items: center;
    margin-left: 60/@rem;
    position: relative;
  }
  .menu .i18n::after {
    content: "";
    display: block;
    width: 6/@rem;
    height: 6/@rem;
    border: 6/@rem solid transparent;
    border-top-color: #fff;
    margin-left: 6/@rem;
    transform: translateY(25%);
  }
  .menu .i18n .icon {
    display: block;
    width: 40/@rem;
    height: 29/@rem;
  }
  .menu .i18n .icon.cn {
    background: url("@{imgPath}/i18n_cn.svg") no-repeat center center / 100%;
  }
  .menu .i18n .icon.en {
    background: url("@{imgPath}/i18n_en.png") no-repeat center center / 100%;
  }
  .menu .i18n .icons {
    display: none;
    position: absolute;
    top: 46/@rem;
    right: 6/@rem;
    background: #fff;
    border-radius: 8/@rem;
    &::before {
      content: "";
      width: 12/@rem;
      height: 12/@rem;
      transform: translate(-50%, -50%) rotate(45deg);
      position: absolute;
      top: 0;
      left: 50%;
      background: #fff;
    }
    .icon {
      margin: 12/@rem;
    }
  }
}

/* 小型屏幕 */

@media only screen and (max-width: 1024px) {
  @rem: 37.5rem;

  .menu {
    position: absolute;
    top: 24/@rem;
    left: 0;
    width: 100%;
    height: 60/@rem;
    z-index: 99;
  }
  .menu .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 24/@rem;
    margin-right: 24/@rem;
  }
  .menu .logo {
    display: block;
    width: 150/@rem;
    height: 36.5/@rem;
    background: url("@{imgPath}/logo.svg") no-repeat center center / 100%;
    text-indent: -99999em;
  }
  .menu .trigger {
    width: 24/@rem;
    height: 24/@rem;
    background: url("@{imgPath}/trigger.svg") no-repeat center center / 100%;
  }
  .menu .nav {
    display: flex;
    align-items: center;
    display: none;
    &.open {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 24/@rem;
      background: rgba(0, 0, 0, 0.7);
    }
  }
  .menu .nav a {
    color: #fff;
    font-size: 18/@rem;
    display: block;
  }
  .menu .nav a.active {
    color: #70fec3;
    border-bottom:1px solid #70fec3;
  }
  .menu .nav a:hover {
    color: #fff;
    border-bottom:1px solid #fff;
    cursor: pointer;
  }
  .menu .nav a:hover:last-child,
  .menu .nav a:active:last-child{
    border:none;
    
  }
  .menu .nav .item {
    line-height: 60/@rem;
    text-align: center;
  }
  .menu .i18n {
    display: flex;
    align-items: center;
  }
  .menu .i18n .icon {
    display: block;
    width: 40/@rem;
    height: 29/@rem;
    margin-left: auto;
    margin-right: auto;
  }
  .menu .i18n .icon.cn {
    background: url("@{imgPath}/i18n_cn.svg") no-repeat center center / 100%;
  }
  .menu .i18n .icon.en {
    background: url("@{imgPath}/i18n_en.png") no-repeat center center / 100%;
  }

  .menu .icons {
    display: flex;
    width: 4rem;
    margin: 0.4rem auto;
  }
}
</style>
