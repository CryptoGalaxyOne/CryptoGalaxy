import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {
  getQuery
} from "@/utils";

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: getQuery('lan') || 'en',
  messages: {
    'en': require('./en.json'),
    'cn': require('./cn.json')
  }
})

if (module.hot) {
  module.hot.accept(['./en.json', './cn.json'], () => {
    i18n.setLocaleMessage('en', require('./en.json'))
    i18n.setLocaleMessage('cn', require('./cn.json'))
    console.log('hot reload', this, arguments)
  })
}

export default i18n
