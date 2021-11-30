<script>
  import { onMount } from "svelte";
  import { path } from "./helpers.js";
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

  const toggleInput = (_event) => {
    document.getElementById("textInput").classList.toggle("d-none");
    if (!document.getElementById("dateInput").classList.toggle("d-none")) {
      document.getElementById("rentalPeriod")._flatpickr.toggle();
    }
  };
</script>

<header>
  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <div class="d-flex">
        <a class="navbar-brand" href={path("/")}>
          <img
            src={path("/nolonoloplus-light.png")}
            alt="Nolo Nolo Plus Logo"
            height="24"
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

      <form class="d-flex" style="max-width: 75vw;">
        <div id="textInput" class="input-group">
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
            on:click={toggleInput}
          >
            <i class="bi bi-calendar-range" />
          </button>

          <button class="btn btn-warning">
            <i class="bi bi-search" />
          </button>
        </div>

        <div id="dateInput" class="input-group d-none">
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
            on:click={toggleInput}
          >
            <i class="bi bi-card-text" />
          </button>

          <button class="btn btn-warning">
            <i class="bi bi-search" />
          </button>
        </div>
      </form>
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
  #rentalPeriod {
    background-color: #fff;
  }
</style>
