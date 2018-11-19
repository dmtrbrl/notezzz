import * as mutations from "./mutation-types";

export const toggleSidebar = ({ commit }) => {
  commit(mutations.TOGGLE_SIDEBAR);
};

export const setTheme = ({ commit }, theme) => {
  localStorage.setItem("theme", theme);
  commit(mutations.SET_THEME, theme);
};
