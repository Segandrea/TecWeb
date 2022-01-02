<!--
  This starter template is using Vue 3 <script setup> SFCs
  Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
-->
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

import { getJSON, putJSON, redirectOnStatus } from "../http";
import { signinRoute, toUploads } from "../utils";

import Navbar from "../components/Navbar.vue";
import Alert from "../components/Alert.vue";

const router = useRouter();
const route = useRoute();

const alert = ref();
const imageInput = ref();

const productId = route.params.id;
const product = ref({});

getJSON(`/api/backoffice/products/${productId}`)
  .then((body) => (product.value = body))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

function updateProduct() {
  if (
    product.value.visible &&
    (product.value.images || []).length + imageInput.value.files.length <= 0
  ) {
    return alert.value.error("Visible products must have at least an image");
  }

  if (product.value.discountPrice > product.value.basePrice) {
    return alert.value.error("Discount price must be lesser than base price");
  }

  toUploads(imageInput.value.files)
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something wrong with image files!");
    })
    .then((uploads) =>
      putJSON(`/api/backoffice/products/${productId}`, {
        ...product.value,
        uploads,
      })
    )
    .then((body) => {
      product.value = body;

      // clear the HTML input element
      imageInput.value.value = null;

      // set the focus on last item of the carousel
      if (carouselItems.length > 0) {
        carouselItems.forEach((item) => item.classList.remove("active"));
        carouselItems.at(-1).classList.add("active");
      }

      alert.value.info("Success");
    })
    .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
    .catch((err) => {
      // eslint-disable-next-line
        console.error(err);
      alert.value.error("Something went wrong!");
    });
}

const carouselItems = [];

function setCarouselItem(element) {
  if (element) {
    carouselItems.push(element);
  }
}

function removeImage(index) {
  product.value.images.splice(index, 1);
  carouselItems.splice(index, 1);

  if (carouselItems.length > 0) {
    carouselItems[0].classList.add("active");
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

    <Alert ref="alert" />

    <div v-if="product.images && product.images.length > 0" class="row">
      <div class="col">
        <div
          id="carouselControls"
          class="carousel carousel-dark slide my-2"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div class="carousel-inner h-100 text-center">
            <div
              v-for="(image, index) in product.images"
              :key="image._id"
              class="carousel-item h-100"
              :class="{ active: 0 === index }"
              :ref="setCarouselItem"
            >
              <img
                :src="image.url"
                class="d-block mx-auto h-75"
                :alt="`${product.name} image ${index}`"
              />
              <button class="btn btn-link" @click="removeImage(index)">
                remove image
              </button>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
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
          <button type="submit" class="btn btn-danger">Update</button>
        </div>
      </div>
    </form>

    <template v-if="product.reviews && product.reviews.length > 0">
      <h3 class="mt-4 text-center">Reviews</h3>
      <div class="table-responsive">
        <table class="table table-hover mb-4">
          <thead>
            <tr>
              <th scope="col">username</th>
              <th scope="col">content</th>
              <th scope="col">rating</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="review in product.reviews" :key="review._id">
              <td>{{ review.username }}</td>
              <td>{{ review.content }}</td>
              <td>{{ review.rating }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </main>
</template>

<style scoped>
.carousel {
  height: 256px;
}
</style>
