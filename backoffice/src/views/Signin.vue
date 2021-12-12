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
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      role: "employee",
      email: email.value,
      password: password.value,
    }),
  });

  if (res.status == 200) {
    const returnTo = route.params.returnTo || { name: "Home" };
    localStorage.setItem("user", JSON.stringify({ role: "employee" }));
    router.push(returnTo);
  } else {
    error.value = "Sign-in required";
    password.value = "";
    email.value = "";
    emailElement.value.focus();
  }
}
</script>

<template>
  <main class="w-100 h-100 container">
    <div class="row d-flex text-center align-items-center m-auto w-100 h-100">
      <div class="col m-auto">
        <router-link to="/">
          <img
            src="@/assets/nolonoloplus-dark.png"
            alt="Nolo Nolo Plus Logo"
            class="mb-4"
          />
        </router-link>

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
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>

          <div class="form-floating">
            <input
              ref="emailElement"
              type="email"
              v-model="email"
              class="form-control rounded-0 rounded-top"
              placeholder="domain@example.com"
              autofocus
              required
            />
            <label for="signInEmail">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              v-model="password"
              class="form-control rounded-0 rounded-bottom"
              minlength="4"
              placeholder="Password"
              required
            />
            <label for="signInPassword">Password</label>
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

main {
  margin: auto auto !important;
  padding: 0;
}

form {
  max-width: 330px;
  margin: auto;
}

.form-floating:focus-within {
  z-index: 2;
}
</style>
