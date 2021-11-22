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

<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
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

<!-- bottom navbar, mobile-only -->
<div class="container-fluid d-md-none fixed-bottom bg-light py-2">
  <div class="row text-center fs-5">
    <div class="col">
      <a href="#" class="text-decoration-none">
        <i class="bi bi-person black" />
      </a>
    </div>
    <div class="col">
      <a
        href="#"
        class="text-decoration-none fw-bolder border-bottom border-2 border-warning"
      >
        <i class="bi bi-house black" />
      </a>
    </div>
    <div class="col">
      <a href="#" class="text-decoration-none">
        <i class="bi bi-handbag black" />
        <sup class="fw-bolder orange">{$cartItems.length}</sup>
      </a>
    </div>
  </div>
</div>

<slot />

<style>
  #rentalPeriod {
    background-color: #fff;
  }
</style>
