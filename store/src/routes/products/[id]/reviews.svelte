<script context="module">
  import { getJSON, onStatus } from "$lib/http";
  import { path } from "$lib/utils";

  export function load({ page, fetch }) {
    const productId = page.params.id;

    return getJSON("/api/store/profile", { fetch })
      .then((profile) => {
        const username = profile.username;
        return getJSON(`/api/store/products/${productId}`, { fetch }).then(
          (product) => ({
            props: { productId, product, username },
          })
        );
      })
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
  import Alert from "$lib/components/Alert.svelte";

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  import { postJSON, redirectOnStatus } from "$lib/http";

  export let productId;
  export let product;
  export let username;

  let alert;
  let submitted = false;
  let review = { productId, username, rating: 2.5 };

  function createReview() {
    postJSON("/api/store/reviews", review)
      .then((body) => {
        review = body;
        submitted = true;
        alert.info("Thanks for your feedback");
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

<!-- TODO: add alert about result or send back to detail -->
<!-- TODO: check that user bought the reviewed product (?) -->
<main class="container">
  <Alert bind:this={alert} />

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

  <form class="mt-4" on:submit|preventDefault={createReview}>
    <div class="row justify-content-center text-center">
      <div class="col-auto">
        <label for="rating" class="fs-5">Rating</label>
        <StarRating
          rating={review.rating}
          config={{ emptyColor: "rgba(127, 127, 127, 0.1)", size: 16 }}
          style={"justify-content: center;"}
        />
        <input
          id="rating"
          name="rating"
          type="range"
          class="form-range"
          bind:value={review.rating}
          min="0"
          max="5"
          step="0.1"
          placeholder="rating value"
          required
        />
      </div>
    </div>
    <div class="row justify-content-center text-center">
      <div class="col-md-10">
        <label for="content" class="fs-5 mt-3 mb-2">Write your review</label>
        <textarea
          class="form-control mb-3"
          id="content"
          name="content"
          bind:value={review.content}
          rows="6"
          placeholder="How was your order?"
          required
        />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-auto">
        <button
          class="btn btn-lg btn-warning my-2 w-100"
          type="submit"
          class:disabled={submitted}>Submit</button
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
