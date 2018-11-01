import * as types from "./mutation-types";
import * as defaults from "./defaults";
import clone from "lodash/clone";

export default {
  [types.SET_CURRENT_NOTE_ID](state, id) {
    state.note.id = id;
  },
  [types.PREPEND_TO_NOTES](state, note) {
    state.notes.unshift(note);
  },
  [types.TOUCH_LAST_SAVED](state) {
    state.note.lastSaved = Date.now();
  },
  [types.SET_CURRENT_NOTE](state, note) {
    if (note == null) {
      state.note = clone(defaults.noteState);
      return;
    }
    state.note = note;
  },
  [types.DELETE_NOTE](state, id) {
    state.notes = state.notes.filter(note => note.id !== id);
  }
};
