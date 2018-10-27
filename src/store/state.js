import * as defaults from "./defaults";
import clone from "lodash/clone";

export default {
  note: clone(defaults.noteState),
  notes: JSON.parse(localStorage.getItem("notes")) || []
};
