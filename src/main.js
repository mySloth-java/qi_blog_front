import Vue from 'vue'
import App from './App.vue'


import router from './router'
import store from './store'

//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

//引入markdown编辑器
import mavonEditor from 'mavon-editor'
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
