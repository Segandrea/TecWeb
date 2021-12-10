<script>
export default {
  data() {
    return {
      error: undefined,
      email: undefined,
      password: undefined,
    };
  },
  methods: {
    async signin() {
      const res = await fetch("/api/backoffice/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: "employee",
          email: this.email,
          password: this.password,
        }),
      });

      if (res.status == 200) {
        const returnTo = this.$route.params.returnTo || { name: "Home" };
        localStorage.setItem("user", JSON.stringify({ role: "employee" }));
        this.$router.push(returnTo);
      } else {
        this.error = "Sign-in required";
        this.password = "";
        this.email = "";
        this.$refs.email.focus();
      }
    },
  },
};
</script>

<template>
  <main class="w-100 h-100 container">
    <div class="row d-flex text-center align-items-center m-auto w-100 h-100">
      <div class="col m-auto">
        <a href="/">
          <img
            src="@/assets/nolonoloplus-dark.png"
            alt="Nolo Nolo Plus Logo"
            class="mb-4"
          />
        </a>

        <form @submit.prevent="signin">
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
            ></button>
          </div>

          <div class="form-floating">
            <input
              v-model="email"
              ref="email"
              type="email"
              class="form-control rounded-0 rounded-top"
              placeholder="domain@example.com"
              autofocus
              required
            />
            <label for="signInEmail">Email address</label>
          </div>
          <div class="form-floating">
            <input
              v-model="password"
              type="password"
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
