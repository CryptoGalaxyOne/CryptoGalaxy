<template>

  <div class="cover">
    <div class="info">
      <div class="avatar" :style="starPic"></div>
      <div class="meta">
        <div class="slogan">Join CryptoGalaxy with Me</div>
        <div class="group">
          <div class="label">Planet Name</div>
          <div class="value">{{uMeta.starName}}</div>
        </div>
        <div class="group">
          <div class="label">Total Income</div>
          <div class="value">{{uMeta.gainGala}} GALA</div>
        </div>
      </div>
    </div>

    <div class="additional">
      <div class="group">
        <div class="label">Planet Host</div>
        <div class="value">{{uMeta.hostName || 'no host'}}</div>
      </div>
      <div class="group">
        <div class="label">Rare</div>
        <div class="rares">
          <i class="rare" :class="{available: item <= 1}" v-for="(item, index) in 5" :key="index"></i>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
export default {
  name: "ShareCover",
  props: {
    props: {
      default() {
        return {};
      },
      type: Object
    }
  },
  data() {
    return {
      uMeta: {},
      count: 4
    };
  },
  computed: {
    starPic() {
      return {
        "background-image": `url(${this.uMeta.starPic})`,
        "background-size": "cover"
      };
    }
  },
  watch: {
    props: {
      handler (val) {
        this.uMeta = val;
      },
      immediate: true
    }
  },
  mounted() {
    console.log(this.uMeta);
  }
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 751px) {
  @unit: 1px;

  .cover {
    width: 680/@unit;
    height: 363/@unit;
    background: #3844a4;
    border-radius: 6/@unit 6/@unit 0 0;
    font-size: 12px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 39/@unit;
      height: 43/@unit;
      top: 24/@unit;
      left: 24/@unit;
      background: url("@{imgPath}/s-logo.svg") no-repeat center center ~"/" cover;
    }
    .info {
      display: flex;
      align-items: center;
      margin-top: 64/@unit;
      margin-left: 50/@unit;
      margin-bottom: 56/@unit;
      .avatar {
        width: 184/@unit;
        height: 184/@unit;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .meta {
        height: 194/@unit;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 48/@unit;
        .slogan {
          font-weight: 500;
          font-size: 28/@unit;
          color: #6effbf;
          line-height: 34/@unit;
        }
        .group {
          .label {
            font-family: Helvetica;
            font-size: 18/@unit;
            color: #9c9fd3;
            line-height: 22/@unit;
          }
          .value {
            font-family: Helvetica-Bold;
            font-size: 28/@unit;
            color: #ffffff;
            line-height: 34/@unit;
          }
        }
      }
    }
    .additional {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 20/@unit;
      margin-right: 20/@unit;
      .group {
        display: flex;
        align-items: center;
        line-height: 1;
        .label {
          font-size: 18/@unit;
          color: rgba(255, 255, 255, 0.5);
        }
        .value {
          font-size: 20/@unit;
          color: #00ffee;
          margin-left: 12/@unit;
          color: #00ffee;
        }
        .rares {
          display: flex;
          margin-left: 4/@unit;
          .rare {
            width: 14/@unit;
            height: 15/@unit;
            background: url("@{imgPath}/icon-rare.svg") no-repeat center center
              ~"/" cover;
            margin-left: 6/@unit;
            &.available {
              background: url("@{imgPath}/icon-rare-available.svg") no-repeat
                center center ~"/" cover;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  @unit: 70rem;

  .cover {
    width: 630/@unit;
    height: 363/@unit;
    background: #3844a4;
    border-radius: 6/@unit 6/@unit 0 0;
    font-size: 12px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 39/@unit;
      height: 43/@unit;
      top: 24/@unit;
      left: 24/@unit;
      background: url("@{imgPath}/s-logo.svg") no-repeat center center ~"/" cover;
    }
    .info {
      display: flex;
      align-items: center;
      margin-top: 64/@unit;
      margin-left: 50/@unit;
      margin-bottom: 56/@unit;
      .avatar {
        width: 184/@unit;
        height: 184/@unit;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .meta {
        height: 194/@unit;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 48/@unit;
        .slogan {
          font-weight: 500;
          font-size: 24/@unit;
          color: #6effbf;
          line-height: 34/@unit;
        }
        .group {
          .label {
            font-family: Helvetica;
            font-size: 18/@unit;
            color: #9c9fd3;
            line-height: 22/@unit;
          }
          .value {
            font-family: Helvetica-Bold;
            font-size: 28/@unit;
            color: #ffffff;
            line-height: 34/@unit;
          }
        }
      }
    }
    .additional {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 20/@unit;
      margin-right: 20/@unit;
      .group {
        display: flex;
        align-items: center;
        line-height: 1;
        .label {
          font-size: 18/@unit;
          color: rgba(255, 255, 255, 0.5);
        }
        .value {
          font-size: 20/@unit;
          color: #00ffee;
          margin-left: 12/@unit;
          color: #00ffee;
        }
        .rares {
          display: flex;
          margin-left: 4/@unit;
          .rare {
            width: 14/@unit;
            height: 15/@unit;
            background: url("@{imgPath}/icon-rare.svg") no-repeat center center
              ~"/" cover;
            margin-left: 6/@unit;
            &.available {
              background: url("@{imgPath}/icon-rare-available.svg") no-repeat
                center center ~"/" cover;
            }
          }
        }
      }
    }
  }
}
</style>
