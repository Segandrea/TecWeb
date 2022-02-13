<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import { DatePicker } from "v-calendar";

import { signinRoute } from "../utils";
import {
  getJSON,
  putJSON,
  deleteJSON,
  redirectOnStatus,
  onStatus,
} from "../http";

import Navbar from "../components/Navbar.vue";
import Alert from "../components/Alert.vue";

const router = useRouter();
const route = useRoute();

const alert = ref();

const couponId = route.params.id;
const coupon = ref({});

getJSON(`/api/backoffice/coupons/${couponId}`)
  .then((body) => (coupon.value = body))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

function updateCoupon() {
  const data = coupon.value;

  if (!(data.customerId || "").trim()) {
    delete data.customerId;
  }

  if (data.validity && (!data.validity.start || !data.validity.end)) {
    delete data.validity;
  }

  putJSON(`/api/backoffice/coupons/${couponId}`, data)
    .then((body) => {
      coupon.value = body;
      alert.value.info("Success");
    })
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

function deleteCoupon() {
  deleteJSON(`/api/backoffice/coupons/${couponId}`, false)
    .then(() => router.replace({ name: "ListCoupons" }))
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch(onStatus(422, () => alert.value.error("Unable to delete coupon")))
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
          <router-link :to="{ name: 'ListCoupons' }">Coupons</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ coupon._id }}
        </li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <form @submit.prevent="updateCoupon">
      <div class="row g-4">
        <div class="col-md-3">
          <label for="couponCode" class="form-label">Code</label>
          <input
            v-model="coupon.code"
            type="text"
            class="form-control"
            id="couponCode"
            required
          />
        </div>

        <div class="col-md-3">
          <label for="couponValue" class="form-label">Value</label>
          <div class="input-group">
            <span class="input-group-text">€</span>
            <input
              v-model="coupon.value"
              type="number"
              class="form-control"
              id="couponValue"
              value="0"
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>

        <div class="col-md-3">
          <label for="couponCustomerId" class="form-label">Customer Id</label>
          <input
            v-model="coupon.customerId"
            class="form-control"
            type="text"
            id="couponCustomerId"
          />
        </div>

        <div class="col-md-3">
          <div class="form-label">Validity Dates</div>
          <DatePicker v-model="coupon.validity" is-range>
            <template v-slot="{ inputValue, inputEvents }">
              <div class="input-group">
                <input
                  class="form-control"
                  :value="inputValue.start"
                  v-on="inputEvents.start"
                  aria-label="Start date"
                />
                <input
                  class="form-control"
                  :value="inputValue.end"
                  v-on="inputEvents.end"
                  aria-label="End date"
                />
              </div>
            </template>
          </DatePicker>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-danger">Update</button>
          <button
            type="button"
            class="btn btn-warning ms-2"
            @click="deleteCoupon"
          >
            Delete
          </button>
        </div>
      </div>
    </form>
  </main>
</template>
