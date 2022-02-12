import {
  O as Y,
  S as Ae,
  i as ke,
  s as Ne,
  e as s,
  k as p,
  t as C,
  c as a,
  a as u,
  d as r,
  n as E,
  g as F,
  b as e,
  E as _e,
  f as ge,
  G as t,
  h as pe,
  D as Ue,
  P as qe,
  I as Te,
  J as Me,
  K as Oe,
  x as Se,
  u as Be,
  Q as Ge,
} from "../chunks/vendor-e16ff237.js";
function Le(n, c, o) {
  const v = n.slice();
  return (v[4] = c[o]), v;
}
function Pe(n) {
  let c,
    o,
    v,
    i,
    m,
    j,
    w,
    D,
    T,
    J,
    h,
    P,
    K,
    A = n[4].product.description + "",
    b,
    $,
    Q,
    k,
    z,
    ee = n[4].issued_at + "",
    M,
    V,
    O,
    te = n[4].status + "",
    S,
    oe,
    W,
    L,
    N = n[4].price + "",
    ue,
    H,
    X,
    B,
    R,
    le,
    ie;
  return {
    c() {
      (c = s("li")),
        (o = s("div")),
        (v = s("div")),
        (i = s("a")),
        (m = s("img")),
        (D = p()),
        (T = s("div")),
        (J = s("div")),
        (h = s("div")),
        (P = s("a")),
        (K = s("div")),
        (b = C(A)),
        ($ = p()),
        (Q = s("div")),
        (k = s("div")),
        (z = s("small")),
        (M = C(ee)),
        (V = p()),
        (O = s("div")),
        (S = C(te)),
        (oe = p()),
        (W = s("div")),
        (L = s("i")),
        (ue = C(N)),
        (H = p()),
        (X = s("div")),
        (B = s("a")),
        (R = C("Leave a review ")),
        (le = s("i")),
        (ie = p()),
        this.h();
    },
    l(f) {
      c = a(f, "LI", { class: !0 });
      var _ = u(c);
      o = a(_, "DIV", { class: !0 });
      var U = u(o);
      v = a(U, "DIV", { class: !0 });
      var ce = u(v);
      i = a(ce, "A", { href: !0, class: !0 });
      var Z = u(i);
      (m = a(Z, "IMG", { class: !0, src: !0, alt: !0 })),
        Z.forEach(r),
        ce.forEach(r),
        (D = E(U)),
        (T = a(U, "DIV", { class: !0 }));
      var se = u(T);
      J = a(se, "DIV", { class: !0 });
      var G = u(J);
      h = a(G, "DIV", { class: !0 });
      var ae = u(h);
      P = a(ae, "A", { class: !0, href: !0 });
      var g = u(P);
      K = a(g, "DIV", { class: !0 });
      var de = u(K);
      (b = F(de, A)),
        de.forEach(r),
        g.forEach(r),
        ae.forEach(r),
        G.forEach(r),
        ($ = E(se)),
        (Q = a(se, "DIV", { class: !0 }));
      var I = u(Q);
      k = a(I, "DIV", { class: !0 });
      var l = u(k);
      z = a(l, "SMALL", { class: !0 });
      var y = u(z);
      (M = F(y, ee)),
        y.forEach(r),
        l.forEach(r),
        I.forEach(r),
        se.forEach(r),
        (V = E(U)),
        (O = a(U, "DIV", { class: !0 }));
      var d = u(O);
      (S = F(d, te)),
        d.forEach(r),
        (oe = E(U)),
        (W = a(U, "DIV", { class: !0 }));
      var x = u(W);
      L = a(x, "I", { class: !0 });
      var re = u(L);
      (ue = F(re, N)),
        re.forEach(r),
        x.forEach(r),
        (H = E(U)),
        (X = a(U, "DIV", { class: !0 }));
      var ne = u(X);
      B = a(ne, "A", { href: !0, class: !0 });
      var q = u(B);
      (R = F(q, "Leave a review ")),
        (le = a(q, "I", { class: !0 })),
        u(le).forEach(r),
        q.forEach(r),
        ne.forEach(r),
        U.forEach(r),
        (ie = E(_)),
        _.forEach(r),
        this.h();
    },
    h() {
      e(m, "class", "img-thumbnail svelte-huu4ug"),
        _e(m.src, (j = n[4].product.image_url)) || e(m, "src", j),
        e(m, "alt", (w = n[4].product.name)),
        e(i, "href", "#"),
        e(i, "class", "svelte-huu4ug"),
        e(v, "class", "col-md-2 my-2 text-center svelte-huu4ug"),
        e(K, "class", "text-truncate svelte-huu4ug"),
        e(P, "class", "link-dark svelte-huu4ug"),
        e(P, "href", "#"),
        e(h, "class", "col svelte-huu4ug"),
        e(J, "class", "row svelte-huu4ug"),
        e(z, "class", "text-muted svelte-huu4ug"),
        e(k, "class", "col svelte-huu4ug"),
        e(Q, "class", "row svelte-huu4ug"),
        e(T, "class", "col-md-4 my-2 text-center svelte-huu4ug"),
        e(O, "class", "col-md-1 my-2 text-center fw-bold svelte-huu4ug"),
        e(L, "class", "bi bi-currency-euro svelte-huu4ug"),
        e(W, "class", "col-md-2 my-2 text-center svelte-huu4ug"),
        e(le, "class", "bi bi-pen svelte-huu4ug"),
        e(B, "href", "#"),
        e(B, "class", "svelte-huu4ug"),
        e(X, "class", "col-md-3 my-2 text-center svelte-huu4ug"),
        e(o, "class", "row d-flex align-items-center svelte-huu4ug"),
        e(c, "class", "list-group-item svelte-huu4ug");
    },
    m(f, _) {
      ge(f, c, _),
        t(c, o),
        t(o, v),
        t(v, i),
        t(i, m),
        t(o, D),
        t(o, T),
        t(T, J),
        t(J, h),
        t(h, P),
        t(P, K),
        t(K, b),
        t(T, $),
        t(T, Q),
        t(Q, k),
        t(k, z),
        t(z, M),
        t(o, V),
        t(o, O),
        t(O, S),
        t(o, oe),
        t(o, W),
        t(W, L),
        t(L, ue),
        t(o, H),
        t(o, X),
        t(X, B),
        t(B, R),
        t(B, le),
        t(c, ie);
    },
    p(f, _) {
      _ & 2 && !_e(m.src, (j = f[4].product.image_url)) && e(m, "src", j),
        _ & 2 && w !== (w = f[4].product.name) && e(m, "alt", w),
        _ & 2 && A !== (A = f[4].product.description + "") && pe(b, A),
        _ & 2 && ee !== (ee = f[4].issued_at + "") && pe(M, ee),
        _ & 2 && te !== (te = f[4].status + "") && pe(S, te),
        _ & 2 && N !== (N = f[4].price + "") && pe(ue, N);
    },
    d(f) {
      f && r(c);
    },
  };
}
function je(n) {
  let c,
    o,
    v,
    i,
    m,
    j,
    w,
    D,
    T,
    J,
    h,
    P,
    K,
    A,
    b,
    $,
    Q,
    k,
    z,
    ee,
    M,
    V,
    O,
    te,
    S,
    oe,
    W,
    L,
    N,
    ue,
    H,
    X,
    B,
    R,
    le,
    ie,
    f,
    _,
    U,
    ce,
    Z,
    se,
    G,
    ae = n[1],
    g = [];
  for (let l = 0; l < ae.length; l += 1) g[l] = Pe(Le(n, ae, l));
  const de = n[3].default,
    I = Ue(de, n, n[2], null);
  return {
    c() {
      (c = p()),
        (o = s("main")),
        (v = s("div")),
        (i = s("div")),
        (m = s("h2")),
        (j = C("Profile")),
        (w = p()),
        (D = s("img")),
        (J = p()),
        (h = s("form")),
        (P = s("input")),
        (K = p()),
        (A = s("div")),
        (b = s("input")),
        (Q = p()),
        (k = s("label")),
        (z = C("Email address")),
        (ee = p()),
        (M = s("div")),
        (V = s("input")),
        (te = p()),
        (S = s("label")),
        (oe = C("Username")),
        (W = p()),
        (L = s("div")),
        (N = s("input")),
        (ue = p()),
        (H = s("label")),
        (X = C("Password")),
        (B = p()),
        (R = s("button")),
        (le = C("Save changes")),
        (ie = p()),
        (f = s("div")),
        (_ = s("h2")),
        (U = C("Your Orders")),
        (ce = p()),
        (Z = s("ul"));
      for (let l = 0; l < g.length; l += 1) g[l].c();
      (se = p()), I && I.c(), this.h();
    },
    l(l) {
      qe('[data-svelte="svelte-h1cjtk"]', document.head).forEach(r),
        (c = E(l)),
        (o = a(l, "MAIN", { class: !0 }));
      var d = u(o);
      v = a(d, "DIV", { class: !0 });
      var x = u(v);
      i = a(x, "DIV", { class: !0 });
      var re = u(i);
      m = a(re, "H2", { class: !0 });
      var ne = u(m);
      (j = F(ne, "Profile")),
        ne.forEach(r),
        (w = E(re)),
        (D = a(re, "IMG", {
          class: !0,
          width: !0,
          height: !0,
          src: !0,
          alt: !0,
        })),
        (J = E(re)),
        (h = a(re, "FORM", { class: !0 }));
      var q = u(h);
      (P = a(q, "INPUT", { id: !0, class: !0, type: !0 })),
        (K = E(q)),
        (A = a(q, "DIV", { class: !0 }));
      var ve = u(A);
      (b = a(ve, "INPUT", { id: !0, type: !0, class: !0, placeholder: !0 })),
        (Q = E(ve)),
        (k = a(ve, "LABEL", { for: !0, class: !0 }));
      var be = u(k);
      (z = F(be, "Email address")),
        be.forEach(r),
        ve.forEach(r),
        (ee = E(q)),
        (M = a(q, "DIV", { class: !0 }));
      var he = u(M);
      (V = a(he, "INPUT", { id: !0, type: !0, class: !0, placeholder: !0 })),
        (te = E(he)),
        (S = a(he, "LABEL", { for: !0, class: !0 }));
      var Ie = u(S);
      (oe = F(Ie, "Username")),
        Ie.forEach(r),
        he.forEach(r),
        (W = E(q)),
        (L = a(q, "DIV", { class: !0 }));
      var fe = u(L);
      (N = a(fe, "INPUT", { id: !0, type: !0, class: !0, placeholder: !0 })),
        (ue = E(fe)),
        (H = a(fe, "LABEL", { for: !0, class: !0 }));
      var ye = u(H);
      (X = F(ye, "Password")),
        ye.forEach(r),
        fe.forEach(r),
        (B = E(q)),
        (R = a(q, "BUTTON", { class: !0, type: !0 }));
      var we = u(R);
      (le = F(we, "Save changes")),
        we.forEach(r),
        q.forEach(r),
        re.forEach(r),
        (ie = E(x)),
        (f = a(x, "DIV", { class: !0 }));
      var me = u(f);
      _ = a(me, "H2", { class: !0 });
      var De = u(_);
      (U = F(De, "Your Orders")),
        De.forEach(r),
        (ce = E(me)),
        (Z = a(me, "UL", { class: !0 }));
      var Ve = u(Z);
      for (let Ee = 0; Ee < g.length; Ee += 1) g[Ee].l(Ve);
      Ve.forEach(r),
        me.forEach(r),
        x.forEach(r),
        d.forEach(r),
        (se = E(l)),
        I && I.l(l),
        this.h();
    },
    h() {
      (document.title = "Profile"),
        e(m, "class", "py-4 svelte-huu4ug"),
        e(D, "class", "rounded-circle svelte-huu4ug"),
        e(D, "width", "150px"),
        e(D, "height", "150px"),
        _e(D.src, (T = n[0].avatar)) || e(D, "src", T),
        e(D, "alt", "user avatar"),
        e(P, "id", "avatar"),
        e(P, "class", "form-control my-4 svelte-huu4ug"),
        e(P, "type", "file"),
        e(b, "id", "email"),
        e(b, "type", "email"),
        e(
          b,
          "class",
          "form-control border-bottom-0 rounded-0 rounded-top svelte-huu4ug"
        ),
        (b.value = $ = n[0].email),
        e(b, "placeholder", "domain@example.com"),
        (b.required = !0),
        e(k, "for", "email"),
        e(k, "class", "svelte-huu4ug"),
        e(A, "class", "form-floating svelte-huu4ug"),
        e(V, "id", "username"),
        e(V, "type", "text"),
        (V.value = O = n[0].username),
        e(V, "class", "form-control rounded-0 svelte-huu4ug"),
        e(V, "placeholder", "username"),
        (V.required = !0),
        e(S, "for", "username"),
        e(S, "class", "svelte-huu4ug"),
        e(M, "class", "form-floating svelte-huu4ug"),
        e(N, "id", "password"),
        e(N, "type", "password"),
        e(
          N,
          "class",
          "form-control border-top-0 rounded-0 rounded-bottom svelte-huu4ug"
        ),
        e(N, "placeholder", "Password"),
        (N.required = !0),
        e(H, "for", "password"),
        e(H, "class", "svelte-huu4ug"),
        e(L, "class", "form-floating svelte-huu4ug"),
        e(R, "class", "btn btn-lg btn-warning mt-4 mb-2 w-100 svelte-huu4ug"),
        e(R, "type", "submit"),
        e(h, "class", "svelte-huu4ug"),
        e(i, "class", "col col-lg-3 text-center svelte-huu4ug"),
        e(_, "class", "text-center py-4 svelte-huu4ug"),
        e(Z, "class", "list-group svelte-huu4ug"),
        e(f, "class", "col col-lg-9 svelte-huu4ug"),
        e(v, "class", "row row-cols-1 svelte-huu4ug"),
        e(o, "class", "container svelte-huu4ug");
    },
    m(l, y) {
      ge(l, c, y),
        ge(l, o, y),
        t(o, v),
        t(v, i),
        t(i, m),
        t(m, j),
        t(i, w),
        t(i, D),
        t(i, J),
        t(i, h),
        t(h, P),
        t(h, K),
        t(h, A),
        t(A, b),
        t(A, Q),
        t(A, k),
        t(k, z),
        t(h, ee),
        t(h, M),
        t(M, V),
        t(M, te),
        t(M, S),
        t(S, oe),
        t(h, W),
        t(h, L),
        t(L, N),
        t(L, ue),
        t(L, H),
        t(H, X),
        t(h, B),
        t(h, R),
        t(R, le),
        t(v, ie),
        t(v, f),
        t(f, _),
        t(_, U),
        t(f, ce),
        t(f, Z);
      for (let d = 0; d < g.length; d += 1) g[d].m(Z, null);
      ge(l, se, y), I && I.m(l, y), (G = !0);
    },
    p(l, [y]) {
      if (
        ((!G || (y & 1 && !_e(D.src, (T = l[0].avatar)))) && e(D, "src", T),
        (!G || (y & 1 && $ !== ($ = l[0].email) && b.value !== $)) &&
          (b.value = $),
        (!G || (y & 1 && O !== (O = l[0].username) && V.value !== O)) &&
          (V.value = O),
        y & 2)
      ) {
        ae = l[1];
        let d;
        for (d = 0; d < ae.length; d += 1) {
          const x = Le(l, ae, d);
          g[d] ? g[d].p(x, y) : ((g[d] = Pe(x)), g[d].c(), g[d].m(Z, null));
        }
        for (; d < g.length; d += 1) g[d].d(1);
        g.length = ae.length;
      }
      I &&
        I.p &&
        (!G || y & 4) &&
        Te(I, de, l, l[2], G ? Oe(de, l[2], y, null) : Me(l[2]), null);
    },
    i(l) {
      G || (Se(I, l), (G = !0));
    },
    o(l) {
      Be(I, l), (G = !1);
    },
    d(l) {
      l && r(c), l && r(o), Ge(g, l), l && r(se), I && I.d(l);
    },
  };
}
async function Ye({ page: n, fetch: c, session: o, stuff: v }) {
  let i = new Array(20);
  return (
    i.fill({
      id: Y.datatype.uuid(),
      price: Y.commerce.price(),
      status: "Returned",
      issued_at: Y.date.past(),
      product: {
        id: Y.datatype.uuid(),
        name: Y.commerce.productName(),
        image_url: Y.image.technics(),
        description: Y.commerce.productDescription(),
      },
    }),
    {
      props: {
        profile: {
          id: Y.datatype.uuid(),
          email: Y.internet.email(),
          avatar: Y.image.abstract(),
          username: Y.internet.userName(),
        },
        orders: i,
      },
    }
  );
}
function He(n, c, o) {
  let { $$slots: v = {}, $$scope: i } = c,
    { profile: m } = c,
    { orders: j } = c;
  return (
    (n.$$set = (w) => {
      "profile" in w && o(0, (m = w.profile)),
        "orders" in w && o(1, (j = w.orders)),
        "$$scope" in w && o(2, (i = w.$$scope));
    }),
    [m, j, i, v]
  );
}
class Ce extends Ae {
  constructor(c) {
    super();
    ke(this, c, He, je, Ne, { profile: 0, orders: 1 });
  }
}
export { Ce as default, Ye as load };
