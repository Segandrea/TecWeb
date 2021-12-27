<script>
  const INFO = "info";
  const ERROR = "error";

  let alert = {
    type: undefined,
    message: undefined,
    visible: false,
    timeout: undefined,
  };

  export function error(message, duration = 5000) {
    clearTimeout(alert.timeout);
    alert = {
      type: ERROR,
      message,
      visible: true,
      timeout: setTimeout(() => {
        alert.visible = false;
      }, duration),
    };
  }

  export function info(message, duration = 5000) {
    clearTimeout(alert.timeout);
    alert = {
      type: INFO,
      message,
      visible: true,
      timeout: setTimeout(() => {
        alert.visible = false;
      }, duration),
    };
  }
</script>

{#if alert.visible}
  <div
    class="alert"
    class:alert-danger={alert.type === ERROR}
    class:alert-success={alert.type === INFO}
    role="alert"
  >
    {alert.message}
    <slot />
  </div>
{/if}
