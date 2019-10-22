import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import api from './plugins/api.js'
import { HOSTNAME } from './config.js'
import './assets/styles/main.scss';

Vue.config.productionTip = false;

Vue.prototype.$api = api;
Vue.prototype.$hostname = HOSTNAME;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
