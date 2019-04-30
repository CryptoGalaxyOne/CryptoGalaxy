<template>
  <div class="market-centent">
    <div class="market-box">
      <div class="market-box-index">
        <div class="market-box-index-title">
          <p class="p1">{{$t("marketPlace.text")}}</p>
          <p class="p2" @click="openrefprice">
            {{$t("marketPlace.text1")}}
            <i class="el-icon-arrow-down" v-show="!isRefprice"></i>
            <i class="el-icon-arrow-up" v-show="isRefprice"></i>
          </p>
        </div>
        <div class="market-box-index-cent">
          <div class="item" v-for="(itme,index) in refpriceList" :key="index">
            <div class="loge">
              <div class="loge-img">
                <img :src="'/static/img/icon/'+itme.name+'.png'" alt>
              </div>
              <p class="name">{{itme.name}}</p>
            </div>
            <div class="assets-box">
              <div class="center">
                <div class="asstes">
                  <div class="loge-img">
                    <img src="/static/img/icon/Gala.png" alt>
                  </div>
                  <p>{{(itme.gala).toFixed(4)}}</p>
                  <!-- <span>Gala</span> -->
                </div>
                <div class="asstes">
                  <div class="loge-img">
                    <img src="/static/img/icon/ZUSD.png" alt>
                  </div>
                  <p>{{(itme.zusd).toFixed(2)}}</p>
                 <!--  <span>ZUSD</span> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="market-box-icon-box">
          <p class="market-box-icon" @click="openrefprice">
            <i class="el-icon-arrow-down" v-show="!isRefprice"></i>
            <i class="el-icon-arrow-up" v-show="isRefprice"></i>
          </p>
        </div>
      </div>
      <!--pc-->
      <div class="transaction-list-pc">
        <div class="transaction-tlite-box">
          <p class="p1">{{$t("marketPlace.text2")}}</p>
          <p class="p2">{{$t("marketPlace.text3")}}</p>
          <p class="p3">{{$t("marketPlace.text4")}}</p>
          <p class="p4">{{$t("marketPlace.text5")}}</p>
          <p class="p5">{{$t("marketPlace.text6")}}</p>
          <p class="p6">{{$t("marketPlace.text7")}}</p>
        </div>
        <div class="transaction-list-box" v-if="transactionList.length > 0">
          <div class="itme" v-for="(itme,index1) in transactionList" :key="index1">
            <div class="log-img">
             <img :src="'/static/img/icon/'+itme.AssetName+'.png'" alt> 
            </div>
            <p class="p2" @click="toScan(itme.TxnHash)">{{getFormatHashAddress(itme.TxnHash)}}</p>
            <p class="p3">{{itme.FromAddress}}</p>
            <p class="p4">{{itme.ToAddress}}</p>
            <p class="p5">
              <span>{{setTimeFormat(itme.TxnTime)}}</span>
            </p>
            <p class="p6">
              {{itme.Amount}}
              <span>{{itme.AssetName}}</span>
            </p>
          </div>
        </div>
        <div class="transaction-pagination"> 
          <el-pagination 
            background 
            :page-size="15"
            layout="prev, pager, next" 
            :total="total"
            @current-change="getCurrent">
            </el-pagination>
        </div>
        <div class="transaction-pagination-h5">
          <div class="pagination-h5" v-if="total > 0">
            <p>{{Math.ceil(total/15)}}</p>
            <p @click="setPage(-1)"><i class="el-icon-d-arrow-left"></i></p>
            <p>{{page}}</p>
            <p @click="setPage(1)"><i class="el-icon-d-arrow-right"></i></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getFormatAddress,setTimeFormat ,getFormatHashAddress} from "../../../assets/js/common"
