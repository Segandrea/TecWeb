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

export function datediff(start, end) {
  return Math.round((end - start) / (1000 * 60 * 60 * 24));
}
