<script setup>
import { ref, computed } from "vue";

const INFO = "info";
const ERROR = "error";

const alert = ref({
  type: undefined,
  message: undefined,
  visible: false,
  timeout: undefined,
});

const alertClass = computed(() => {
  const error = alert.value.type === ERROR;
  return {
    "alert-danger": error,
    "alert-success": !error,
  };
});

function error(message, duration = 5000) {
  clearTimeout(alert.value.timeout);
  alert.value = {
    type: ERROR,
    message,
    visible: true,
    timeout: setTimeout(() => {
      alert.value.visible = false;
    }, duration),
  };
}

function info(message, duration = 5000) {
  clearTimeout(alert.value.timeout);
  alert.value = {
    type: INFO,
    message,
    visible: true,
    timeout: setTimeout(() => {
      alert.value.visible = false;
    }, duration),
  };
}

defineExpose({ error, info });
</script>

<template>
  <div v-if="alert.visible" class="alert" :class="alertClass" role="alert">
    {{ alert.message }}
  </div>
</template>
