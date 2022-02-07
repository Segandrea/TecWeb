<!--
  This starter template is using Vue 3 <script setup> SFCs
  Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
-->
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import { DatePicker } from "v-calendar";

import { postJSON, onStatus, redirectOnStatus } from "../http";
import { signinRoute, toUploads } from "../utils";

import Navbar from "../components/Navbar.vue";
import Alert from "../components/Alert.vue";

const router = useRouter();
const route = useRoute();

const alert = ref();
const imageInput = ref();

const product = ref({
  visible: false,
  category: "party",
  status: "brand-new",
  basePrice: 0,
  dailyPrice: 0,
  discountPrice: 0,
  unavailability: {},
});

function createProduct() {
  if (product.value.visible && imageInput.value.files.length <= 0) {
    return alert.value.error("Visible products must have at least an image");
  }

  if (product.value.discountPrice > product.value.basePrice) {
    return alert.value.error("Discount price must be lesser than base price");
  }

  const unavailability = product.value.unavailability || {};
  if ((unavailability.start || -Infinity) > (unavailability.end || Infinity)) {
    return alert.value.error("Unavailability start must be lesser than end");
  }

  toUploads(imageInput.value.files)
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something wrong with image files!");
    })
    .then((uploads) =>
      postJSON("/api/backoffice/products", {
        ...product.value,
        uploads,
      })
    )
    .then((body) =>
      router.replace({ name: "UpdateProduct", params: { id: body._id } })
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
        <li class="breadcrumb-item active" aria-current="page">Products</li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <form @submit.prevent="createProduct">
      <div class="row g-4">
        <div class="col-md-3">
          <label for="name" class="form-label">Name</label>
          <input
            v-model="product.name"
            class="form-control"
            type="text"
            id="productName"
            required
          />
        </div>

        <div class="col-md-2">
          <label for="productCategory" class="form-label">Category</label>
          <select
            v-model="product.category"
            class="form-select"
            id="productCategory"
            required
          >
            <option value="party" selected>Party</option>
            <option value="cards">Cards</option>
            <option value="mistery">Mistery</option>
            <option value="puzzle">Puzzle</option>
            <option value="dices">Dices</option>
          </select>
        </div>

        <div class="col-md-2">
          <label for="productStatus" class="form-label">Status</label>
          <select
            v-model="product.status"
            class="form-select"
            id="productStatus"
            required
          >
            <option value="brand-new" selected>Brand-new</option>
            <option value="refurbished">Refurbished</option>
            <option value="damaged">Damaged</option>
          </select>
        </div>

        <div class="col-md-4">
          <div class="form-label">Unavailability</div>
          <DatePicker
            v-model="product.unavailability"
            :clearable="true"
            is-range
          >
            <template v-slot="{ inputValue, inputEvents }">
              <div class="input-group">
                <input
                  class="form-control"
                  :value="inputValue.start"
                  v-on="inputEvents.start"
                  aria-label="Start"
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

        <div class="d-flex col-md-1 align-items-end">
          <div class="form-check form-switch pb-1">
            <input
              v-model="product.visible"
              class="form-check-input"
              type="checkbox"
              id="productVisible"
            /><label class="form-check-label" for="productVisible"
              >Visible</label
            >
          </div>
        </div>

        <div class="col-md-12">
          <label for="productDescription" class="form-label">Description</label>
          <textarea
            v-model="product.description"
            class="form-control"
            id="productDescription"
            rows="5"
            required
          ></textarea>
        </div>

        <div class="col-md-3">
          <label for="productImage" class="form-label">Image</label>
          <input
            id="productImage"
            ref="imageInput"
            type="file"
            class="form-control"
            accept=".png,.jpg,.jpeg"
            multiple
          />
        </div>

        <div class="col-md-3">
          <label for="productDiscountPrice" class="form-label"
            >Discount price</label
          >
          <div class="input-group">
            <span class="input-group-text">€</span>
            <input
              v-model="product.discountPrice"
              class="form-control"
              type="number"
              id="productDiscountPrice"
              value="0"
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>

        <div class="col-md-3">
          <label for="productBasePrice" class="form-label">Base price</label>
          <div class="input-group">
            <span class="input-group-text">€</span>
            <input
              v-model="product.basePrice"
              class="form-control"
              type="number"
              id="productBasePrice"
              value="0"
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>

        <div class="col-md-3">
          <label for="productDailyPrice" class="form-label">Daily price</label>
          <div class="input-group">
            <span class="input-group-text">€</span>
            <input
              v-model="product.dailyPrice"
              class="form-control"
              type="number"
              id="productDailyPrice"
              value="0"
              step="0.01"
              min="0"
              required
            />
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-danger">Create</button>
        </div>
      </div>
    </form>
  </main>
</template>
