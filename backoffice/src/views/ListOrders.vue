<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import { getJSON, redirectOnStatus } from "../http";
import { signinRoute, formatDate } from "../utils";

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
          <th scope="col">customer</th>
          <th scope="col">state</th>
          <th scope="col">start date</th>
          <th scope="col">end date</th>
          <th scope="col">days</th>
          <th scope="col">total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order._id">
          <th scope="row">
            <router-link
              :to="{ name: 'UpdateOrder', params: { id: order._id } }"
            >
              {{ order._id }}
            </router-link>
          </th>
          <td>
            <router-link
              :to="{ name: 'UpdateCustomer', params: { id: order.customerId } }"
            >
              {{ order.customerId }}
            </router-link>
          </td>
          <td>{{ order.state }}</td>
          <td>{{ formatDate(order.startDate) }}</td>
          <td>{{ formatDate(order.endDate) }}</td>
          <td>{{ order.days }}</td>
          <td>€ {{ order.totalPrice.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
