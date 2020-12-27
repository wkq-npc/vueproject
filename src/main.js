import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./api/http"
import "vant/lib/index.css"
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.prototype.$http=axios
// 页面刷新的时候去同步jwt
let jwt = localStorage.getItem("jwt");
if (jwt) {
    store.commit("setJwt", jwt);
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
