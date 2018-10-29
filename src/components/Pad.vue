<template>
    <div class="pad">
        <input type="text" class="pad__title" placeholder="Untitled note" v-model.trim="note.title" @keyup="save">
        <textarea class="pad__text" placeholder="Start writing..." v-model.trim="note.text" @keyup="save"></textarea>
        <footer class="pad__footer">
            <ul class="pad__footer-items">
                <li class="pad__footer-item">Words: {{ wordCount }}</li>
                <li class="pad__footer-item pad__footer-item--right" v-if="lastSaved">Last saved: {{ lastSaved }}</li>
            </ul>
        </footer>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import throttle from "lodash/throttle";
export default {
  computed: {
    ...mapGetters(["note", "lastSaved", "wordCount"]),
    throttleSaveNote() {
      return throttle(this.saveNote, 1000);
    }
  },
  methods: {
    ...mapActions(["saveNote"]),
    save() {
      if (!this.note.title && !this.note.text) return;
      if (!this.note.id) {
        this.saveNote();
        return;
      }
      // set save timeout
      this.throttleSaveNote();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/placeholders";
@import "../assets/scss/colors";
.pad {
  display: flex;
  flex: 4;
  flex-direction: column;
  &__title {
    width: 100%;
    font: inherit;
    font-size: 1.6em;
    outline: none;
    border: 0;
    padding: 25px 20px 20px 30px;
    font-weight: bold;
  }
  &__text {
    padding: 20px 30px;
    border: 0;
    flex: 1;
    resize: none;
    outline: none;
    font: inherit;
    line-height: 2;
    border-top: 1px solid rgba($c-light-gray, 0.3);
  }
  &__footer {
    padding: 20px 30px;
    border-top: 1px solid rgba($c-light-gray, 0.3);
    &-items {
      @extend %inline-list;
      font-size: 0.9em;
    }
    &-item {
      &--right {
        margin-left: auto;
      }
    }
  }
}
</style>
