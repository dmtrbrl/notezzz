import firebase from "firebase";

import { firebaseConfig } from "@/api-keys";

const authProviders = {
  google: new firebase.auth.GoogleAuthProvider(),
  github: new firebase.auth.GithubAuthProvider()
};

export default {
  context: null,
  db: null,

  init(context) {
    this.context = context;
    this.db = firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      this.context.$store.dispatch("auth/setCurrentUser");
      let requireAuth = this.context.$route.matched.some(
        record => record.meta.requireAuth
      );
      let guestOnly = this.context.$route.matched.some(
        record => record.meta.guestOnly
      );
      if (requireAuth && !user) this.context.$router.push("auth");
      else if (guestOnly && user) this.context.$router.push("/");
    });
  },

  signInWithGoogle() {
    return firebase.auth().signInWithPopup(authProviders.google);
  },

  signInWithGithub() {
    return firebase.auth().signInWithPopup(authProviders.github);
  },

  setCurrentUser() {
    return this.context ? firebase.auth().currentUser : null;
  },

  signOut() {
    firebase.auth().signOut();
  }
};
