<script context="module">
  import { path, isAuth } from "$lib/utils";

  export async function load({ page }) {
    if (!isAuth()) {
      const returnTo = new URLSearchParams({ returnTo: path(page.path) });

      return {
        status: 302,
        redirect: path(`/signin?${returnTo}`),
      };
    }

    return {};
  }
</script>

<script>
  import {
    cart,
    cartItems,
    removeFromCart,
    coupons,
    couponItems,
    addCoupon,
    removeCoupon,
    rentalPeriod,
  } from "$lib/stores";
  import { datediff } from "$lib/utils";

  let couponCode;

  let subtotalPrice = 0;
  let couponPrice = 0;
  let totalPrice = 0;
  let days = 0;

  rentalPeriod.subscribe((range) => {
    days = range.length == 2 ? datediff(range[0], range[1]) : 0;
    computePrices(days, $cartItems, $couponItems);
  });

  cart.subscribe((cart) => {
    computePrices(days, Object.values(cart), $couponItems);
  });

  coupons.subscribe((coupons) => {
    computePrices(days, $cartItems, Object.values(coupons));
  });

  function computePrices(days, products, coupons) {
    subtotalPrice = products
      .map((product) => product.basePrice + product.dailyPrice * days)
      .reduce((acc, val) => acc + val, 0);

    couponPrice = coupons
      .map((coupon) => coupon.value)
      .reduce((acc, val) => acc + val, 0);

    totalPrice = Math.max(subtotalPrice - couponPrice, 0);
  }

  async function fetchCoupon() {
    const res = await fetch(`/api/store/coupons/${couponCode}`);

    if (res.ok) {
      res
        .json()
        .then(addCoupon)
        .then(() => {
          couponCode = "";
        });
    }
  }
</script>

<svelte:head>
  <title>Cart</title>
</svelte:head>

<main class="container">
  <div class="row g-4">
    <div class="col-lg-3">
      <div class="row">
        <div class="col d-flex align-items-center justify-content-between">
          <h2>Summary</h2>
          <span>{$cartItems.length} items</span>
        </div>
      </div>

      <div class="row" style="min-height: 28vh;">
        <div class="col">
          <form on:submit|preventDefault={fetchCoupon}>
            <div class="input-group">
              <button class="btn btn-info" type="submit" id="addCoupon"
                >+</button
              >
              <input
                bind:value={couponCode}
                type="text"
                class="form-control"
                placeholder="Coupon code"
                aria-label="Enter coupon code"
                aria-describedby="addCoupon"
              />
            </div>
          </form>
          <h5 class="my-2">Coupon codes</h5>
          <ul class="list-group mb-2">
            {#each $couponItems as coupon}
              <li class="list-group-item fw-bold">
                <div class="d-flex justify-content-between">
                  <div>
                    <i
                      class="bi bi-x-circle text-danger me-2"
                      on:click={() => removeCoupon(coupon)}
                    />
                    <span class="text-info">{coupon.code}</span>
                  </div>
                  <span>
                    <i class="bi bi-currency-euro black">
                      {coupon.value.toFixed(2)}
                    </i>
                  </span>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <div class="row row-cols-1">
        <div class="col d-flex justify-content-between fst-italic text-muted">
          <span>Subtotal</span>
          <span
            ><i class="bi bi-currency-euro black">{subtotalPrice.toFixed(2)}</i
            ></span
          >
        </div>
        <div class="col d-flex justify-content-between fst-italic text-muted">
          <span>Coupon</span>
          <span
            ><i class="bi bi-currency-euro black">{couponPrice.toFixed(2)}</i
            ></span
          >
        </div>
        <div class="col d-flex justify-content-between fw-bold fst-italic">
          <span>Total</span>
          <span
            ><i class="bi bi-currency-euro black">{totalPrice.toFixed(2)}</i
            ></span
          >
        </div>
      </div>

      <div class="row">
        <div class="col">
          <hr />
          <button class="btn btn-warning btn-lg w-100">Checkout</button>
        </div>
      </div>
    </div>

    <div class="col-lg-9">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {#each $cartItems as product}
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
                <div
                  class="d-flex justify-content-between text-muted fs-6 fst-italic"
                >
                  <div><small>Days</small></div>
                  <div>
                    <small>{days}</small>
                  </div>
                </div>
                <div class="text-end mt-4 mb-2">
                  <button
                    type="button"
                    class="btn btn-warning rounded-3"
                    on:click={() => removeFromCart(product)}
                  >
                    Remove</button
                  >
                </div>
              </div>
              <div class="card-footer">
                <div
                  class="d-flex justify-content-between fw-bolder fst-italic"
                >
                  <div>Total</div>
                  <div>
                    <i class="bi bi-currency-euro"
                      >{(product.basePrice + days * product.dailyPrice).toFixed(
                        2
                      )}</i
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>

<slot />
