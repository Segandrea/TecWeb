<!--
  This starter template is using Vue 3 <script setup> SFCs
  Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
-->
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
const reviews = ref([]);

getJSON("/api/backoffice/reviews")
  .then((body) => (reviews.value = body.reviews))
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
        <li class="breadcrumb-item active" aria-current="page">Reviews</li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'DetailReview' }">
            <small><i class="bi bi-plus-circle"></i></small>
          </router-link>
        </li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">reviewId</th>
          <th scope="col">productId</th>
          <th scope="col">raiting</th>
          <th scope="col">username</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="review in reviews" :key="review._id">
          <th scope="row">
            <router-link
              :to="{ name: 'DetailReview', params: { id: review._id } }"
            >
              {{ review._id }}
            </router-link>
          </th>
          <td>{{ review.productId }}</td>
          <td>{{ review.raiting }}</td>
          <td>{{ review.username }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
