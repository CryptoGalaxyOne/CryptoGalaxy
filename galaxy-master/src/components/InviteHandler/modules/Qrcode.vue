<template>

  <div class="qrcode section">
    <img class="icon" src="@/assets/img/qrcode.png" alt="" />
    <div class="label">Download CryptoGalaxy</div>
    <div class="label">Discover &amp; collect your planet</div>
  </div>
</template>

<script>
export default {
  name: "Qrcode"
};
</script>
<style lang="less" scoped>
@unit: 2px;

.qrcode {
  .icon {
    width: 180/@unit;
    height: 180/@unit;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6/@unit;
  }
  .label {
    line-height: 32/@unit;
    font-weight: 300;
    font-size: 20/@unit;
    color: #ffffff;
    text-align: center;
  }
}
</style>
