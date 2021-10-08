import Vue from 'vue'
import App from './App.vue'
import './index.css'
import { store } from './store/index'

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
