import * as mutations from "./mutation-types";

export const saveNote = ({ commit, dispatch, state }) => {
  // touch last saved timestamp
  commit(mutations.TOUCH_LAST_SAVED);
  if (state.note.id == null) {
    // set current note id
    commit(mutations.SET_CURRENT_NOTE_ID, Date.now());
    // prepend to notes
    commit(mutations.PREPEND_TO_NOTES, state.note);
  }
  // store notes
  dispatch("storeNotes");
};

export const storeNotes = ({ state }) => {
  localStorage.setItem("notes", JSON.stringify(state.notes));
};

export const openNote = ({ commit }, note) => {
  commit(mutations.SET_CURRENT_NOTE, note);
};

export const clearCurrentNote = ({ commit }) => {
  commit(mutations.SET_CURRENT_NOTE, null);
};

export const deleteNote = ({ commit, dispatch, state }, id) => {
  if (id === state.note.id) {
    dispatch("clearCurrentNote");
  }
  commit(mutations.DELETE_NOTE, id);
  dispatch("storeNotes");
};
