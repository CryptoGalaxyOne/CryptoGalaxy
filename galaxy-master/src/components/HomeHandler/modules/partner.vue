<template>

  <!-- partner start-->
  <div class="partner section">
    <div class="main">
      <div class="group">
        <div class="label">{{$t("partner.strategic-investment-institutions")}}</div>
        <div class="partners">
          <img class="logo zeepin" src="@/assets/img/logo_zeepin.svg" alt="">
          <img class="logo fff" src="@/assets/img/logo_fff.svg" alt="">
        </div>
      </div>
    </div>
  </div>
  <!-- partner end -->
</template>

<script>
export default {
  name: "Partner"
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 1280px) {
.partner {
    padding-top: 50px;
    padding-bottom: 50px;
    background: #2b2170;
  }
  .partner .main {
    width: 1068px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    // background: rgba(0,0,0,.5);
  }
  .partner .main .group .label {
    font-weight: 500;
    font-size: 16px;
    color: #cdcdce;
    margin-bottom: 40px;
    text-align: center;
  }
  .partner .main .group .partners {
    display: flex;
    align-items: center;
  }
  .partner .main .group .partners .logo {
    display: block;
    height: auto;
    margin-right: 72px;
    &.zeepin {
      width: 136px;
    }
    &.fff {
      width: 140px;
    }
    &.neo {
      width: 91px;
    }
    &.ontology {
      width: 138px;
    }
    &.onchain {
      width: 148px;
    }
  }

  .partner .main .group .partners .logo:last-child {
    margin-right: 0;
  }
  .partner .main .line {
    width: 1px;
    height: 40px;
    background: #5068e3;
  }
}

@media only screen and (max-width: 1279px) and (min-width: 1025px) {
@rem:  138rem;
  
  .partner {
    padding-top: 50/@rem;
    padding-bottom: 50/@rem;
    background: #2b2170;
  }
  .partner .main {
    width: 1068/@rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
  }
  .partner .main .group .label {
    font-weight: 500;
    font-size: 16/@rem;
    color: #cdcdce;
    margin-bottom: 40/@rem;
    text-align: center;
  }
  .partner .main .group .partners {
    display: flex;
    align-items: center;
  }
  .partner .main .group .partners .logo {
    display: block;
    height: auto;
    margin-right: 72/@rem;
    &.zeepin {
      width: 136/@rem;
    }
    &.fff {
      width: 140/@rem;
    }
    &.neo {
      width: 91/@rem;
    }
    &.ontology {
      width: 138/@rem;
    }
    &.onchain {
      width: 148/@rem;
    }
  }

  .partner .main .group .partners .logo:last-child {
    margin-right: 0;
  }
  .partner .main .line {
    width: 1/@rem;
    height: 40/@rem;
    background: #5068e3;
  }
}

/* 小型屏幕 */

@media only screen and (max-width: 1024px) {
@rem:  37.5rem;
  
  .partner {
    padding-top: 50/@rem;
    padding-bottom: 50/@rem;
    background: #2b2170;
  }
  .partner .main {
    margin-left: 60/@rem;
    margin-right: 60/@rem;
  }

  .partner .main .group {
    margin-bottom: 24/@rem;
  }
  .partner .main .group:last-child {
    margin-bottom: 0;
  }
  .partner .main .group .label {
    font-weight: 500;
    font-size: 12/@rem;
    color: #cdcdce;
    margin-bottom: 24/@rem;
    text-align: center;
  }
  .partner .main .group .partners {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .partner .main .group .partners .logo {
    display: block;
    margin-right: 24/@rem;
    &.zeepin {
      width: 100/@rem;
    }
    &.fff {
      width: 100/@rem;
    }
    &.neo {
      width: 60/@rem;
    }
    &.ontology {
      width: 100/@rem;
    }
    &.onchain {
      width: 80/@rem;
    }
  }
  .partner .main .group .partners .logo:last-child {
    margin-right: 0;
  }
  .partner .main .line {
    width: 1/@rem;
    height: 40/@rem;
    background: #5068e3;
  }
}
</style>
