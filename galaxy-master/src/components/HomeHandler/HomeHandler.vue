<template>

  <div class="wrapper">
    <Menu />
    <Banner />
    <About />
    <Sell />
    <System />
    <Dashboard />
    <Feature />
    <Partner />
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

export default {
  name: "home",
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
    Footer
  },
  beforeRouteEnter(to, from, next) {
    let router = getQuery('router');
    if(router){
      location.href = `?/#${router}`;
    }else{
      next();
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