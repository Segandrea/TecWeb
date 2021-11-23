<svelte:head>
  <title>Profile</title>
</svelte:head>

<main class="container h-100">
  <div class="row align-items-start">
    <!-- user profile -->
    <div class="col-md-3 text-center">
      <!-- title -->
      <div class="row pb-4">
        <div class="col-md fs-2 text-center">Profile</div>
      </div>
      <!-- data -->
      <div class="row">
        <div class="col-md">
          <!-- profile picture -->
          <img
            class="rounded-2"
            width="200px"
            src="propic.png"
            alt="user avatar"
          />
          <!-- form containing user informations -->
          <form>
            <input id="selectPhoto" class="form-control my-4" type="file" />
            <div class="form-floating">
              <input
                id="email"
                class="form-control border-bottom-0 rounded-0 rounded-top"
                type="email"
                placeholder="example@example.com"
                value="chiara.giovagnoli5@studio.unibo.it"
                required
              />
              <label for="email">Email address</label>
            </div>

            <div class="form-floating">
              <input
                id="username"
                class="form-control rounded-0"
                type="text"
                placeholder="Username"
                value="Darkslayer"
                required
              />
              <label for="username">Username</label>
            </div>

            <div class="form-floating">
              <input
                id="password"
                class="form-control border-top-0 rounded-0 rounded-bottom"
                type="password"
                placeholder="Password"
                value="ciaociao"
                required
              />
              <label for="password">Password</label>
            </div>

            <button class="btn btn-lg btn-warning mt-4 mb-2 w-100" type="submit"
              >Save changes</button
            >
          </form>

          <!-- button to show history (hidden on desktop) -->
          <div class="d-md-none mb-3">
            <a
              class="link-dark"
              href="#history"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false">Show history</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- history desktop -->
    <div class="col-md d-none d-md-block">
      <!-- title -->
      <div class="row pb-4">
        <div class="col-md fs-2 text-center">History</div>
      </div>
      <!-- orders -->
      <div class="row">
        <div class="col-md">
          <ul class="list-group">
            <!-- Item -->
            <li class="list-group-item">
              <div class="row d-flex align-items-center">
                <!-- Photo -->
                <div class="col-md-2 mb-2 mt-3 text-center">
                  <a href="#"
                    ><img
                      src="https://m.media-amazon.com/images/I/81ZOMrH1jbL._AC_SR180,120_QL70_.jpg"
                    /></a
                  >
                </div>
                <!-- Name/Date -->
                <div class="col-md-4">
                  <div class="row">
                    <div class="col text-center">
                      <a class="link-dark" href="#"
                        ><div class="text-truncate">
                          Monopoly: limited edition, no money.
                        </div></a
                      >
                    </div>
                  </div>
                  <div class="row text-muted">
                    <div class="col text-center">
                      <small>ordered: 11/11/1991</small>
                    </div>
                  </div>
                </div>
                <!-- Status -->
                <div class="col-md-1 mb-2 mt-3 green fw-bold text-center">
                  Done
                </div>
                <!-- Price -->
                <div class="col-md-2 mb-2 mt-3 fs-4 text-center">
                  <i class="bi bi-currency-euro">123,50</i>
                </div>
                <!-- Write a review -->
                <div class="col-md-3 mb-2 mt-3 text-center">
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#leaveReview-productId"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    href="#"
                  >
                    Write a review <i class="bi bi-pen" />
                  </a>
                  <div id="leaveReview-productId" class="collapse">
                    <form>
                      <!-- TODO: real star system -->
                      <div id="stars1">
                        <span class="bi bi-star-fill orange" />
                        <span class="bi bi-star-fill orange" />
                        <span class="bi bi-star-fill orange" />
                        <span class="bi bi-star" />
                        <span class="bi bi-star" />
                      </div>
                      <!-- Review description -->
                      <textarea
                        class="form-control"
                        placeholder="Insert description"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- history from mobile -->
    <div id="history" class="col-md collapse d-md-none">
      <!-- title -->
      <div class="row pb-4">
        <div class="col-md fs-2 text-center">History</div>
      </div>
      <!-- orders -->
      <div class="row">
        <div class="col-md">
          <ul class="list-group">
            <!-- Item -->
            <li class="list-group-item">
              <div class="row d-flex align-items-center">
                <!-- Photo -->
                <div class="col-md-2 mb-2 mt-3 text-center">
                  <a href="#"
                    ><img
                      src="https://m.media-amazon.com/images/I/81ZOMrH1jbL._AC_SR180,120_QL70_.jpg"
                    /></a
                  >
                </div>
                <!-- Name/Date -->
                <div class="col-md-4">
                  <div class="row">
                    <div class="col text-center">
                      <a class="link-dark" href="#"
                        ><div class="text-truncate">
                          Monopoly: limited edition, no money.
                        </div></a
                      >
                    </div>
                  </div>
                  <div class="row text-muted">
                    <div class="col text-center">
                      <small>ordered: 11/11/1991</small>
                    </div>
                  </div>
                </div>
                <!-- Status -->
                <div class="col-md-1 mb-2 mt-3 green fw-bold text-center">
                  Done
                </div>
                <!-- Price -->
                <div class="col-md-2 mb-2 mt-3 fs-4 text-center">
                  <i class="bi bi-currency-euro">123,50</i>
                </div>
                <!-- Write a review -->
                <div class="col-md-3 mb-2 mt-3 text-center">
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#leaveReview-productId"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    href="#"
                  >
                    Write a review <i class="bi bi-pen" />
                  </a>
                  <div id="leaveReview-productId" class="collapse">
                    <form>
                      <!-- TODO: real star system -->
                      <div id="stars1">
                        <span class="bi bi-star-fill orange" />
                        <span class="bi bi-star-fill orange" />
                        <span class="bi bi-star-fill orange" />
                        <span class="bi bi-star" />
                        <span class="bi bi-star" />
                      </div>
                      <!-- Review description -->
                      <textarea
                        class="form-control"
                        placeholder="Insert description"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</main>

<slot />

<style>
  #history {
    padding-bottom: 4.5rem;
  }
</style>
