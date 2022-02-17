import Vue from 'vue'
import App from './App'
import router from 'router'
import store from "./store";
import FastClick from 'fastclick'
import toast from "components/common/toast";
import LazyLoad from 'vue-lazyload'


Vue.use(toast)
FastClick.attach(document.body)
Vue.use(LazyLoad,{
  loading:require('./assets/img/cart/1.jpg')
})
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render:h => h(App)
}).$mount('#app')
