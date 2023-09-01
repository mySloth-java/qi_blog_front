<template>
<!--  TODO 分页-->
  <div class="main-right">
    <div class="main-right-content" v-for="(content,index) in articles" :key="content.id">
      <!-- 左边内容       -->
      <div v-if="index %2 === 0" class="main-right-item" @click="getArticleDetail(content.id)">
        <img :src="content.img" class="main-right-item-img">
        <div class="main-right-item-div">
          <!-- TODO 1、展示内容：文章标题、发布时间(创建时间)、更新时间、分类、文章概述、浏览量、点赞量
                    2、时间格式-->
          <p class="content-title">{{content.title}}</p>
          <div>{{content.summarize}}</div>
          <ul>
            <li>{{content.createTime}}</li>
          </ul>
        </div>
      </div>

      <!-- 右边内容     -->
      <div v-else class="main-right-item" @click="getArticleDetail(content.id)">
        <div class="main-right-item-div">
          <p class="content-title">{{content.title}}</p>
          <div>{{content.summarize}}</div>
          {{content.createTime}}
          {{content.updateTime}}
        </div>
        <img :src="content.img" class="main-right-item-img">
      </div>
    </div>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        v-if="total !== 0">
    </el-pagination>
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
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容'
        },
        {
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容2'
        },{
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容'
        },
        {
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容2'
        },{
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容'
        },
        {
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容2'
        },{
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容'
        },
        {
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容2'
        },{
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容'
        },
        {
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容2'
        },{
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容'
        },
        {
          img: require('@/assets/img/main-login_750x300.png'),
          text:'测试内容2'
        },
      ],
      total: 0,
    }
  },
  methods:{
    /**
     * 文章信息列表获取
     */
    getArticlesFront: function (){
      getArticles(this.pageNum,this.pageSize).then(res =>{
        //1、判断状态码
        if(res.data.code !== 200){
          this.$message.error("文章信息获取异常!请联系管理员")
        }else {
          //为变量赋值，并存储到state中
          this.articles = res.data.data.rows
          this.total = res.data.data.total
          this.$store.state.articleModel.infos = this.articles
        }
      }).catch(error =>{
        console.log('服务端请求失败!',error)
        this.$message.error('服务端请求失败')
      })
    },
    /**
     * 文章详情点击
     */
    getArticleDetail: function (id){
      this.$router.push({
        path:'articleDetail',
        query:{
          id:id
        }
      })
    },
    handleSizeChange(pageSize){
      this.pageSize = pageSize
      this.getArticlesFront()
    },
    handleCurrentChange(pageNum){
      this.pageNum = pageNum
      this.getArticlesFront()
    }


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
  /*background-color: #323335;*/
  backdrop-filter: blur(20px);
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  color: white;
  border-radius: 15px;
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
  cursor: pointer;
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
  padding: 0 10px 0 10px;

}
/*文章标题样式*/
.content-title{
  font-size: 20px;
  color: black;
}




</style>
