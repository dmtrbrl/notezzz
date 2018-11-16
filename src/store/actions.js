import * as mutations from "./mutation-types";

export const toggleSidebar = ({ commit }) => {
  commit(mutations.TOGGLE_SIDEBAR);
};
