<script context="module">
  import { getJSON } from "$lib/http";

  export function load({ fetch }) {
    return getJSON("/api/store/products", { fetch })
      .then((products) => ({
        props: products,
      }))
      .catch(([err, req]) => {
        console.error(err);
        return {
          status: req ? req.status : 500,
          error: "Unable to reach the server",
        };
      });
  }
</script>

<script>
  import Alert from "$lib/components/Alert.svelte";
  import StarRating from "svelte-star-rating";

  import { rentalPeriod, cart, addToCart, category, sortBy } from "$lib/stores";
  import { path, isAuth } from "$lib/utils";
  import { onDestroy } from "svelte";

  export let products;
  let alert;

  const unsubscribeRentalPeriod = rentalPeriod.subscribe((range) => {
    if (range && range.length === 2) {
      const query = new URLSearchParams({
        params: JSON.stringify({ rentalPeriod: range }),
        filter: JSON.stringify({ category: $category }),
      });

      getJSON(`/api/store/products?${query}`)
        .then((body) => (products = body.products))
        .catch((err) => {
          console.error(err);
          alert.error("Something went wrong");
        });
    }
  });

  const unsubscribeCategory = category.subscribe((category) => {
    const query = new URLSearchParams({
      filter: JSON.stringify({ category }),
    });

    const range = $rentalPeriod;
    if (range && range.length === 2) {
      query.set("params", JSON.stringify({ rentalPeriod: range }));
    }

    getJSON(`/api/store/products?${query}`)
      .then((body) => (products = body.products))
      .catch((err) => {
        console.error(err);
        alert.error("Something went wrong");
      });
  });

  const unsubscribeSortBy = sortBy.subscribe((sortBy) => {
    products.sort(
      (l, r) =>
        sortBy.basePrice * (l.basePrice - r.basePrice) ||
        sortBy.dailyPrice * (l.dailyPrice - r.dailyPrice) ||
        sortBy.rating * (l.rating - r.rating)
    );
    products = products;
  });

  onDestroy(unsubscribeSortBy);
  onDestroy(unsubscribeCategory);
  onDestroy(unsubscribeRentalPeriod);
</script>

<svelte:head>
  <title>Games Room</title>
</svelte:head>

<main class="container">
  <Alert bind:this={alert} />

  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    {#if products.length <= 0}
      <div class="col w-100 h-100">
        <div class="card w-100 h-100">
          <div class="card-body">
            <h5 class="card-title text-center py-5">
              Oops... Seems like there are no games for this rental period 😭
            </h5>
          </div>
        </div>
      </div>
    {/if}
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
                {#if product.discountPrice && product.discountPrice > 0}
                  <span
                    class="badge rounded-pill bg-danger text-decoration-line-through"
                  >
                    <i class="bi bi-currency-euro"
                      >{product.basePrice.toFixed(2)}</i
                    >
                  </span>

                  <small>
                    <i class="bi bi-currency-euro"
                      >{Math.max(
                        product.basePrice - product.discountPrice,
                        0
                      ).toFixed(2)}</i
                    >
                  </small>
                {:else}<small
                    ><i class="bi bi-currency-euro"
                      >{product.basePrice.toFixed(2)}</i
                    ></small
                  >
                {/if}
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
