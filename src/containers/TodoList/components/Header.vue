
<style lang="less" scoped>
</style>
<template>
  <div>
<input type="text" data-test="input" v-model="inputValue" @keyup.enter="addTodoItem" >
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
