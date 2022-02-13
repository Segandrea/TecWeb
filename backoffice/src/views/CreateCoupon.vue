<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import { postJSON, onStatus, redirectOnStatus } from "../http";
import { signinRoute } from "../utils";

import Navbar from "../components/Navbar.vue";
import Alert from "../components/Alert.vue";

const router = useRouter();
const route = useRoute();

const alert = ref();
const coupon = ref({
  code: "",
  value: 0,
  customerId: "",
});

function createCoupon() {
  const data = coupon.value;

  if (!data.customerId.trim()) {
    delete data.customerId;
  }

  postJSON("/api/backoffice/coupons", data)
    .then((body) =>
      router.replace({ name: "UpdateCoupon", params: { id: body._id } })
    )
    .catch(onStatus(400, () => alert.value.error("Invalid data supplied")))
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
        <li class="breadcrumb-item active" aria-current="page">Coupons</li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <form @submit.prevent="createCoupon">
      <div class="row g-4">
        <div class="col-md-4">
          <label for="couponCode" class="form-label">Code</label>
          <input
            v-model="coupon.code"
            class="form-control"
            type="text"
            id="couponCode"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="couponValue" class="form-label">Value</label>
          <div class="input-group">
            <span class="input-group-text">€</span>
            <input
              v-model="coupon.value"
              class="form-control"
              type="number"
              id="couponValue"
              value="0"
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>

        <div class="col-md-4">
          <label for="couponCustomerId" class="form-label">Customer Id</label>
          <input
            v-model="coupon.customerId"
            class="form-control"
            type="text"
            id="couponCustomerId"
          />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-danger">Create</button>
        </div>
      </div>
    </form>
  </main>
</template>
