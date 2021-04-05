import { mount } from "@vue/test-utils";
import { VueTestInstance } from "./local-vue";
import GifsContainer from "../components/gifs-container.vue";


describe("Gifs Container loads", () => {

  it("Container is present", async () => {
    const component = mount(GifsContainer, {
      localVue: VueTestInstance,
      propsData: {
								gifs: [],
		 			}
				});


    expect(component.isVisible()).toBe(true)
  });

});
