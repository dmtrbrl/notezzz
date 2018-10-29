<template>
  <div id="app">
    <header class="header">
      <a href="#">
        <img src="@/assets/img/logo.svg" alt="notezzz" class="header__logo">
      </a>
    </header>
    <section class="main">
      <sidebar />
      <pad />
    </section>
  </div>
</template>

<script>
import Pad from "@/components/Pad";
import Sidebar from "@/components/Sidebar";
export default {
  name: "app",
  components: { Pad, Sidebar }
};
</script>

<style lang="scss">
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
  color: #112d4e;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  flex-shrink: 0;
  width: 100%;
  height: 50px;
  padding: 15px 20px;
  background: #3f72af;
  &__logo {
    display: block;
    height: 20px;
    margin-top: -2px;
  }
}
.main {
  display: flex;
  height: 100%;
}
</style>
