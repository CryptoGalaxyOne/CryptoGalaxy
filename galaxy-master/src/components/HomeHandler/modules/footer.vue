<template>

  <!-- footer start-->
  <div class="footer section">
    <img class="logo" src="@/assets/img/footer-logo.png">
    <div class="social">
      <a class="twitter" target="_blank" href="https://twitter.com/ZeepinChain"></a>
      <a class="telegram" target="_blank" href="https://t.me/CryptoGalaxyOne"></a>
      <a class="reddit" target="_blank" href="https://www.reddit.com/r/ZEEPIN/"></a>
    </div>
    <div class="link">
      <a href="##">About Galaxy</a>
      <a href="##">Blog</a>
      <a href="##">Terms of use</a>
      <a href="/#/PrivacyPolicy" target="_blank">Privacy policy</a>
    </div>
    <div class="copyright">Copyright © 2018 Galaxy.One All rights reserved.</div>
  </div>
  <!-- footer end -->
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 1280px) {
.footer {
    background: #241b67;
    padding-top: 60px;
    padding-bottom: 80px;
  }
  .footer .logo {
    display: block;
    width: 300px;
    height: 73px;
    margin-left: auto;
    margin-right: auto;
  }
  .footer .social {
    margin: 46px auto 23px;
    display: flex;
    justify-content: space-around;
    width: 166px;
  }
  .footer .social a {
    display: block;
    width: 42px;
    height: 42px;
  }
  .footer .social a.twitter {
    background: url("@{imgPath}/icon_twitter.svg") no-repeat center center ~"/" 100%;
  }
  .footer .social a.telegram {
    background: url("@{imgPath}/icon_telegram.svg") no-repeat center center ~"/"
      100%;
  }
  .footer .social a.reddit {
    background: url("@{imgPath}/icon_reddit.svg") no-repeat center center ~"/" 100%;
  }
  .footer .link {
    text-align: center;
    display: flex;
    width: 660px;
    justify-content: center;
    margin: 24px auto 12px;
  }
  .footer .link a {
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    line-height: 20px;
    border-right: 1px solid #c3baff;
    padding-left: 20px;
    padding-right: 20px;
  }
  .footer .link a:last-child {
    border-right: none;
  }
  .footer .copyright {
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
  }
}

@media only screen and (max-width: 1279px) and (min-width: 1025px) {
@rem:  138rem;
  
  .footer {
    background: #241b67;
    padding-top: 60/@rem;
    padding-bottom: 80/@rem;
  }
  .footer .logo {
    display: block;
    width: 300/@rem;
    height: 73/@rem;
    margin-left: auto;
    margin-right: auto;
  }
  .footer .social {
    margin: 46/@rem auto 23/@rem;
    display: flex;
    justify-content: space-around;
    width: 166/@rem;
  }
  .footer .social a {
    display: block;
    width: 42/@rem;
    height: 42/@rem;
  }
  .footer .social a.twitter {
    background: url("@{imgPath}/icon_twitter.svg") no-repeat center center ~"/" 100%;
  }
  .footer .social a.telegram {
    background: url("@{imgPath}/icon_telegram.svg") no-repeat center center ~"/"
      100%;
  }
  .footer .social a.reddit {
    background: url("@{imgPath}/icon_reddit.svg") no-repeat center center ~"/" 100%;
  }
  .footer .link {
    text-align: center;
    display: flex;
    width: 660/@rem;
    justify-content: center;
    margin: 24/@rem auto 12/@rem;
  }
  .footer .link a {
    font-weight: 500;
    font-size: 16/@rem;
    color: #ffffff;
    line-height: 20/@rem;
    border-right: 1px solid #c3baff;
    padding-left: 20/@rem;
    padding-right: 20/@rem;
  }
  .footer .link a:last-child {
    border-right: none;
  }
  .footer .copyright {
    line-height: 40/@rem;
    text-align: center;
    font-size: 16/@rem;
    color: #ffffff;
  }
}

/* 小型屏幕 */

@media only screen and (max-width: 1024px) {
@rem:  37.5rem;
  
  .footer {
    background: #241b67;
    padding-top: 60/@rem;
    padding-bottom: 80/@rem;
  }
  .footer .logo {
    display: block;
    width: 200/@rem;
    height: 49/@rem;
    margin-left: auto;
    margin-right: auto;
  }
  .footer .social {
    margin: 46/@rem auto 23/@rem;
    display: flex;
    justify-content: space-around;
    width: 120/@rem;
  }
  .footer .social a {
    display: block;
    width: 24/@rem;
    height: 24/@rem;
  }
  .footer .social a.twitter {
    background: url("@{imgPath}/icon-twitter.png") no-repeat center center /
      100%;
  }
  .footer .social a.telegram {
    background: url("@{imgPath}/icon-telegram.png") no-repeat center center /
      100%;
  }
  .footer .social a.reddit {
    background: url("@{imgPath}/icon-reddit.png") no-repeat center center / 100%;
  }
  .footer .link {
    display: flex;
    margin: 24/@rem auto 12/@rem;
    width: 375/@rem;
    justify-content: center;
  }
  .footer .link a {
    font-weight: 500;
    font-size: 12/@rem;
    color: #ffffff;
    line-height: 16/@rem;
    border-right: 1px solid #c3baff;
    padding-left: 6/@rem;
    padding-right: 6/@rem;
  }
  .footer .link a:last-child {
    border-right: none;
  }
  .footer .copyright {
    line-height: 40/@rem;
    text-align: center;
    font-size: 12/@rem;
    color: #ffffff;
  }
}
</style>
