<template>

  <div class="wrapper">
    <div class="main" :style="style">
      <HeaderWithBack :backText="backText" :screenshot="screenshot" />
      <ShareCard :type="type" :screenshot="screenshot" />
      <Qrcode />
    </div>
  </div>

</template>
<script>
import HeaderWithBack from "./modules/HeaderWithBack";
import ShareCard from "./modules/ShareCard";
import Qrcode from "./modules/Qrcode";

const RECT = {
  width: 375,
  height: 667
};

export default {
  components: {
    HeaderWithBack,
    ShareCard,
    Qrcode
  },
  data() {
    return {
      type: +this.$route.params.type || 1,
      screenshot: +this.$route.params.screenshot ? true : false,
      s: 1
    };
  },
  computed: {
    backText() {
      return this.type == 1 ? "Back" : "Center";
    },
    style() {
      return {
        transform: `translate(-50%, -50%) scale(${this.s})`
      };
    }
  },
  mounted() {
    this.scale(RECT);
    window.addEventListener("resize", () => {
      this.scale(RECT);
    });
  },
  methods: {
    scale(defaultRect) {
      let viewport = document.querySelector(".wrapper").getBoundingClientRect();

      let ws = viewport.width / defaultRect.width;
      let hs = viewport.height / defaultRect.height;

      let s = ws > hs ? hs : ws;
      this.s = s;
    }
  }
};
</script>

<style lang="less" scoped>
@unit: 2px;

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2b2660;
  &::before,
  &::after {
    content: "";
    display: table;
  }
  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 375px;
    height: 667px;
    transform-origin: center center;
    transform: translate(-50%, -50%);
    padding-left: 45 / @unit;
    padding-right: 45 / @unit;
  }
}
</style>
