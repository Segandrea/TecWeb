module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier"],
  plugins: [],
  overrides: [],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019,
  },
  env: {
    browser: false,
    es2017: true,
    node: true,
  },
};
