<template>

  <div class="wrapper">
    <Menu @setMenu="setMenu"/>
    <Banner v-if="menuIndex==1"/>
    <About  v-if="menuIndex==1"  @setMenu="setMenu" />
    <Sell  v-if="menuIndex==1"/>
    <System  v-if="menuIndex==1"/>
    <Dashboard  v-if="menuIndex==1"/>
    <Feature  v-if="menuIndex==1"/>
    <Partner  v-if="menuIndex==1"/>
    <MarketPlace v-if="menuIndex==3"/>
    <AboutCG v-if="menuIndex==2"/>
    <Footer />
  </div>

</template>

<script>

import jstracker from 'jstracker'
jstracker.init({
  report: (errorLogs) => {
    console.warn(errorLogs);
  }
});

import Menu from "./modules/menu";
import Banner from "./modules/banner";
import About from "./modules/about";
import Sell from "./modules/sell";
import System from "./modules/system";
import Dashboard from "./modules/dashboard";
import Feature from "./modules/feature";
import Apply from "./modules/apply";
import Partner from "./modules/partner";
import Footer from "./modules/footer";
//market place
import MarketPlace from "./modules/marketPlace";
//about CG
import AboutCG from "./modules/aboutCG";
export default {
  name: "home",
  data(){
    return{
      menuIndex:1, //1:home  2: about CG 3:market place  4:community 5:introduction
    }
  },
  components: {
    Menu,
    Banner,
    About,
    Sell,
    System,
    Dashboard,
    Feature,
    Apply,
    Partner,
    Footer,
    MarketPlace,
    AboutCG
  },
  /* beforeRouteEnter(to, from, next) {
    let router = getQuery('router');
    if(router){
      location.href = `?/#${router}`;
    }else{
      next();
    }
  }, */
  methods:{
    setMenu(index){
      this.menuIndex = index;
    }
  }
};

function getQuery(key) {
  var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
</script>