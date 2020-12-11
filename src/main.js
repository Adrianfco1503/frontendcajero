// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'// nuevas lineas agregadas para la interfax
import router from './router'// nuevas lineas agregadas para la interfaz
Vue.use(vueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,// nueva linea agregada para la interfax
  el: '#app',
  components: { App },
  template: '<App/>'
})
