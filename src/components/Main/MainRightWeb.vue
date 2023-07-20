<template>
<!--  TODO 左右内容总div并不会随着动态div而撑开高度-->
  <div class="main-right">
    <div class="main-right-content" v-for="(content,index) in article" :key="index">
      <!-- 左边内容       -->
      <div v-if="index %2 === 0" class="main-right-item">
        <img :src="content.img" class="main-right-item-img">
        <div class="main-right-item-div">
          {{content.text}}
        </div>
      </div>

      <!-- 右边内容     -->
      <div v-else class="main-right-item">
        <div class="main-right-item-div">
          {{content.text}}
        </div>
        <img :src="content.img" class="main-right-item-img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainRightWeb",
  data(){
    return {
      article:[
        {
          img: require('@/assets/main-login_750x300.png'),
          text:'测试内容'
        },
        {
          img: require('@/assets/main-login_750x300.png'),
          text:'测试内容2'
        },
        {
          img: require('@/assets/main-login_750x300.png'),
          text:'测试内容3'
        },
        {
          img: require('@/assets/main-login_750x300.png'),
          text:'测试内容'
        },
        {
          img: require('@/assets/main-login_750x300.png'),
          text:'测试内容2'
        },
        {
          img: require('@/assets/main-login_750x300.png'),
          text:'测试内容3'
        },
        {
          img: require('@/assets/main-login_750x300.png'),
          text:'测试内容'
        },
        {
          img: require('@/assets/main-login_750x300.png'),
          text:'测试内容2'
        },
        {
          img: require('@/assets/main-login_750x300.png'),
          text:'测试内容3'
        },
      ]
    }
  },
}
</script>

<style scoped>
/*右边样式*/
.main-right{
  width: 70%;
  height: auto;
  background-color: #323335;
  padding: 10px;
  box-sizing: border-box;
}

/*右边子内容样式*/
.main-right-content{
  width: 100%;
  height: auto;
  background-color:darkslategray;
}

/*子内容样式*/
.main-right-item{
  width: 100%;
  height: auto;
  background-color: antiquewhite;
  margin-bottom: 10px;
  display: flex;
}

/*文章列表图片样式*/
.main-right-item-img{
  width: 30%;
  height: 100%;
}


/*文章样式*/
.main-right-item-div{
  width: 70%;
  height: 100%;
  background-color: green;
}


</style>
