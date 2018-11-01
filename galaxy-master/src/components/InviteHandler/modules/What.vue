<template>

  <div class="what section">
    <div class="title">What you can do in galaxy?</div>

    <div class="cards">
      <div class="card" v-for="(item, index) in cards" :key="index">
        <img class="icon" :src="item.src" />
        <div class="text">
          <div class="label">{{item.label}}</div>
          <div class="des">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "What",
  data() {
    return {
      cards: [
        {
          src: "/static/img/icon-exploreidentity.png",
          label: "Explore Identity",
          value: "Be an explorer and discover the planet."
        },
        {
          src: "/static/img/icon-digggala.png",
          label: "Mysterious Mineral",
          value: "The mysterious mineral can be converted into GALA."
        },
        {
          src: "/static/img/icon-galaxyrank.png",
          label: "Digital Galaxy Assets",
          value: "Each planet is unique based on blockchain."
        },
        {
          src: "/static/img/icon-discoverspace.png",
          label: "Discovery on Galaxy",
          value: "discover and collect more planets by spaceship."
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@imgPath: "../../../assets/img";

@media only screen and (min-width: 751px) {
  @unit: 1px;

  .what {
    margin-top: 76/@unit;
    .title {
      font-weight: 500;
      font-size: 32/@unit;
      color: #70fec3;
      line-height: 38/@unit;
      text-align: center;
      margin-bottom: 76/@unit;
    }
    .cards {
      margin-left: 45/@unit;
      margin-right: 45/@unit;
      .card {
        height: 140/@unit;
        display: flex;
        align-items: center;
        margin-bottom: 64/@unit;
        .icon {
          display: block;
          width: 140/@unit;
          height: 140/@unit;
          margin-right: 46/@unit;
        }
        .text {
          width: 382/@unit;
          .label {
            font-weight: 500;
            font-size: 32/@unit;
            color: #ffffff;
            line-height: 1;
            margin-bottom: 12/@unit;
          }
          .des {
            color: #ffffff;
            line-height: 34/@unit;
            font-size: 28/@unit;
            color: #dae0ff;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  @unit: 70rem;

  .what {
    margin-top: 76/@unit;
    .title {
      font-weight: 500;
      font-size: 32/@unit;
      color: #70fec3;
      line-height: 38/@unit;
      text-align: center;
      margin-bottom: 76/@unit;
    }
    .cards {
      margin-left: 45/@unit;
      margin-right: 45/@unit;
      .card {
        height: 140/@unit;
        display: flex;
        align-items: center;
        margin-bottom: 64/@unit;
        .icon {
          display: block;
          width: 140/@unit;
          height: 140/@unit;
          margin-right: 46/@unit;
        }
        .text {
          width: 382/@unit;
          .label {
            font-weight: 500;
            font-size: 32/@unit;
            color: #ffffff;
            line-height: 1;
            margin-bottom: 12/@unit;
          }
          .des {
            color: #ffffff;
            line-height: 34/@unit;
            font-size: 28/@unit;
            color: #dae0ff;
          }
        }
      }
    }
  }
}
</style>
