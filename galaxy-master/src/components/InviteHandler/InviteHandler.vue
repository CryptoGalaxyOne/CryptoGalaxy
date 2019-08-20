<template>

  <div class="wrapper">
    <Header />
    <Card />
    <Download />
    <About />
    <What />
    <DoWhat />
    <Footer />

  </div>

</template>
<script>
import Header from "./modules/Header";
import Card from "./modules/Card";
import Download from "./modules/Download";
import About from "./modules/About";
import What from "./modules/What";
import DoWhat from "./modules/DoWhat";
import Footer from "./modules/Footer";

export default {
  components: {
    Header,
    Card,
    Download,
    About,
    What,
    DoWhat,
    Footer
  },
  data(){
    return {
      type: this.$route.params.type || 1
    }
  },
  created(){
    console.log( this.type );
  }
};
</script>

<style lang="less">
body {
  background: #2b2660;
}
</style>

<style lang="less" scoped>
@media only screen and (min-width: 751px) {
  @unit: 1px;
  .wrapper {
    width: 100%;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 35/@unit;
    padding-right: 35/@unit;
    &::before,
    &::after {
      content: "";
      display: table;
    }
  }
}

@media only screen and (max-width: 750px) {
  @unit: 70rem;
  .wrapper {
    width: 10rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 35/@unit;
    padding-right: 35/@unit;
    &::before,
    &::after {
      content: "";
      display: table;
    }
  }
}
</style>
