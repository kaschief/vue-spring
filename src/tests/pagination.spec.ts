import { mount } from "@vue/test-utils";
import { VueTestInstance } from "./local-vue";
import Pagination from "../components/pagination.vue";


describe("Pagination loads", () => {

  it("pagination buttons are present", async () => {
    const component = mount(Pagination, {
      localVue: VueTestInstance,
      propsData: {
								numberOfPages: 3,
								currentPage: 1,
		 			}
				});

			expect(component.findAll('button').exists()).toBe(true)
  });

});
