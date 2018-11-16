import * as mutations from "./mutation-types";
import firebase from "@/firebase";

export const setCurrentUser = ({ commit }) => {
  commit(mutations.SET_USER, firebase.setCurrentUser());
};
