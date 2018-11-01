import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
// import { auth } from "@/firebase";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes
});

// router.beforeEach((to, from, next) => {
//   let currentUser = auth.user();
//   let requireAuth = to.matched.some(record => record.meta.requireAuth);
//   let guestOnly = to.matched.some(record => record.meta.guestOnly);

//   if (requireAuth && !currentUser) next("auth");
//   else if (guestOnly && currentUser) next("/");
//   else next();
// });
