import Vue from "vue";
import App from "@/App";
import store from "@/store";
import { router } from "@/router";
import firebase from "@/firebase";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  beforeCreate() {
    firebase.init(this);
  },
  render: h => h(App)
}).$mount("#app");
