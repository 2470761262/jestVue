<script>
import sorry from './sorry';
    export default {
        extends:sorry,
        data() {
            return {
                msg:'我是继承'
            }
        },
        render(h) {
            // console.log(this.$options.extends);
            // const _this = this.$options.extends.render.call(this);
            // console.log(_this,"_this");
            // _this.children[1] = h('div',{},'三明市啊');
            //  _this.children[2] = h('div',{},'三明市啊');
            // // _this.context.$slots.default = h('div',{},'三明市啊1');
            // return _this;

        //good
           return h(this.$options.extends,{
               scopedSlots: {
               default: function(props) {
                   return [
                       h('div', '来自扩展组件1111')
                   ];
               },
                sorry:function(props){
                    console.log(props,"props");
                    return [
                        h('div',"来自扩展组件")
                    ];
                }
            }
           });
         //   return h(this.$options.extends);
        },
    }
</script>
