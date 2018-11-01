<template>

  <div class="about section">
    <div class="title">What is Crypto Galaxy ?</div>
    <div class="banner">
      <div class="text">
        <div class="des">The first ever virtual universe based on blockchain. It’s a decentralized creative dApp running on Zeepin blockchain. Just send cryptocurrencies like ZPT or NEO to Galaxy address, a brand new planet will be created</div>
        <a href="https://www.youtube.com/watch?v=FIyxKihwLus" target="_blank" class="link">Watch intro video</a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "About"
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 751px) {
  @unit: 1px;

  .about {
    margin-top: 30/@unit;
    margin-bottom: 76/@unit;
    .title {
      text-align: center;
      font-weight: 500;
      font-size: 32/@unit;
      color: #70fec3;
      line-height: 38/@unit;
      margin-bottom: 48/@unit;
    }
    .banner {
      width: 680/@unit;
      height: 935/@unit;
      background: url("@{imgPath}/planets_pic.png") no-repeat center -30/@unit ~"/" 660/@unit
          660/@unit,
        linear-gradient(138deg, #3a1b6f 0%, #5068e3 100%);
      border-radius: 10/@unit;
      position: relative;
      .text {
        width: 534/@unit;
        position: absolute;
        bottom: 72/@unit;
        left: 50%;
        transform: translateX(-50%);
        .des {
          font-size: 26/@unit;
          color: #ebf2fc;
          line-height: 38/@unit;
          margin-bottom: 50/@unit;
        }
        .link {
          font-weight: 500;
          font-size: 24/@unit;
          color: #fafffd;
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: center;
          &::before {
            content: "";
            display: block;
            width: 33/@unit;
            height: 33/@unit;
            background: url("@{imgPath}/icon-video.png") no-repeat center center
              ~"/" 100%;
            margin-right: 18/@unit;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  @unit: 70rem;

  .about {
    margin-top: 30/@unit;
    margin-bottom: 76/@unit;
    .title {
      text-align: center;
      font-weight: 500;
      font-size: 32/@unit;
      color: #70fec3;
      line-height: 38/@unit;
      margin-bottom: 48/@unit;
    }
    .banner {
      width: 630/@unit;
      height: 935/@unit;
      background: url("@{imgPath}/planets_pic.png") no-repeat center -30/@unit ~"/" 660/@unit
          660/@unit,
        linear-gradient(138deg, #3a1b6f 0%, #5068e3 100%);
      border-radius: 10/@unit;
      position: relative;
      .text {
        width: 534/@unit;
        position: absolute;
        bottom: 72/@unit;
        left: 50%;
        transform: translateX(-50%);
        .des {
          font-size: 26/@unit;
          color: #ebf2fc;
          line-height: 38/@unit;
          margin-bottom: 50/@unit;
        }
        .link {
          font-weight: 500;
          font-size: 24/@unit;
          color: #fafffd;
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: center;
          &::before {
            content: "";
            display: block;
            width: 33/@unit;
            height: 33/@unit;
            background: url("@{imgPath}/icon-video.png") no-repeat center center
              ~"/" 100%;
            margin-right: 18/@unit;
          }
        }
      }
    }
  }
}
</style>
