<svelte:head>
  <title>Games Room</title>
</svelte:head>

<main class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    <div class="col">
      <div class="card">
        <img src="product-image.png" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">Card Title</h5>
          <div class="card-subtitle mb-2 fs-6">
            <span class="bi bi-star-fill orange" />
            <span class="bi bi-star-fill orange" />
            <span class="bi bi-star-fill orange" />
            <span class="bi bi-star" />
            <span class="bi bi-star" />
          </div>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="card-footer">
          <table class="table table-borderless p-0 m-0">
            <tbody>
              <tr class="fs-5">
                <th class="text-start orange fw-bold">Daily</th>
                <th class="text-end orange fw-bold">$ 5,00</th>
              </tr>
              <tr class="fs-6">
                <td class="text-start text-muted">Base</td>
                <td class="text-end text-muted"><small>$ 14,00</small></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
