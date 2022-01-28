import { createRouter, createWebHistory } from "vue-router";

import UpdateEmployee from "../views/UpdateEmployee.vue";
import ListEmployees from "../views/ListEmployees.vue";

import UpdateCustomer from "../views/UpdateCustomer.vue";
import ListCustomers from "../views/ListCustomers.vue";

import UpdateCoupon from "../views/UpdateCoupon.vue";
import CreateCoupon from "../views/CreateCoupon.vue";
import ListCoupons from "../views/ListCoupons.vue";

import UpdateProduct from "../views/UpdateProduct.vue";
import CreateProduct from "../views/CreateProduct.vue";
import ListProducts from "../views/ListProducts.vue";

import ListOrders from "../views/ListOrders.vue";
import UpdateOrder from "../views/UpdateOrder.vue";

import Signin from "../views/Signin.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "ListOrders" },
    name: "Home",
    meta: {
      restricted: false,
    },
  },

  {
    path: "/orders/:id",
    name: "UpdateOrder",
    component: UpdateOrder,
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
    path: "/coupons/:id",
    name: "UpdateCoupon",
    component: UpdateCoupon,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/coupons",
    name: "ListCoupons",
    component: ListCoupons,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/coupons",
    name: "CreateCoupon",
    component: CreateCoupon,
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
    path: "/employees/:id",
    name: "UpdateEmployee",
    component: UpdateEmployee,
    meta: {
      restricted: true,
    },
  },
  {
    path: "/employees",
    name: "ListEmployees",
    component: ListEmployees,
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
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const ROLES = ["employee", "admin"];

  if (to.meta.restricted && !ROLES.includes(user.role)) {
    next({ name: "Signin", params: { returnTo: to.fullPath } });
  } else {
    next();
  }
});

export default router;
