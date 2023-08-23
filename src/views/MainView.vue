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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

</style>
