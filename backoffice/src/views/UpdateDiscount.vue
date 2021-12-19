<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import { getJSON, putJSON, redirectOnStatus } from "../http";
import { signinRoute } from "../utils";

import Navbar from "../components/Navbar.vue";
import Alert from "../components/Alert.vue";

const router = useRouter();
const route = useRoute();

const alert = ref();

const discountId = route.params.id;
const discount = ref({});

getJSON(`/api/backoffice/discounts/${discountId}`)
  .then((body) => (discount.value = body))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

function updateDiscount() {
  putJSON(`/api/backoffice/discounts/${discountId}`, discount.value)
    .then((body) => {
      discount.value = body;
      alert.value.info("Success");
    })
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}
</script>

<template>
  <Navbar />
  <main class="container w-100 h-100 py-4">
    <nav class="mb-4" aria-label="breadcrumb">
      <ol class="breadcrumb fw-bold">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'ListDiscounts' }">Discounts</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ discount._id }}
        </li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <form @submit.prevent="updateDiscount">
      <div class="row g-4">
        <div class="col-md-2">
          <label for="discountCode" class="form-label">Code</label>
          <input
            v-model="discount.code"
            type="text"
            class="form-control"
            id="discountCode"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="discountValue" class="form-label">Value</label>
          <div class="input-group">
            <span class="input-group-text">€</span>
            <input
              v-model="discount.value"
              type="number"
              class="form-control"
              id="discountValue"
              value="0"
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-danger">Update</button>
        </div>
      </div>
    </form>
  </main>
</template>
