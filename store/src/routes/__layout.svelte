<script>
  import { onMount } from "svelte";
  import { rentalPeriod, cartItems } from "./stores.js";

  onMount(() => {
    flatpickr(document.getElementById("rentalPeriod"), {
      mode: "range",
      minDate: "today",
      dateFormat: "d-m-Y",
      onChange: (selectedDates, _dateString, _instance) => {
        rentalPeriod.set(selectedDates);
      },
    });
  });

  const toggleSearchBar = (_event) => {
    document.getElementById("datePicker").classList.toggle("d-none");
    document.getElementById("searchBar").classList.toggle("d-none");
  };
</script>

<header>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="bi bi-journal-bookmark-fill white" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item d-none d-md-block">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="#">
              <i class="bi bi-handbag-fill white" />
              <sup class="fw-bold orange">{$cartItems.length}</sup>
            </a>
          </li>
        </ul>
        <form class="d-flex">
          <div id="datePicker" class="input-group d-none">
            <input
              id="rentalPeriod"
              type="text"
              class="form-control"
              aria-label="Rental period"
              placeholder="Select dates"
              readonly
              required
            />
            <button
              type="button"
              class="btn btn-light border"
              on:click={toggleSearchBar}
            >
              <i class="bi bi-card-text" />
            </button>
            <button class="btn btn-warning">
              <i class="bi bi-search" />
            </button>
          </div>

          <div id="searchBar" class="input-group">
            <input
              id="searchTerms"
              type="text"
              class="form-control"
              aria-label="Search terms"
              placeholder="Search"
            />
            <button
              type="button"
              class="btn btn-light border"
              on:click={toggleSearchBar}
            >
              <i class="bi bi-calendar-range" />
            </button>
            <button class="btn btn-warning">
              <i class="bi bi-search" />
            </button>
          </div>
        </form>
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
        <a class="nav-link" href="#"><i class="bi bi-person black" /></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"
          ><i class="bi bi-house black" /></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="bi bi-handbag black" />
          <sup class="fw-bolder orange">{$cartItems.length}</sup>
        </a>
      </li>
    </ul>
  </nav>
</footer>

<style>
  #rentalPeriod {
    background-color: #fff;
  }
</style>
