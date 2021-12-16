<!--
  This starter template is using Vue 3 <script setup> SFCs
  Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
-->
<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const error = ref();
const email = ref();
const password = ref();

// https://v3.vuejs.org/guide/composition-api-template-refs.html#template-refs
const emailElement = ref();

async function signin() {
  const res = await fetch("/api/backoffice/signin", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  if (res.ok) {
    const returnTo = route.params.returnTo || { name: "Home" };
    const user = await res.json();

    sessionStorage.setItem("employee", JSON.stringify(user));
    router.push(returnTo);
  } else {
    error.value = "Sign-in required";
    email.value = "";
    password.value = "";

    emailElement.value.focus();
  }
}
</script>

<template>
  <main class="w-100 h-100 container">
    <div class="row d-flex text-center align-items-center m-auto w-100 h-100">
      <div class="col m-auto">
        <router-link to="/">
          <img src="@/assets/nolonoloplus-dark.png" alt="Nolo Nolo Plus Logo" />
        </router-link>
        <h1 class="my-4 fw-normal">Backoffice</h1>

        <form @submit.prevent="signin">
          <div
            v-if="error"
            role="alert"
            class="alert alert-warning alert-dismissible fade show mb-4"
          >
            {{ error }}
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              data-bs-dismiss="alert"
            ></button>
          </div>

          <div class="form-floating">
            <input
              id="email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="email@example.com"
              class="form-control rounded-0 rounded-top"
              required
              v-model="email"
              ref="emailElement"
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
              v-model="password"
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

<style>
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
