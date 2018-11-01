<template>

  <div class="card section">

    <TextCover :props="uMeta" v-if="type === 1" />
    <div class="image-cover" v-if="type === 2"></div>

    <div class="footer">
      <div class="hd">
        <div class="label">Everyone who invites a friend to successfully register can get rewards</div>
        <div class="value">+1 GALA</div>
      </div>
      <div class="bd">
        <div class="code">
          <div class="value">{{uMeta.inviteCode}}</div>
          <div class="label">INVITATION CODE</div>
        </div>
        <div v-if="!screenshot" class="button" @click="saveScreenshot(code, type)">{{buttonText}}</div>
      </div>
    </div>

    <div class="additional">
      <div class="group">
        <div class="label">Use amount:</div>
        <div class="value">{{20 - uMeta.availCount || 0}}</div>
      </div>
      <div class="datetime">Valid through Jan 29th, 2018</div>
    </div>

  </div>

</template>
<script>
import TextCover from "./TextCover";
import axios from "axios";
import qs from "qs";
import Clipboard from "clipboard";

// const API = "https://iapi.cryptogalaxy.one/gala/user/getShareInfo";
const API = "https://dic.cryptogalaxy.one/proxy/gala/user/getShareInfo";
const GEN_SCREENSHOT_API = "https://dic.cryptogalaxy.one/api/gensharecard";
const GET_SCREENSHOT_API = "https://dic.cryptogalaxy.one/api/getsharecard";

export default {
  name: "Card",
  components: {
    TextCover
  },
  props: {
    type: {
      default: 1,
      type: Number
    },
    screenshot: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      code: this.$route.params.code,
      loading: false,
      uMeta: {}
    };
  },
  computed: {
    buttonText() {
      return this.loading ? "生成中..." : "保存分享";
    }
  },
  created() {
    
    this.code = '3dSzjpFLsW';

    this.fetchUserMeta(this.code)
      .then(res => {
        console.warn(res);
        this.uMeta = res;
        this.gen(this.code, this.type);
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    fetchUserMeta(code) {
      return new Promise((resolve, reject) => {
        const options = {
          method: "POST",
          headers: { "content-type": "application/x-www-form-urlencoded" },
          data: qs.stringify({ code }),
          url: API
        };
        axios(options)
          .then(res => {
            if (res.data.errCode.code === 200) {
              console.log(JSON.stringify(res.data.content));
              resolve(res.data.content);
            } else {
              reject(res.data.errCode.msg);
            }
          })
          .catch(err => {
            console.error(res);
          });
      });
    },
    saveScreenshot: async function (code, type) {
      // let url = `uniwebview://save?url=${encodeURIComponent('https://dic.cryptogalaxy.one/api/getsharecard/4aSZIj7gce/2')}`;
      // location.href = url;
      // return;
      if (this.loading) {
        return;
      }

      this.loading = true;

      for (; true; ) {
        let res = await this.gen(code, type);
        if (!res) {
          await this.sleep(500);
          continue;
        } else {
          this.loading = false;
          let url = `uniwebview://save?url=${encodeURIComponent(res)}`;
          location.href = url;
          return;
        }
      }
    },
    sleep(timmer) {
      return new Promise(resolved => {
        setTimeout(() => {
          resolved();
        }, timmer);
      });
    },
    gen(code, type) {
      return new Promise((resolved, rejected) => {
        const options = {
          method: "POST",
          headers: { "content-type": "application/x-www-form-urlencoded" },
          data: qs.stringify({
            code,
            type,
            request: JSON.stringify(this.uMeta)
          }),
          url: GEN_SCREENSHOT_API
        };
        axios(options)
          .then(res => {
            console.log(res.data.content.cached);
            if (!!res.data.content.cached) {
              let src = `${GET_SCREENSHOT_API}/${code}/${type}`;
              resolved(src);
            } else {
              resolved(false);
            }
          })
          .catch(err => {
            resolved(false);
          });
      });
    }
  }
};
</script>
<style lang="less" scoped>
@unit: 2px;
@imgPath: "../../../assets/img";

.card {
  width: 660 / @unit;
  .image-cover {
    margin-top: 30 / @unit;
    width: 660 / @unit;
    height: 310 / @unit;
    background: #3844a4;
    border-radius: 6 / @unit 6 / @unit 0 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    &::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 577 / @unit;
      height: 355 / @unit;
      background: url("@{imgPath}/sharecardimage.png") no-repeat center center ~"/"
        cover;
    }
  }
  .footer {
    width: 660 / @unit;
    position: relative;
    background: #fff;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 57 / @unit;
      height: 57 / @unit;
      background: #2b2660;
      border-radius: 50%;
      top: 75 / @unit;
    }
    &::before {
      transform: translate(-50%, -50%);
      left: 0;
    }
    &::after {
      transform: translate(50%, -50%);
      right: 0;
    }
    .hd {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 75 / @unit;
      border-bottom: 1 / @unit dashed #8186f0;
      padding-left: 45 / @unit;
      padding-right: 45 / @unit;
      .label {
        font-weight: 500;
        font-size: 20 / @unit;
        color: #000000;
        line-height: 24 / @unit;
        width: 440 / @unit;
      }
      .value {
        font-weight: 500;
        font-size: 20 / @unit;
        color: #000000;
        line-height: 24 / @unit;
      }
    }
    .bd {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 45 / @unit;
      padding-right: 45 / @unit;
      height: 160 / @unit;
      .code {
        .value {
          font-weight: 500;
          font-size: 56 / @unit;
          line-height: 75 / @unit;
        }
        .label {
          font-size: 16 / @unit;
          line-height: 20 / @unit;
          color: #000000;
        }
      }
      .button {
        width: 200 / @unit;
        height: 66 / @unit;
        background: #6effbf;
        border-radius: 100 / @unit;
        font-weight: 500;
        font-size: 24 / @unit;
        color: #5068e3;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .additional {
    display: flex;
    justify-content: space-between;
    margin-top: 16 / @unit;
    margin-bottom: 44 / @unit;
    .group {
      display: flex;
      justify-content: space-between;
      line-height: 24 / @unit;
      .label {
        color: #b0d5ff;
        font-size: 20 / @unit;
      }
      .value {
        color: #b0d5ff;
        font-weight: 500;
        font-size: 20 / @unit;
        margin-left: 6 / @unit;
        &::after {
          content: " / 20";
        }
      }
    }
    .datetime {
      color: #b0d5ff;
      font-size: 20 / @unit;
    }
  }
}
</style>
