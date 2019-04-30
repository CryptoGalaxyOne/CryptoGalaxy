import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//axios
import axios from 'axios';
import VueAxios from 'vue-axios';
import qs from "qs";
Vue.use(VueAxios,axios)

export default new Vuex.Store({
    state: {
      refpriceList:[],
      transactionList:[],
      total:0
    },
    mutations: {
      setRefpriceList(state, data){
        state.refpriceList = data;
      },
      setTotal(state, total){
        state.total = total;
      },
      setTransactionList(state, data){
        state.transactionList = data;
      },
    },
    actions: {
      
      getRefprice({state,commit}){
          axios({
             url:"https://52.15.77.2/api/cg/trademarket/refprice",
             methods:'get', 
          }).then(function(response){
              if(response.data.code == 1){
                commit("setRefpriceList",response.data.data);
              }
          }).catch(function(error){
  
          })
      },
    //获取交易列表
  getTransactionList({ state, commit }, pageId) {
    //https://api.zeescan.io/api/v1/explorer/transactionlist/15/
    //https://api.zeescan.io/api/v1/explorer/transactionslist/15/
    axios({
      url: "https://api.zeescan.io/api/v1/explorer/transactionslist/15/" + pageId,
      method: "get",
    }).then(function (response) {
      if (response.data.Result.TxnList.length > 0) {
        commit("setTotal", response.data.Result.Total);
        commit("setTransactionList", response.data.Result.TxnList);
      }
    }).catch(function (error) {
    });
  },
    }
  
  })