import { mount } from "@vue/test-utils";
import { VueTestInstance } from "./local-vue";
import App from "../App.vue";
import GifsContainer from "../components/gifs-container.vue";
import Pagination from "../components/pagination.vue";


/** Tests */
describe("App loads", () => {
  it("loads", async () => {
    const component = mount(App, { localVue: VueTestInstance });

	  expect(component.isVisible()).toBe(true)
  });

  it("shows the Gif Container", async () => {
    const component = mount(GifsContainer, {
      localVue: VueTestInstance,
      propsData: {
        gifs:{}
		 }
	 });

    expect(component.isVisible()).toBe(true)
  });

	it("shows the Pagination", async () => {
	const component = mount(Pagination, {
		localVue: VueTestInstance,
		propsData: {
			numberOfPages: 3,
			currentPage: 1,
		}
	});

		expect(component.isVisible()).toBe(true)
   });

});
