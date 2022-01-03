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
const employees = ref([]);

getJSON("/api/backoffice/employees")
  .then((body) => (employees.value = body.employees))
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
        <li class="breadcrumb-item active" aria-current="page">Employees</li>
      </ol>
    </nav>

    <Alert ref="alert" />

    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">email</th>
            <th scope="col">blocked</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee._id">
            <th scope="row">
              <router-link
                :to="{ name: 'UpdateEmployee', params: { id: employee._id } }"
              >
                {{ employee._id }}
              </router-link>
            </th>
            <td>{{ employee.email }}</td>
            <td>{{ employee.blocked }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
