<template>

  <div class="card section">

    <ShareCover :props="uMeta" />

    <div class="footer">
      <div class="hd">
        <a class="label" href="https://t.me/CryptoGalaxyOne" target="_blank">t.me/CryptoGalaxyOne</a>
        <!-- <div class="value">+5 GALA</div> -->
      </div>
      <div class="bd">
        <div class="code">
          <div class="value">
            <input id="code" type="text" readonly v-model="uMeta.inviteCode" />
          </div>
          <div class="label">INVITATION CODE</div>
        </div>
        <div id="copy-code" class="button" data-clipboard-action="copy" data-clipboard-target="#code">COPY</div>
      </div>
    </div>

    <div class="additional">
      <div class="group">
        <div class="label">Use amount:</div>
        <div class="value">{{5 - uMeta.availCount || 0}}</div>
      </div>
      <div class="datetime">Valid through Aug. 31, 2018</div>
    </div>

  </div>

</template>
<script>
import ShareCover from "./ShareCover";
import axios from "axios";
import qs from "qs";
import Clipboard from "clipboard";

const API = "https://iapi.cryptogalaxy.one/gala/user/getShareInfo";

export default {
  name: "Card",
  components: {
    ShareCover
  },
  data() {
    return {
      code: this.$route.params.code,
      uMeta: {},
    };
  },
  created() {
    this.fetchUserMeta(this.code)
      .then(res => {
        console.error(res);
        this.uMeta = res;
      })
      .catch(err => {
        console.error(err);
      });
  },
  mounted() {
    let codeClipboard = new Clipboard("#copy-code");
    codeClipboard.on("success", e => {
      this.$nextTick(() => {
        alert("复制成功");
      });
      e.clearSelection();
    });
    codeClipboard.on("error", e => {
      this.$nextTick(() => {
        alert("复制失败，请手动复制");
      });
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
              resolve(res.data.content);
            } else {
              reject(res.data.errCode.msg);
            }
          })
          .catch(err => {
            console.error(res);
          });
      });
    }
  }
};
</script>
<style lang="less" scoped>
@media only screen and (min-width: 751px) {
  @unit: 1px;

  .card {
    width: 680/@unit;
    border-bottom: 1/@unit dashed #8186f0;
    .footer {
      width: 680/@unit;
      position: relative;
      background: #fff;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 57/@unit;
        height: 57/@unit;
        background: #2b2660;
        border-radius: 50%;
        top: 75/@unit;
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
        height: 75/@unit;
        border-bottom: 1/@unit dashed #8186f0;
        padding-left: 45/@unit;
        padding-right: 45/@unit;
        .label {
          font-weight: 500;
          font-size: 24/@unit;
          color: #000000;
        }
        .value {
          font-weight: 500;
          font-size: 24/@unit;
          color: #000000;
        }
      }
      .bd {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 45/@unit;
        padding-right: 45/@unit;
        height: 175/@unit;
        .code {
          .value {
            font-weight: 500;
            font-size: 62/@unit;
            line-height: 75/@unit;
          }
          .label {
            font-size: 16/@unit;
            line-height: 20/@unit;
            color: #000000;
          }
        }
        .button {
          width: 170/@unit;
          height: 60/@unit;
          border: 1/@unit solid #3a3fa7;
          border-radius: 100/@unit;
          font-weight: 500;
          font-size: 30/@unit;
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
      margin-top: 46/@unit;
      margin-bottom: 44/@unit;
      .group {
        display: flex;
        justify-content: space-between;
        line-height: 24/@unit;
        .label {
          font-size: 20/@unit;
          color: #4a90e2;
        }
        .value {
          font-weight: 500;
          font-size: 20/@unit;
          color: #fff;
          margin-left: 6/@unit;
          &::after {
            content: " / 5";
          }
        }
      }
      .datetime {
        font-size: 20/@unit;
        color: #4a90e2;
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  @unit: 70rem;

  .card {
    width: 630/@unit;
    border-bottom: 1/@unit dashed #8186f0;
    .footer {
      width: 630/@unit;
      position: relative;
      background: #fff;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 57/@unit;
        height: 57/@unit;
        background: #2b2660;
        border-radius: 50%;
        top: 75/@unit;
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
        height: 75/@unit;
        border-bottom: 1/@unit dashed #8186f0;
        padding-left: 45/@unit;
        padding-right: 45/@unit;
        .label {
          font-weight: 500;
          font-size: 24/@unit;
          color: #000000;
        }
        .value {
          font-weight: 500;
          font-size: 24/@unit;
          color: #000000;
        }
      }
      .bd {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 45/@unit;
        padding-right: 45/@unit;
        height: 175/@unit;
        .code {
          .value {
            font-weight: 500;
            font-size: 62/@unit;
            line-height: 75/@unit;
          }
          .label {
            font-size: 16/@unit;
            line-height: 20/@unit;
            color: #000000;
          }
        }
        .button {
          width: 170/@unit;
          height: 60/@unit;
          border: 1/@unit solid #3a3fa7;
          border-radius: 100/@unit;
          font-weight: 500;
          font-size: 30/@unit;
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
      margin-top: 46/@unit;
      margin-bottom: 44/@unit;
      .group {
        display: flex;
        justify-content: space-between;
        line-height: 24/@unit;
        .label {
          font-size: 20/@unit;
          color: #4a90e2;
        }
        .value {
          font-weight: 500;
          font-size: 20/@unit;
          color: #fff;
          margin-left: 6/@unit;
          &::after {
            content: " / 5";
          }
        }
      }
      .datetime {
        font-size: 20/@unit;
        color: #4a90e2;
      }
    }
  }
}

#code {
  border: none;
  background: none;
  outline: none;
  appearance: none;
  display: inline;
  width: 6em;
}
</style>
