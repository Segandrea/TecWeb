import {
  O as Y,
  S as Pa,
  i as Ta,
  s as Ra,
  e as a,
  t as b,
  k as i,
  c as s,
  a as l,
  g as p,
  d as r,
  n as o,
  b as t,
  f as Xt,
  G as e,
  h as je,
  D as Ba,
  E as qe,
  I as Oa,
  J as Ua,
  K as Ha,
  x as ka,
  u as Ma,
  Q as Ga,
} from "../chunks/vendor-e16ff237.js";
function Sa(h, n, d) {
  const f = h.slice();
  return (f[4] = n[d]), f;
}
function Aa(h) {
  let n,
    d,
    f,
    E = h[4].username + "",
    I,
    G,
    g,
    R = h[4].review + "",
    S,
    Z,
    m,
    B,
    O,
    x,
    re,
    w,
    V,
    z,
    U,
    F,
    H;
  return {
    c() {
      (n = a("div")),
        (d = a("div")),
        (f = a("h3")),
        (I = b(E)),
        (G = i()),
        (g = a("p")),
        (S = b(R)),
        (Z = i()),
        (m = a("div")),
        (B = a("span")),
        (O = i()),
        (x = a("span")),
        (re = i()),
        (w = a("span")),
        (V = i()),
        (z = a("span")),
        (U = i()),
        (F = a("span")),
        (H = i()),
        this.h();
    },
    l(k) {
      n = s(k, "DIV", { class: !0 });
      var _ = l(n);
      d = s(_, "DIV", { class: !0 });
      var A = l(d);
      f = s(A, "H3", { class: !0 });
      var ie = l(f);
      (I = p(ie, E)), ie.forEach(r), (G = o(A)), (g = s(A, "P", { class: !0 }));
      var W = l(g);
      (S = p(W, R)), W.forEach(r), (Z = o(A)), (m = s(A, "DIV", { class: !0 }));
      var y = l(m);
      (B = s(y, "SPAN", { class: !0 })),
        l(B).forEach(r),
        (O = o(y)),
        (x = s(y, "SPAN", { class: !0 })),
        l(x).forEach(r),
        (re = o(y)),
        (w = s(y, "SPAN", { class: !0 })),
        l(w).forEach(r),
        (V = o(y)),
        (z = s(y, "SPAN", { class: !0 })),
        l(z).forEach(r),
        (U = o(y)),
        (F = s(y, "SPAN", { class: !0 })),
        l(F).forEach(r),
        y.forEach(r),
        A.forEach(r),
        (H = o(_)),
        _.forEach(r),
        this.h();
    },
    h() {
      t(f, "class", "card-title text-truncate"),
        t(g, "class", "card-text"),
        t(B, "class", "bi bi-star-fill orange"),
        t(x, "class", "bi bi-star-fill orange"),
        t(w, "class", "bi bi-star-fill orange"),
        t(z, "class", "bi bi-star"),
        t(F, "class", "bi bi-star"),
        t(m, "class", "card-subtitle mb-2 fs-6"),
        t(d, "class", "card-body"),
        t(n, "class", "col");
    },
    m(k, _) {
      Xt(k, n, _),
        e(n, d),
        e(d, f),
        e(f, I),
        e(d, G),
        e(d, g),
        e(g, S),
        e(d, Z),
        e(d, m),
        e(m, B),
        e(m, O),
        e(m, x),
        e(m, re),
        e(m, w),
        e(m, V),
        e(m, z),
        e(m, U),
        e(m, F),
        e(n, H);
    },
    p(k, _) {
      _ & 2 && E !== (E = k[4].username + "") && je(I, E),
        _ & 2 && R !== (R = k[4].review + "") && je(S, R);
    },
    d(k) {
      k && r(n);
    },
  };
}
function ja(h) {
  let n,
    d,
    f,
    E,
    I,
    G,
    g,
    R,
    S,
    Z,
    m,
    B,
    O,
    x,
    re,
    w,
    V,
    z,
    U,
    F,
    H,
    k,
    _,
    A,
    ie,
    W,
    y,
    ot,
    j,
    oe,
    dt,
    de,
    nt,
    ut,
    $,
    ne,
    xe = h[0].name + "",
    Ze,
    vt,
    L,
    ue,
    ve,
    C,
    fe,
    ft,
    ht,
    he,
    _e,
    _t,
    be,
    Le = h[0].base_price + "",
    $e,
    bt,
    pe,
    le,
    Ce = h[0].daily_price + "",
    et,
    Je,
    pt,
    Et,
    Ee,
    me,
    J,
    ge,
    mt,
    gt,
    N,
    Ke,
    It,
    Qe,
    wt,
    ze,
    Dt,
    Fe,
    Vt,
    We,
    yt,
    Ie,
    we,
    Nt,
    St,
    De,
    Ve,
    ee,
    ye,
    At,
    Pt,
    te,
    Xe,
    Tt,
    Rt,
    K,
    Bt,
    Ot,
    ae,
    Ne,
    Ut,
    Ht,
    Se,
    Ye = h[0].description + "",
    tt,
    kt,
    Mt,
    Gt,
    M,
    Ae,
    jt,
    qt,
    ce,
    xt,
    Pe,
    Te,
    q,
    Lt,
    Ct,
    Re,
    Be,
    Jt,
    at,
    P,
    Oe = h[1],
    D = [];
  for (let c = 0; c < Oe.length; c += 1) D[c] = Aa(Sa(h, Oe, c));
  const Kt = h[3].default,
    T = Ba(Kt, h, h[2], null);
  return {
    c() {
      (n = a("main")),
        (d = a("div")),
        (f = a("div")),
        (E = a("div")),
        (I = a("img")),
        (g = i()),
        (R = a("div")),
        (S = a("img")),
        (m = i()),
        (B = a("div")),
        (O = a("img")),
        (re = i()),
        (w = a("div")),
        (V = a("button")),
        (z = i()),
        (U = a("button")),
        (F = i()),
        (H = a("button")),
        (k = i()),
        (_ = a("button")),
        (A = a("span")),
        (ie = i()),
        (W = a("span")),
        (y = b("Previous")),
        (ot = i()),
        (j = a("button")),
        (oe = a("span")),
        (dt = i()),
        (de = a("span")),
        (nt = b("Next")),
        (ut = i()),
        ($ = a("div")),
        (ne = a("h2")),
        (Ze = b(xe)),
        (vt = i()),
        (L = a("div")),
        (ue = a("div")),
        (ve = a("div")),
        (C = a("div")),
        (fe = a("div")),
        (ft = b("Pricing:")),
        (ht = i()),
        (he = a("div")),
        (_e = a("small")),
        (_t = b("base: ")),
        (be = a("i")),
        ($e = b(Le)),
        (bt = i()),
        (pe = a("div")),
        (le = a("i")),
        (et = b(Ce)),
        (Je = a("sub")),
        (pt = b("/day")),
        (Et = i()),
        (Ee = a("div")),
        (me = a("div")),
        (J = a("div")),
        (ge = a("div")),
        (mt = b("Stars:")),
        (gt = i()),
        (N = a("div")),
        (Ke = a("span")),
        (It = i()),
        (Qe = a("span")),
        (wt = i()),
        (ze = a("span")),
        (Dt = i()),
        (Fe = a("span")),
        (Vt = i()),
        (We = a("span")),
        (yt = i()),
        (Ie = a("div")),
        (we = a("a")),
        (Nt = b("Reviews")),
        (St = i()),
        (De = a("div")),
        (Ve = a("div")),
        (ee = a("div")),
        (ye = a("div")),
        (At = b("Add to cart")),
        (Pt = i()),
        (te = a("button")),
        (Xe = a("i")),
        (Tt = b(`
              Rent`)),
        (Rt = i()),
        (K = a("div")),
        (Bt = a("hr")),
        (Ot = i()),
        (ae = a("div")),
        (Ne = a("h2")),
        (Ut = b("Description")),
        (Ht = i()),
        (Se = a("p")),
        (tt = b(Ye)),
        (kt = i()),
        (Mt = a("hr")),
        (Gt = i()),
        (M = a("div")),
        (Ae = a("h2")),
        (jt = b("Reviews")),
        (qt = i()),
        (ce = a("div"));
      for (let c = 0; c < D.length; c += 1) D[c].c();
      (xt = i()),
        (Pe = a("div")),
        (Te = a("div")),
        (q = a("button")),
        (Lt = b("Show more Reviews")),
        (Ct = i()),
        (Re = a("div")),
        (Be = a("a")),
        (Jt = b("Return to top")),
        (at = i()),
        T && T.c(),
        this.h();
    },
    l(c) {
      n = s(c, "MAIN", { class: !0 });
      var v = l(n);
      d = s(v, "DIV", { id: !0, class: !0, "data-bs-ride": !0 });
      var u = l(d);
      f = s(u, "DIV", { class: !0 });
      var X = l(f);
      E = s(X, "DIV", { class: !0 });
      var Yt = l(E);
      (I = s(Yt, "IMG", { class: !0, src: !0 })),
        Yt.forEach(r),
        (g = o(X)),
        (R = s(X, "DIV", { class: !0 }));
      var Zt = l(R);
      (S = s(Zt, "IMG", { class: !0, src: !0 })),
        Zt.forEach(r),
        (m = o(X)),
        (B = s(X, "DIV", { class: !0 }));
      var $t = l(B);
      (O = s($t, "IMG", { class: !0, src: !0 })),
        $t.forEach(r),
        X.forEach(r),
        (re = o(u)),
        (w = s(u, "DIV", { class: !0 }));
      var Ue = l(w);
      (V = s(Ue, "BUTTON", {
        type: !0,
        "data-bs-target": !0,
        "data-bs-slide-to": !0,
        class: !0,
        "aria-current": !0,
        "aria-label": !0,
      })),
        l(V).forEach(r),
        (z = o(Ue)),
        (U = s(Ue, "BUTTON", {
          type: !0,
          "data-bs-target": !0,
          "data-bs-slide-to": !0,
          "aria-label": !0,
        })),
        l(U).forEach(r),
        (F = o(Ue)),
        (H = s(Ue, "BUTTON", {
          type: !0,
          "data-bs-target": !0,
          "data-bs-slide-to": !0,
          "aria-label": !0,
        })),
        l(H).forEach(r),
        Ue.forEach(r),
        (k = o(u)),
        (_ = s(u, "BUTTON", {
          class: !0,
          type: !0,
          "data-bs-target": !0,
          "data-bs-slide": !0,
        }));
      var st = l(_);
      (A = s(st, "SPAN", { class: !0, "aria-hidden": !0 })),
        l(A).forEach(r),
        (ie = o(st)),
        (W = s(st, "SPAN", { class: !0 }));
      var ea = l(W);
      (y = p(ea, "Previous")),
        ea.forEach(r),
        st.forEach(r),
        (ot = o(u)),
        (j = s(u, "BUTTON", {
          class: !0,
          type: !0,
          "data-bs-target": !0,
          "data-bs-slide": !0,
        }));
      var rt = l(j);
      (oe = s(rt, "SPAN", { class: !0, "aria-hidden": !0 })),
        l(oe).forEach(r),
        (dt = o(rt)),
        (de = s(rt, "SPAN", { class: !0 }));
      var ta = l(de);
      (nt = p(ta, "Next")),
        ta.forEach(r),
        rt.forEach(r),
        u.forEach(r),
        (ut = o(v)),
        ($ = s(v, "DIV", { class: !0 }));
      var lt = l($);
      ne = s(lt, "H2", { class: !0 });
      var aa = l(ne);
      (Ze = p(aa, xe)),
        aa.forEach(r),
        (vt = o(lt)),
        (L = s(lt, "DIV", { class: !0 }));
      var He = l(L);
      ue = s(He, "DIV", { class: !0 });
      var sa = l(ue);
      ve = s(sa, "DIV", { class: !0 });
      var ra = l(ve);
      C = s(ra, "DIV", { class: !0 });
      var ke = l(C);
      fe = s(ke, "DIV", { class: !0 });
      var la = l(fe);
      (ft = p(la, "Pricing:")),
        la.forEach(r),
        (ht = o(ke)),
        (he = s(ke, "DIV", { class: !0 }));
      var ca = l(he);
      _e = s(ca, "SMALL", {});
      var Qt = l(_e);
      (_t = p(Qt, "base: ")), (be = s(Qt, "I", { class: !0 }));
      var ia = l(be);
      ($e = p(ia, Le)),
        ia.forEach(r),
        Qt.forEach(r),
        ca.forEach(r),
        (bt = o(ke)),
        (pe = s(ke, "DIV", { class: !0 }));
      var oa = l(pe);
      le = s(oa, "I", { class: !0 });
      var zt = l(le);
      (et = p(zt, Ce)), (Je = s(zt, "SUB", {}));
      var da = l(Je);
      (pt = p(da, "/day")),
        da.forEach(r),
        zt.forEach(r),
        oa.forEach(r),
        ke.forEach(r),
        ra.forEach(r),
        sa.forEach(r),
        (Et = o(He)),
        (Ee = s(He, "DIV", { class: !0 }));
      var na = l(Ee);
      me = s(na, "DIV", { class: !0 });
      var ua = l(me);
      J = s(ua, "DIV", { class: !0 });
      var Me = l(J);
      ge = s(Me, "DIV", { class: !0 });
      var va = l(ge);
      (mt = p(va, "Stars:")),
        va.forEach(r),
        (gt = o(Me)),
        (N = s(Me, "DIV", { class: !0 }));
      var Q = l(N);
      (Ke = s(Q, "SPAN", { class: !0 })),
        l(Ke).forEach(r),
        (It = o(Q)),
        (Qe = s(Q, "SPAN", { class: !0 })),
        l(Qe).forEach(r),
        (wt = o(Q)),
        (ze = s(Q, "SPAN", { class: !0 })),
        l(ze).forEach(r),
        (Dt = o(Q)),
        (Fe = s(Q, "SPAN", { class: !0 })),
        l(Fe).forEach(r),
        (Vt = o(Q)),
        (We = s(Q, "SPAN", { class: !0 })),
        l(We).forEach(r),
        Q.forEach(r),
        (yt = o(Me)),
        (Ie = s(Me, "DIV", { class: !0 }));
      var fa = l(Ie);
      we = s(fa, "A", { href: !0 });
      var ha = l(we);
      (Nt = p(ha, "Reviews")),
        ha.forEach(r),
        fa.forEach(r),
        Me.forEach(r),
        ua.forEach(r),
        na.forEach(r),
        (St = o(He)),
        (De = s(He, "DIV", { class: !0 }));
      var _a = l(De);
      Ve = s(_a, "DIV", { class: !0 });
      var ba = l(Ve);
      ee = s(ba, "DIV", { class: !0 });
      var ct = l(ee);
      ye = s(ct, "DIV", { class: !0 });
      var pa = l(ye);
      (At = p(pa, "Add to cart")),
        pa.forEach(r),
        (Pt = o(ct)),
        (te = s(ct, "BUTTON", { type: !0, class: !0 }));
      var Ft = l(te);
      (Xe = s(Ft, "I", { class: !0 })),
        l(Xe).forEach(r),
        (Tt = p(
          Ft,
          `
              Rent`
        )),
        Ft.forEach(r),
        ct.forEach(r),
        ba.forEach(r),
        _a.forEach(r),
        He.forEach(r),
        lt.forEach(r),
        (Rt = o(v)),
        (K = s(v, "DIV", { class: !0 }));
      var Ge = l(K);
      (Bt = s(Ge, "HR", {})), (Ot = o(Ge)), (ae = s(Ge, "DIV", { class: !0 }));
      var it = l(ae);
      Ne = s(it, "H2", { class: !0 });
      var Ea = l(Ne);
      (Ut = p(Ea, "Description")),
        Ea.forEach(r),
        (Ht = o(it)),
        (Se = s(it, "P", { class: !0 }));
      var ma = l(Se);
      (tt = p(ma, Ye)),
        ma.forEach(r),
        it.forEach(r),
        (kt = o(Ge)),
        (Mt = s(Ge, "HR", {})),
        Ge.forEach(r),
        (Gt = o(v)),
        (M = s(v, "DIV", { class: !0 }));
      var se = l(M);
      Ae = s(se, "H2", { id: !0 });
      var ga = l(Ae);
      (jt = p(ga, "Reviews")),
        ga.forEach(r),
        (qt = o(se)),
        (ce = s(se, "DIV", { class: !0 }));
      var Ia = l(ce);
      for (let Wt = 0; Wt < D.length; Wt += 1) D[Wt].l(Ia);
      Ia.forEach(r), (xt = o(se)), (Pe = s(se, "DIV", { class: !0 }));
      var wa = l(Pe);
      Te = s(wa, "DIV", { class: !0 });
      var Da = l(Te);
      q = s(Da, "BUTTON", {
        type: !0,
        class: !0,
        "data-bs-toggle": !0,
        "data-bs-target": !0,
        "aria-expanded": !0,
        "aria-controls": !0,
      });
      var Va = l(q);
      (Lt = p(Va, "Show more Reviews")),
        Va.forEach(r),
        Da.forEach(r),
        wa.forEach(r),
        (Ct = o(se)),
        (Re = s(se, "DIV", { class: !0 }));
      var ya = l(Re);
      Be = s(ya, "A", { href: !0 });
      var Na = l(Be);
      (Jt = p(Na, "Return to top")),
        Na.forEach(r),
        ya.forEach(r),
        se.forEach(r),
        v.forEach(r),
        (at = o(c)),
        T && T.l(c),
        this.h();
    },
    h() {
      t(I, "class", "img-fluid"),
        qe(I.src, (G = h[0].img_url)) || t(I, "src", G),
        t(E, "class", "carousel-item text-center active"),
        t(S, "class", "img-fluid"),
        qe(S.src, (Z = h[0].img_url)) || t(S, "src", Z),
        t(R, "class", "carousel-item text-center"),
        t(O, "class", "img-fluid"),
        qe(O.src, (x = h[0].img_url)) || t(O, "src", x),
        t(B, "class", "carousel-item text-center"),
        t(f, "class", "carousel-inner"),
        t(V, "type", "button"),
        t(V, "data-bs-target", "#carouselIndicators"),
        t(V, "data-bs-slide-to", "0"),
        t(V, "class", "active"),
        t(V, "aria-current", "true"),
        t(V, "aria-label", "Slide 1"),
        t(U, "type", "button"),
        t(U, "data-bs-target", "#carouselIndicators"),
        t(U, "data-bs-slide-to", "1"),
        t(U, "aria-label", "Slide 2"),
        t(H, "type", "button"),
        t(H, "data-bs-target", "#carouselIndicators"),
        t(H, "data-bs-slide-to", "2"),
        t(H, "aria-label", "Slide 3"),
        t(w, "class", "carousel-indicators"),
        t(A, "class", "carousel-control-prev-icon"),
        t(A, "aria-hidden", "true"),
        t(W, "class", "visually-hidden"),
        t(_, "class", "carousel-control-prev"),
        t(_, "type", "button"),
        t(_, "data-bs-target", "#carouselIndicators"),
        t(_, "data-bs-slide", "prev"),
        t(oe, "class", "carousel-control-next-icon"),
        t(oe, "aria-hidden", "true"),
        t(de, "class", "visually-hidden"),
        t(j, "class", "carousel-control-next"),
        t(j, "type", "button"),
        t(j, "data-bs-target", "#carouselIndicators"),
        t(j, "data-bs-slide", "next"),
        t(d, "id", "carouselIndicators"),
        t(d, "class", "carousel slide"),
        t(d, "data-bs-ride", "carousel"),
        t(ne, "class", "text-center text-decoration-underline mt-5"),
        t(fe, "class", "card-title fs-5 fw-bold"),
        t(be, "class", "bi bi-currency-euro"),
        t(he, "class", "row"),
        t(le, "class", "bi bi-currency-euro orange"),
        t(pe, "class", "row mt-1 fs-4 fw-bold"),
        t(C, "class", "card-body"),
        t(ve, "class", "card h-100 text-center"),
        t(ue, "class", "col"),
        t(ge, "class", "card-title fs-5 fw-bold"),
        t(Ke, "class", "bi bi-star-fill orange"),
        t(Qe, "class", "bi bi-star-fill orange"),
        t(ze, "class", "bi bi-star-fill orange"),
        t(Fe, "class", "bi bi-star"),
        t(We, "class", "bi bi-star"),
        t(N, "class", "card-subtitle mb-2 fs-6"),
        t(we, "href", "#reviews"),
        t(Ie, "class", "row"),
        t(J, "class", "card-body"),
        t(me, "class", "card h-100 text-center"),
        t(Ee, "class", "col"),
        t(ye, "class", "card-title fs-5 fw-bold"),
        t(Xe, "class", "bi-cart3"),
        t(te, "type", "button"),
        t(te, "class", "btn btn-warning btn-lg"),
        t(ee, "class", "card-body"),
        t(Ve, "class", "card h-100 text-center"),
        t(De, "class", "col"),
        t(L, "class", "row row-cols-1 row-cols-md-3 mt-4 g-4"),
        t($, "class", "container"),
        t(Ne, "class", "text-center"),
        t(Se, "class", "lead"),
        t(ae, "class", "row"),
        t(K, "class", "container"),
        t(Ae, "id", "reviews"),
        t(ce, "class", "row row-cols-1 row-cols-md-3"),
        t(q, "type", "button"),
        t(q, "class", "btn btn-warning"),
        t(q, "data-bs-toggle", "collapse"),
        t(q, "data-bs-target", "#hidden-row"),
        t(q, "aria-expanded", "false"),
        t(q, "aria-controls", "hidden-row"),
        t(Te, "class", "col"),
        t(Pe, "class", "row"),
        t(Be, "href", "#carouselIndicators"),
        t(Re, "class", "row mt-3"),
        t(M, "class", "container g-4 text-center"),
        t(n, "class", "container");
    },
    m(c, v) {
      Xt(c, n, v),
        e(n, d),
        e(d, f),
        e(f, E),
        e(E, I),
        e(f, g),
        e(f, R),
        e(R, S),
        e(f, m),
        e(f, B),
        e(B, O),
        e(d, re),
        e(d, w),
        e(w, V),
        e(w, z),
        e(w, U),
        e(w, F),
        e(w, H),
        e(d, k),
        e(d, _),
        e(_, A),
        e(_, ie),
        e(_, W),
        e(W, y),
        e(d, ot),
        e(d, j),
        e(j, oe),
        e(j, dt),
        e(j, de),
        e(de, nt),
        e(n, ut),
        e(n, $),
        e($, ne),
        e(ne, Ze),
        e($, vt),
        e($, L),
        e(L, ue),
        e(ue, ve),
        e(ve, C),
        e(C, fe),
        e(fe, ft),
        e(C, ht),
        e(C, he),
        e(he, _e),
        e(_e, _t),
        e(_e, be),
        e(be, $e),
        e(C, bt),
        e(C, pe),
        e(pe, le),
        e(le, et),
        e(le, Je),
        e(Je, pt),
        e(L, Et),
        e(L, Ee),
        e(Ee, me),
        e(me, J),
        e(J, ge),
        e(ge, mt),
        e(J, gt),
        e(J, N),
        e(N, Ke),
        e(N, It),
        e(N, Qe),
        e(N, wt),
        e(N, ze),
        e(N, Dt),
        e(N, Fe),
        e(N, Vt),
        e(N, We),
        e(J, yt),
        e(J, Ie),
        e(Ie, we),
        e(we, Nt),
        e(L, St),
        e(L, De),
        e(De, Ve),
        e(Ve, ee),
        e(ee, ye),
        e(ye, At),
        e(ee, Pt),
        e(ee, te),
        e(te, Xe),
        e(te, Tt),
        e(n, Rt),
        e(n, K),
        e(K, Bt),
        e(K, Ot),
        e(K, ae),
        e(ae, Ne),
        e(Ne, Ut),
        e(ae, Ht),
        e(ae, Se),
        e(Se, tt),
        e(K, kt),
        e(K, Mt),
        e(n, Gt),
        e(n, M),
        e(M, Ae),
        e(Ae, jt),
        e(M, qt),
        e(M, ce);
      for (let u = 0; u < D.length; u += 1) D[u].m(ce, null);
      e(M, xt),
        e(M, Pe),
        e(Pe, Te),
        e(Te, q),
        e(q, Lt),
        e(M, Ct),
        e(M, Re),
        e(Re, Be),
        e(Be, Jt),
        Xt(c, at, v),
        T && T.m(c, v),
        (P = !0);
    },
    p(c, [v]) {
      if (
        ((!P || (v & 1 && !qe(I.src, (G = c[0].img_url)))) && t(I, "src", G),
        (!P || (v & 1 && !qe(S.src, (Z = c[0].img_url)))) && t(S, "src", Z),
        (!P || (v & 1 && !qe(O.src, (x = c[0].img_url)))) && t(O, "src", x),
        (!P || v & 1) && xe !== (xe = c[0].name + "") && je(Ze, xe),
        (!P || v & 1) && Le !== (Le = c[0].base_price + "") && je($e, Le),
        (!P || v & 1) && Ce !== (Ce = c[0].daily_price + "") && je(et, Ce),
        (!P || v & 1) && Ye !== (Ye = c[0].description + "") && je(tt, Ye),
        v & 2)
      ) {
        Oe = c[1];
        let u;
        for (u = 0; u < Oe.length; u += 1) {
          const X = Sa(c, Oe, u);
          D[u] ? D[u].p(X, v) : ((D[u] = Aa(X)), D[u].c(), D[u].m(ce, null));
        }
        for (; u < D.length; u += 1) D[u].d(1);
        D.length = Oe.length;
      }
      T &&
        T.p &&
        (!P || v & 4) &&
        Oa(T, Kt, c, c[2], P ? Ha(Kt, c[2], v, null) : Ua(c[2]), null);
    },
    i(c) {
      P || (ka(T, c), (P = !0));
    },
    o(c) {
      Ma(T, c), (P = !1);
    },
    d(c) {
      c && r(n), Ga(D, c), c && r(at), T && T.d(c);
    },
  };
}
async function La({ page: h, fetch: n, session: d, stuff: f }) {
  let E = new Array(20);
  return (
    E.fill({
      id: Y.datatype.uuid(),
      username: Y.internet.userName(),
      review: Y.commerce.productAdjective(),
    }),
    {
      props: {
        product: {
          id: Y.datatype.uuid(),
          img_url: Y.image.technics(1200, 400),
          name: Y.commerce.productName(),
          base_price: Y.datatype.float(),
          daily_price: Y.datatype.float(),
          description: Y.commerce.productDescription(),
        },
        reviews: E,
      },
    }
  );
}
function qa(h, n, d) {
  let { $$slots: f = {}, $$scope: E } = n,
    { product: I } = n,
    { reviews: G } = n;
  return (
    (h.$$set = (g) => {
      "product" in g && d(0, (I = g.product)),
        "reviews" in g && d(1, (G = g.reviews)),
        "$$scope" in g && d(2, (E = g.$$scope));
    }),
    [I, G, E, f]
  );
}
class Ca extends Pa {
  constructor(n) {
    super();
    Ta(this, n, qa, ja, Ra, { product: 0, reviews: 1 });
  }
}
export { Ca as default, La as load };
