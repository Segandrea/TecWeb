<script>
export default {
  methods: {
    async signout() {
      await fetch("/api/backoffice/signout", { method: "POST" });
      localStorage.removeItem("user");
      this.$router.push({ name: "Signin" });
    },
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img
            src="@/assets/nolonoloplus-light.png"
            width="30"
            height="30"
            alt=""
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav flex-fill">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/customers"
                >Customers</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products"
                >Products</router-link
              >
            </li>
          </ul>
          <form @submit.prevent="signout">
            <button class="btn btn-outline-warning" type="submit">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
