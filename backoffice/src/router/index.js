import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Customers from "../views/Customers.vue";
import Customer from "../views/Customer.vue";
import Products from "../views/Products.vue";
import Signin from "../views/Signin.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/customers/:id",
    name: "Customer",
    component: Customer,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
    meta: {
      restricted: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
    meta: {
      restricted: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = sessionStorage.getItem("employee");

  if (to.meta.restricted && !user) {
    next({ name: "Signin", params: { returnTo: to.fullPath } });
  } else {
    next();
  }
});

export default router;
