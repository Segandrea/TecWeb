<!--
  This starter template is using Vue 3 <script setup> SFCs
  Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
-->
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

const employeeId = route.params.id;
const employee = ref({});

getJSON(`/api/backoffice/employees/${employeeId}`)
  .then((body) => (employee.value = body))
  .catch(redirectOnStatus(401, router, signinRoute(route.fullPath)))
  .catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    alert.value.error("Something went wrong!");
  });

function UpdateEmployee() {
  putJSON(`/api/backoffice/employees/${employeeId}`, employee.value)
    .then((body) => {
      employee.value = body;
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
          <router-link :to="{ name: 'ListCEmployees' }">Employees</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ employee._id }}
        </li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <form @submit.prevent="UpdateEmployee">
      <div class="row g-4">
        <div class="col-md-4">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="employee.email"
            class="form-control"
            type="email"
            id="email"
            required
          />
        </div>

        <div class="d-flex col-md-2 align-items-end">
          <div class="form-check form-switch pb-1">
            <input
              v-model="employee.blocked"
              class="form-check-input"
              type="checkbox"
              id="blocked"
            /><label class="form-check-label" for="blocked">Blocked</label>
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-danger">Update</button>
        </div>
      </div>
    </form>
  </main>
</template>
