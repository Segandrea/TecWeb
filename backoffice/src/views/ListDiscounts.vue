<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import { getJSON, redirectOnStatus } from "../http";
import { signinRoute } from "../utils";

import Navbar from "../components/Navbar.vue";
import Alert from "../components/Alert.vue";

const router = useRouter();
const route = useRoute();

const alert = ref();
const discounts = ref([]);

getJSON("/api/backoffice/discounts")
  .then((body) => (discounts.value = body.discounts))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });
</script>

<template>
  <Navbar />
  <main class="container w-100 h-100 py-4">
    <nav class="mb-4" aria-label="breadcrumb">
      <ol class="breadcrumb fw-bold">
        <li class="breadcrumb-item active" aria-current="page">Discounts</li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'CreateDiscount' }">
            <small><i class="bi bi-plus-circle"></i></small>
          </router-link>
        </li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">code</th>
          <th scope="col">value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="discount in discounts" :key="discount._id">
          <th scope="row">
            <router-link
              :to="{ name: 'UpdateDiscount', params: { id: discount._id } }"
            >
              {{ discount._id }}
            </router-link>
          </th>
          <td>{{ discount.code }}</td>
          <td>€ {{ discount.value }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
