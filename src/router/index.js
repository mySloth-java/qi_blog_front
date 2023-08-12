import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import IndexView from "@/views/IndexView.vue";

import IndexWeb from "@/components/Main/IndexWeb.vue";
import ArticleWeb from "@/components/Main/ArticleWeb.vue";

const routes = [
  {
    path: '/',
    name: 'IndexView',
    component:IndexView,
    redirect: '/index',
    children:[
      {
        path: '/index',
        name: 'IndexWeb',
        component: IndexWeb

      },
      {
        path: '/test',
        name: 'ArticleWeb',
        component: ArticleWeb,
      }
    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
