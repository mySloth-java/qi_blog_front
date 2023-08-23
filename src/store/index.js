import Vue from 'vue'
import Vuex from 'vuex'
import articleModel from './modules/user';
import userModel from './modules/user'


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    articleModel,//文章模块
    userModel,//用户模块
  }
})
