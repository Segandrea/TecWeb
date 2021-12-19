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

const orderId = route.params.id;
const order = ref({});

getJSON(`/api/backoffice/orders/${orderId}`)
  .then((body) => (order.value = body))
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
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'ListOrders' }">Orders</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ order._id }}
        </li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <h3 class="w-100 text-center">Order</h3>
    <table class="table table-hover mb-5">
      <thead>
        <tr>
          <th scope="col">user</th>
          <th scope="col">products</th>
          <th scope="col">discounts</th>
          <th scope="col">issued</th>
          <th scope="col">returnal</th>
          <th scope="col">total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ order.userId }}</td>
          <td>{{ order.products.length }}</td>
          <td>{{ order.discounts.length }}</td>
          <td>{{ order.issuedAt.split("T")[0] }}</td>
          <td>{{ order.returnalDate.split("T")[0] }}</td>
          <td>€ {{ order.totalPrice }}</td>
        </tr>
      </tbody>
    </table>

    <h3 class="w-100 text-center">Products</h3>
    <table class="table table-hover mb-5">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">base price</th>
          <th scope="col">daily price</th>
          <th scope="col">initial status</th>
          <th scope="col">returnal status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in order.products" :key="product._id">
          <td>{{ product.name }}</td>
          <td>€ {{ product.basePrice }}</td>
          <td>€ {{ product.dailyPrice }}</td>
          <td>{{ product.initialStatus }}</td>
          <td>{{ product.returnalStatus }}</td>
        </tr>
      </tbody>
    </table>

    <h3 class="w-100 text-center">Discounts</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">code</th>
          <th scope="col">value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="discount in order.discounts" :key="discount._id">
          <td>{{ discount.code }}</td>
          <td>€ {{ discount.value }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
