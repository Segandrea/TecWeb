<script context="module">
  export async function load({ page, fetch, session, stuff }) {
    let resProd = await fetch("/api/store/products").then((res) => res.json());
    let resCart = await fetch("/api/store/cart").then((res) => res.json());
    let resDisc = await fetch("/api/store/discounts").then((res) => res.json());
    let cart = Object.assign({}, resProd, resCart, resDisc);

    // TODO: need to fix the cart (rentalPeriod is never shown)
    // NOTE: rentalPeriod is about the whole cart
    return {
      props: {
        cart,
      },
    };
  }
</script>

<script>
  export let cart;
  // TODO: export count of items in cart and use it in layout
</script>

<svelte:head>
  <title>Cart</title>
</svelte:head>

<main class="container">
  <div class="row">
    <div class="col-lg-9">
      <div class="card-group d-sm-flex flex-sm-nowrap overflow-auto">
        {#each cart.products as product}
          <div class="card border-0 p-2">
            <img
              src={product.imageUrl}
              class="card-img-top"
              alt={product.name}
            />
            <div class="card-body bg-light">
              <h4 class="card-title text-truncate py-2">{product.name}</h4>
              <div class="card-text d-flex justify-content-between fst-italic">
                <span>Base</span>
                <span>
                  <i class="bi bi-currency-euro black">{product.basePrice}</i>
                </span>
              </div>
              <div
                class="card-text d-flex justify-content-between fst-italic fw-bold"
              >
                <span>Daily</span>
                <span>
                  {cart.days} <small>x</small>
                  <i class="bi bi-currency-euro black">{product.dailyPrice}</i>
                </span>
              </div>
            </div>
            <div
              class="card-footer bg-info d-flex justify-content-between fst-italic fw-bold"
            >
              <span>Total</span>
              <span>
                FIXME
                <!-- TODO: uncomment when endpoints return float values
                <i class="bi bi-currency-euro black"
                  >{(
                    product.basePrice +
                    cart.days * product.dailyPrice
                  ).toFixed(2)}</i
                >
                -->
              </span>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="col-lg-3 d-flex flex-column py-1">
      <div class="row">
        <div class="col d-flex align-items-center justify-content-between">
          <h2>Summary</h2>
          <span>{cart.products.length} items</span>
        </div>
      </div>

      <div class="row flex-grow-1">
        <div class="col">
          <div class="input-group">
            <span class="input-group-text btn btn-info">+</span>
            <input
              type="text"
              class="form-control"
              placeholder="Discount code"
              aria-label="Discount code"
            />
          </div>
          <div class="mt-3 mb-2">
            <h5>Discount codes</h5>
          </div>
          <ul class="list-group">
            {#each cart.discountCodes as discountCode}
              <li class="list-group-item fw-bold">
                <div class="d-flex justify-content-between">
                  <span class="text-info">{discountCode.code}</span>
                  <span>{discountCode.discount} %</span>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <div class="row row-cols-1">
        <div class="col d-flex justify-content-between fst-italic text-muted">
          <span>Subtotal</span>
          <span>{cart.subtotalPrice}</span>
        </div>
        <div class="col d-flex justify-content-between fst-italic text-muted">
          <span>Discount</span>
          <span>{cart.discountPrice}</span>
        </div>
        <div class="col d-flex justify-content-between fw-bold fst-italic">
          <span>Total</span>
          <span>{cart.totalPrice}</span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <hr />
          <button class="btn btn-warning btn-lg w-100">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</main>

<slot />

<style>
  .card {
    min-width: 25vw;
    min-height: 60vh;
  }

  ::-webkit-scrollbar {
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px rgba(127, 127, 127, 0.4);
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(127, 127, 127, 0.9);
    border-radius: 12px;
  }
</style>
