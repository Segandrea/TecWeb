<script>
  import { onMount } from "svelte";
  import { path } from "$lib/utils";
  import { rentalPeriod, cartItems } from "$lib/stores";

  let rangeInput;

  onMount(() => {
    const pickr = flatpickr(rangeInput, {
      mode: "range",
      minDate: "today",
      dateFormat: "d-m-Y",
      defaultDate: [today(1), today(2)],
      onChange: (selectedDates) => {
        rentalPeriod.set(selectedDates);
      },
      onReady: (selectedDates) => {
        rentalPeriod.set(selectedDates);
      },
      clickOpens: false,
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
          <span
            id="calendarRange"
            class="input-group-text bg-warning border-warning"
            ><i class="bi bi-calendar-range" /></span
          >
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
