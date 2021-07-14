import Vue from 'vue'
import VueRouter from 'vue-router'
import './assets/css/tailwind.css'
import './assets/css/app.css'
import App from './App.vue'
import ScreenSize from 'screen-size-vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(ScreenSize)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
