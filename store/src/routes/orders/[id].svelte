<script context="module">
  import { getJSON, onStatus } from "$lib/http";
  import { path, isAuth } from "$lib/utils";

  export async function load({ page, fetch }) {
    const orderId = page.params.id;

    if (isAuth()) {
      return await getJSON(`/api/store/orders/${orderId}`, { fetchImpl: fetch })
        .then((order) => {
          return {
            props: { order },
          };
        })
        .catch(
          onStatus(401, () => {
            return {
              status: 302,
              redirect: path("/signin", {
                returnTo: path(page.path),
                required: true,
              }),
            };
          })
        )
        .catch(([err, req]) => {
          console.error(err);
          return {
            status: req ? req.status : 500,
            error: "Unable to reach the server",
          };
        });
    }

    return {
      status: 302,
      redirect: path("/signin", {
        returnTo: path(page.path),
        required: true,
      }),
    };
  }
</script>

<script>
  import { formatDate } from "$lib/utils";

  export let order;
</script>

<main class="container">
  <h3 class="text-center">Rental Period</h3>

  <div class="card-group text-center">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">State</h5>
        <div class="card-text">
          {order.state}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Start date</h5>
        <div class="card-text">
          {formatDate(order.startDate)}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">End date</h5>
        <div class="card-text">
          {formatDate(order.endDate)}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Days</h5>
        <div class="card-text">
          {order.days}
        </div>
      </div>
    </div>
  </div>

  <h3 class="text-center mt-5">Pricing</h3>

  <div class="card-group text-center">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Subtotal</h5>
        <div class="card-text">
          € {order.subtotalPrice.toFixed(2)}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Discounts</h5>
        <div class="card-text">
          € {order.discountsPrice.toFixed(2)}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Coupons</h5>
        <div class="card-text">
          € {order.couponsPrice.toFixed(2)}
        </div>
      </div>
    </div>

    {#if order.penaltyPrice > 0}
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Penalty</h5>
          <div class="card-text">
            € {order.penaltyPrice.toFixed(2)}
          </div>
        </div>
      </div>
    {/if}

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total</h5>
        <div class="card-text">
          € {order.totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  </div>

  {#if order.coupons && order.coupons.length > 0}
    <h3 class="text-center mt-5">Coupons</h3>
    <div class="table-responsive">
      <table class="table text-center">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {#each order.coupons as coupon}
            <tr>
              <td>{coupon.code}</td>
              <td>€ {coupon.value.toFixed(2)}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}

  <h3 class="text-center mt-5">Products</h3>
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-1">
    {#each order.products as product}
      <div class="col">
        <div class="card h-100">
          <img
            src={product.imageUrl}
            class="card-img-top"
            height="228"
            alt={product.name + " image"}
          />
          <div class="card-body">
            <h5 class="card-title text-center text-truncate mb-5">
              {product.name}
            </h5>
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
              <div><small>Discount</small></div>
              <div>
                <small
                  ><i class="bi bi-currency-euro"
                    >{product.discountPrice.toFixed(2)}</i
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
