<style lang="less" scoped>

</style>
<template>
  <div>
    <!-- 不可以与html的保留元素重名 -->
<headergg @add="addUndoItem"></headergg>
<ul>
  <li v-for="(item,index) in undoList" :key="index">{{item}}</li>
</ul>
  </div>
</template>

<script>
 import headergg from './components/Header';
  export default {
    components:{
      headergg
    },
    data() {
      return {
        undoList:[]
      }
    },
    methods: {
      addUndoItem(inputValue){
        this.undoList.push(inputValue);
      }
    },
  }
</script>

