import { base } from "$app/paths";

export function path(location, query = {}) {
  const _query = new URLSearchParams(query).toString();
  const _location = location.startsWith("/") ? base + location : location;
  return _query ? `${_location}?${_query}` : _location;
}

export function isAuth() {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  return user.role === "customer";
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}

export function datediff(start, end) {
  return Math.round((end - start) / (1000 * 60 * 60 * 24));
}
