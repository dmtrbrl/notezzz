<template>
    <div class="note">
        <a href="#" class="note__delete" @click.prevent="deleteNote(note.id)">
            <span class="note__delete-icon">&times;</span>
        </a>
        <a href="#" class="note__content" @click.prevent="openNote(note)">
            <strong class="note__title">{{ note.title || 'Untitled note' }}</strong>
        </a>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["note"],
  methods: {
    ...mapActions("notes", ["openNote", "deleteNote"])
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors";
.note {
  display: flex;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgba($c-light-gray, 0.1);
  &:hover {
    opacity: 1;
    .note__title {
      text-decoration: underline;
    }
    .note__delete {
      margin-left: 0;
    }
  }
  &__content {
    padding: 20px;
    flex: 2;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
  }
  &__title {
    display: block;
    margin: 0;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__delete {
    display: block;
    width: 50px;
    position: relative;
    margin-left: -50px;
    background: $c-red;
    min-height: 100%;
    color: $c-white;
    text-decoration: none;
    transition: margin-left 300ms cubic-bezier(0, 1, 1, 1);
    &-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5em;
      font-weight: 600;
    }
  }
}
</style>
