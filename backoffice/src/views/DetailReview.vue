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
const review = ref({});

const reviewId = route.params.id;

getJSON(`/api/backoffice/reviews/${reviewId}`)
  .then((body) => (review.value = body))
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
        <li class="breadcrumb-item active" aria-current="page">Review</li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <div class="container">
      <div class="col">
        <div class="row">
          <div class="col-sm-6 col-md-8">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ review.content }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-sm-2 col-md-4">
            <div class="row">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">ProductId</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <router-link
                      :to="{
                        name: 'UpdateProduct',
                        params: { id: review.productId },
                      }"
                    >
                      <td>{{ review.productId }}</td>
                    </router-link>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ review.rating }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">User</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ review.username }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
