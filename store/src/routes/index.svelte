<script context="module">
  import { path, isAuth } from "$lib/utils";

  export async function load({ fetch }) {
    const products = await fetch("/api/store/products").then((res) =>
      res.json()
    );

    return {
      props: products,
    };
  }
</script>

<script>
  import StarRating from "svelte-star-rating";
  import { cart, addToCart } from "$lib/stores";

  export let products;
</script>

<svelte:head>
  <title>Games Room</title>
</svelte:head>

<main class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    {#each products as product}
      <div class="col">
        <div class="card h-100">
          <a href={path(`/products/${product._id}`)}
            ><img
              src={product.images[0].url}
              class="card-img-top"
              height="200"
              alt={product.name + " image"}
            /></a
          >
          <div class="card-body">
            <h5 class="card-title text-truncate">
              <a href={path(`/products/${product._id}`)} class="link-dark"
                >{product.name}</a
              >
            </h5>
            <h6 class="card-subtitle mb-2 text-muted text-truncate">
              {product.status}
            </h6>
            <div class="mt-2 mb-4">
              {#if product.rating}
                <StarRating
                  rating={product.rating}
                  config={{ emptyColor: "rgba(127, 127, 127, 0.1)", size: 16 }}
                />
              {:else}
                <!-- keep aligned with StarRating.config.size -->
                <div style="height: 16px;" />
              {/if}
            </div>
            <p class="card-text text-clamp">{product.description}</p>
            <div class="text-end mt-4 mb-2">
              {#if isAuth()}
                <button
                  type="button"
                  class="btn btn-warning rounded-3"
                  on:click={() => addToCart(product)}
                  disabled={product._id in $cart}
                >
                  Add to cart</button
                >
              {:else}
                <a
                  href={path("/signin")}
                  class="btn btn-warning rounded-3"
                  role="button">Add to cart</a
                >
              {/if}
            </div>
          </div>
          <div class="card-footer">
            <div
              class="d-flex justify-content-between orange fw-bolder fst-italic"
            >
              <div>Daily</div>
              <div>
                <i class="bi bi-currency-euro"
                  >{product.dailyPrice.toFixed(2)}</i
                >
              </div>
            </div>
            <div
              class="d-flex justify-content-between text-muted fs-6 fst-italic"
            >
              <div><small>Base</small></div>
              <div>
                <small
                  ><i class="bi bi-currency-euro"
                    >{product.basePrice.toFixed(2)}</i
                  ></small
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>

<slot />

<style>
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp */
  .text-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
</style>
