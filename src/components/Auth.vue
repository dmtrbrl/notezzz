<template>
  <section class="auth">
    <div class="auth__container">
      <div class="auth__external">
        <button @click="signInWithGoogle">Sign in with Google</button><br>
        <button @click="signInWithGithub">Sign in with Github</button>
      </div>
      <form class="auth__form" @submit.prevent="signInWithEmailAndPassword">
        <input type="email" placeholder="Email" required v-model.trim="user.email"><br>
        <input type="password" placeholder="Password" required v-model.trim="user.password"><br>
        <span v-if="authError">{{ authError.message }}</span><br>
        <button type="submit">Sign In</button>
      </form>
    </div>
  </section>
</template>

<script>
import firebase from "@/firebase";
export default {
  name: "auth",
  data() {
    return {
      user: {
        email: null,
        password: null
      },
      authError: null
    };
  },
  methods: {
    signInWithGoogle() {
      firebase
        .signInWithGoogle()
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          this.authError = error;
        });
    },
    signInWithGithub() {
      firebase
        .signInWithGithub()
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          this.authError = error;
        });
    },
    signInWithEmailAndPassword() {
      firebase
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          this.authError = error;
        });
    }
  }
};
</script>

<style lang="scss">
.auth {
  width: 100%;
  &__container {
    max-width: 400px;
    padding: 20px;
    margin: 0 auto;
  }
}
</style>


