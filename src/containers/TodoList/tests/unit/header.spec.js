import { shallowMount } from "@vue/test-utils";
import header from "@/containers/TodoList/components/Header";
// /npx jest header.spec --watch
describe("header.vue", () => {
  it(" header组件渲染正常", () => {
    const wrapper = shallowMount(header);
    const input = wrapper.find('[data-test="input"]');
    expect(input.exists()).toBe(true);
  });

  it(" header组件中input框初始内容是空", () => {
    const wrapper = shallowMount(header);
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe("");
  });

  it(" header组件中input框指发生变化,数据应该跟着变", () => {
    const wrapper = shallowMount(header);
    const input = wrapper.find('[data-test="input"]');
    //设置input的内容为Sorry
    input.setValue("Sorry");
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe("Sorry");
  });

  it(" header组件中input框输入回车,无内容时,没反应", () => {
    const wrapper = shallowMount(header);
    const input = wrapper.find('[data-test="input"]');
    //设置input的内容为Sorry
    input.setValue("");
    input.trigger("keyup.enter");
    //emitted 表示不应该处罚通知事件 事件名字为add
    expect(wrapper.emitted().add).toBeFalsy();
  });

  it(" header组件中input框输入回车有,有内容时,有反应,同时清空inputValue", () => {
    const wrapper = shallowMount(header);
    const input = wrapper.find('[data-test="input"]');
    //设置input的内容为Sorry
    input.setValue("Sorry");
    input.trigger("keyup.enter");
    //emitted 表示不应该处罚通知事件 事件名字为add
    expect(wrapper.emitted().add).toBeTruthy();
    input.setValue("");
    expect(wrapper.vm.$data.inputValue).toBe("");
  });

  
  it("header 样式发生变化,做提示", () => {
    const wrapper = shallowMount(header);
    expect(wrapper).toMatchInlineSnapshot(`
      <div class="content">
        <div class="input-content">
          TodoList
          <input type="text" data-test="input"></div>
      </div>
    `);
  });
});
