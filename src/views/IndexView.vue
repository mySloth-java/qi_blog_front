<template>
  <div class="index">
    <div class="index-header">
      <HeaderView></HeaderView>
    </div>
    <div class="index-main">
      <MainView></MainView>
    </div>
    <div class="index-footer">
      <FooterView></FooterView>
    </div>
  </div>
</template>

<script>
import HeaderView from "@/views/HeaderView.vue";
import MainView from "@/views/MainView.vue";
import FooterView from "@/views/FooterView.vue";

export default {
  name: "IndexView",
  components: {FooterView, MainView, HeaderView}
}
</script>

<style scoped>

.index{
  width: 100vw;
  height: 100vh;
}
.index-header{
  width: 100vw;
  height: calc(100vh - 90vh);
}

.index-main{
  width: 100vw;
  height: calc(100vh - 25vh);
  background-color: gray;
}
.index-footer{
  width: 100vw;
  height: calc(100vh - 85vh);
  background-color: cornflowerblue;
}

</style>
