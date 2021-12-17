<!--
  This starter template is using Vue 3 <script setup> SFCs
  Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
-->
<script setup>
import Navbar from "../components/Navbar.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";

const router = useRouter();
const route = useRoute();

const alert = ref();
const alertClass = computed(() => {
  const error = alert.value.status === "error";
  return {
    alert: true,
    "alert-danger": error,
    "alert-success": !error,
  };
});

const imageInput = ref();

function setAlert(status, message) {
  alert.value = { status, message };
  setTimeout(() => {
    alert.value = undefined;
  }, 5000);
}

const productId = route.params.id;
const product = ref({});

fetch(`/api/backoffice/products/${productId}`).then((res) => {
  if (res.ok) {
    res.json().then((body) => {
      product.value = body;
    });
  } else if (res.status == 401) {
    router.push({ name: "Signin" });
  } else {
    // eslint-disable-next-line
    console.error(res);
  }
});

async function updateProduct() {
  const res = await fetch(`/api/backoffice/products/${productId}`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify(product.value),
  });

  if (res.ok) {
    res.json().then((body) => {
      product.value = body;
      setAlert("ok", "Success");
    });
  } else if (res.status == 401) {
    router.push({ name: "Signin" });
  } else {
    // eslint-disable-next-line
    console.error(res);
    setAlert("error", "Something went wrong!");
  }
}
</script>

<template>
  <Navbar />
  <main class="container w-100 h-100 py-4">
    <nav class="mb-4" aria-label="breadcrumb">
      <ol class="breadcrumb fw-bold">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'ListProducts' }">Products</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product._id }}
        </li>
      </ol>
    </nav>

    <div v-if="alert" :class="alertClass" role="alert">
      {{ alert.message }}
    </div>

    <form @submit.prevent="updateProduct">
      <div class="row g-4">
        <div class="col-md-4">
          <label for="name" class="form-label">Name</label>
          <input
            v-model="product.name"
            class="form-control"
            type="text"
            id="productName"
            required
          />
        </div>

        <div class="col-md-4">
          <label for="productStatus" class="form-label">Status</label>
          <select
            v-model="product.status"
            class="form-select"
            id="productStatus"
            required
          >
            <option value="brand-new">Brand-new</option>
            <option value="refurbished">Refurbished</option>
            <option value="damaged">Damaged</option>
          </select>
        </div>

        <div class="d-flex col-md-4 align-items-end">
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
            required
            rows="3"
          ></textarea>
        </div>

        <div class="col-md-4">
          <label for="productImage" class="form-label">Image</label>
          <input
            ref="imageInput"
            class="form-control"
            type="file"
            id="productImage"
          />
        </div>

        <div class="col-md-4">
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

        <div class="col-md-4">
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
          <button type="submit" class="btn btn-danger">Update</button>
        </div>
      </div>
    </form>
  </main>
</template>
