<template>
  <div class="main-push">

    <div class="content-container">
      <!-- 上边文章信息填写框     -->
      <div class="article-content">
        <el-form label-position="top" label-width="80px">
          <el-form-item label="文章名称">
            <el-input v-model="articleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="文章分类">
            <el-select v-model="classifyValue" placeholder="请选择">
              <el-option
                  v-for="item in classifyInfo"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>

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
        <el-button>提交</el-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "PushWeb",
  data(){
    return {
      articleForm:{
        name:"文章名称",
        content:"nihasdddddddddddddd",

      },//文章数据存储
      classifyInfo: [
        {
          id: '选项1',
          name: '黄金糕'
        }
      ],//文章表分类信息记录
      classifyValue:"",//分类名称
    }
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

.commit-container,.content-container{
  width: 100%;
  background-color: #323335;
  display: flex;
  justify-content: center;
}
.content-container{
  margin-bottom: 20px;
  height: calc(100vh - 40vh);
}
.commit-container{
  height: calc(100vh - 80vh);
}

/*文章信息样式*/
.article-content{
  height: 60%;
  width: 80%;
}

/**/
.article-commit{
  margin-top: 20px;
  height: 40%;
  width: 80%;
}


</style>
