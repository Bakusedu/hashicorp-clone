import Vue from 'vue'
import VueRouter from 'vue-router'
import './assets/css/tailwind.css'
import './assets/css/app.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
