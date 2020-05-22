import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
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
describe("HelloWorld.vue", () => {
    it("renders props.msg when passed", () => {
        const msg = "new message";
        const wrapper = shallowMount(HelloWorld, {
             propsData: { msg }
        });
        console.log(wrapper.text());
        expect(wrapper.text()).toMatch(msg);
        expect(wrapper.props('msg')).toMatch(msg);
        wrapper.setProps({msg:'sorry'})
        expect(wrapper.props('msg')).toMatch('sorry');
    })
    
});
