<script context="module">
  export async function load({ page, fetch }) {
    const orderId = page.params.id;

    const order = await fetch(`/api/store/orders/${orderId}`)
      .then((res) => res.json());

    return {
      props: {
        order,
      }
    }
  }
</script>

<script>
  export let order;
</script>

<main class="container">
  <h3 class="text-center">Order</h3>

  <div class="card-group text-center">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          Order date
        </h5>
        <div class="card-text">
          {order.issuedAt.split("T")[0]}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          Return date
        </h5>
        <div class="card-text">
          {order.returnalDate.split("T")[0]}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          Total
        </h5>
        <div class="card-text">
          € {order.totalPrice}
        </div>
      </div>
    </div>
  </div>

  <h3 class="text-center mt-5">Discounts</h3>
  <div class="table-responsive">
    <table class="table text-center">
      <thead class="table-dark">
        <tr>
          <th scope="col">Code</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {#each order.discounts as discount}
          <tr>
            <td>{discount.code}</td>
            <td>€ {discount.value}</td>
          </tr>
        {/each}
      </tbody>
    <table>
  </div>

  <h3 class="text-center mt-5">Products</h3>
  <div class="row row-cols-1 row-cols-md-3 g-1">
    {#each order.products as product}
      <div class="col">
        <div class="card">
          <img src={product.image} class="card-img-top">
          <div class="card-body">
            <div class="card-title fw-bold text-center">{product.name}</div>
            <ul>
              <li>Base:€ {product.basePrice}</li>
              <li>Daily:€ {product.dailyPrice}</li>
              <li>Dispatched: {product.initialStatus}</li>
              <li>Returned: {product.returnalStatus}</li>
            </ul>
          </div>
        </div>
      </div>
    {/each}
  </div>

</main>
