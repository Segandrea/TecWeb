<script context="module">
  export async function load({ page, fetch }) {
    const productId = page.params.id;

    const username = await fetch("/api/store/profile")
      .then((res) => res.json())
      .then((res) => res.username);

    const product = await fetch(`/api/store/products/${productId}`)
      .then((res) => res.json())
      .then((res) => res.product); // TODO: remove me (update store API)

    return {
      props: {
        product,
        productId,
        username,
      },
    };
  }
</script>

<script>
  import StarRating from "svelte-star-rating";
  import { path } from "$lib/utils";

  export let product;
  export let productId;
  export let username;

  let review;
  let content;
  let rating = 0;

  function createReview() {
    review = {
      productId,
      username,
      content,
      rating,
    };

    fetch("/api/store/reviews/", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((body) => (review = body));
  }
</script>

<!-- TODO: discuss about page layout -->
<!-- TODO: discuss about photo and description -->
<!-- TODO: login problems (500 if not auth) -->
<!-- TODO: add alert about result or send back to detail -->
<!-- TODO: check that user bought the reviewed product (?) -->
<!-- TODO: check that user didn't make other reviews for product (?) -->
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

  <div class="row mt-4">
    <h2 class="text-center">Description</h2>
    <p class="lead">
      {product.description}
    </p>
  </div>

  <form class="mt-4" on:submit|preventDefault={createReview}>
    <div class="row justify-content-center text-center">
      <div class="col-auto">
        <label for="rating" class="fs-5">Rating</label>
        <StarRating
          class="my-2"
          {rating}
          config={{ emptyColor: "rgba(127, 127, 127, 0.1)", size: 16 }}
          style={"justify-content:center;"}
        />
        <input
          class="form-range"
          id="rating"
          name="rating"
          type="range"
          bind:value={rating}
          min="0"
          max="5"
          step="0.1"
          placeholder="0"
          required
        />
      </div>
    </div>
    <div class="row justify-content-center text-center">
      <div class="col-md-10">
        <label for="content" class="fs-5 mt-3 mb-2">Description</label>
        <textarea
          class="form-control mb-3"
          id="content"
          name="content"
          bind:value={content}
          rows="6"
          placeholder="How was your order?"
          required
        />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-auto">
        <button class="btn btn-lg btn-warning my-2 w-100" type="submit"
          >Leave A Review</button
        >
      </div>
    </div>
  </form>
</main>

<slot />

<style>
  .carousel {
    height: 256px;
  }
</style>
