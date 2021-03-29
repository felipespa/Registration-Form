import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import formData from "./modules/formData";

export default new Vuex.Store({
  modules: {
    formData,
  },
});
