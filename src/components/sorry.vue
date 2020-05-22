<style lang="less" scoped>
</style>
<template>
 <HelloWorld>
             <div>
       
        {{msg}}/{{good}}/{{wsm}}
        <slot name="sorry"></slot>
        <slot></slot>
    </div>
        </HelloWorld>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
    export default {
        components: {
            HelloWorld
        },
        props: {
            good: {
                type: Number
            },
        },
        data() {
            return {
                msg:'sorry',
                wsm:'wsm'
            }
        },
    }
</script>

