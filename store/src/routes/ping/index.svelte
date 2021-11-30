<script context="module">
  export async function load({ page, fetch, session, stuff }) {
    const res = await fetch("/api/store/ping");
    const props = res.ok
      ? { status: "success", message: "Server is up and running" }
      : { status: "danger", message: "Server is not responding" };

    return { props };
  }
</script>

<script>
  export let status;
  export let message;
</script>

<main class="container">
  <div class="alert alert-{status}" role="alert">
    {message}
  </div>
</main>
