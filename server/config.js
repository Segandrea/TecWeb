const crypto = require("crypto");
const path = require("path");

const env = process.env.NODE_ENV || "development";
const prod = env === "production";

const projectDir = path.resolve(__dirname, "..");
const dashboardStaticPath = path.resolve(projectDir, "dashboard", "src");
const backofficeStaticPath = path.resolve(projectDir, "backoffice", "dist");
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
  store: {
    staticPath: storeStaticPath,
    fallbackPage: path.resolve(storeStaticPath, "index.html"),
  },
  mongo: {
    connectionUri: "mongodb://localhost/nolonoloplus",
  },
};
