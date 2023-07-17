<template>
  <div class="header-search">
    <el-input
        size="small"
        placeholder="输入内容搜索"
        suffix-icon="el-icon-search"
        v-model="test">
    </el-input>
  </div>
</template>

<script>
export default {
  name: "HeaderSearchWeb",
  data(){
    return {
      test:""
    }
  }
}
</script>

<style scoped>

/*搜索按钮样式*/
.header-search .el-input__inner{
  border-radius: 20px;
}

</style>
