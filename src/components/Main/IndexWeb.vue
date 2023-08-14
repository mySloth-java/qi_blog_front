<template>
  <div class="main">
    <MainLeftWeb></MainLeftWeb>
    <MainRightWeb></MainRightWeb>
  </div>
</template>

<script>
import MainRightWeb from "@/components/Main/Index/MainRightWeb.vue";
import MainLeftWeb from "@/components/Main/Index/MainLeftWeb.vue";

export default {
  name: "IndexWeb",
  components: {MainRightWeb, MainLeftWeb},
}
</script>

<style scoped>
/*总样式*/
.main{
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 15px;
}


</style>
