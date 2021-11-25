<script context="module">
  import faker from "faker";

  export async function load({ page, fetch, session, stuff }) {
    let orders = new Array(20);
    orders.fill({
      id: faker.datatype.uuid(),
      price: faker.commerce.price(),
      status: "Returned",
      issued_at: faker.date.past(),
      product: {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        image_url: faker.image.technics(),
        description: faker.commerce.productDescription(),
      },
    });

    return {
      props: {
        profile: {
          id: faker.datatype.uuid(),
          email: faker.internet.email(),
          avatar: faker.image.abstract(),
          username: faker.internet.userName(),
        },
        orders,
      },
    };
  }
</script>

<script>
  export let profile;
  export let orders;
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<main class="container">
  <div class="row row-cols-1">
    <div class="col col-lg-3 text-center">
      <h2 class="py-4">Profile</h2>

      <img
        class="rounded-circle"
        width="150px"
        height="150px"
        src={profile.avatar}
        alt="user avatar"
      />

      <form>
        <input id="avatar" class="form-control my-4" type="file" />

        <!-- email -->
        <div class="form-floating">
          <input
            id="email"
            type="email"
            class="form-control border-bottom-0 rounded-0 rounded-top"
            value={profile.email}
            placeholder="domain@example.com"
            required
          />
          <label for="email">Email address</label>
        </div>

        <!-- username -->
        <div class="form-floating">
          <input
            id="username"
            type="text"
            value={profile.username}
            class="form-control rounded-0"
            placeholder="username"
            required
          />
          <label for="username">Username</label>
        </div>

        <!-- password -->
        <div class="form-floating">
          <input
            id="password"
            type="password"
            class="form-control border-top-0 rounded-0 rounded-bottom"
            placeholder="Password"
            required
          />
          <label for="password">Password</label>
        </div>

        <button class="btn btn-lg btn-warning mt-4 mb-2 w-100" type="submit"
          >Save changes</button
        >
      </form>
    </div>
    <div class="col col-lg-9">
      <h2 class="text-center py-4">Your Orders</h2>

      <div class="overflow-auto" style="max-height: 75vh;">
        <ul class="list-group">
          {#each orders as order}
            <li class="list-group-item">
              <div class="row d-flex align-items-center">
                <div class="col-md-2 my-2 text-center">
                  <a href="#"
                    ><img
                      class="img-thumbnail"
                      src={order.product.image_url}
                      alt={order.product.name}
                    /></a
                  >
                </div>

                <div class="col-md-4 my-2 text-center">
                  <div class="row">
                    <div class="col">
                      <a class="link-dark" href="#">
                        <div class="text-truncate">
                          {order.product.description}
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      <small class="text-muted">{order.issued_at}</small>
                    </div>
                  </div>
                </div>

                <div class="col-md-2 my-2 text-center fw-bold">
                  {order.status}
                </div>

                <div class="col-md-2 my-2 text-center">
                  <i class="bi bi-currency-euro">{order.price}</i>
                </div>

                <div class="col-md-2 my-2 text-center">
                  <a href="#">
                    Leave a review <i class="bi bi-pen" />
                  </a>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</main>

<slot />
