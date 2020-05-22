import Vue from "vue";
import App from "./App.vue";
import index from './components/index';
//Vue.use(index);
Vue.prototype.$sorry = index;
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
