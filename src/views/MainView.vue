<template>
  <div class="main">
    <MainLeftWeb></MainLeftWeb>
    <MainRightWeb></MainRightWeb>
  </div>
</template>

<script>
import MainLeftWeb from "@/components/Main/MainLeftWeb.vue";
import MainRightWeb from "@/components/Main/MainRightWeb.vue";

export default {
  name: "MainView",
  components: {MainRightWeb, MainLeftWeb},

}
</script>

<style scoped>
/*总样式*/
.main{
  width: 90%;
  height: 100%;
  display: flex;
  font-size: 14px;
}
</style>
