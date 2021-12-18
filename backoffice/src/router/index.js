import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

import UpdateCustomer from "../views/UpdateCustomer.vue";
import ListCustomers from "../views/ListCustomers.vue";

import UpdateDiscount from "../views/UpdateDiscount.vue";
import CreateDiscount from "../views/CreateDiscount.vue";
import ListDiscounts from "../views/ListDiscounts.vue";

import UpdateProduct from "../views/UpdateProduct.vue";
import CreateProduct from "../views/CreateProduct.vue";
import ListProducts from "../views/ListProducts.vue";

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
    name: "UpdateCustomer",
    component: UpdateCustomer,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/customers",
    name: "ListCustomers",
    component: ListCustomers,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/discounts/:id",
    name: "UpdateDiscount",
    component: UpdateDiscount,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/discounts",
    name: "ListDiscounts",
    component: ListDiscounts,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/discounts",
    name: "CreateDiscount",
    component: CreateDiscount,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/products/:id",
    name: "UpdateProduct",
    component: UpdateProduct,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/products",
    name: "ListProducts",
    component: ListProducts,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/products",
    name: "CreateProduct",
    component: CreateProduct,
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
