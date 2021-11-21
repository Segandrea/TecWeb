<script>
  const toggleForm = (_event) => {
    document.getElementById("signInForm").classList.toggle("d-none");
    document.getElementById("signUpForm").classList.toggle("d-none");
  };
</script>

<main class="w-100 h-100">
  <div class="container h-100 w-100">
    <div class="row w-100 h-100 d-flex text-center align-items-center m-auto">
      <div class="col m-auto">
        <form id="signInForm">
          <i class="bi bi-journal-bookmark-fill" style="font-size: 3.5em;" />
          <h1 class="h3 mb-4 fw-normal">Welcome back!</h1>

          <div
            class="alert alert-warning alert-dismissible fade show mt-4"
            role="alert"
          >
            Sign-in required
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            />
          </div>

          <div class="form-floating">
            <input
              type="email"
              class="form-control rounded-0 rounded-top"
              id="signInEmail"
              placeholder="domain@example.com"
              required
            />
            <label for="signInEmail">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control rounded-0 rounded-bottom"
              id="signInPassword"
              placeholder="Password"
              required
            />
            <label for="signInPassword">Password</label>
          </div>

          <div class="form-check form-check-inline p-2 mb-4">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="keepMeSignedIn"
            />
            <label class="form-check-label" for="keepMeSignedIn">
              Keep me signed-in
            </label>
          </div>

          <button class="btn btn-lg btn-warning w-100" type="submit"
            >Sign in</button
          >
          <p class="mt-2">
            Don't have an account yet? <a
              href="#"
              class="link-dark"
              on:click={toggleForm}>Sign up</a
            >
          </p>
        </form>

        <form id="signUpForm" class="d-none">
          <i class="bi bi-journal-bookmark-fill" style="font-size: 3.5em;" />
          <h1 class="h3 mb-4 fw-normal">Nice to meet you!</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control rounded-0 rounded-top"
              id="signUpEmail"
              placeholder="domain@example.com"
              required
            />
            <label for="signUpEmail">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control rounded-0"
              id="signUpPassword"
              placeholder="Password"
              required
            />
            <label for="signUpPassword">Password</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control rounded-0 rounded-bottom"
              id="signUpConfirmPassword"
              placeholder="Confirm password"
              required
            />
            <label for="signUpConfirmPassword">Confirm password</label>
          </div>

          <div class="my-4" />
          <button class="btn btn-lg btn-warning w-100" type="submit"
            >Sign up</button
          >
          <p class="mt-2">
            Already registered? <a
              href="#"
              class="link-dark"
              on:click={toggleForm}>Sign in</a
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    background-color: #f5f5f5;
  }

  form {
    max-width: 330px;
    margin: auto;
  }

  .form-floating:focus-within {
    z-index: 2;
  }
</style>
