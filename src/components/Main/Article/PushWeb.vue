<template>
  <div class="main-push">

    <div class="content-container">
      <!-- 上边文章信息填写框     -->
      <div class="article-content">
        <el-form label-position="top" label-width="80px">
          <el-form-item label="文章分类">
            <el-select v-model="articleForm.id" placeholder="请选择">
              <el-option
                  v-for="item in classifyInfo"
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
                v-model="articleForm.content">
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
          <el-button type="primary" icon="el-icon-s-flag" size="mini" round>
            保存草稿
          </el-button>
          <el-button type="info" icon="el-icon-time" size="mini" round>
            定时发布
          </el-button>
          <el-button type="success" icon="el-icon-s-claim" size="mini" round @click="test">
            提交发布
          </el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

// import {addArticle} from "@/api/articles";

export default {
  name: "PushWeb",
  data(){
    return {
      articleForm:{

      },//文章数据存储
      classifyInfo: [
        {
          id: '选项1',
          name: '黄金糕'
        }
      ],//文章表分类信息记录
    }
  },
  methods:{
    test(){
      console.log(this.articleForm)
    }
    //发布文章
    // addArticleFront:function (){
    //   addArticle(this.articleForm).then(res =>{
    //
    //   })
    // }
  },
  mounted() {
    //从vuex中取出分类数据
    this.classifyInfo = this.$store.state.categories
  }
}
</script>

<style scoped>
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
  margin-left: 2px;
}


</style>
