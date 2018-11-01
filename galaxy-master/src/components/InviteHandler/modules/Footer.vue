<template>
  <div class="footer section">
    <img class="logo" src="@/assets/img/m-logo.png" alt="">
    <div class="copyright">Copyright © 2018 Galaxy.One All rights reserved.</div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 751px) {
  @unit: 1px;

  .footer {
    margin-bottom: 108/@unit;
    .logo {
      display: block;
      width: 253/@unit;
      height: 75/@unit;
      margin: 0 auto 30/@unit;
    }
    .copyright {
      font-size: 18/@unit;
      color: #ffffff;
      text-align: center;
    }
  }
}


@media only screen and (max-width: 750px) {
  @unit: 70rem;

  .footer {
    margin-bottom: 108/@unit;
    .logo {
      display: block;
      width: 253/@unit;
      height: 75/@unit;
      margin: 0 auto 30/@unit;
    }
    .copyright {
      font-size: 18/@unit;
      color: #ffffff;
      text-align: center;
    }
  }
}
</style>
