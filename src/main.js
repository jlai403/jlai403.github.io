import Vue from 'vue'
import App from './App'
import router from './router'

// client npm packages
import 'font-awesome/css/font-awesome.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
