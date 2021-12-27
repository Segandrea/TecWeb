const dev = process.env.NODE_ENV === "development";

module.exports = {
  publicPath: dev ? "/" : "/backoffice/",
  chainWebpack: (config) => config.optimization.minimize(false),
};
