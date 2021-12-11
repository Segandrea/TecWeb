<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "../components/Navbar.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const customers = [
  // TODO: fetch from server
  { _id: 1, username: "@pluto", email: "pluto@email.com" },
  { _id: 2, username: "@pippo", email: "pippo@email.com" },
];

const customer = customers[id - 1];
</script>

<template>
  <Navbar />
  <main class="container w-100 h-100 py-4">
    <nav class="mb-4" aria-label="breadcrumb">
      <ol class="breadcrumb fw-bold">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Customers' }">Customers</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ customer._id }}
        </li>
      </ol>
    </nav>

    <div class="row g-4">
      <div class="col-md-2">
        <label for="username" class="form-label">Username</label>
        <input
          v-model="customer.username"
          type="text"
          class="form-control"
          id="username"
          required
        />
      </div>

      <div class="col-md-4">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="customer.email"
          type="email"
          class="form-control"
          id="email"
          required
        />
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-danger">Update</button>
      </div>
    </div>
  </main>
</template>
