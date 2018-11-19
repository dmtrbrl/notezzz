import Home from "@/components/Home";
import Editor from "@/components/Editor";

export default [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "editNote",
    path: "/:id",
    component: Editor
  }
];
