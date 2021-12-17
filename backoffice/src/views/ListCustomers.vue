<!--
  This starter template is using Vue 3 <script setup> SFCs
  Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
-->
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";

import { getJSON, redirectOnStatus } from "../http";
import { signinRoute } from "../utils";

import Navbar from "../components/Navbar.vue";

const router = useRouter();
const route = useRoute();

const alert = ref();
const alertClass = computed(() => {
  const error = alert.value.status === "error";
  return {
    alert: true,
    "alert-danger": error,
    "alert-success": !error,
  };
});

function setAlert(status, message) {
  alert.value = { status, message };
  setTimeout(() => {
    alert.value = undefined;
  }, 5000);
}

const customers = ref([]);

getJSON("/api/backoffice/customers")
  .then((body) => (customers.value = body.customers))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    setAlert("error", "Something went wrong!");
  });
</script>

<template>
  <Navbar />
  <main class="container w-100 h-100 py-4">
    <nav class="mb-4" aria-label="breadcrumb">
      <ol class="breadcrumb fw-bold">
        <li class="breadcrumb-item active" aria-current="page">Customers</li>
      </ol>
    </nav>

    <div v-if="alert" :class="alertClass" role="alert">
      {{ alert.message }}
    </div>

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">username</th>
          <th scope="col">email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer._id">
          <th scope="row">
            <router-link
              :to="{ name: 'UpdateCustomer', params: { id: customer._id } }"
            >
              {{ customer._id }}
            </router-link>
          </th>
          <td>{{ customer.username }}</td>
          <td>{{ customer.email }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
