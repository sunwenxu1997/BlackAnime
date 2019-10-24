// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import anime from "animejs/lib/anime.es.js";
import "./assets/icon/iconfont.css" // 字符图标
import "./assets/icon/iconfont.js"
import "./assets/css/index.scss"
Vue.config.productionTip = false

Vue.prototype.$anime = anime;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
