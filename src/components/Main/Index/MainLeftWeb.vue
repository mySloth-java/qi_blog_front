<template>
  <div class="main-left">
    <div class="main-login main-div">
      <!-- 背景图       -->
      <div class="main-login-img">
        <img :src="login_img" style="width: 100%;height: 40%;">
      </div>
      <!-- 登陆展示       -->
      <div class="main-login-item">
        <!-- 已登录       -->
        <div class="main-login-item-container" v-if="user.name">
          aa
        </div>

        <!-- 未登陆       -->
        <div class="main-login-item-container" v-else>
          <span style="font-size: 18px;color: #B3B5BAFF;padding: 20px 0">你好 请登陆</span>
          <p>
            <el-button size="mini" icon="el-icon-edit" @click="login">登陆</el-button>
            <el-button size="mini" icon="el-icon-edit">注册</el-button>
          </p>
        </div>
      </div>
    </div>

    <!-- TODO 登陆和注册   -->
    <el-dialog title="登陆" :visible.sync="loginDialogFlag" width="30%">
      <div class="login-dialog">
        <img :src="login_img" style="width: 70%;margin-bottom: 20px">
        <div>
          <el-input placeholder="用户名或者邮箱" size="small" v-model="account"
                    style="width: 90%;padding: 10px 0">
          </el-input>
          <el-input placeholder="登陆密码" size="small" show-password v-model="password"
                    style="width: 90%;padding: 10px 0">
          </el-input>

          <div style="display: flex;justify-content: space-between">
            <el-checkbox v-model="remember">记住登陆</el-checkbox>
            <a>找回密码</a><a>注册账号</a>
          </div>
          <div>
            <el-button>登陆</el-button>
          </div>

        </div>
      </div>
    </el-dialog>

    <!-- 公告div     -->
    <div class="main-notice main-div">
      <span class="title-text"><i class="el-icon-bell"></i>公告</span>
      <ul class="main-notice-content" v-for="(value,index) in list" :key="index">
        <li><i class="el-icon-message-solid"></i>{{value}}</li>
      </ul>
    </div>

    <!-- 分类标签div   -->
    <div class="main-classify main-div">
      <span class="title-text main-classify-line"><i class="el-icon-collection-tag"></i>标签</span>
      <div class="main-classify-content">
        <el-tag type="info" color="white" v-for="(category) in categories" :key="category.id">
<!--          TODO 分类详情页面跳转-->
          <a href="https://baidu.com">{{category.name}}</a>
        </el-tag>
      </div>
    </div>

    <!-- 热门推荐文章div     -->
    <div class="main-hot main-div">
      <span class="title-text"><i class="el-icon-hot-water"></i>热门文章</span>
      <div class="main-hot-bottom">
        <div class="main-hot-content" v-for="(text,index) in content" :key="index">
          <img :src="hot_img" class="main-hot-img">
          <div class="main-hot-content-item">
            内容阿萨大大大大大大大水水水水水水水水水水水水水水的大大大大大大阿三顶顶顶顶顶顶顶顶顶顶哇大大{{text}}
          </div>
        </div>
      </div>
    </div>

    <!-- 站点统计div   -->
    <div class="main-statistics main-div">
      <span class="title-text"><i class="el-icon-data-line"></i>统计</span>
      <ul class="main-statistics-content">
        <li>访问量:</li>
        用户量
        内容数
        运行天数
      </ul>
    </div>
  </div>
</template>

<script>
import {getCategory} from "@/api/category";

export default {
  name: "MainLeftWeb",
  data(){
    return {
      login_img: require('@/assets/main-login_750x300.png'),//登陆div图片引入
      hot_img: require('@/assets/main-login_750x300.png'),//热门文章div图片引入
      list:['本站点所用技术:Spring、SpringBoot、Swagger、ElasticSearch、Vue2、Mybatis',
        '本站点免费，转载本博客文章同需要著名出处，不需要请示，但一定要注明出处',
        '欢饮来到我的博客网站，希望能帮助到大家，也请大家多多推广我的网站，希望有甲方看到'],
      categories:[],//文章分类信息
      content:['1','2','3','4','5'],
      user:{
        name:''
      },//用户信息
      loginDialogFlag:false,//登陆dialog控制
      account:'',//账户
      password:'',//用户密码
      remember:false,
    }
  },
  methods:{
    /**
     * 分类信息获取
     */
    getCategoryFront: function (){
      getCategory().then(res =>{
        if(res.data.code !== 200){
          this.$message.error("文章分类获取异常!")
        }else {
          this.categories = res.data.data
          //存入state中
          this.$store.state.articleModel.categories = this.categories
        }
      }).catch(error =>{
        console.log('服务端请求失败!',error)
        this.$message.error('服务端请求失败')
      })
    },
    /**
     * 登陆
     */
    login(){
      this.loginDialogFlag = true
    }
  },
  created() {
    this.getCategoryFront()
  }
}
</script>

<style scoped>
/*左边样式*/
.main-left{
  height: 100%;
  width: 30%;
  margin-right: 15px;
  font-size: 0;
}
/*小div通用样式*/
.main-div{
  width: 100%;
  height: auto;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: #323335;
  color: white;
}

/*div标题通用样式*/
.title-text{
  font-size: 16px;
  margin: 20px 0 10px 10px;
}

/*登陆样式*/
.main-login{

}
.main-login-img{
  width: 100%;
  height: 20%;
  overflow: hidden;
  border-radius: 15px;
}

/*用户登陆样式*/
.main-login-item{
  width: 100%;
  background-color: #323335;
  display: flex;
  justify-content: center;
  border-radius: 15px;
}
.main-login-item-container{
  width: 70%;
  margin:40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/*登陆提交div样式*/
.login-dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/*登陆div样式*/
/deep/.el-dialog{
  border-radius: 15px;
  opacity: 0.9;
}

/*公告样式*/
.main-notice{
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
/*公告文章内容样式*/
.main-notice-content{
  list-style-type: none;
  margin: 0;
  padding-left: 20px;
  text-indent: 10px;
}
.main-notice-content li{
  margin: 2px 10px 2px 0;
  word-wrap: break-word;
}
.main-notice-content:last-child{
  margin-bottom: 10px;
}

/*分类标签样式*/
.main-classify{
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
/*分类标签内容样式*/
.main-classify-content .el-tag{
  margin: 0 5px 5px 10px;
}
/*分类下划线样式*/
.main-classify-line{
  border-bottom: 1px solid #eaedf4;
  padding-bottom: 5px;
}

/*热门文章样式*/
.main-hot{
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
/*热门文章内容父div样式*/
.main-hot-bottom{
  flex-direction: column;
  align-items: center;
  display: flex;
}
/*热门文章内容*/
.main-hot-content{
  height: 20%;
  width: 90%;
  background-color: gray;
  justify-content: center;
  display: flex;
  margin: 10px;
}
/*热门文章图表样式*/
.main-hot-img{
  width: 30%;
  height: auto;
}

/*站点统计样式*/
.main-statistics{
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
</style>
