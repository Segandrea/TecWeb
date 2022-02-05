let base = "";
function set_paths(paths) {
  base = paths.base;
  paths.assets || base;
}
export { base as b, set_paths as s };
