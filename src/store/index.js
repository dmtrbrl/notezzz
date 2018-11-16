import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

import notes from "./modules/notes";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    auth,
    notes
  }
});
