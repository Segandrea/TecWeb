<script>
  import Alert from "$lib/components/Alert.svelte";

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  import { postJSON, onStatus } from "$lib/http";
  import { path } from "$lib/utils";

  let alert;
  let emailInput;
  let confirmInput;

  let customer = {};

  function signup() {
    postJSON("/api/store/signup", customer)
      .then((body) => {
        const returnTo = $page.query.get("returnTo") || path("/");
        sessionStorage.setItem("user", JSON.stringify(body));
        goto(returnTo);
      })
      .catch(
        onStatus(400, () => {
          customer = {};
          emailInput.focus();
          alert.error("Invalid credentials");
        })
      )
      .catch(
        onStatus(409, () => {
          customer = {};
          emailInput.focus();
          alert.error("Already registered");
        })
      )
      .catch((err) => {
        console.error(err);
        alert.error("Something went wrong!");
      });
  }

  function checkValidity() {
    if (customer.password && customer.password === customer.confirm) {
      confirmInput.setCustomValidity("");
    } else {
      confirmInput.setCustomValidity("Passwords do not match");
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

<main class="container w-100 h-100">
  <div class="row d-flex text-center align-items-center m-auto w-100 h-100">
    <div class="col m-auto">
      <a href={path("/")}>
        <img src={path("/nolonoloplus-dark.png")} alt="Nolo Nolo Plus Logo" />
      </a>
      <h1 class="my-4 fw-normal">Nice to meet you!</h1>

      <form on:submit|preventDefault={signup}>
        <Alert bind:this={alert} />

        <div class="form-floating">
          <input
            id="email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="email@example.com"
            class="form-control rounded-0 rounded-top"
            required
            bind:value={customer.email}
            bind:this={emailInput}
          />
          <label for="email">Email</label>
        </div>
        <div class="form-floating">
          <input
            id="username"
            type="text"
            name="username"
            autocomplete="username"
            placeholder="Username"
            class="form-control rounded-0"
            minlength="4"
            required
            bind:value={customer.username}
          />
          <label for="username">Username</label>
        </div>
        <div class="form-floating">
          <input
            id="password"
            type="password"
            name="password"
            autocomplete="new-password"
            placeholder="Password"
            class="form-control rounded-0"
            minlength="4"
            required
            bind:value={customer.password}
            on:change={checkValidity}
          />
          <label for="password">Password</label>
        </div>
        <div class="form-floating">
          <input
            id="confirm"
            type="password"
            name="confirm"
            autocomplete="new-password"
            placeholder="Confirm password"
            class="form-control rounded-0 rounded-bottom"
            minlength="4"
            required
            bind:value={customer.confirm}
            bind:this={confirmInput}
            on:change={checkValidity}
          />
          <label for="confirm">Confirm password</label>
        </div>

        <button class="btn btn-lg btn-warning w-100 mt-4" type="submit"
          >Sign up</button
        >
        <p class="mt-2">
          Already registered? <a href={path("/signin")} class="link-dark"
            >Sign in</a
          >
        </p>
      </form>
    </div>
  </div>
</main>

<slot />

<style>
  form {
    max-width: 330px;
    margin: auto;
  }

  .form-floating:focus-within {
    z-index: 2;
  }
</style>
