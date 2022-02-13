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
const coupons = ref([]);

getJSON("/api/backoffice/coupons")
  .then((body) => (coupons.value = body.coupons))
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
        <li class="breadcrumb-item active" aria-current="page">Coupons</li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'CreateCoupon' }">
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
            <th scope="col">customer</th>
            <th scope="col">code</th>
            <th scope="col">value</th>
            <th scope="col">validity start</th>
            <th scope="col">validity end</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon._id">
            <th scope="row">
              <router-link
                :to="{ name: 'UpdateCoupon', params: { id: coupon._id } }"
              >
                {{ coupon._id }}
              </router-link>
            </th>
            <td>
              <router-link
                :to="{
                  name: 'UpdateCustomer',
                  params: { id: coupon.customerId },
                }"
              >
                {{ coupon.customerId }}
              </router-link>
            </td>
            <td>{{ coupon.code }}</td>
            <td>€ {{ coupon.value.toFixed(2) }}</td>
            <td>
              {{
                coupon.validity && coupon.validity.start
                  ? formatDate(coupon.validity.start)
                  : ""
              }}
            </td>
            <td>
              {{
                coupon.validity && coupon.validity.end
                  ? formatDate(coupon.validity.end)
                  : ""
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
