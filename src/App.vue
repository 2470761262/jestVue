<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <test2></test2>
      ------------------
    <div></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import test2 from "./components/test2.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    test2
  },
  mounted() {
      const h = this.$createElement;
      this.$sorry(h('div',{},'我是传递过来的哦'));
  },
};
</script>

<style lang="less">

</style>
