<template>
  <div class="article-detail">

    <!-- 文章预览   -->
    <mavon-editor
    class="md" :subfield="false" :default-open="'preview'" :toolbars-flag="false"
    :editable="false" :scroll-style="true" :ishljs="true" :navigation="true"
    :value="info.content">
    </mavon-editor>

    <!-- TODO 1、评论；2、发布时间等信息  -->
  </div>
</template>

<script>

import {getArticleInfo} from "@/api/articles";

export default {
  name: "ArticleDetail",
  data(){
    return {
      info:{}
    }
  },
  methods: {
    getArticleInfoFront:function (){
      getArticleInfo(this.$route.query.id).then(res =>{
        if(res.data.code === 200){
          this.info = res.data.data
          console.log(this.info)
        }
      }).catch(error =>{
        console.log('服务端请求失败!',error)
        this.$message.error('服务端请求失败')
      })
    }
  },
  created() {
    this.getArticleInfoFront()
  }
}
</script>

<style scoped>
.article-detail{
  width: 100%;
}

</style>
