<template>
<!--  TODO 左右内容总div并不会随着动态div而撑开高度-->
  <div class="main-right">
    <div class="main-right-content" v-for="(content,index) in articles" :key="content.id">
      <!-- 左边内容       -->
      <div v-if="index %2 === 0" class="main-right-item">
        <img :src="content.img" class="main-right-item-img">
        <div class="main-right-item-div">
          <!-- TODO 1、展示内容：文章标题、发布时间(创建时间)、更新时间、分类、文章概述、浏览量、点赞量
                    2、时间格式-->
          {{content.title}}
          {{content.summarize}}
          {{content.createTime}}
          {{content.updateTime}}
        </div>
      </div>

      <!-- 右边内容     -->
      <div v-else class="main-right-item">
        <div class="main-right-item-div">
          {{content.title}}
          {{content.summarize}}
          {{content.createTime}}
          {{content.updateTime}}
        </div>
        <img :src="content.img" class="main-right-item-img">
      </div>
    </div>
  </div>
</template>

<script>
import {getArticles} from "@/api/articles";

export default {
  name: "MainRightWeb",
  data(){
    return {
      //TODO 图片懒加载
      pageNum: 1,
      pageSize: 10,
      articles:[
        {
          img: require('@/assets/main-login_750x300.png'),
          text:'测试内容'
        },
        {
          img: require('@/assets/main-login_750x300.png'),
          text:'测试内容2'
        },
      ]
    }
  },
  methods:{
    //文章信息获取
    getArticlesFront: function (){
      getArticles(this.pageNum,this.pageSize).then(res =>{
        //1、判断状态码
        if(res.data.code !== 200){
          this.$message.error("文章信息获取异常!请联系管理员")
        }else {
          //为变量赋值，并存储到vuex中
          this.articles = res.data.data.rows
          this.$store.state.articles = this.articles
        }
      })
    },

  },
  mounted() {
    this.getArticlesFront()
  }
}
</script>

<style scoped>
/*右边样式*/
.main-right{
  width: 70%;
  height: auto;
  background-color: #323335;
  padding: 15px;
  box-sizing: border-box;
}

/*右边子内容样式*/
.main-right-content{
  width: 100%;
  height: auto;
  background-color:darkslategray;
}

/*子内容样式*/
.main-right-item{
  width: 100%;
  height: auto;
  background-color: antiquewhite;
  margin-bottom: 10px;
  display: flex;
}

/*文章列表图片样式*/
.main-right-item-img{
  width: 30%;
  height: 100%;
}


/*文章样式*/
.main-right-item-div{
  width: 70%;
  height: 100%;
  background-color: green;
}


</style>
