<template>
  <section class="auth">
    <div class="auth__external">
      <button @click="signInWithGoogle">Sign in with Google</button>
    </div>
    <form class="auth__form">
      Sign In With Email Form
    </form>
  </section>
</template>

<script>
import firebase from "@/firebase";
export default {
  methods: {
    signInWithGoogle() {
      firebase.signInWithGoogle();
    }
  }
};
</script>

