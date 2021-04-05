import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import ExampleComponent from "./App.vue";

Vue.use(BootstrapVue);

Vue.component("example", ExampleComponent);

export const app = new Vue({
  el: "#app",
});
