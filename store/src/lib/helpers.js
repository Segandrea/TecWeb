import { base } from "$app/paths";

export function path(location) {
  return location.startsWith("/") ? base + location : location;
}
