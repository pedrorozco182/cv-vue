import Vue from "vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  vuetify = new Vuetify();
  // beforeEach(() => {
  //   vuetify = new Vuetify();
  // });

  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      vuetify,
      propsData: { msg },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
