import * as types from "./mutation-types";

export default {
  [types.TOGGLE_SIDEBAR](state) {
    state.sidebar = !state.sidebar;
  },
  [types.SET_THEME](state, theme) {
    state.theme = theme;
  }
};
