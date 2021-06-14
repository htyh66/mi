import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import vueAxios from 'vue-axios';
import env from "./env.js"


axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// axios.defaults.baseURL = env.baseURL;

//接口错误拦截
axios.interceptors.response.use((response) => {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = "/login"
  } else {
    alert(000000000000)
  }
})


Vue.use(vueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
