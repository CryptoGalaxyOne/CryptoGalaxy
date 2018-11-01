// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueI18n from 'vue-i18n'
import i18n from './assets/i18n';

import "@/assets/css/typo.css";
import "@/assets/css/common.less";

Vue.config.productionTip = false

 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
}).$mount('#app');
