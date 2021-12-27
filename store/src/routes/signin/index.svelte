<script>
  import Alert from "$lib/components/Alert.svelte";

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  import { onMount } from "svelte";

  import { postJSON, onStatus } from "$lib/http";
  import { path } from "$lib/utils";

  let alert;
  let emailInput;

  let customer = {};

  onMount(() => {
    if ($page.query.has("required")) {
      $page.query.delete("requied");
      alert.error("Signin required");
    }
  });

  function signin() {
    postJSON("/api/store/signin", customer)
      .then((body) => {
        const returnTo = $page.query.get("returnTo") || path("/");
        sessionStorage.setItem("user", JSON.stringify(body));
        goto(returnTo);
      })
      .catch(
        onStatus(401, () => {
          customer = {};
          emailInput.focus();
          alert.error("Signin required");
        })
      )
      .catch((err) => {
        console.error(err);
        alert.error("Something went wrong!");
      });
  }
</script>

<svelte:head>
  <style>
    body {
      background-color: #f5f5f5;
    }
  </style>
</svelte:head>

<main class="w-100 h-100 container">
  <div class="row d-flex text-center align-items-center m-auto w-100 h-100">
    <div class="col m-auto">
      <a href={path("/")}>
        <img src={path("/nolonoloplus-dark.png")} alt="Nolo Nolo Plus Logo" />
      </a>

      <h1 class="my-4 fw-normal">Welcome back!</h1>

      <form on:submit|preventDefault={signin}>
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
            id="password"
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder="Password"
            class="form-control rounded-0 rounded-bottom"
            minlength="4"
            required
            bind:value={customer.password}
          />
          <label for="password">Password</label>
        </div>

        <button class="btn btn-lg btn-warning w-100 mt-4" type="submit"
          >Sign in</button
        >
        <p class="mt-2">
          Don't have an account yet? <a href={path("/signup")} class="link-dark"
            >Sign up</a
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
