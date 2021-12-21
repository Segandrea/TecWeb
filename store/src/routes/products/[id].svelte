<script context="module">
  export async function load({ page, fetch }) {
    const productId = page.params.id;

    const product = await fetch(`/api/store/products/${productId}`)
      .then((res) => res.json())
      .then((res) => res.product); // TODO: remove me (update store API)

    const reviews = await fetch(`/api/store/reviews?productId=${productId}`)
      .then((res) => res.json())
      .then((body) => body.reviews);

    return {
      props: {
        productId,
        product,
        reviews,
      },
    };
  }
</script>

<script>
  import StarRating from "svelte-star-rating";
  import { addToCart } from "$lib/stores";
  import { path } from "$lib/utils";

  export let productId;
  export let product;
  export let reviews;
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
            <a href={path(`/products/${productId}/reviews`)}>leave a review</a>
          </div>
        </div>
      </div>
    </div>

    <!-- add to cart -->
    <div class="col">
      <div class="card h-100 text-center">
        <div class="card-body d-flex align-items-center justify-content-center">
          <button
            type="button"
            class="btn btn-warning btn-lg"
            on:click={() => addToCart(product)}
          >
            Add to cart
          </button>
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

  {#if reviews && reviews.length > 0}
    <h2 class="text-center mt-5 mb-2">Reviews</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
      {#each reviews as review}
        <div class="col">
          <div class="card border-light">
            <div class="card-body">
              <h3 class="card-title text-truncate">{review.username}</h3>
              <p class="card-text">
                {review.content}
                <StarRating
                  rating={review.rating}
                  config={{ emptyColor: "rgba(127, 127, 127, 0.1)", size: 16 }}
                  style={"margin-top:1rem; margin-bottom:0.6rem; justify-content:center;"}
                />
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="row mt-4 d-md-none text-center">
      <a href="#carouselControls">Back to top</a>
    </div>
  {/if}
</main>

<slot />

<style>
  .carousel {
    height: 256px;
  }
</style>
