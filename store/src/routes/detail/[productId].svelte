<script context="module">
  export async function load({ page, fetch, session, stuff }) {
    let productId = page.params.productId;
    // TODO: param instead of query because it is not restful
    let product = await fetch(`/api/store/products?productId=${productId}`)
      .then((res) => res.json())
      .then((res) => res.product);

    let reviews = await fetch(`/api/store/reviews?productId=${productId}`)
      .then((res) => res.json())
      .then((res) => res.reviews);

    return {
      props: {
        product,
        reviews,
      },
    };
  }
</script>

<script>
  export let product;
  export let reviews;

  import { cartItems } from "../stores.js";

  const addToCart = () => {
    $cartItems = [...$cartItems, product];
  };
</script>

<main class="container">
  <!-- carousel -->
  <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <!-- carousel item -->
      <div class="carousel-item text-center active">
        <img class="img-fluid" src={product.imageUrl} />
      </div>
      <!-- carousel item -->
      <div class="carousel-item text-center">
        <img class="img-fluid" src={product.imageUrl} />
      </div>
      <!-- carousel item -->
      <div class="carousel-item text-center">
        <img class="img-fluid" src={product.imageUrl} />
      </div>
    </div>

    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      />
    </div>

    <!-- carousel buttons -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- title, price, stars and cart -->
  <div class="container">
    <!-- title -->
    <h2 class="text-center text-decoration-underline mt-5">{product.name}</h2>
    <div class="row row-cols-1 row-cols-md-3 mt-4 g-4">
      <!-- price -->
      <div class="col">
        <div class="card h-100 text-center">
          <div class="card-body">
            <div class="card-title fs-5 fw-bold">Pricing:</div>
            <div class="row">
              <small>
                base: <i class="bi bi-currency-euro">{product.basePrice}</i>
              </small>
            </div>
            <div class="row mt-1 fs-4 fw-bold">
              <i class="bi bi-currency-euro orange"
                >{product.dailyPrice}<sub>/day</sub></i
              >
            </div>
          </div>
        </div>
      </div>
      <!-- stars and link to reviews -->
      <div class="col">
        <div class="card h-100 text-center">
          <div class="card-body">
            <div class="card-title fs-5 fw-bold">Stars:</div>
            <div class="card-subtitle mb-2 fs-6">
              <span class="bi bi-star-fill orange" />
              <span class="bi bi-star-fill orange" />
              <span class="bi bi-star-fill orange" />
              <span class="bi bi-star" />
              <span class="bi bi-star" />
            </div>
            <div class="row">
              <a href="#reviews">Reviews</a>
            </div>
          </div>
        </div>
      </div>
      <!-- add to cart -->
      <div class="col">
        <div class="card h-100 text-center">
          <div class="card-body">
            <div class="card-title fs-5 fw-bold">Add to cart</div>
            <button
              type="button"
              class="btn btn-warning btn-lg"
              on:click={addToCart}
            >
              <i class="bi-cart3" />
              Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- description -->
  <div class="container">
    <hr />
    <div class="row">
      <h2 class="text-center">Description</h2>
      <p class="lead">
        {product.description}
      </p>
    </div>
    <hr />
  </div>

  <!-- reviews -->
  <div class="container g-4 text-center">
    <h2 id="reviews">Reviews</h2>
    <!-- three reviews per row -->
    <div class="row row-cols-1 row-cols-md-3">
      {#each reviews as review}
        <div class="col">
          <!-- first review -->
          <div class="card-body">
            <h3 class="card-title text-truncate">{review.userId}</h3>
            <p class="card-text">
              {review.content}
            </p>
            <div class="card-subtitle mb-2 fs-6">
              <span class="bi bi-star-fill orange" />
              <span class="bi bi-star-fill orange" />
              <span class="bi bi-star-fill orange" />
              <span class="bi bi-star" />
              <span class="bi bi-star" />
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="row">
      <div class="col">
        <!-- button to get other reviews-->
        <button
          type="button"
          class="btn btn-warning"
          data-bs-toggle="collapse"
          data-bs-target="#hidden-row"
          aria-expanded="false"
          aria-controls="hidden-row"
        >
          Show more Reviews
        </button>
      </div>
    </div>
    <div class="row mt-3">
      <a href="#carouselIndicators">Return to top</a>
    </div>
  </div>
</main>

<slot />
