<!--
  This starter template is using Vue 3 <script setup> SFCs
  Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
-->
<script setup>
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const products = ref([]);

fetch("/api/backoffice/products").then((res) => {
  if (res.ok) {
    res.json().then((body) => (products.value = body.products));
  } else if (res.status == 401) {
    router.push({ name: "Signin" });
  } else {
    // eslint-disable-next-line
    console.error(res);
  }
});
</script>

<template>
  <Navbar />
  <main class="container w-100 h-100 py-4">
    <nav class="mb-4" aria-label="breadcrumb">
      <ol class="breadcrumb fw-bold">
        <li class="breadcrumb-item active" aria-current="page">Products</li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'CreateProduct' }">
            <small><i class="bi bi-plus-circle"></i></small>
          </router-link>
        </li>
      </ol>
    </nav>

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">status</th>
          <th scope="col">visible</th>
          <th scope="col">base price</th>
          <th scope="col">daily price</th>
          <th scope="col">rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <th scope="row">
            <router-link
              :to="{ name: 'UpdateProduct', params: { id: product._id } }"
            >
              {{ product._id }}
            </router-link>
          </th>
          <td>{{ product.name }}</td>
          <td>{{ product.status }}</td>
          <td>{{ product.visible }}</td>
          <td>{{ product.basePrice }}</td>
          <td>{{ product.dailyPrice }}</td>
          <td>{{ product.rating }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
