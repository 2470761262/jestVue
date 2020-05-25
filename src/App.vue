<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" :dom="dom" v-if="sdsd"/>
    <test2></test2>
      ------------------
    <div></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import test2 from "./components/test2.vue";
import sorry2 from './components/sorry2.vue';
import todoList from './containers/TodoList/TodoList';
export default {
  name: "App",
  components: {
    HelloWorld,
    test2,
    todoList
  },
  data() {
      return {
          dom:sorry2, //<div>什么啊</div>
          sdsd:false
      }
  },
  mounted() {
      const h = this.$createElement;
     this.$sorry(h('div',{},'我是传递过来的哦'));
      setTimeout(()=>{
          this.sdsd = true;
      },1000)
  },
};
</script>

<style lang="less">

</style>
