<svelte:head>
  <title>Cart</title>
</svelte:head>

<main class="container">
  <div class="row">
    <!-- Cart -->
    <div class="col-md-8 cart border">
      <div class="row card-title">
        <div class="row align-items-center">
          <div class="col fs-2 fw-bold text-start">Cart</div>
        </div>
      </div>

      <div class="row">
        <div class="col">image</div>
        <div class="col">name</div>
        <div class="col">quantity</div>
        <div class="col">price</div>
      </div>
    </div>
    <!-- Cart -->

    <!-- Summary -->
    <div class="col-md-4 summary border">
      <div class="row align-items-center">
        <div class="col text-start fs-4">Summary</div>
        <div class="col text-end fst-italic">3 items</div>
      </div>
      <hr />
      <div class="row">
        <div class="col fw-bold text-truncate text-start">
          Monopoly: limited edition
        </div>
        <div class="col text-end">
          <i class="bi bi-currency-euro black">132.00</i>
        </div>
      </div>
      <div class="row">
        <div class="col fst-italic">
          <small>Base</small>
        </div>
        <div class="col fst-italic text-end">
          <small>
            <i class="bi bi-currency-euro black">15.00</i>
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col fst-italic">
          <small>Daily</small>
        </div>
        <div class="col fst-italic text-end">
          <small>
            7 <i class="bi bi-x black" />
            <i class="bi bi-currency-euro black">14.00</i>
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col fst-italic">
          <small>Promo</small>
        </div>
        <div class="col fst-italic text-end">
          <small>
            <i class="bi bi-dash black" />
            <i class="bi bi-currency-euro black">15.00</i>
          </small>
        </div>
      </div>
      <hr />
      <div class="row fw-bold">
        <div class="col text-start">Total</div>
        <div class="col text-end">
          <i class="bi bi-currency-euro black">137.00</i>
        </div>
      </div>
      <button class="btn btn-warning btn-lg w-100 mt-3 p-2">checkout</button>
    </div>
    <!-- Summary -->
  </div>
</main>

<slot />

<style>
  .cart {
    padding: 1rem 2rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  @media (max-width: 767px) {
    .cart {
      border: none !important;
      border-radius: unset;
    }
  }

  .summary {
    padding: 1rem 2rem;
    background-color: #ddd;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  @media (max-width: 767px) {
    .summary {
      border: none !important;
      border-radius: unset;
    }
  }
</style>
