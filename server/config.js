const crypto = require("crypto");
const path = require("path");

const dev = process.env.NODE_ENV === "development";

const projectDir = path.resolve(__dirname, "..");
const backofficeStaticPath = path.resolve(projectDir, "backoffice", "dist");
const storeStaticPath = path.resolve(projectDir, "store", "build");

module.exports = {
  session: {
    secret: dev
      ? "<development-secretToken>"
      : crypto.randomBytes(16).toString(),
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
