<template>
  <div class="header">
    <!--  log标志  -->
    <img src="../assets/logo.png" class="header-logo">
    <!-- 导航菜单   -->
    <el-menu mode="horizontal">
      <el-menu-item index="/index">首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">文章</template>
        <el-menu-item index="/notes">笔记</el-menu-item>
        <el-menu-item index="/infos">信息收集</el-menu-item>
        <el-menu-item index="/articles">文章</el-menu-item>
      </el-submenu>

      <!--鱼皮的sql创建工具、chatGPT、视频在线播放、网盘、书籍-->
      <el-submenu index="2">
        <template slot="title">实验</template>
        <el-menu-item index="/sql">SQL</el-menu-item>
        <el-menu-item index="/gpt">GPT</el-menu-item>
        <el-menu-item index="/books">书籍清单</el-menu-item>
        <el-menu-item index="/books">在线网盘</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">艺术</template>
        <el-menu-item index="/sql">AI绘画</el-menu-item>
        <el-menu-item index="/gpt">第九艺术</el-menu-item>
        <el-menu-item index="/books">摄影</el-menu-item>
      </el-submenu>
      <el-menu-item index="/about">在线聊天室</el-menu-item>
      <el-menu-item index="/books">商城</el-menu-item>
      <!--技能介绍，网站特点、社交账号-->
      <el-menu-item index="/about">关于</el-menu-item>
    </el-menu>

    <!-- 搜索框   -->
    <div class="header-right">
      <div class="header-login">
        登陆
      </div>
      <div class="header-search">
        <el-autocomplete
            class="inline-input"
            placeholder="请输入内容"
        ></el-autocomplete>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderView"
}
</script>

<style scoped>
/*父样式*/
.header{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

/*logo 样式*/
.header-logo{
  width: 5%;
  height: 80%;
  padding: 10px;
}

/*导航栏样式*/
.header .el-menu{
  height: 100%;
  width:55%;
}
/*导航栏子内容边框样式*/
.header .el-menu .el-menu-item:first-child:before{
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2px; /* 调整边框的宽度 */
  height: 40%; /* 调整边框的高度 */
  background-color: #EAEDF4FF; /* 调整边框的颜色 */
}

/*右边样式*/
.header-right{
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
}
/*登陆样式*/
.header-login{
  width: 30%;
}
/*搜索样式*/
.header-search{
  width: 70%;

}

</style>
