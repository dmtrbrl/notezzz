import firebase from "firebase";

import { firebaseConfig } from "@/api-configs";

const authProviders = {
  google: new firebase.auth.GoogleAuthProvider()
};

export default {
  context: null,
  db: null,

  init(context) {
    this.context = context;
    this.db = firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      this.context.$store.dispatch("user/setCurrentUser");

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
    firebase
      .auth()
      .signInWithPopup(authProviders.google)
      .then(result => {
        console.log("successfully signed in with Google", result.user);
      })
      .catch(error => {
        console.log(error);
      });
  },
  setCurrentUser() {
    return this.context ? firebase.auth().currentUser : null;
  },
  signOut() {
    firebase.auth().signOut();
  }
};
