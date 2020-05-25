import { shallowMount } from "@vue/test-utils";
import header from '@/containers/TodoList/components/Header';
// /npx jest header.spec --watch
describe('header.vue' ,()=>{
    it(' header组件渲染正常',()=>{
       const wrapper = shallowMount(header);
    })
})

