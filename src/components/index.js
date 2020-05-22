// 引入组件
import Vue from 'vue';
import sorry from './sorry';
const sorryConstructor = Vue.extend(sorry);

function crateBox(dom){
    const newsorryConstructor = new sorryConstructor({
        propsData:{
            good:1
        },
        data:{
            msg:'nihao'
        }
    });
    console.log(newsorryConstructor);
    newsorryConstructor.$mount();

   console.log(newsorryConstructor.good);
  document.body.appendChild(newsorryConstructor.$el);
  setTimeout(()=>{
      newsorryConstructor.$data.wsm = '不知道';
      newsorryConstructor.$slots.default = dom;
    //   console.log(sorry);
    //   console.log(newsorryConstructor);
  },2000)
}
export default crateBox;

// export default {
//   install(Vue) {

//     const newsorryConstructor = new sorryConstructor();
//     console.log(sorry);
//     console.log(sorryConstructor);
//  //   Vue.component("sorry", sorry);
//   }
// };
