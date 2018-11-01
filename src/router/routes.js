import Home from "@/components/Home";
import Auth from "@/components/Auth";

export default [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "auth",
    path: "/auth",
    component: Auth,
    meta: {
      guestOnly: true
    }
  }
];