export default {
  name: "centent",
  data() {
    return {
      page:1,
      refpriceList: [],
      isRefprice:false,
      setTime:null,
    };
  },
 watch:{
     refpriceData(){
         let a1 = this.refpriceData.machine;
         this.refpriceList = a1.concat(this.refpriceData.planet,this.refpriceData.mineral[0]);
     }
 },
 computed: {
      transactionList(){
        return this.$store.state.transactionList;
      },
      refpriceData() {
        return this.$store.state.refpriceList;
      },
      total(){
        return this.$store.state.total;
      }
    },
  mounted(){
    this.$store.dispatch("getRefprice");
    this.getTransactionData();
  },
  methods:{
    getCurrent(index){
        if(this.page == index) return;
        this.page = index;
        this.clearTimeFun();
        this.getTransactionData();
    },
    getTransaction(){
      let _this = this;
      let index = this.page;
      this.setTime = setInterval(function(){
          _this.$store.dispatch("getTransactionList",index);
        },6000);  
    },
    getTransactionData(){
      this.$store.dispatch("getTransactionList",this.page);
      this.getTransaction();
    },
    openrefprice(){
        let a1 = new Array();
        if(!this.isRefprice){
            this.refpriceList.pop();
            a1 = this.refpriceList;
           this.refpriceList = a1.concat(this.refpriceData.mineral);
        }else{
            let a1 = this.refpriceData.machine;
            this.refpriceList = a1.concat(this.refpriceData.planet,this.refpriceData.mineral[0]);
        }
        this.isRefprice = !this.isRefprice;
    },
    getFormatHashAddress(str){
      return getFormatHashAddress(str);
    },
    setTimeFormat(time){
      return setTimeFormat(time);
    },
    setPage(index){
      this.page = this.page + index >1 ?  this.page+index : 1;
      this.clearTimeFun();
      this.getTransactionData();
    },
    clearTimeFun() {
      clearInterval(this.setTime);
      this.setTime = null;
    },
    toScan(hash){
      if(!hash) return;
      let url = 'https://zeescan.io/transaction/'+hash;
      window.open(url);
    }
  },
  beforeDestroy() {
    //停止计时
    this.clearTimeFun();
  },
};
</script>

