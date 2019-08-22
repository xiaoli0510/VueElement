// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
// 字体图标
import './icons'

import '@/styles/index.scss'//global css

import App from './App'
import router from './router'
import store from './store'
Vue.config.devtools = true;

Vue.use(ElementUI,{locale})
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el:'#app',
  store,
  router,
  components:{App},
  template:'<App/>'
})
