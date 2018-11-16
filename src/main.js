import Vue from "vue";
import App from "@/App";
import store from "@/store";
import { router } from "@/router";
import firebase from "@/firebase";
import vueMoment from "vue-moment";

Vue.config.productionTip = false;

Vue.use(vueMoment);

new Vue({
  store,
  router,
  beforeCreate() {
    firebase.init(this);
  },
  render: h => h(App)
}).$mount("#app");
