<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import { DatePicker } from "v-calendar";

import {
  getJSON,
  putJSON,
  redirectOnStatus,
  deleteJSON,
  onStatus,
} from "../http";
import { signinRoute, formatDate } from "../utils";

import Navbar from "../components/Navbar.vue";
import Alert from "../components/Alert.vue";

const router = useRouter();
const route = useRoute();

const alert = ref();

const orderId = route.params.id;
const order = ref({
  products: [],
  coupons: [],
  startDate: "",
  endDate: "",
  subtotalPrice: 0,
  discountsPrice: 0,
  couponsPrice: 0,
  totalPrice: 0,
});

const updatePayload = ref({});

function userRole() {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  return user.role;
}

function isEmployee() {
  return userRole() === "employee";
}

getJSON(`/api/backoffice/orders/${orderId}`)
  .then((body) => {
    order.value = body;

    updatePayload.value = {
      state: body.state,
      range: {
        start: new Date(body.startDate),
        end: new Date(body.endDate),
      },
      penaltyPrice: body.penaltyPrice,
    };
  })
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

function deleteOrder() {
  deleteJSON(`/api/backoffice/orders/${orderId}`, false)
    .then(() => router.replace({ name: "ListOrders" }))
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch(onStatus(422, () => alert.value.error("Unable to delete order")))
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}

function updateOrder() {
  order.value.state = updatePayload.value.state;
  order.value.startDate = updatePayload.value.range.start;
  order.value.endDate = updatePayload.value.range.end;
  order.value.penaltyPrice =
    updatePayload.value.state === "closed"
      ? updatePayload.value.penaltyPrice
      : 0;

  putJSON(`/api/backoffice/orders/${orderId}`, order.value)
    .then((body) => {
      order.value = body;

      updatePayload.value = {
        state: body.state,
        range: {
          start: new Date(body.startDate),
          end: new Date(body.endDate),
        },
        penaltyPrice: body.penaltyPrice,
      };

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
          <router-link :to="{ name: 'ListOrders' }">Orders</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ order._id }}
        </li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <h3 class="w-100 text-center">Order</h3>
    <form
      v-if="order.state === 'open'"
      class="mb-5"
      @submit.prevent="updateOrder"
    >
      <div class="row g-4">
        <div class="col-md-4">
          <div class="form-label">Rental Period</div>
          <DatePicker v-model="updatePayload.range" is-range>
            <template v-slot="{ inputValue, inputEvents }">
              <div class="input-group">
                <input
                  class="form-control"
                  :value="inputValue.start"
                  :disabled="!isEmployee()"
                  v-on="inputEvents.start"
                  aria-label="Start date"
                />
                <input
                  class="form-control"
                  :value="inputValue.end"
                  :disabled="!isEmployee()"
                  v-on="inputEvents.end"
                  aria-label="End date"
                />
              </div>
            </template>
          </DatePicker>
        </div>

        <div class="col-md-4">
          <label for="orderPenaltyPrice" class="form-label"
            >Penalty price</label
          >
          <div class="input-group">
            <span class="input-group-text">€</span>
            <input
              v-model="updatePayload.penaltyPrice"
              class="form-control"
              type="number"
              id="orderPenaltyPrice"
              value="0"
              step="0.01"
              min="0"
              required
              :disabled="updatePayload.state !== 'closed' || !isEmployee()"
            />
          </div>
        </div>

        <div class="col-md-4">
          <label for="orderState" class="form-label">State</label>
          <select
            v-model="updatePayload.state"
            class="form-select"
            id="orderState"
            :disabled="!isEmployee()"
            required
          >
            <option value="open" selected>Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div class="col-12">
          <button
            type="submit"
            class="btn btn-danger"
            :disabled="!isEmployee()"
          >
            Update
          </button>
          <button
            v-if="new Date() < new Date(order.startDate)"
            type="button"
            class="btn btn-warning ms-2"
            @click="deleteOrder"
          >
            Delete
          </button>
        </div>
      </div>
    </form>

    <div class="table-responsive">
      <table class="table table-hover mb-5">
        <thead>
          <tr>
            <th scope="col">customer</th>
            <th v-if="order.employeeId" scope="col">employee</th>
            <th scope="col">state</th>
            <th scope="col">start date</th>
            <th scope="col">end date</th>
            <th scope="col">days</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <router-link
                v-if="order.customerId"
                :to="{
                  name: 'UpdateCustomer',
                  params: { id: order.customerId },
                }"
              >
                {{ order.customerId }}
              </router-link>
            </td>
            <td v-if="order.employeeId">
              <router-link
                v-if="order.employeeId"
                :to="{
                  name: 'UpdateEmployee',
                  params: { id: order.employeeId },
                }"
              >
                {{ order.employeeId }}
              </router-link>
            </td>
            <td>{{ order.state }}</td>
            <td>{{ formatDate(order.startDate) }}</td>
            <td>{{ formatDate(order.endDate) }}</td>
            <td>{{ order.days }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="w-100 text-center">Pricing</h3>
    <div class="table-responsive">
      <table class="table table-hover mb-5">
        <thead>
          <tr>
            <th scope="col">subtotal</th>
            <th scope="col">discounts</th>
            <th scope="col">coupons</th>
            <th scope="col" v-if="order.state === 'closed'">penalty</th>
            <th scope="col">total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>€ {{ order.subtotalPrice.toFixed(2) }}</td>
            <td>€ {{ order.discountsPrice.toFixed(2) }}</td>
            <td>€ {{ order.couponsPrice.toFixed(2) }}</td>
            <td v-if="order.state === 'closed'">
              € {{ order.penaltyPrice.toFixed(2) }}
            </td>
            <td>€ {{ order.totalPrice.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="w-100 text-center">Products</h3>
    <div class="table-responsive">
      <table class="table table-hover mb-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">base price</th>
            <th scope="col">daily price</th>
            <th scope="col">discount price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in order.products" :key="product.productId">
            <th scope="row">
              <router-link
                :to="{
                  name: 'UpdateProduct',
                  params: { id: product.productId },
                }"
              >
                {{ product.productId }}
              </router-link>
            </th>
            <td>{{ product.name }}</td>
            <td>€ {{ product.basePrice.toFixed(2) }}</td>
            <td>€ {{ product.dailyPrice.toFixed(2) }}</td>
            <td>€ {{ product.discountPrice.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <template v-if="order.coupons && order.coupons.length > 0">
      <h3 class="w-100 text-center">Coupons</h3>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">code</th>
              <th scope="col">value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="coupon in order.coupons" :key="coupon.code">
              <th scope="row">{{ coupon.code }}</th>
              <td>€ {{ coupon.value.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </main>
</template>
