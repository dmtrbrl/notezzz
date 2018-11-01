<template>
  <header class="header">
    <div class="header__container">
      <router-link :to="{name: 'home'}" class="header__logo">
          <img src="@/assets/img/logo.svg" alt="notezzz" class="header__logo-img">
      </router-link>
      <div class="header__auth">
        <router-link v-if="!user" :to="{name: 'auth'}" class="header__auth-link header__auth-link--button">
          Sign In
        </router-link>
        <span v-else @click="signOut">
          {{ user.displayName }}
        </span>
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import firebase from "@/firebase";
export default {
  computed: {
    ...mapGetters("user", ["user", "isLogged"])
  },
  methods: {
    signOut() {
      firebase.signOut();
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/placeholders";
.header {
  flex-shrink: 0;
  width: 100%;
  height: 60px;

  background: $c-dark-blue;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 20px;
    margin: 0 auto;
  }
  &__logo {
    display: block;
    height: 24px;
    &-img {
      display: block;
      width: auto;
      height: 100%;
    }
  }
  &__auth {
    display: flex;
    font-size: 14px;
    line-height: 24px;
    color: rgba($c-light, 0.6);
    & > *:not(:first-child) {
      margin-left: 10px;
    }
    &-link {
      display: block;
      color: $c-light;
      text-decoration: none;
      &--button {
        padding: 0 10px;
        border: 1px solid rgba($c-light, 0.3);
      }
    }
  }
  &__menu {
    @extend %inline-list;
    &-item {
      &:not(:first-child) {
        margin-left: 20px;
      }
    }
    &-link {
      display: block;
      padding: 0 10px;
      border: 1px solid rgba($c-light, 0.3);
      color: $c-light;
      text-decoration: none;
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
