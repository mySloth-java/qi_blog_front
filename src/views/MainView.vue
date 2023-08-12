<template>
  <div class="main-center">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "MainView",

}
</script>

<style scoped>
/*总样式*/
.main-center{
  width: 90%;
  height: 100%;
  display: flex;
  font-size: 14px;
}

</style>
