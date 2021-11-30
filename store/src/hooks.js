import { base } from "$app/paths";

export async function handle({ request, resolve }) {
  // if you're just wondering why, have a look at the issues below:
  // - https://github.com/sveltejs/kit/issues/2697
  // - https://github.com/illright/attractions/issues/311
  const response = await resolve(request);
  if (response.headers["content-type"] === "text/html") {
    response.body = response.body.replaceAll("%svelte.base%", base);
  }
  return response;
}
