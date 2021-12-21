<script context="module">
  import { path, isAuth, formatDate } from "$lib/utils";

  export async function load({ page, fetch }) {
    if (isAuth()) {
      const responses = await Promise.all([
        fetch("/api/store/profile"),
        fetch("/api/store/orders"),
      ]);

      if (responses.every((res) => res.ok)) {
        const [profile, orders] = await Promise.all(
          responses.map((res) => res.json())
        );

        return {
          props: {
            profile,
            ...orders,
          },
        };
      }
    }

    const query = new URLSearchParams({ returnTo: path(page.path) });
    return {
      status: 302,
      redirect: path(`/signin?${query}`),
    };
  }
</script>

<script>
  import { goto } from "$app/navigation";
  import { clearCart, clearDiscounts } from "$lib/stores";

  export let profile;
  export let orders;

  async function signout() {
    const res = await fetch("/api/store/signout", {
      method: "POST",
    });

    if (res.ok) {
      sessionStorage.removeItem("user");
      clearDiscounts();
      clearCart();
      goto(path("/"));
    }
  }

  function updateProfile() {
    fetch("/api/store/profile", {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((body) => (profile = body));
  }
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<main class="container">
  <div class="row row-cols-1">
    <div class="col col-lg-3 text-center">
      <h2 class="py-4">Profile</h2>

      <form on:submit|preventDefault={updateProfile}>
        <div class="form-floating">
          <input
            id="email"
            name="email"
            type="email"
            bind:value={profile.email}
            class="form-control border-bottom-0 rounded-0 rounded-top"
            placeholder="domain@example.com"
            required
          />
          <label for="email">Email</label>
        </div>

        <div class="form-floating">
          <input
            id="username"
            name="username"
            type="text"
            bind:value={profile.username}
            class="form-control rounded-0"
            placeholder="username"
            minlength="4"
            required
          />
          <label for="username">Username</label>
        </div>

        <div class="form-floating">
          <input
            id="billingAddress"
            name="billingAddress"
            type="text"
            bind:value={profile.billingAddress}
            class="form-control border-top-0 rounded-0 rounded-bottom"
            required
          />
          <label for="billingAddress">Billing Address</label>
        </div>

        <button class="btn btn-lg btn-warning my-2 w-100" type="submit"
          >Save changes</button
        >
      </form>
      <div class="d-flex align-items-center justify-content-center">
        <span>Or</span>
        <button type="button" class="btn btn-link" on:click={signout}
          >Sign out</button
        >
      </div>
    </div>
    <div class="col col-lg-9 text-center">
      <h2 class="py-4">Your Orders</h2>

      <ul class="list-group">
        {#each orders as order}
          <div class="list-group-item">
            <div class="row row-cols-1 row-cols-lg-4 g-3">
              <div class="col text-truncate">
                <h6>Order No.</h6>
                <a href={path(`/orders/${order._id}`)}
                  ><small>{order._id}</small></a
                >
              </div>
              <div class="col">
                <h6>Start Date</h6>
                <small class="text-muted">{formatDate(order.issuedAt)}</small>
              </div>
              <div class="col">
                <h6>End Date</h6>
                <small class="text-muted"
                  >{formatDate(order.returnalDate)}</small
                >
              </div>
              <div class="col">
                <h6>Total</h6>
                <i class="bi bi-currency-euro">{order.totalPrice.toFixed(2)}</i>
              </div>
            </div>
          </div>
        {/each}
      </ul>
    </div>
  </div>
</main>

<slot />

<style>
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px rgba(127, 127, 127, 0.4);
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(127, 127, 127, 0.9);
    border-radius: 12px;
  }

  .list-group {
    max-height: 75vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  @media screen and (max-width: 575px) {
    .list-group {
      max-height: unset;
      overflow: unset;
    }
  }
</style>
