<script context="module">
  import { getJSON, onStatus } from "$lib/http";
  import { path } from "$lib/utils";

  export function load({ page, fetch }) {
    const productId = page.params.id;

    return getJSON(`/api/store/products/${productId}`, { fetch })
      .then((product) => ({ props: { product } }))
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
</script>

<script>
  import StarRating from "svelte-star-rating";

  import { cart, addToCart } from "$lib/stores";
  import { isAuth } from "$lib/utils";

  import { page } from "$app/stores";

  export let product;
</script>

<main class="container">
  <div
    id="carouselControls"
    class="carousel carousel-dark slide my-2"
    data-bs-touch="false"
    data-bs-interval="false"
  >
    <div class="carousel-inner h-100">
      {#each product.images as image, index}
        <div class="carousel-item h-100" class:active={0 === index}>
          <img
            src={image.url}
            class="d-block m-auto h-100"
            alt={`${product.name} image ${index}`}
          />
        </div>
      {/each}
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <h2 class="text-center text-decoration-underline mt-5">{product.name}</h2>
  <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
    <!-- stars and reviews -->
    <div class="col">
      <div class="card h-100 text-center">
        <div class="card-body">
          <div class="card-title fs-5 fw-bold">Rating</div>
          <div class="mt-2 d-flex justify-content-center text-center">
            <StarRating
              rating={product.rating}
              config={{ emptyColor: "rgba(127, 127, 127, 0.1)", size: 16 }}
            />
          </div>
          <div class="d-flex justify-content-center text-center">
            <a href={path(`/products/${product._id}/reviews`)}>leave a review</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- add to cart -->
    <div class="col">
      <div class="card h-100 text-center">
        <div class="card-body d-flex align-items-center justify-content-center">
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
              href={path("/signin", {
                returnTo: path($page.path),
                required: true,
              })}
              class="btn btn-warning rounded-3"
              role="button">Add to cart</a
            >
          {/if}
        </div>
      </div>
    </div>

    <!-- pricing -->
    <div class="col">
      <div class="card h-100 text-center">
        <div class="card-body">
          <div class="card-title fs-5 fw-bold">Pricing</div>
          <div class="text-center">
            <span class="orange fw-bolder fs-4">
              <i class="bi bi-currency-euro">{product.dailyPrice.toFixed(2)}</i
              ><small><sub>/daily</sub></small>
            </span>
          </div>
          <div class="text-center">
            <small class="text-muted fw-bold">
              <i class="bi bi-currency-euro">{product.basePrice.toFixed(2)}</i
              ><sub>/base</sub>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-4">
    <h2 class="text-center">Description</h2>
    <p class="lead">
      {product.description}
    </p>
  </div>

  {#if product.reviews && product.reviews.length > 0}
    <div class="row g-4 text-center">
      <h2>Reviews</h2>
      <div class="row row-cols-1 row-cols-md-3">
        {#each product.reviews as review}
          <div class="col">
            <div class="card-body">
              <h3 class="card-title text-truncate">{review.username}</h3>
              <p class="card-text">
                {review.content}
              </p>
              <div
                class="card-subtitle d-flex justify-content-center mb-2 fs-6"
              >
                <StarRating
                  rating={review.rating}
                  config={{ emptyColor: "rgba(127, 127, 127, 0.1)", size: 16 }}
                />
              </div>
            </div>
          </div>
        {/each}
      </div>

      <div class="row mt-4 d-md-none">
        <a href="#carouselControls">Back to top</a>
      </div>
    </div>
  {/if}
</main>

<slot />

<style>
  .carousel {
    height: 256px;
  }
</style>
