import Vue from "vue";

// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

import "./assets/main.css";

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
