import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

import UpdateCustomer from "../views/UpdateCustomer.vue";
import ListCustomers from "../views/ListCustomers.vue";

import UpdateProduct from "../views/UpdateProduct.vue";
import CreateProduct from "../views/CreateProduct.vue";
import ListProducts from "../views/ListProducts.vue";

import ListOrders from "../views/ListOrders.vue";
import OrderDetail from "../views/OrderDetail.vue";

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
    path: "/orders",
    name: "ListOrders",
    component: ListOrders,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/orders/:id",
    name: "OrderDetail",
    component: OrderDetail,
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
