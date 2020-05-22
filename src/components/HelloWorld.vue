<template>
  <div class="hello">
    <h1>{{ msg }}/{{xixi}}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
      return {
          xixi:24234532535
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
