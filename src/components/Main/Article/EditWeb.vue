<template>
  <div class="main-edit">
    测试
    <mavon-editor v-model="content" />
    <button>Print Content In Console</button>
  </div>
</template>

<script>
export default {
  name: "EditWeb",
  data(){
    return {
      content: "",
    }
  }
}
</script>

<style scoped>

</style>
