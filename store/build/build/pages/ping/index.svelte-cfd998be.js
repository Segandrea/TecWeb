import {
  S as g,
  i as _,
  s as v,
  e as c,
  t as p,
  c as d,
  a as f,
  g as S,
  d as o,
  b as l,
  f as k,
  G as m,
  h as y,
  N as h,
} from "../../chunks/vendor-e16ff237.js";
function E(r) {
  let s, a, n, t;
  return {
    c() {
      (s = c("main")), (a = c("div")), (n = p(r[1])), this.h();
    },
    l(e) {
      s = d(e, "MAIN", { class: !0 });
      var i = f(s);
      a = d(i, "DIV", { class: !0, role: !0 });
      var u = f(a);
      (n = S(u, r[1])), u.forEach(o), i.forEach(o), this.h();
    },
    h() {
      l(a, "class", (t = "alert alert-" + r[0])),
        l(a, "role", "alert"),
        l(s, "class", "container");
    },
    m(e, i) {
      k(e, s, i), m(s, a), m(a, n);
    },
    p(e, [i]) {
      i & 2 && y(n, e[1]),
        i & 1 && t !== (t = "alert alert-" + e[0]) && l(a, "class", t);
    },
    i: h,
    o: h,
    d(e) {
      e && o(s);
    },
  };
}
async function b({ page: r, fetch: s, session: a, stuff: n }) {
  s("/store/ping").then((t) => ({
    props: t.ok
      ? { status: "success", message: "Server is up and running" }
      : { status: "danger", message: "Server is not responding" },
  }));
}
function I(r, s, a) {
  let { status: n } = s,
    { message: t } = s;
  return (
    (r.$$set = (e) => {
      "status" in e && a(0, (n = e.status)),
        "message" in e && a(1, (t = e.message));
    }),
    [n, t]
  );
}
class j extends g {
  constructor(s) {
    super();
    _(this, s, I, E, v, { status: 0, message: 1 });
  }
}
export { j as default, b as load };
