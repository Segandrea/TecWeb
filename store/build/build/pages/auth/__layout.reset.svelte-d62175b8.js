import {
  S as o,
  i,
  s as r,
  D as u,
  I as f,
  J as _,
  K as c,
  x as p,
  u as d,
} from "../../chunks/vendor-e16ff237.js";
function m(a) {
  let s;
  const l = a[1].default,
    e = u(l, a, a[0], null);
  return {
    c() {
      e && e.c();
    },
    l(t) {
      e && e.l(t);
    },
    m(t, n) {
      e && e.m(t, n), (s = !0);
    },
    p(t, [n]) {
      e &&
        e.p &&
        (!s || n & 1) &&
        f(e, l, t, t[0], s ? c(l, t[0], n, null) : _(t[0]), null);
    },
    i(t) {
      s || (p(e, t), (s = !0));
    },
    o(t) {
      d(e, t), (s = !1);
    },
    d(t) {
      e && e.d(t);
    },
  };
}
function $(a, s, l) {
  let { $$slots: e = {}, $$scope: t } = s;
  return (
    (a.$$set = (n) => {
      "$$scope" in n && l(0, (t = n.$$scope));
    }),
    [t, e]
  );
}
class h extends o {
  constructor(s) {
    super();
    i(this, s, $, m, r, {});
  }
}
export { h as default };
