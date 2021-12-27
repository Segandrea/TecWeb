<!--
  This starter template is using Vue 3 <script setup> SFCs
  Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
-->
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

import { postJSON, onStatus } from "../http";

import Alert from "../components/Alert.vue";

const router = useRouter();
const route = useRoute();

const alert = ref();

// https://v3.vuejs.org/guide/composition-api-template-refs.html#template-refs
const emailInput = ref();

const employee = ref({});

function signin() {
  postJSON("/api/backoffice/signin", employee.value)
    .then((body) => {
      const returnTo = route.params.returnTo || { name: "Home" };
      sessionStorage.setItem("user", JSON.stringify(body));
      router.push(returnTo);
    })
    .catch(
      onStatus(401, () => {
        employee.value = {};
        emailInput.value.focus();
        alert.value.error("Signin required");
      })
    )
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err);
      alert.value.error("Something went wrong!");
    });
}
</script>

<template>
  <main class="w-100 h-100 container">
    <div class="row d-flex text-center align-items-center m-auto w-100 h-100">
      <div class="col m-auto">
        <router-link :to="{ name: 'Home' }">
          <img src="@/assets/nolonoloplus-dark.png" alt="Nolo Nolo Plus Logo" />
        </router-link>
        <h1 class="my-4 fw-normal">Backoffice</h1>

        <form @submit.prevent="signin">
          <Alert ref="alert" />

          <div class="form-floating">
            <input
              id="email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="email@example.com"
              class="form-control rounded-0 rounded-top"
              required
              v-model="employee.email"
              ref="emailInput"
            />
            <label for="email">Email</label>
          </div>
          <div class="form-floating">
            <input
              id="password"
              type="password"
              name="password"
              autocomplete="current-password"
              placeholder="Password"
              class="form-control rounded-0 rounded-bottom"
              minlength="4"
              required
              v-model="employee.password"
            />
            <label for="password">Password</label>
          </div>

          <button class="btn btn-lg btn-info w-100 mt-4" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
body {
  background-color: #f5f5f5 !important;
}

form {
  max-width: 330px;
  margin: auto;
}

.form-floating:focus-within {
  z-index: 2;
}
</style>
