<script context="module">
  export async function load({ fetch }) {
    let products = await fetch("/api/store/products").then((res) => res.json());

    return {
      props: products,
    };
  }
</script>

<script>
  export let products;
</script>

<svelte:head>
  <title>Games Room</title>
</svelte:head>

<main class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    {#each products as product}
      <div class="col">
        <div class="card">
          <img
            src={product.images[0].url}
            class="card-img-top"
            alt={product.name + " image"}
          />
          <div class="card-body">
            <a
              href="/store/detail/{product._id}"
              class="stretched-link text-decoration-none text-reset"
            >
              <h5 class="card-title">{product.name}</h5>
            </a>
            <div class="card-subtitle mb-2 fs-6">
              <span class="bi bi-star-fill orange" />
              <span class="bi bi-star-fill orange" />
              <span class="bi bi-star-fill orange" />
              <span class="bi bi-star" />
              <span class="bi bi-star" />
            </div>
            <p class="card-text">
              {product.description}
            </p>
          </div>
          <div class="card-footer">
            <table class="table table-borderless p-0 m-0">
              <tbody>
                <tr class="fs-5">
                  <th class="text-start orange fw-bold">Daily</th>
                  <th class="text-end orange fw-bold"
                    ><i class="bi bi-currency-euro">
                      {product.dailyPrice}</i
                    ></th
                  >
                </tr>
                <tr class="fs-6">
                  <td class="text-start text-muted">Base</td>
                  <td class="text-end text-muted"
                    ><small
                      ><i class="bi bi-currency-euro">
                        {product.basePrice}</i
                      ></small
                    ></td
                  >
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>

<slot />

<style>
  .card {
    min-height: 512px;
  }

  .card-body {
    min-height: 256px;
  }
</style>
