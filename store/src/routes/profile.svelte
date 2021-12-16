<script context="module">
  import { path, isAuth } from "$lib/utils";

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
            profile: profile,
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

  export let profile;
  export let orders;

  async function signout() {
    const res = await fetch("/api/store/signout", {
      method: "POST",
    });

    if (res.ok) {
      sessionStorage.removeItem("customer");
      goto(path("/"));
    }
  }
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<main class="container">
  <div class="row row-cols-1">
    <div class="col col-lg-3 text-center">
      <h2 class="py-4">Profile</h2>

      {#if profile.avatar}
      <img
        class="rounded-circle"
        width="128px"
        height="128px"
        src={profile.avatar}
        alt="avatar"
      />
      {/if}

      <form>
        <input id="avatar" name="avatar" type="file" class="form-control my-4" aria-label="avatar" />

        <div class="form-floating">
          <input
            id="email"
            name="email"
            type="email"
            class="form-control border-bottom-0 rounded-0 rounded-top"
            value={profile.email}
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
            class="form-control border-top-0 rounded-0 rounded-bottom"
            value={profile.username}
            placeholder="username"
            minlength="4"
            required
          />
          <label for="username">Username</label>
        </div>

        <button class="btn btn-lg btn-warning my-2 w-100" type="submit"
          >Save changes</button
        >
      </form>
      <p>
        Or
        <button type="button" class="btn btn-link" on:click={signout}
          >Sign out</button
        >
      </p>
    </div>
    <div class="col col-lg-9">
      <h2 class="text-center py-4">Your Orders</h2>

      <ul class="list-group">
        {#each orders as order}
          <li class="list-group-item">
            <div class="row d-flex align-items-center">
              <div class="col-md-2 my-2 text-center">
                FIXME
                <!-- TODO: add a function that connects order.productId with product
                <a href="#"
                  ><img
                    class="img-thumbnail"
                    src={order.product.image_url}
                    alt={order.product.name}
                  /></a
                >
                -->
              </div>

              <div class="col-md-4 my-2 text-center">
                <div class="row">
                  <div class="col">
                    <a class="link-dark" href="#">
                      <div class="text-truncate">
                        FIXME
                        <!-- TODO: add a function that connects order.productId with product
                        {order.product.description}
                          -->
                      </div>
                    </a>
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <small class="text-muted">{order.issuedAt}</small>
                  </div>
                </div>
              </div>

              <div class="col-md-3 my-2 text-center">
                <i class="bi bi-currency-euro">{order.totalPrice}</i>
              </div>

              <div class="col-md-3 my-2 text-center">
                <a href="#">
                  Leave a review <i class="bi bi-pen" />
                </a>
              </div>
            </div>
          </li>
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
  }

  @media screen and (max-width: 767px) {
    .list-group {
      max-height: unset;
      overflow: unset;
    }
  }
</style>
