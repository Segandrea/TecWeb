<script>
  import { onMount } from "svelte";

  import { rentalPeriod, cartItems, category, sortBy } from "$lib/stores";
  import { path } from "$lib/utils";

  let rangeInput;
  const sortSeq = [0, 1, -1];
  const sortSeqClass = ["bi-sort-down", "bi-filter", "bi-sort-up"];

  onMount(() => {
    const pickr = flatpickr(rangeInput, {
      mode: "range",
      minDate: "today",
      dateFormat: "M j Y",
      defaultDate: [today(1), today(2)],
      onChange: (selectedDates) => {
        rentalPeriod.set(selectedDates);
      },
      onReady: (selectedDates) => {
        rentalPeriod.set(selectedDates);
      },
      clickOpens: false,
      locale: {
        rangeSeparator: " - ",
      },
    });

    document.addEventListener("scroll", () => pickr.close());
  });

  function today(additionalDays = 0) {
    const today = new Date();
    today.setDate(today.getDate() + additionalDays);
    return today;
  }
</script>

<header>
  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <div class="d-flex">
        <a class="navbar-brand" href={path("/")}>
          <img
            src={path("/nolonoloplus-light.png")}
            alt="Nolo Nolo Plus Logo"
            height="32"
          />
        </a>

        <ul class="navbar-nav d-none d-md-flex">
          <li class="nav-item">
            <a class="nav-link" href={path("/cart")}>
              <i class="bi bi-handbag white" />
              <sup class="fw-bolder orange">{$cartItems.length}</sup>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={path("/profile")}
              ><i class="bi bi-person white" /></a
            >
          </li>
        </ul>
      </div>

      <div>
        <div class="input-group">
          <input
            id="rangeInput"
            bind:this={rangeInput}
            type="text"
            class="form-control px-1 px-sm-2"
            aria-label="Rental period"
            aria-describedby="calendarRange"
            placeholder="Select dates"
            on:click={() => rangeInput._flatpickr.toggle()}
            readonly
            required
          />
          <button
            class="btn btn-warning dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ><i class="bi bi-funnel" />
          </button>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark">
            <li><h5 class="dropdown-header">Category</h5></li>
            <li>
              <button
                type="button"
                class="dropdown-item"
                on:click={() => category.set(undefined)}>All</button
              >
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item"
                on:click={() => category.set("party")}>Party</button
              >
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item"
                on:click={() => category.set("cards")}>Cards</button
              >
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item"
                on:click={() => category.set("dices")}>Dices</button
              >
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item"
                on:click={() => category.set("puzzle")}>Puzzle</button
              >
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item"
                on:click={() => category.set("mistery")}>Mistery</button
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <button
                type="button"
                class="dropdown-item"
                on:click={() =>
                  sortBy.update((o) => ({
                    ...o,
                    rating: sortSeq[o.rating + 1],
                  }))}
                ><i class="bi {sortSeqClass[$sortBy.rating + 1]}" /> Rating</button
              >
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item"
                on:click={() =>
                  sortBy.update((o) => ({
                    ...o,
                    basePrice: sortSeq[o.basePrice + 1],
                  }))}
                ><i class="bi {sortSeqClass[$sortBy.basePrice + 1]}" /> Base Price</button
              >
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item"
                on:click={() =>
                  sortBy.update((o) => ({
                    ...o,
                    dailyPrice: sortSeq[o.dailyPrice + 1],
                  }))}
                ><i class="bi {sortSeqClass[$sortBy.dailyPrice + 1]}" />
                Daily Price</button
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>

<slot />

<!-- bottom navbar, mobile-only -->
<footer class="d-md-none">
  <nav class="navbar navbar-expand navbar-light bg-light fixed-bottom">
    <ul class="navbar-nav w-100 justify-content-evenly">
      <li class="nav-item">
        <a class="nav-link" href={path("/profile")}
          ><i class="bi bi-person black" /></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href={path("/")}><i class="bi bi-house black" /></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href={path("/cart")}>
          <i class="bi bi-handbag black" />
          <sup class="fw-bolder orange">{$cartItems.length}</sup>
        </a>
      </li>
    </ul>
  </nav>
</footer>

<style>
  #rangeInput {
    background-color: #fff;
  }
</style>
