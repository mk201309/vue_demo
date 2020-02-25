import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

// axios.defaults.baseURL = 'https://randomuser.me';
axios.defaults.baseURL = 'http://api.rd3dev.com';
axios.defaults.headers.common['Token'] = '1186b40ad9232eaf8a9e91572a42832392e3ec1177531c019204e3bdeaa3d372';

Vue.use(VueAxios,axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
