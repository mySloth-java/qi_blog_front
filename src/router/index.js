import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import IndexView from "@/views/IndexView.vue";

const routes = [
  {
    path: '/',
    name: 'IndexView',
    component:IndexView,
    children:[
      {
        path: '/index',
        name: 'IndexView',
        component:IndexView,

      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
