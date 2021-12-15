<script>
  import { path } from "$lib/helpers.js";

  const urlParams = new URLSearchParams(window.location.search);
  const errorKind = {
    invalid: "Invalid credentials",
  };
  const error = errorKind[urlParams.get("error")];

  function checkValidity() {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirm]");

    if (confirm.value === password.value) {
      confirm.setCustomValidity("");
    } else {
      confirm.setCustomValidity("Passwords do not match");
    }
  }
</script>

<svelte:head>
  <style>
    body {
      background-color: #f5f5f5;
    }
  </style>
</svelte:head>

<main class="w-100 h-100">
  <div class="container h-100 w-100">
    <div class="row d-flex text-center align-items-center m-auto w-100 h-100">
      <div class="col m-auto">
        <a href={path("/")}>
          <img src={path("/nolonoloplus-dark.png")} alt="Nolo Nolo Plus Logo" />
        </a>
        <h1 class="h3 my-4 fw-normal">Nice to meet you!</h1>

        <form action="/api/store/signup" method="post">
          {#if error}
            <div
              class="alert alert-warning alert-dismissible fade show mb-4"
              role="alert"
            >
              {error}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
          {/if}

          <div class="form-floating">
            <input
              type="email"
              name="email"
              class="form-control rounded-0 rounded-top"
              placeholder="domain@example.com"
              required
            />
            <label for="signUpEmail">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              name="password"
              class="form-control rounded-0"
              minlength="4"
              placeholder="Password"
              on:change={checkValidity}
              required
            />
            <label for="signUpPassword">Password</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              name="confirm"
              class="form-control rounded-0 rounded-bottom"
              minlength="4"
              placeholder="Confirm password"
              on:change={checkValidity}
              required
            />
            <label for="signUpConfirmPassword">Confirm password</label>
          </div>

          <button class="btn btn-lg btn-warning w-100 mt-4" type="submit"
            >Sign up</button
          >
          <p class="mt-2">
            Already registered? <a href={path("/auth/signin")} class="link-dark"
              >Sign in</a
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</main>

<slot />

<style>
  main {
    padding: 0 !important;
    margin: 0 !important;
  }

  form {
    max-width: 330px;
    margin: auto;
  }

  .form-floating:focus-within {
    z-index: 2;
  }
</style>
