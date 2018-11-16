<template>
    <aside class="sidebar">
        <div class="logo">
          <router-link :to="{name: 'addNote'}" class="logo__link">
            <img src="@/assets/img/logo.svg" alt="notezzz" class="logo__img">
          </router-link>
        </div>
        <div class="search">
          <form @submit.prevent class="search__form" autocomplete="off">
            <input type="text" v-model.trim="searchString" placeholder="Search by title" class="search__input">
            <svg class="search__icon">
              <use href="#searchIcon" />
            </svg>  
          </form>
        </div>
        <div class="notes">
          <div class="notes__header">
            <strong class="notes__heading">Notes</strong>
            <router-link :to="{name: 'addNote'}" class="notes__add" title="Add Note">
              <svg class="notes__add-icon">
                <use href="#plusIcon" />
              </svg>
            </router-link>
          </div>
          <div class="notes__list">
            <div v-if="notes.length">
              <note v-for="(note, i) in filteredNotes" :key="i" :note="note"></note>
            </div>
            <div v-if="notes.length && !filteredNotes.length" class="notes__list-empty">
              Nothing found
            </div>
            <div v-if="!notes.length" class="notes__list-empty">
              Boo, no notes. Get writing!
            </div>
          </div>
        </div>
        <div class="auth">
          <router-link v-if="!user" :to="{name: 'auth'}" class="auth__link auth__link--button">
            Sign In
          </router-link>
          <span v-else @click="signOut">
            {{ user.displayName || user.email }}
          </span>
        </div>
    </aside>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "@/firebase";

import Note from "@/components/Note";

export default {
  components: { Note },
  data() {
    return {
      searchString: null
    };
  },
  computed: {
    ...mapGetters("notes", ["note", "notes"]),
    ...mapGetters("auth", ["user", "isLogged"]),
    filteredNotes() {
      return this.searchString
        ? this.notes.filter(
            note =>
              note.title &&
              note.title.toLowerCase().includes(this.searchString.toLowerCase())
          )
        : this.notes;
    }
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
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 350px;
  flex-shrink: 0;
  margin-left: -350px;
  background: $c-dark;
  color: rgba($c-light, 0.7);
  transition: margin 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
  &--is-visible {
    margin-left: 0;
  }
}

.logo {
  display: flex;
  flex-shrink: 0;
  padding: 15px 20px;
  border-bottom: 1px solid rgba($c-light, 0.05);
  &__img {
    display: block;
    height: 20px;
    width: auto;
  }
}

.search {
  padding: 15px 20px;
  &__form {
    position: relative;
  }
  &__input {
    display: block;
    width: 100%;
    height: 30px;
    padding: 7px 10px 7px 30px;
    border: 0;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    background: rgba($c-light, 0.2);
    color: $c-light;
    &::-webkit-input-placeholder {
      color: rgba($c-light, 0.3);
    }
  }
  &__icon {
    position: absolute;
    top: 9px;
    left: 9px;
    width: 12px;
    height: 12px;
    fill: rgba($c-light, 0.4);
    pointer-events: none;
  }
}

.notes {
  height: 100%;
  display: flex;
  flex-direction: column;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px 10px;
    border-bottom: 1px solid rgba($c-light, 0.05);
  }
  &__heading {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
  }
  &__add {
    display: block;
    width: 20px;
    height: 20px;
    &-icon {
      display: block;
      width: 100%;
      height: 100%;
      pointer-events: none;
      fill: $c-light;
      opacity: 0.5;
      transition: opacity 0.5s ease;
    }
    &:hover &-icon {
      opacity: 1;
    }
  }
  &__list {
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba($c-light, 0.2);
    }
    &-empty {
      padding: 20px;
      font-size: 12px;
    }
  }
}

.auth {
  flex-shrink: 0;
  padding: 20px;
  border-top: 1px solid rgba($c-light, 0.05);
  font-size: 12px;
  &__link {
    color: $c-light;
  }
}
</style>
