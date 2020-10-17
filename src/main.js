import Vue from 'vue'
import ElementUI  from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui样式依赖 https://github.com/ElementUI/theme-chalk
import 'element-theme-chalk'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
