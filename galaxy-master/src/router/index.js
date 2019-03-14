import Vue from 'vue';
import Router from 'vue-router';
import HomeHandler from '@/components/HomeHandler/index.js'
import InviteHandler from '@/components/InviteHandler/InviteHandler.vue';
import ShareCardHandler from '@/components/InviteHandler/ShareCardHandler.vue';
import ShareHandler from '@/components/ShareHandler/index.js';
import DownloadHandler from '@/components/DownloadHandler/index.js';
/* import NoticeHandler from '@/components/NoticeHandler/index.js'; */
import PrivacyPolicy from '@/components/PrivacyPolicy/index.js';
import TermsOfUse from '@/components/TermsOfUse/index.js';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: HomeHandler
  }, {
    path: '/invite/:code',
    name: 'invite',
    component: InviteHandler
  }, , {
    path: '/sc/:code/:type/:screenshot?',
    name: 'sharecard',
    component: ShareCardHandler
  }, {
    path: '/share/:code',
    name: 'share',
    component: ShareHandler
  }, {
    path: '/ios',
    name: 'download',
    component: DownloadHandler
  },{
    path: '/PrivacyPolicy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },{
    path: '/TermsOfUse',
    name: 'TermsOfUse',
    component: TermsOfUse
  },{
    path: '*',
    name: 'home',
    component: HomeHandler
  }]
})
