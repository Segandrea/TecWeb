const crypto = require("crypto");
const path = require("path");

const prod = process.env.NODE_ENV === "production";

const projectDir = path.resolve(__dirname, "..");
const backofficeStaticPath = path.resolve(projectDir, "backoffice", "dist");
const storeStaticPath = path.resolve(projectDir, "store", "build");

module.exports = {
  saltRounds: prod ? 128 : 10,
  session: {
    secret: prod
      ? crypto.randomBytes(16).toString()
      : "<development-secretToken>",
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
