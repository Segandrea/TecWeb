const crypto = require("crypto");
const path = require("path");

const env = process.env.NODE_ENV || "development";
const prod = env === "production";

const projectDir = path.resolve(__dirname, "..");
const backofficeStaticPath = path.resolve(projectDir, "backoffice", "dist");
const dashboardStaticPath = path.resolve(projectDir, "dashboard", "public");
const serverStaticPath = path.resolve(projectDir, "server", "public");
const storeStaticPath = path.resolve(projectDir, "store", "build");

module.exports = {
  env,
  saltRounds: prod ? 128 : 10,
  session: {
    secret: prod
      ? crypto.randomBytes(16).toString()
      : "<development-secretToken>",
  },
  dashboard: {
    staticPath: dashboardStaticPath,
    fallbackPage: path.resolve(dashboardStaticPath, "index.html"),
  },
  backoffice: {
    staticPath: backofficeStaticPath,
    fallbackPage: path.resolve(backofficeStaticPath, "index.html"),
  },
  server: {
    staticPath: serverStaticPath,
  },
  store: {
    staticPath: storeStaticPath,
    fallbackPage: path.resolve(storeStaticPath, "index.html"),
  },
  mongo: {
    connectionUri: "mongodb://localhost/nolonoloplus",
  },
};
