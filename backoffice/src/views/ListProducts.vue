<!--
  This starter template is using Vue 3 <script setup> SFCs
  Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
-->
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
const products = ref([]);

getJSON("/api/backoffice/products")
  .then((body) => (products.value = body.products))
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
        <li class="breadcrumb-item active" aria-current="page">Products</li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'CreateProduct' }">
            <small><i class="bi bi-plus-circle"></i></small>
          </router-link>
        </li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">status</th>
            <th scope="col">visible</th>
            <th scope="col">discount</th>
            <th scope="col">base price</th>
            <th scope="col">daily price</th>
            <th scope="col">rating</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product._id">
            <th scope="row">
              <router-link
                :to="{ name: 'UpdateProduct', params: { id: product._id } }"
              >
                {{ product._id }}
              </router-link>
            </th>
            <td>{{ product.name }}</td>
            <td>{{ product.status }}</td>
            <td>{{ product.visible }}</td>
            <td>€ {{ product.discountPrice.toFixed(2) }}</td>
            <td>€ {{ product.basePrice.toFixed(2) }}</td>
            <td>€ {{ product.dailyPrice.toFixed(2) }}</td>
            <td>{{ product.rating }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
