<script context="module">
  import { getJSON, onStatus } from "$lib/http";
  import { path, isAuth } from "$lib/utils";

  export async function load({ page, fetch }) {
    if (isAuth()) {
      return await getJSON("/api/store/profile", { fetch })
        .then((profile) =>
          getJSON("/api/store/orders", { fetch }).then(({ orders }) => ({
            props: { profile, orders },
          }))
        )
        .catch(
          onStatus(401, () => ({
            status: 302,
            redirect: path("/signin", {
              returnTo: path(page.path),
              required: true,
            }),
          }))
        )
        .catch(([err, req]) => {
          console.error(err);
          return {
            status: req ? req.status : 500,
            error: "Unable to reach the server",
          };
        });
    }

    return {
      status: 302,
      redirect: path("/signin", {
        returnTo: path(page.path),
        required: true,
      }),
    };
  }
</script>

<script>
  import Alert from "$lib/components/Alert.svelte";

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  import { postJSON, putJSON, redirectOnStatus, deleteJSON } from "$lib/http";
  import { clearCart, clearCoupons } from "$lib/stores";
  import { formatDate } from "$lib/utils";

  let alert;

  export let confirmPassword;
  export let confirmInput;
  export let newPassword;
  export let profile;
  export let orders;

  function signout() {
    postJSON("/api/store/signout", {}, { parse: false })
      .catch(onStatus(401, () => {}))
      .then(() => {
        sessionStorage.removeItem("user");
        clearCoupons();
        clearCart();
        goto(path("/"));
      })
      .catch((err) => {
        console.error(err);
        alert.error("Something went wrong");
      });
  }

  function updateProfile() {
    putJSON("/api/store/profile", profile)
      .then((body) => {
        profile = body;
        alert.info("Profile updated successfully");
      })
      .catch(onStatus(400, () => alert.error("Invalid profile data")))
      .catch(
        redirectOnStatus(
          401,
          goto,
          path("/signin", { returnTo: path($page.path), required: true })
        )
      )
      .catch((err) => {
        console.error(err);
        alert.error("Something went wrong");
      });
  }

  function changePassword() {
    putJSON("/api/store/profile/password", { password: newPassword })
      .then((body) => {
        profile = body;
        alert.info("Password changed successfully");
      })
      .catch(onStatus(400, () => alert.error("Invalid password")))
      .catch(
        redirectOnStatus(
          401,
          goto,
          path("/signin", { returnTo: path($page.path), required: true })
        )
      )
      .catch((err) => {
        console.error(err);
        alert.error("Something went wrong");
      })
      .finally(() => {
        newPassword = "";
        confirmPassword = "";
      });
  }

  function checkValidity() {
    console.log(newPassword);
    console.log(confirmInput);
    console.log(confirmPassword);
    if (newPassword && newPassword === confirmPassword) {
      console.log(newPassword && newPassword === confirmPassword);
      confirmInput.setCustomValidity("");
    } else {
      confirmInput.setCustomValidity("Passwords do not match");
    }
  }

  function deleteOrder(order) {
    deleteJSON(`/api/store/orders/${order._id}`, { parse: false })
      .then(() => {
        const index = orders.indexOf(order);
        orders.splice(index, 1);
        orders = orders;
        alert.info("Order cancelled");
      })
      .catch(
        redirectOnStatus(
          401,
          goto,
          path("/signin", { returnTo: path($page.path), required: true })
        )
      )
      .catch((err) => {
        console.error(err);
        alert.error("Something went wrong");
      });
  }
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<main class="container">
  <Alert bind:this={alert} />

  <div class="row row-cols-1">
    <div class="col col-lg-3 text-center">
      <h2 class="py-4">Profile</h2>

      <form on:submit|preventDefault={changePassword}>
        <div class="form-floating">
          <input
            id="password"
            name="password"
            type="password"
            bind:value={newPassword}
            on:change={checkValidity}
            class="form-control border-bottom-0 rounded-0 rounded-top"
            required
          />
          <label for="password">Password</label>
        </div>

        <div class="form-floating">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            on:change={checkValidity}
            bind:this={confirmInput}
            bind:value={confirmPassword}
            class="form-control border-top-0 rounded-0 rounded-bottom"
            required
          />
          <label for="confirmPassword">Confirm Password</label>
        </div>

        <button class="btn btn-lg btn-warning my-2 w-100" type="submit"
          >Change password</button
        >
      </form>

      <form class="mt-5" on:submit|preventDefault={updateProfile}>
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

      {#if orders && orders.length > 0}
        <ul class="list-group">
          {#each orders as order}
            <div class="list-group-item">
              <div class="row row-cols-1 row-cols-lg-6 g-1">
                <div class="col text-truncate">
                  <h6>Order No.</h6>
                  <a href={path(`/orders/${order._id}`)}
                    ><small>{order._id}</small></a
                  >
                </div>
                <div class="col">
                  <h6>State</h6>
                  <small class="text-muted">{order.state}</small>
                </div>
                <div class="col">
                  <h6>Start Date</h6>
                  <small class="text-muted">{formatDate(order.startDate)}</small
                  >
                </div>
                <div class="col">
                  <h6>End Date</h6>
                  <small class="text-muted">{formatDate(order.endDate)}</small>
                </div>
                <div class="col">
                  <h6>Total</h6>
                  <i class="bi bi-currency-euro"
                    >{order.totalPrice.toFixed(2)}</i
                  >
                </div>
                {#if order.state === "open" && new Date() < new Date(order.startDate)}
                  <div class="col">
                    <button
                      type="button"
                      class=" btn btn-outline-warning mt-2"
                      on:click={() => deleteOrder(order)}>Delete Order</button
                    >
                  </div>
                {/if}
              </div>
            </div>
          {/each}
        </ul>
      {:else}
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">You don't have any orders yet 😅</h5>
            <a class="card-link" href={path("/")}>Back to shopping</a>
          </div>
        </div>
      {/if}
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
