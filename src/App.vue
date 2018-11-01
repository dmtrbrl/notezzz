<template>
  <div id="app">
    <v-header/>
    <section class="main">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "app",
  components: {
    "v-header": Header
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i&subset=cyrillic");
@import "./assets/scss/colors";
* {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
body {
  color: $c-dark-blue;
  overflow: hidden;
}
#app {
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
