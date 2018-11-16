import Editor from "@/components/Editor";

export default [
  {
    name: "addNote",
    path: "/",
    component: Editor
  },
  {
    name: "editNote",
    path: "/:id",
    component: Editor
  }
];
