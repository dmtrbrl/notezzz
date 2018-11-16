<template>
  <div id="app">
    <section class="main">
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="searchIcon" viewBox="0 0 56.966 56.966">
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z" />
        </symbol>
        <symbol id="plusIcon" viewBox="0 0 52 52">
          <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"/>
          <path d="M38.5 25H27V14a1 1 0 1 0-2 0v11H13.5a1 1 0 1 0 0 2H25v12a1 1 0 1 0 2 0V27h11.5a1 1 0 1 0 0-2z"/>
        </symbol>
        <symbol id="menuIcon" viewBox="0 0 400 400">
          <path d="M40 48h320c22 0 40 18 40 40v224c0 22-18 40-40 40H40c-22 0-40-18-40-40V88c0-22 18-40 40-40zm104 288h216c13.2 0 24-10.8 24-24V88c0-13.2-10.8-24-24-24H144v272zM16 312c0 13.2 10.8 24 24 24h88V64H40c-13.2 0-24 10.8-24 24v224z" />
          <path d="M60 116h28c4.4 0 8 3.6 8 8s-3.6 8-8 8H60c-4.4 0-8-3.6-8-8s3.6-8 8-8zM60 156h28c4.4 0 8 3.6 8 8s-3.6 8-8 8H60c-4.4 0-8-3.6-8-8s3.6-8 8-8zM60 196h28c4.4 0 8 3.6 8 8s-3.6 8-8 8H60c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
        </symbol>
        <symbol id="lampIcon" viewBox="0 0 60 100">
          <path d="M50.577 8.342C44.662 2.652 36.892-.28 28.672.02 12.907.648.05 13.981 0 29.771a29.772 29.772 0 0 0 6.917 19.172c6.467 7.77 10.026 17.57 10.026 27.62 0 0-.677 4.61 2.606 4.61h20.652c3.358 0 2.606-4.61 2.606-4.61 0-9.825 3.61-19.55 10.451-28.12 4.236-5.34 6.492-11.755 6.492-18.572 0-8.196-3.259-15.865-9.173-21.53zm-1.404 36.842c-7.443 9.323-11.428 19.95-11.579 30.777H22.156A48.535 48.535 0 0 0 10.928 45.61a24.636 24.636 0 0 1-5.69-15.815c.05-13.032 10.652-24.035 23.66-24.56 6.791-.252 13.207 2.18 18.07 6.866 4.887 4.687 7.569 11.003 7.569 17.77-.026 5.639-1.855 10.927-5.364 15.313zm-8.872 39.549H19.449a2.604 2.604 0 0 0-2.607 2.606 2.604 2.604 0 0 0 2.607 2.607H40.3a2.604 2.604 0 0 0 2.606-2.607 2.62 2.62 0 0 0-2.606-2.606zm-3.935 9.824H23.41a2.604 2.604 0 0 0-2.607 2.607 2.604 2.604 0 0 0 2.607 2.606h12.957a2.604 2.604 0 0 0 2.607-2.606 2.62 2.62 0 0 0-2.607-2.607z" fill-rule="nonzero"/>
        </symbol>
      </svg>
      <sidebar :class="{'sidebar--is-visible': sidebar}" />
      <router-view/>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Sidebar from "@/components/Sidebar";
export default {
  name: "app",
  computed: {
    ...mapGetters(["sidebar"])
  },
  components: {
    Sidebar
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
  color: $c-dark;
  overflow: hidden;
  background: $c-light;
}
input,
textarea,
select {
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
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
