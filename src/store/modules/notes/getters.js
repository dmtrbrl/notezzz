import moment from "moment";

export const note = state => state.note;

export const notes = state => {
  return state.notes.sort((a, b) => a.title > b.title);
};

export const lastSaved = state => {
  if (!state.note.lastSaved) {
    return null;
  }
  return moment(state.note.lastSaved).calendar();
};