<style lang="less">
.market-centent {
  position: relative;
  width: 100%;
  background: #241b67;
  padding-top: 100px;
  overflow: hidden;
  .market-box {
    background: #2e2a86;
    position: relative;
    padding:10px 0 0;
    margin:0;
    min-height:calc(100vh - 497px) ;
    box-sizing: border-box;
    overflow: hidden;
    .market-box-index {
      width: 1200px;
      margin: auto;
      background: #241b67;
      border-radius: 10px;
      .market-box-index-title {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        p {
          font-size: 14px;
          color: #5068e3;
          line-height: 50px;
          padding: 0 30px;
        }
        .p1 {
          flex: 1;
        }
        .p2 {
          cursor: pointer;
        }
      }
      .market-box-index-cent {
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        .item {
          position: relative;
          width: 25%;
          display: flex;
          margin-bottom: 20px;
          .loge {
            width: 80px;
            .loge-img {
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 60px;
              }
            }
            .name {
              width: 100%;
              font-size: 14px;
              color: rgba(176, 213, 255, 0.3);
              text-align: center;
            }
          }
          .assets-box {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .center {
              margin-left: 15px;
              .asstes {
                display: flex;
              /*   height: 40px; */
                .loge-img {
                  width: 20px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 100%;
                  }
                }
                p {
                  margin-left: 10px;
                  font-size: 16px;
                  color: #b0d5ff;
                  line-height: 30px;
                }
                span {
                  display: block;
                  margin-left: 10px;
                  color: rgba(176, 213, 255, 0.3);
                  line-height: 30px;
                }
              }
            }
          }
        }
      }
      .market-box-icon-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .market-box-icon {
          width: 40px;
          height: 18px;
          border-radius: 6px;
          background: rgba(176, 213, 255, 0.2);
          text-align: center;
          margin-bottom: 15px;
          cursor: pointer;
          position: relative;
          i {
            position: absolute;
            height: 18px;
            line-height: 18px;
            width:18px;
            font-size: 16px;
            color: #241b67;
            left:50%;
            margin-left:-9px;

          }
        }
      }
    }
    .transaction-list-pc {
      width: 1200px;
      margin: 10px auto;
      background: #241b67;
      border-radius: 10px;
      padding-top: 10px;
      .transaction-tlite-box {
        display: flex;
        width: 100%;
        padding: 5px 30px;
        box-sizing: border-box;
        border-bottom: 2px solid #2e2a86;
        p {
          font-size: 12px;
          color: #5068e3;
          text-align: center;
          &.p1 {
            width: 6%;
            text-align: left;
          }
          &.p2 {
            width: 10%;
            text-align: left;
          }
          &.p3 {
            width: 28%;
          }
          &.p4 {
            width: 28%;
          }
          &.p5 {
            width: 10%;
          }
          &.p6 {
            width: 18%;
            text-align: right;
          }
        }
      }
      .transaction-pagination {
        position: relative;
        overflow: hidden;
        padding: 50px 30px;
        text-align: right;
        display: block;
        .el-pagination.is-background .el-pager li{
           background: #2e2a86;
          color: #fff;
        }
        .el-pagination.is-background .el-pager li.active{
          background: #b0d5ff;
          color: #fff;
        }
        .btn-prev{
          background: #2e2a86;
          color: #fff;
        }
       .btn-next{
          background: #2e2a86;
          color: #fff;
        }
      }
    .transaction-pagination-h5{
      display: none;
    }
      .transaction-list-box {
        position: relative;
        .itme {
          display: flex;
          padding: 0 30px 0 20px;
          height: 60px;
          line-height: 60px;
          background: #241b67;
          .log-img {
            width: 6%;
            display: flex;
            justify-content: left;
            align-items: center;
            img {
              width: 40px;
            }
          }
          p {
            color: #5068e3;
            font-size: 12px;
            text-align: center;
            span {
              color: rgba(176, 213, 255, 0.3);
            }
            &.p1 {
              width: 6%;
            }
            &.p2 {
              width: 10%;
              text-align: left;
              padding-left: 10px;
              cursor: pointer;
            }
            &.p3 {
              width: 28%;
            }
            &.p4 {
              width: 28%;
            }
            &.p5 {
              width: 10%;
            }
            &.p6 {
              width: 18%;
              text-align: right;
            }
          }
          &:nth-child(even) {
            background: #2B2170;
          }
        }
      }
    }
    
  }
}
@media only screen and (max-width: 1279px) and (min-width: 1025px) {
.market-centent {
  position: relative;
  width: 100%;
  background: #241b67;
  padding-top: 100px;
  overflow: hidden;
  .market-box {
    background: #2e2a86;
    position: relative;
    padding:10px 0 0;
    margin:0;
    box-sizing: border-box;
    overflow: hidden;
    .market-box-index {
      width: 1025px;
      margin: auto;
      background: #241b67;
      border-radius: 10px;
      .market-box-index-title {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        p {
          font-size: 14px;
          color: #5068e3;
          line-height: 50px;
          padding: 0 30px;
        }
        .p1 {
          flex: 1;
        }
        .p2 {
          cursor: pointer;
        }
      }
      .market-box-index-cent {
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        .item {
          position: relative;
          width: 25%;
          display: flex;
          margin-bottom: 20px;
          .loge {
            width: 80px;
            .loge-img {
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 60px;
              }
            }
            .name {
              width: 100%;
              font-size: 14px;
              color: rgba(176, 213, 255, 0.3);
              text-align: center;
            }
          }
          .assets-box {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .center {
              margin-left: 15px;
              .asstes {
                display: flex;
              /*   height: 40px; */
                .loge-img {
                  width: 20px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 100%;
                  }
                }
                p {
                  margin-left: 10px;
                  font-size: 16px;
                  color: #b0d5ff;
                  line-height: 30px;
                }
                span {
                  display: block;
                  margin-left: 10px;
                  color: rgba(176, 213, 255, 0.3);
                  line-height: 30px;
                }
              }
            }
          }
        }
      }
      .market-box-icon-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .market-box-icon {
          width: 40px;
          height: 18px;
          border-radius: 6px;
          background: rgba(176, 213, 255, 0.2);
          text-align: center;
          margin-bottom: 15px;
          cursor: pointer;
          i {
            line-height: 18px;
            font-size: 16px;
            color: #241b67;
          }
        }
      }
    }
    .transaction-list-pc {
      width: 1025px;
      margin: 10px auto;
      background: #241b67;
      border-radius: 10px;
      padding-top: 10px;
      .transaction-tlite-box {
        display: flex;
        width: 100%;
        padding: 5px 30px;
        box-sizing: border-box;
        border-bottom: 2px solid #2e2a86;
        p {
          font-size: 12px;
          color: #5068e3;
          text-align: center;
          &.p1 {
            width: 6%;
            text-align: left;
          }
          &.p2 {
            width: 10%;
            text-align: left;
          }
          &.p3 {
            width: 28%;
          }
          &.p4 {
            width: 28%;
          }
          &.p5 {
            width: 10%;
          }
          &.p6 {
            width: 18%;
            text-align: right;
          }
        }
      }
      .transaction-pagination {
        position: relative;
        overflow: hidden;
        padding: 50px 30px;
        text-align: right;
      }
      .transaction-list-box {
        position: relative;
        .itme {
          display: flex;
          padding: 0 30px 0 20px;
          height: 60px;
          line-height: 60px;
          background: #241b67;
          .log-img {
            width: 6%;
            display: flex;
            justify-content: left;
            align-items: center;
            img {
              width: 40px;
            }
          }
          p {
            color: #5068e3;
            font-size: 12px;
            text-align: center;
            span {
              color: rgba(176, 213, 255, 0.3);
            }
            &.p1 {
              width: 6%;
            }
            &.p2 {
              width: 10%;
              text-align: left;
              padding-left: 10px;
            }
            &.p3 {
              width: 28%;
            }
            &.p4 {
              width: 28%;
            }
            &.p5 {
              width: 10%;
            }
            &.p6 {
              width: 18%;
              text-align: right;
            }
          }
          &:nth-child(even) {
            background: #2B2170;
          }
        }
      }
    }
 
  }
}
}

