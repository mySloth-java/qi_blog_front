<template>
  <div class="main">
    <!-- 文章编辑   -->
    <div class="main-edit">
      <el-form label-width="80px" size="small" label-position="top">
        <el-form-item label="文章标题">
          <el-input v-model="articleForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
          <mavon-editor ref="markDown" v-model="articleForm.content" :ishljs="true" @imgAdd="imgUploadFront"/>
        </el-form-item>
      </el-form>

    </div>

    <!-- 文章发布   -->
    <div class="main-push">

      <div class="content-container">
        <!-- 上边文章信息填写框     -->
        <div class="article-content">
          <el-form label-position="top" label-width="80px">
            <el-form-item label="文章分类">
              <el-select v-model="articleForm.classifyId" placeholder="请选择">
                <el-option
                    v-for="item in categories"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>

            <!-- TODO 文章标签选择         -->


            <!-- TODO 分析文本自动填充         -->
            <el-form-item label="文章概述">
              <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder="请输入内容"
                  v-model="articleForm.summarize">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <div class="commit-container">
        <!-- 下边提交按钮     -->
        <div class="article-commit">
          <!-- 上方填充内容       -->
          <div class="article-commit-top">

          </div>

          <!-- 下方按钮内容       -->
          <div class="article-commit-bottom">
            <el-button type="primary" icon="el-icon-s-flag" size="mini" round @click="test">
              保存草稿
            </el-button>
            <el-button type="info" icon="el-icon-time" size="mini" round>
              定时发布
            </el-button>
            <el-button type="success" icon="el-icon-s-claim" size="mini" round @click="addArticleFront">
              提交发布
            </el-button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import {addArticle} from "@/api/articles";
import {mapState} from "vuex";
import {imgUpLoad} from "@/api/file";

export default {
  name: "ArticleWeb",
  data(){
    return {
      articleForm:{
        classifyId:'',
        summarize:'',
        title:'',
        content:'',
      },//文章数据存储
    }
  },
  methods:{
    test(){
      console.log(this.$store.state.articleModel)
    },
    /**
     * 发布文章
     * TODO 校验
     */
    addArticleFront:function (){
      addArticle(this.articleForm).then(res =>{
        if(res.data.code === 200){
          //跳转到用户中心，等待后台审核
          console.log(res)
          this.articleForm = ''
        }
      }).catch(error =>{
        console.log('服务端请求失败!',error)
        this.$message.error('服务端请求失败')
      })
    },
    /**
     * markDown图片上传
     * @param pos
     * @param files
     */
    imgUploadFront: function (pos,files){
      let myVm = this.$refs.markDown

      imgUpLoad(files).then(res =>{
        //将返回的文本替换到文本原位置
        myVm.$img2Url(pos,res.data.data)
      }).catch(error =>{
        console.log('服务端请求失败!',error)
        this.$message.error('服务端请求失败')
      })
    },
  },
  computed:{
    //文章表分类信息记录
    ...mapState('articleModel',['categories']),
  },

}
</script>

<style scoped>
/*文章页面总样式*/
.main{
  width: 90%;
  height: 100%;
  display: flex;
  margin-top: 15px;
}


/**
编辑div样式
 */
/*编辑页总样式*/
.main-edit{
  width: 70%;
  height: 100%;
  margin-right: 15px;
}

/*清除标题和文本内容的间隔*/
.el-form-item--small.el-form-item{
  margin: 0;
}


/**
发布div样式
 */
/*发布页总样式*/
.main-push{
  width: 30%;
  height: 100%;
  color: white;

}

/*文本填写和提交居中样式*/
.commit-container,.content-container{
  width: 100%;
  background-color: #323335;
  display: flex;
  justify-content: center;
}
.content-container{
  margin-bottom: 20px;
  height: calc(100vh - 60vh);
}
.commit-container{
  height: calc(100vh - 80vh);
}

/*文章信息样式*/
.article-content{
  height: 60%;
  width: 90%;
}

/**/
.article-commit{
  margin-top: 20px;
  height: 40%;
  width: 90%;
}
/**/
.article-commit-top{
  height: 80%;
  background-color: aquamarine;
  margin-bottom: 15px;
}

/*控制提交按钮的间隔*/
.el-button+.el-button{
  margin-left: 0px;
}
</style>
