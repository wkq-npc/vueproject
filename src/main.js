import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "../src/api/http"
Vue.config.productionTip = false
import "vant/lib/index.css"
import '../rem'
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
