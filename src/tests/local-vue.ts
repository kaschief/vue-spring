import { createLocalVue } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";

export const VueTestInstance = createLocalVue();

VueTestInstance.use(BootstrapVue);
