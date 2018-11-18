<template>
  <section :class="`editor editor--${theme}`">
    <header class="editor__toolbar">
      <div class="editor__toolbar-left">
        <button 
          class="editor__toolbar-button"
          @click="toggleSidebar">
          <svg class="editor__toolbar-icon" width="24" height="20">
            <use href="#menuIcon" />
          </svg>
        </button>
        <button 
          class="editor__toolbar-button" 
          @click="changeTheme">
          <svg class="editor__toolbar-icon" width="10" height="16">
            <use href="#lampIcon" />
          </svg>
        </button>
      </div>
      <div class="editor__toolbar-right">
        <button 
          class="editor__toolbar-delete"
          v-if="note.id"
          @click="confirmDeleteNote">
          Delete note
        </button>
      </div>
    </header>
    <div class="editor__body">
      <input type="text" class="editor__title" placeholder="Title" v-model.trim="note.title" @keyup="save">
      <textarea class="editor__text" placeholder="Start writing..." v-model.trim="note.text" @keyup="save"></textarea>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "editor",
  data() {
    return {
      theme: null
    };
  },
  computed: {
    ...mapGetters("notes", ["note", "notes"]),
    throttleSaveNote() {
      return throttle(this.saveNote, 1000);
    }
  },
  methods: {
    ...mapActions(["toggleSidebar"]),
    ...mapActions("notes", ["saveNote", "openNote", "deleteNote"]),
    save() {
      if (!this.note.title && !this.note.text) return;
      if (!this.note.id) {
        this.saveNote();
        this.$router.replace({
          name: "editNote",
          params: { id: this.note.id }
        });
        return;
      }
      // set save timeout
      this.throttleSaveNote();
    },
    setCurrentNote() {
      let note =
        this.$route.name === "addNote"
          ? null
          : this.notes.find(note => note.id == this.$route.params.id);
      this.openNote(note);
    },
    changeTheme() {
      if (this.theme == "light") {
        this.theme = "dark";
        localStorage.setItem("theme", "dark");
      } else {
        this.theme = "light";
        localStorage.setItem("theme", "light");
      }
    },
    confirmDeleteNote() {
      if (confirm("Delete note")) {
        this.deleteNote(this.note.id).then(() => this.$router.replace("/"));
      }
    }
  },
  watch: {
    "$route.params.id"() {
      this.setCurrentNote();
    }
  },
  mounted() {
    this.setCurrentNote();
    this.theme = localStorage.getItem("theme") || "light";
  }
};
</script>

<style lang="scss">
@import "../assets/scss/colors";
.editor {
  width: 100%;
  transition: background 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
  overflow-y: auto;
  &--light {
    background-color: $c-light;
    color: $c-dark;
  }
  &--dark {
    background-color: lighten($c-dark, 5%);
    color: $c-light;
  }
  &__toolbar {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 20px;
    transition: background-color 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
    &-left {
      display: flex;
    }
    &-button {
      display: block;
      width: 24px;
      height: 20px;
      border: 0;
      padding: 0;
      border-radius: 0;
      outline: none;
      background: transparent;
      cursor: pointer;
      opacity: 0.5;
      transition: opacity 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
      &:hover {
        opacity: 0.8;
      }
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
    &-icon {
      display: block;
      margin: 0 auto;
      transition: fill 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
    &-delete {
      display: block;
      padding: 0 7px;
      border: 1px solid $c-red;
      border-radius: 5px;
      line-height: 18px;
      background: transparent;
      color: $c-red;
      cursor: pointer;
      outline: none;
      opacity: 0.8;
      transition: opacity 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
      &:hover {
        opacity: 1;
      }
    }
  }
  &--light &__toolbar {
    background-color: $c-light;
  }
  &--light &__toolbar-icon {
    fill: $c-dark;
  }
  &--light &__toolbar-delete {
    fill: $c-dark;
  }
  &--dark &__toolbar {
    background-color: lighten($c-dark, 5%);
  }
  &--dark &__toolbar-icon {
    fill: $c-light;
  }
  &__body {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
  }
  &__title {
    width: 100%;
    font: inherit;
    font-size: 1.6em;
    outline: none;
    border: 0;
    padding: 15px 20px;
    font-weight: bold;
    background: transparent;
    transition: color 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
    color: inherit;
  }
  &__text {
    width: 100%;
    padding: 0 20px 20px;
    border: 0;
    flex: 1;
    resize: none;
    outline: none;
    font: inherit;
    line-height: 2;
    background: transparent;
    transition: color 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
    color: inherit;
  }
}
</style>
