import { shallowMount } from "@vue/test-utils";
//import HelloWorld from "@/components/HelloWorld.vue";
import TodoList from '@/containers/TodoList/TodoList';
import Header  from '@/containers/TodoList/components/Header';

describe('TodoList.vue ' ,()=>{
    it(' 初始化 undolist 应该是空',()=>{
        const wrapper = shallowMount(TodoList);
        const undolist = wrapper.vm.$data.undoList;
        expect(undolist).toEqual([]);
    })

    it('TodoList 执行addItem 的时候 会增加一个内容',()=>{
        const wrapper = shallowMount(TodoList);
        wrapper.vm.addUndoItem('Sorry');
        const undolist = wrapper.vm.$data.undoList;
        expect(undolist.length).toBe(1);
        expect(undolist.length).toEqual(1);
    })
    it('TodoList 监听Header 的add事件 会增加一个内容',()=>{
        const wrapper = shallowMount(TodoList);
        const header =  wrapper.find(Header);
       // wrapper.vm.addUndoItem('Sorry');
       header.vm.$emit('add','sorry');
        const undolist = wrapper.vm.$data.undoList;
        expect(undolist.length).toBe(1);
        expect(undolist).toEqual(['sorry']);
    })
})

// import Vue from 'vue';
// const HelloWorldConstructor = Vue.extend(HelloWorld);
// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//         const helloworld = new HelloWorldConstructor({
//             propsData:{
//                 msg:'hello world'
//             }
//         });
//         helloworld.$mount();
//         document.body.append(helloworld.$el);
//         console.log(document.body.innerHTML);
//         //expect(document.querySelectorAll('.hello').length).toBe(1);
//         console.log(helloworld);
//       //  expect(helloworld.$data.msg).toBe('hello world');;
//   });
// });
// describe("HelloWorld.vue", () => {
//     it("renders props.msg when passed", () => {
//         const msg = "new message";
//         const wrapper = shallowMount(HelloWorld, {
//              propsData: { msg }
//         });
//         console.log(wrapper.text());
//         expect(wrapper.text()).toMatch(msg);
//         expect(wrapper.props('msg')).toMatch(msg);
//         wrapper.setProps({msg:'sorry'})
//         expect(wrapper.props('msg')).toMatch('sorry');
//     })
    
// });
