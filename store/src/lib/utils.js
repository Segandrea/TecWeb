import { base } from "$app/paths";

export function path(location) {
  return location.startsWith("/") ? base + location : location;
}

export function isAuth() {
  return !!sessionStorage.getItem("customer");
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}
