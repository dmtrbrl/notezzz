import * as types from "./mutation-types";

export default {
  [types.TOGGLE_SIDEBAR](state) {
    state.sidebar = !state.sidebar;
  }
};
