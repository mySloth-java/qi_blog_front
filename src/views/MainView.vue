<template>
  <div class="main">
    <div class="main-left">
      <!-- TODO 登陆div     -->
      <div class="main-login main-div">
        <!-- 背景图       -->
        <img src="../assets/main-login_750x300.png" style="width: 100%;height: 40%;">
        <!-- 登陆展示       -->
        <div class="main-login-item">
        <!-- 1、签到；2、积分；         -->
          登陆前和登陆后展示
        </div>
      </div>

      <!-- 公告div     -->
      <div class="main-notice main-div">
        <span class="title-text"><i class="el-icon-phone-outline"></i>公告</span>
        <ul class="main-notice-content" v-for="(value,index) in list" :key="index">
          <li><i class="el-icon-message-solid"></i>{{value}}</li>
        </ul>
      </div>
    </div>

    <!-- 分类div   -->
    <div class="main-">

    </div>

    <!-- 站点统计div   -->
    <div class="main-">

    </div>


    <div class="main-right">
      右边内容
    </div>
  </div>
</template>

<script>
export default {
  name: "MainView",
  data(){
    return {
      list:['本站点所用技术:Spring、SpringBoot、Swagger、ElasticSearch、Vue2、Mybatis',
        '本站点免费，转载本博客文章同需要著名出处，不需要请示，但一定要注明出处',
        '欢饮来到我的博客网站，希望能帮助到大家，也请大家多多推广我的网站，希望有甲方看到']
    }
  }
}
</script>

<style scoped>
/*总样式*/
.main{
  width: 90%;
  height: 100%;
  display: flex;
  font-size: 14px;
}

/*左边样式*/
.main-left{
  height: 100%;
  width: 30%;
  background-color: #f4f4f4;
  margin-right: 15px;
}
/*小div通用样式*/
.main-div{
  width: 100%;
  height: auto;
  border-radius: 15px;
  margin-bottom: 10px;
}
/*div标题通用样式*/
.title-text{
  font-size: 16px;
  margin: 20px 0 10px 10px;
}

/*登陆样式*/
.main-login{
  background-color: aqua;

}
/*公告样式*/
.main-notice{
  display: flex;
  flex-direction: column;
  background-color: sienna;
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


/*右边样式*/
.main-right{
  width: 70%;
  height: 100%;
  background-color: #323335;
}

</style>
