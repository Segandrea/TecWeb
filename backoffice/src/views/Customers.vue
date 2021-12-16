<!--
  This starter template is using Vue 3 <script setup> SFCs
  Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
-->
<script setup>
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const customers = ref([]);

fetch("/api/backoffice/customers").then((res) => {
  if (res.ok) {
    res.json().then((body) => (customers.value = body.customers));
  } else if (res.status == 401) {
    router.push({ name: "Signin" });
  } else {
    // eslint-disable-next-line
    console.error(res);
  }
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
              :to="{ name: 'Customer', params: { id: customer._id } }"
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
