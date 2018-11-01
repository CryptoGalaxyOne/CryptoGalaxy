<template>
  <div class="background">
    <div class="wrapper">
      <ShareCover :props="uMeta" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import qs from "qs";
import ShareCover from "./modules/ShareCover";

const API = "https://iapi.cryptogalaxy.one/gala/user/getShareInfo";

export default {
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

<style lang="less">
html,
body {
  // width: 100%;
  // height: 100%;
  // background: #3844a4;
}
</style>

<style lang="less" scoped>
//680 * 383
@unit: 1px;
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #3844a4;
}

.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
</style>
