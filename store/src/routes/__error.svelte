<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        message: error.message,
        status,
      },
    };
  }
</script>

<script>
  export let status;
  export let message;
</script>

<main class="container">
  <div class="row">
    <div class="col text-center p-4">
      <h2>Error {status}</h2>
      <h4>{message}</h4>
    </div>
  </div>
</main>
