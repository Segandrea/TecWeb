<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

async function signout() {
  await fetch("/api/backoffice/signout", { method: "POST" });
  sessionStorage.removeItem("user");
  router.push({ name: "Signin" });
}

function userRole() {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  return user.role;
}

function isAdmin() {
  return userRole() === "admin";
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link :to="{ name: 'Home' }" class="navbar-brand">
          <img
            src="@/assets/nolonoloplus-light.png"
            width="30"
            height="30"
            alt=""
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav flex-fill">
            <li class="nav-item">
              <router-link
                :to="{ name: 'ListOrders' }"
                class="nav-link"
                active-class="active"
                >Orders</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'ListProducts' }"
                class="nav-link"
                active-class="active"
                >Products</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'ListCoupons' }"
                class="nav-link"
                active-class="active"
                >Coupons</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'ListCustomers' }"
                class="nav-link"
                active-class="active"
                >Customers</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'ListEmployees' }"
                class="nav-link"
                active-class="active"
                >Employees</router-link
              >
            </li>
            <li v-if="isAdmin()" class="nav-item">
              <a class="nav-link" href="/dashboard">Dashboard</a>
            </li>
          </ul>
          <form @submit.prevent="signout">
            <button class="btn btn-outline-warning" type="submit">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
