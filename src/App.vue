<template>
  <div id="app">
    <el-container>
      <el-header>
        <B_Header />
      </el-header>
      <el-main>
        <B_Intro />
      </el-main>
    </el-container>
    <el-footer>
      <B_Footer/>
    </el-footer>
    <!-- toTop -->
    <el-backtop :visibility-height="500"></el-backtop>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import B_Header from './components/Blog-Header.vue';
import B_Footer from './components/Blog-footer.vue';
import B_Intro from './components/Blog-Intro.vue'
export default defineComponent({
  name: 'App',
  components: {
    B_Header,
    B_Footer,
    B_Intro
  }
});
</script>
<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

}

body {
  /* 网页的背景色 */
  /* #66ccff */
  background-color: #130f0c;
}

html {
  scroll-behavior: smooth;
}
</style>
<style lang="css" scoped>
.el-main {
  padding: 0;
}
</style>

