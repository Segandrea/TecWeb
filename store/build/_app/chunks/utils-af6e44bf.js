import { b as base } from "./paths-28a87002.js";
function path(location, query = {}) {
  const _query = new URLSearchParams(query).toString();
  const _location = location.startsWith("/") ? base + location : location;
  return _query ? `${_location}?${_query}` : _location;
}
function isAuth() {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  return user.role === "customer";
}
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}
function datediff(start, end) {
  return Math.round((end - start) / (1e3 * 60 * 60 * 24));
}
export { datediff as d, formatDate as f, isAuth as i, path as p };
