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
const orders = ref([]);

getJSON("/api/backoffice/orders")
  .then((body) => (orders.value = body.orders))
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
        <li class="breadcrumb-item active" aria-current="page">Orders</li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">user</th>
          <th scope="col">products</th>
          <th scope="col">discounts</th>
          <th scope="col">issued</th>
          <th scope="col">returnal</th>
          <th scope="col">total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order._id">
          <th scope="row">
            <router-link
              :to="{ name: 'OrderDetail', params: { id: order._id } }"
            >
              {{ order._id }}
            </router-link>
          </th>
          <td>{{ order.userId }}</td>
          <td>{{ order.products.length }}</td>
          <td>{{ order.discounts.length }}</td>
          <td>{{ order.issuedAt.split("T")[0] }}</td>
          <td>{{ order.returnalDate.split("T")[0] }}</td>
          <td>€ {{ order.totalPrice }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
