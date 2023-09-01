<template>
  <div class="article-detail">

    <!-- 文章预览   -->
    <mavon-editor
    class="md" :subfield="false" :default-open="'preview'" :toolbars-flag="false"
    :editable="false" :scroll-style="true" :ishljs="true" :navigation="true"
    :value="info.content" v-if="info.content">
    </mavon-editor>

    <div class="article-comment">
      <!-- 评论发布     -->
      <div class="article-comment-title">评论</div>
      <div class="article-comment-input">
        <el-input type="textarea" placeholder="请文明发言哦" v-model="content" :rows="3"></el-input>
        <el-button size="small" @click="putComment(-1,-1,-1)">发布</el-button>
      </div>

      <!-- 评论内容，二级评论      -->
      <div class="article-comment-item" v-for="comment in comments" :key="comment.id">
        <div class="article-comment-parent">
          <div>
            <img :src="img" class="comment-user-img">
          </div>
          <div class="article-comment-detail">
            <b>{{comment.name}}</b>
            <p>{{comment.content}}</p>
            {{comment.createTime}}
          </div>
        </div>
        <div class="article-comment-children" v-if="comment.children.length">
          <div class="article-comment-children-item"
               v-for="children in comment.children" :key="children.id">
            <div>
              <img :src="img" class="comment-user-img">
            </div>
            <div class="article-comment-detail">
              <b>{{children.name}}</b>
              <p>{{children.content}}</p>
              {{children.createTime}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {getArticleInfo} from "@/api/articles";
import {addComment, getComment} from "@/api/comments";

export default {
  name: "ArticleDetail",
  data(){
    return {
      info:{},
      img: require('@/assets/img/main-login_750x300.png'),
      comments:[],//评论内容
      content:'',//发布评论内容
      pageNum:1,
      pageSize:10,
      articleId:this.$route.query.id,//文章id
    }
  },
  methods: {
    /**
     * 获取文章详细信息
     */
    getArticleInfoFront:function (){
      getArticleInfo(this.articleId).then(res =>{
        if(res.data.code === 200){
          this.info = res.data.data
        }
      }).catch(error =>{
        console.log('服务端请求失败!',error)
        this.$message.error('文章信息接口请求失败')
      })
    },
    /**
     * 评论信息获取
     */
    getCommentFront:function (){
      getComment(this.articleId,this.pageNum,this.pageSize).then(res =>{
        if(res.data.code !== 200){
          this.$message.error("评论信息服务端错误:"+res.data.msg)
          return
        }
        this.comments = res.data.data
      }).catch(error =>{
        console.log('服务端请求失败!',error)
        this.$message.error('评论信息接口请求失败')
      })
    },
    /**
     * 发布评论
     */
    putComment:function (parentId,toCommentId,toUserId){
      const data ={
        articleId:this.articleId,
        content:this.content,
        parentId,
        toCommentId,
        toUserId,
      }
      addComment(data).then(res =>{
        console.log('评论信息:',res)
      })
    }
  },
  created() {
    this.getArticleInfoFront()
    this.getCommentFront()
  }
}
</script>

<style scoped>
.article-detail{
  width: 90%;
  font-size: 14px;
}
/*评论表总div样式*/
.article-comment{
  margin: 20px 0;
}
/*评论表标题样式*/
.article-comment-title{
  font-size: 20px;
  border-bottom: 1px solid orangered;
  padding: 10px 0;
}
/*评论添加样式*/
.article-comment-input{
  margin-top: 10px;
  text-align: right;
}
/*评论样式*/
.article-comment-item{
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  /*display: flex;*/
}
/*根评论样式*/
.article-comment-parent{
  display: flex;
}
/*子评论样式*/
.article-comment-children{
  margin-left: 50px;
  margin-top: 20px;
  background-color: #f0f0f0;
  padding: 10px 10px;
  border-radius: 20px;
}
/*子评论遍历样式*/
.article-comment-children-item{
  margin-bottom: 10px;
  display: flex;
}

/*评论表用户头像*/
.comment-user-img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
/*评论详情展示*/
.article-comment-detail{
  margin-left: 10px;
}

</style>
