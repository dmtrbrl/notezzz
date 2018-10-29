<template>
    <div class="sidebar">
        <div v-if="notes.length">
          <note v-for="(note, i) in notes" :key="i" :note="note"></note>
        </div>
        <div v-else class="sidebar__content">
            Boo, no notes. Get writing!
        </div>
        <div class="sidebar__content">
            <a href="#" @click.prevent="clearCurrentNote">Start a new note</a>
        </div>
    </div>
</template>

<script>
import Note from "@/components/Note";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { Note },
  computed: {
    ...mapGetters(["notes"])
  },
  methods: {
    ...mapActions(["clearCurrentNote"])
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colors";
.sidebar {
  background: $c-light;
  flex: 1;
  height: 100%;
  min-width: 28%;
  overflow: auto;
  &__content {
    padding: 30px;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
