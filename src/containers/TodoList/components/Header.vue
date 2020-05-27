
<style lang="less" scoped>
.content{
  height: 60px;
  background: #333;
  line-height: 60px;
  .input-content{
    color: #fff;
    width: 500px;
    margin: 0 auto;
    input[type='text']{
      float:right;
      line-height: 24px;
     // height: 50px;
      margin-top: 16px;
      outline: none;
      border: none;
      width: 360px;
    }
  }
}
</style>
<template>
  <div class="content">
    <div class="input-content">
      TodoList
      <input type="text" data-test="input" v-model="inputValue" @keyup.enter="addTodoItem" >
    </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          inputValue:''
        }
      },
      methods: {
        addTodoItem(){
          if(this.inputValue){
            this.$emit('add',this.inputValue);
            this.inputValue = '';
          }
        }
      },
  }
</script>
