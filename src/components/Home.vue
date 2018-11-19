<template>
    <div :class="`home home--${theme}`">
        <div :class="`no-notes no-notes--${theme}`">
            <strong class="no-notes__title">Create your first note</strong>
            <span class="no-notes__button" @click="addNote($router)">Get writing</span>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapGetters(["sidebar", "theme"]),
    ...mapGetters("notes", ["notes"])
  },
  methods: {
    ...mapActions(["toggleSidebar"]),
    ...mapActions("notes", ["addNote"])
  },
  mounted() {
    if (this.notes.length) {
      this.$router.replace(`/${this.notes[0].id}`);
    } else if (!this.sidebar) {
      this.toggleSidebar();
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/colors";
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &--light {
    background-color: $c-light;
    color: $c-dark;
  }
  &--dark {
    background-color: lighten($c-dark, 5%);
    color: $c-light;
  }
}
.no-notes {
  text-align: center;
  width: 250px;
  &__title {
    display: block;
    font-size: 18px;
    text-align: center;
  }
  &__button {
    display: inline-block;
    margin-top: 30px;
    padding: 5px 12px;
    line-height: 20px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.5s;
    &:hover {
      opacity: 1;
    }
  }
  &--light &__button {
    border: 1px solid $c-dark;
  }
  &--dark &__button {
    border: 1px solid $c-light;
  }
}
</style>


