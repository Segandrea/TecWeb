<script>
const urlParams = new URLSearchParams(window.location.search);
const errorKind = {
  required: "Sign in required",
  invalid: "Invalid credentials",
};

export default {
  data() {
    return {
      error: errorKind[urlParams.get("error")],
    };
  },
};
</script>

<template>
  <main class="w-100 h-100">
    <div class="container h-100 w-100">
      <div class="row d-flex text-center align-items-center m-auto w-100 h-100">
        <div class="col m-auto">
          <a href="/">
            <img
              src="@/assets/nolonoloplus-dark.png"
              alt="Nolo Nolo Plus Logo"
              class="mb-4"
            />
          </a>

          <form action="/api/backoffice/signin" method="post">
            <div
              v-if="error"
              class="alert alert-warning alert-dismissible fade show mb-4"
              role="alert"
            >
              {{ error }}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>

            <div class="form-floating">
              <input
                type="email"
                name="email"
                class="form-control rounded-0 rounded-top"
                placeholder="domain@example.com"
                required
              />
              <label for="signInEmail">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                name="password"
                class="form-control rounded-0 rounded-bottom"
                minlength="4"
                placeholder="Password"
                required
              />
              <label for="signInPassword">Password</label>
            </div>

            <input type="hidden" name="role" value="employee" />
            <button class="btn btn-lg btn-info w-100 mt-4" type="submit">
              Sign in
            </button>
          </form>
        </div>
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
