import { createRouter, createWebHistory } from "vue-router";
import Signin from "../views/Signin.vue";

const routes = [
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
