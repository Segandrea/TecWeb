import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "development";

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    ssr: false,
    paths: {
      base: dev ? "" : "/store",
    },
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "index.html",
    }),
    vite: () => ({
      build: {
        minify: false,
      },
    }),
  },
};

export default config;
