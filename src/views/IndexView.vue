<template>
  <div class="index" ref="vantaRef">
    <div class="index-header">
      <HeaderView></HeaderView>
    </div>
    <div class="index-main">
      <MainView></MainView>
    </div>
<!--    <div class="index-footer">-->
<!--      <FooterView></FooterView>-->
<!--    </div>-->
  </div>
</template>

<script>
import HeaderView from "@/views/HeaderView.vue";
import MainView from "@/views/MainView.vue";


// import * as THREE from 'three';
// import VantaNet from "vanta/src/vanta.net";
// import FooterView from "@/views/FooterView.vue";

export default {
  name: "IndexView",
  components: { MainView, HeaderView},
  // mounted() {
  //   this.vantaEffect = VantaNet({
  //     el: this.$refs.vantaRef,
  //     THREE: THREE
  //   })
  // },
  // beforeDestroy() {
  //   if (this.vantaEffect) {
  //     this.vantaEffect.destroy()
  //   }
  // },

}
</script>

<style scoped>

.index{
  width: 100vw;
  min-height: 100vh;
  font-size: 0;
}
.index-header{
  width: 100vw;
  min-height: calc(100vh - 90vh);
}
/*全局背景图*/
.index-main{
  width: 100vw;
  min-height: calc(100vh - 10vh);
  background-image: url("@/assets/img/index_bk_3.png");
  background-size: cover;
}
.index-footer{
  width: 100vw;
  min-height: calc(100vh - 85vh);
  background-color: cornflowerblue;
}

</style>
