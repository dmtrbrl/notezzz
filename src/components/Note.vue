<template>
    <div class="note">
      <router-link :to="{name: 'editNote', params: {id: note.id}}" class="note__link">
        <strong class="note__title">{{ note.title || 'Untitled note' }}</strong>
        <div class="note__body">
          <span class="note__date">{{note.lastSaved | moment("calendar")}}</span>
          <p class="note__text">{{note.text }}</p>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  props: ["note"]
};
</script>

<style lang="scss">
@import "../assets/scss/colors";
.note {
  color: inherit;
  border-bottom: 1px solid rgba($c-light, 0.05);
  &__link {
    display: block;
    padding: 15px 20px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: rgba($c-light, 0.025);
    }
    &.router-link-active {
      background-color: rgba($c-light, 0.035);
    }
  }
  &__title {
    display: block;
    margin: 0;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__body {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
  }
  &__date {
    flex-shrink: 0;
    opacity: 0.7;
  }
  &__text {
    margin: 0 0 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
