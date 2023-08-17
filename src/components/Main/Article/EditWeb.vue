<template>
  <div class="main-edit">
    <el-form label-width="80px" size="small" label-position="top">
      <el-form-item label="文章标题">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <mavon-editor ref="markDown" v-model="form.content" :ishljs="true" @imgAdd="imgUploadFront"/>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import {imgUpLoad} from "@/api/file";

export default {
  name: "EditWeb",
  data(){
    return {
      form:{},
    }
  },
  methods:{
    imgUploadFront: function (pos,files){
      let myVm = this.$refs.markDown

      imgUpLoad(files).then(res =>{
        //将返回的文本替换到文本原位置
        myVm.$img2Url(pos,res.data.data)
      })
    }
  }
}
</script>

<style scoped>
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
</style>
