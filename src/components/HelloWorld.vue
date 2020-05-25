<template>
  <div class="hello">
    <h1>{{ msg }}/{{xixi}}</h1>
    <div @click="test">test</div>
    <slot name="hhh"></slot>
    <slot>1</slot>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    dom:Object
  },
  data() {
      return {
          xixi:24234532535
      }
  },
   mounted() {
            setTimeout(() => {
                this.test();
            }, 500);
         
    },
    methods: {
        test(){
            const h = this.$createElement;
          //  this.$slots.hhh = h('div',{},'哈哈哈哈');

            this.$set(this.$slots,'default', h('div',{},'哈哈哈哈'))// h(this.dom))
            //this.$slots.default = h(this.dom);
            console.log("created",this);
            //this.$forceUpdate()
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
