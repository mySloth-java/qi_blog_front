<template>
  <div class="main">
    <EditWeb></EditWeb>
    <PushWeb></PushWeb>
  </div>
</template>

<script>
import EditWeb from "@/components/Main/Article/EditWeb.vue";
import PushWeb from "@/components/Main/Article/PushWeb.vue";

export default {
  name: "ArticleWeb",
  components: {PushWeb, EditWeb},

}
</script>

<style scoped>
/*文章页面总样式*/
.main{
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 15px;
}

</style>