@media only screen and (max-width: 1024px) {
.market-centent {
  position: relative;
  width: 100%;
  background: #241b67;
  padding-top: 100px;
  overflow: hidden;
  .market-box {
    background: #2e2a86;
    position: relative;
    padding:10px 0 0;
    margin:0;
    box-sizing: border-box;
    overflow: hidden;
    .market-box-index {
      width: 327px;
      margin: auto;
      background: #241b67;
      border-radius: 10px;
      .market-box-index-title {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        p {
          font-size: 16px;
          color: #5068e3;
          line-height: 50px;
          padding: 0 30px;
        }
        .p1 {
          flex: 1;
        }
        .p2 {
          cursor: pointer;
        }
      }
      .market-box-index-cent {
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        .item {
          position: relative;
          width: 100%;
          display: flex;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(80, 104, 227, 0.3);
          .loge {
            width: 60px;
            .loge-img {
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 60px;
              }
            }
            .name {
              width: 100%;
              font-size: 12px;
              color: rgba(176, 213, 255, 0.3);
              text-align: center;
            }
          }
          .assets-box {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .center {
              margin-left: 15px;
              .asstes {
                display: flex;
              /*   height: 40px; */
                .loge-img {
                  width: 20px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 100%;
                  }
                }
                p {
                  margin-left: 10px;
                  font-size: 14px;
                  color: #b0d5ff;
                  line-height: 30px;
                }
                span {
                  display: block;
                  margin-left: 10px;
                  color: rgba(176, 213, 255, 0.3);
                  line-height: 30px;
                }
              }
            }
          }
        }
      }
      .market-box-icon-box {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .market-box-icon {
          width: 40px;
          height: 18px;
          border-radius: 6px;
          background: rgba(176, 213, 255, 0.2);
          text-align: center;
          margin-bottom: 15px;
          cursor: pointer;
          i {
            line-height: 18px;
            font-size: 16px;
            color: #241b67;
          }
        }
      }
    }
     .transaction-list-pc {
      width: 327px;
      margin: 10px auto;
      background: #241b67;
      border-radius: 10px;
      padding-top: 10px;
      .transaction-tlite-box {
        display: flex;
        width: 100%;
        padding: 5px 30px;
        box-sizing: border-box;
        border-bottom: 2px solid #2e2a86;
        p {
          font-size: 12px;
          color: #5068e3;
          text-align: center;
          &.p1 {
            width: 20%;
            text-align: left;
          }
          &.p2 {
            width: 40%;
            text-align: left;
          }
          &.p3 {
            width: 25%;
             display: none;
          }
          &.p4 {
            width: 25%;
             display: none;
          }
          &.p5 {
            width: 20%;
            display: none;
          }
          &.p6 {
            width: 40%;
            text-align: right;
          }
        }
      }
      .transaction-pagination {
        position: relative;
        overflow: hidden;
        padding: 30px 0px;
        text-align: right;
        display:none;
      }
      .transaction-list-box {
        position: relative;
        .itme {
          display: flex;
          padding: 0 30px 0 20px;
          height: 60px;
          line-height: 60px;
          background: #241b67;
          .log-img {
            width: 20%;
            display: flex;
            justify-content: left;
            align-items: center;
            img {
              width: 40px;
            }
          }
          p {
            color: #5068e3;
            font-size: 12px;
            text-align: center;
            span {
              color: rgba(176, 213, 255, 0.3);
            }
            &.p1 {
              width: 6%;
            }
            &.p2 {
              width: 40%;
              text-align: left;
              padding-left: 10px;
            }
            &.p3 {
              width: 25%;
               display: none;
            }
            &.p4 {
              width: 25%;
               display: none;
            }
            &.p5 {
              width: 10%;
              display: none;
            }
            &.p6 {
              width: 40%;
              text-align: right;
              overflow: hidden;
            }
          }
          &:nth-child(even) {
            background: #2B2170;
          }
        }
      }
      .transaction-pagination-h5{
        display: block;
        width:100%;
        padding:30px 0;
        .pagination-h5{
          display: flex;
          justify-content: center;
          align-items: center;
          p{
            font-size: 14px;
            color: #fff;
            margin:0 15px;
          }
        }
      }
    }

  }
}
}
</style>
