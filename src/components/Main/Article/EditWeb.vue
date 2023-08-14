<template>
  <div class="main-edit">
    <mavon-editor ref="markDown" v-model="content" :ishljs="true" @imgAdd="imgUploadFront"/>
  </div>
</template>

<script>
import {imgUpLoad} from "@/api/file";

export default {
  name: "EditWeb",
  data(){
    return {
      content:"",
    }
  },
  methods:{
    imgUploadFront: function (pos,files){
      let myVm = this.$refs.markDown

      imgUpLoad(files).then(res =>{
        console.log('图片数据:',res.data)
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

</style>
