import {
  S as SvelteComponent,
  i as init,
  s as safe_not_equal,
  e as element,
  k as space,
  t as text,
  c as claim_element,
  a as children,
  d as detach,
  n as claim_space,
  g as claim_text,
  b as attr,
  f as insert_hydration,
  F as append_hydration,
  G as listen,
  h as set_data,
  D as create_slot,
  j as create_component,
  P as query_selector_all,
  m as claim_component,
  T as set_style,
  o as mount_component,
  W as set_input_value,
  X as prevent_default,
  H as update_slot_base,
  I as get_all_dirty_from_scope,
  J as get_slot_changes,
  x as transition_in,
  u as transition_out,
  v as destroy_component,
  Q as destroy_each,
  K as run_all,
  L as component_subscribe,
  M as binding_callbacks,
  O as noop,
  E as src_url_equal,
} from "../chunks/vendor-15d99854.js";
import {
  i as isAuth,
  p as path,
  d as datediff,
} from "../chunks/utils-af6e44bf.js";
import { A as Alert } from "../chunks/Alert-0c6938a7.js";
import { g as goto } from "../chunks/navigation-51f4a605.js";
import { p as page } from "../chunks/stores-5878e4bb.js";
import {
  g as getJSON,
  r as redirectOnStatus,
  o as onStatus,
  p as postJSON,
} from "../chunks/http-cb35e292.js";
import {
  r as rentalPeriod,
  b as cart,
  g as coupons,
  h as couponItems,
  c as cartItems,
  i as addCoupon,
  j as clearFilters,
  e as clearCoupons,
  f as clearCart,
  k as removeCoupon,
  l as removeFromCart,
} from "../chunks/stores-01e7ca86.js";
import "../chunks/paths-28a87002.js";
import "../chunks/singletons-12a22614.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let li;
  let div1;
  let div0;
  let i0;
  let t0;
  let span0;
  let t1_value = ctx[22].code + "";
  let t1;
  let t2;
  let span1;
  let i1;
  let t3_value = ctx[22].value.toFixed(2) + "";
  let t3;
  let t4;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[14](ctx[22]);
  }
  return {
    c() {
      li = element("li");
      div1 = element("div");
      div0 = element("div");
      i0 = element("i");
      t0 = space();
      span0 = element("span");
      t1 = text(t1_value);
      t2 = space();
      span1 = element("span");
      i1 = element("i");
      t3 = text(t3_value);
      t4 = space();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      div1 = claim_element(li_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      i0 = claim_element(div0_nodes, "I", { class: true });
      children(i0).forEach(detach);
      t0 = claim_space(div0_nodes);
      span0 = claim_element(div0_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, t1_value);
      span0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      span1 = claim_element(div1_nodes, "SPAN", {});
      var span1_nodes = children(span1);
      i1 = claim_element(span1_nodes, "I", { class: true });
      var i1_nodes = children(i1);
      t3 = claim_text(i1_nodes, t3_value);
      i1_nodes.forEach(detach);
      span1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t4 = claim_space(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i0, "class", "bi bi-x-circle text-danger me-2");
      attr(span0, "class", "text-info");
      attr(i1, "class", "bi bi-currency-euro black");
      attr(div1, "class", "d-flex justify-content-between");
      attr(li, "class", "list-group-item fw-bold");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, div1);
      append_hydration(div1, div0);
      append_hydration(div0, i0);
      append_hydration(div0, t0);
      append_hydration(div0, span0);
      append_hydration(span0, t1);
      append_hydration(div1, t2);
      append_hydration(div1, span1);
      append_hydration(span1, i1);
      append_hydration(i1, t3);
      append_hydration(li, t4);
      if (!mounted) {
        dispose = listen(i0, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 64 && t1_value !== (t1_value = ctx[22].code + ""))
        set_data(t1, t1_value);
      if (dirty & 64 && t3_value !== (t3_value = ctx[22].value.toFixed(2) + ""))
        set_data(t3, t3_value);
    },
    d(detaching) {
      if (detaching) detach(li);
      mounted = false;
      dispose();
    },
  };
}
function create_else_block_1(ctx) {
  let div1;
  let div0;
  let h5;
  let t0;
  let t1;
  let a;
  let t2;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      h5 = element("h5");
      t0 = text("There are no games in your cart yet \u{1F605}");
      t1 = space();
      a = element("a");
      t2 = text("Back to shopping");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h5 = claim_element(div0_nodes, "H5", { class: true });
      var h5_nodes = children(h5);
      t0 = claim_text(
        h5_nodes,
        "There are no games in your cart yet \u{1F605}"
      );
      h5_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      a = claim_element(div0_nodes, "A", { class: true, href: true });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, "Back to shopping");
      a_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h5, "class", "card-title");
      attr(a, "class", "card-link");
      attr(a, "href", path("/"));
      attr(div0, "class", "card-body");
      attr(div1, "class", "card h-100 text-center");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, h5);
      append_hydration(h5, t0);
      append_hydration(div0, t1);
      append_hydration(div0, a);
      append_hydration(a, t2);
    },
    p: noop,
    d(detaching) {
      if (detaching) detach(div1);
    },
  };
}
function create_if_block(ctx) {
  let div;
  let each_value = ctx[7];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 160) {
        each_value = ctx2[7];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching) detach(div);
      destroy_each(each_blocks, detaching);
    },
  };
}
function create_else_block(ctx) {
  let small;
  let i;
  let t_value = ctx[19].basePrice.toFixed(2) + "";
  let t;
  return {
    c() {
      small = element("small");
      i = element("i");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      small = claim_element(nodes, "SMALL", {});
      var small_nodes = children(small);
      i = claim_element(small_nodes, "I", { class: true });
      var i_nodes = children(i);
      t = claim_text(i_nodes, t_value);
      i_nodes.forEach(detach);
      small_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "bi bi-currency-euro");
    },
    m(target, anchor) {
      insert_hydration(target, small, anchor);
      append_hydration(small, i);
      append_hydration(i, t);
    },
    p(ctx2, dirty) {
      if (
        dirty & 128 &&
        t_value !== (t_value = ctx2[19].basePrice.toFixed(2) + "")
      )
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching) detach(small);
    },
  };
}
function create_if_block_1(ctx) {
  let span;
  let i0;
  let t0_value = ctx[19].basePrice.toFixed(2) + "";
  let t0;
  let t1;
  let small;
  let i1;
  let t2_value =
    Math.max(ctx[19].basePrice - ctx[19].discountPrice, 0).toFixed(2) + "";
  let t2;
  return {
    c() {
      span = element("span");
      i0 = element("i");
      t0 = text(t0_value);
      t1 = space();
      small = element("small");
      i1 = element("i");
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      i0 = claim_element(span_nodes, "I", { class: true });
      var i0_nodes = children(i0);
      t0 = claim_text(i0_nodes, t0_value);
      i0_nodes.forEach(detach);
      span_nodes.forEach(detach);
      t1 = claim_space(nodes);
      small = claim_element(nodes, "SMALL", {});
      var small_nodes = children(small);
      i1 = claim_element(small_nodes, "I", { class: true });
      var i1_nodes = children(i1);
      t2 = claim_text(i1_nodes, t2_value);
      i1_nodes.forEach(detach);
      small_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i0, "class", "bi bi-currency-euro");
      attr(
        span,
        "class",
        "badge rounded-pill bg-danger text-decoration-line-through"
      );
      attr(i1, "class", "bi bi-currency-euro");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, i0);
      append_hydration(i0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, small, anchor);
      append_hydration(small, i1);
      append_hydration(i1, t2);
    },
    p(ctx2, dirty) {
      if (
        dirty & 128 &&
        t0_value !== (t0_value = ctx2[19].basePrice.toFixed(2) + "")
      )
        set_data(t0, t0_value);
      if (
        dirty & 128 &&
        t2_value !==
          (t2_value =
            Math.max(ctx2[19].basePrice - ctx2[19].discountPrice, 0).toFixed(
              2
            ) + "")
      )
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching) detach(span);
      if (detaching) detach(t1);
      if (detaching) detach(small);
    },
  };
}
function create_each_block(ctx) {
  let div13;
  let div12;
  let a0;
  let img;
  let img_src_value;
  let img_alt_value;
  let a0_href_value;
  let t0;
  let div7;
  let h5;
  let a1;
  let t1_value = ctx[19].name + "";
  let t1;
  let a1_href_value;
  let t2;
  let h6;
  let t3_value = ctx[19].status + "";
  let t3;
  let t4;
  let div2;
  let div0;
  let t5;
  let t6;
  let div1;
  let span;
  let t7;
  let t8;
  let t9;
  let i0;
  let t10_value = ctx[19].dailyPrice.toFixed(2) + "";
  let t10;
  let t11;
  let div5;
  let div3;
  let small;
  let t12;
  let t13;
  let div4;
  let t14;
  let div6;
  let button;
  let t15;
  let t16;
  let div11;
  let div10;
  let div8;
  let t17;
  let t18;
  let div9;
  let i1;
  let t19_value =
    (
      Math.max(ctx[19].basePrice - ctx[19].discountPrice, 0) +
      ctx[5] * ctx[19].dailyPrice
    ).toFixed(2) + "";
  let t19;
  let t20;
  let mounted;
  let dispose;
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[19].discountPrice && ctx2[19].discountPrice > 0)
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  function click_handler_1() {
    return ctx[15](ctx[19]);
  }
  return {
    c() {
      div13 = element("div");
      div12 = element("div");
      a0 = element("a");
      img = element("img");
      t0 = space();
      div7 = element("div");
      h5 = element("h5");
      a1 = element("a");
      t1 = text(t1_value);
      t2 = space();
      h6 = element("h6");
      t3 = text(t3_value);
      t4 = space();
      div2 = element("div");
      div0 = element("div");
      t5 = text("Daily");
      t6 = space();
      div1 = element("div");
      span = element("span");
      t7 = text(ctx[5]);
      t8 = text(" x");
      t9 = space();
      i0 = element("i");
      t10 = text(t10_value);
      t11 = space();
      div5 = element("div");
      div3 = element("div");
      small = element("small");
      t12 = text("Base");
      t13 = space();
      div4 = element("div");
      if_block.c();
      t14 = space();
      div6 = element("div");
      button = element("button");
      t15 = text("Remove");
      t16 = space();
      div11 = element("div");
      div10 = element("div");
      div8 = element("div");
      t17 = text("Total");
      t18 = space();
      div9 = element("div");
      i1 = element("i");
      t19 = text(t19_value);
      t20 = space();
      this.h();
    },
    l(nodes) {
      div13 = claim_element(nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      div12 = claim_element(div13_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      a0 = claim_element(div12_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", {
        src: true,
        class: true,
        height: true,
        alt: true,
      });
      a0_nodes.forEach(detach);
      t0 = claim_space(div12_nodes);
      div7 = claim_element(div12_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      h5 = claim_element(div7_nodes, "H5", { class: true });
      var h5_nodes = children(h5);
      a1 = claim_element(h5_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t1 = claim_text(a1_nodes, t1_value);
      a1_nodes.forEach(detach);
      h5_nodes.forEach(detach);
      t2 = claim_space(div7_nodes);
      h6 = claim_element(div7_nodes, "H6", { class: true });
      var h6_nodes = children(h6);
      t3 = claim_text(h6_nodes, t3_value);
      h6_nodes.forEach(detach);
      t4 = claim_space(div7_nodes);
      div2 = claim_element(div7_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      t5 = claim_text(div0_nodes, "Daily");
      div0_nodes.forEach(detach);
      t6 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      span = claim_element(div1_nodes, "SPAN", {});
      var span_nodes = children(span);
      t7 = claim_text(span_nodes, ctx[5]);
      t8 = claim_text(span_nodes, " x");
      span_nodes.forEach(detach);
      t9 = claim_space(div1_nodes);
      i0 = claim_element(div1_nodes, "I", { class: true });
      var i0_nodes = children(i0);
      t10 = claim_text(i0_nodes, t10_value);
      i0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t11 = claim_space(div7_nodes);
      div5 = claim_element(div7_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div3 = claim_element(div5_nodes, "DIV", {});
      var div3_nodes = children(div3);
      small = claim_element(div3_nodes, "SMALL", {});
      var small_nodes = children(small);
      t12 = claim_text(small_nodes, "Base");
      small_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t13 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {});
      var div4_nodes = children(div4);
      if_block.l(div4_nodes);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      t14 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      button = claim_element(div6_nodes, "BUTTON", { type: true, class: true });
      var button_nodes = children(button);
      t15 = claim_text(button_nodes, "Remove");
      button_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      t16 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div8 = claim_element(div10_nodes, "DIV", {});
      var div8_nodes = children(div8);
      t17 = claim_text(div8_nodes, "Total");
      div8_nodes.forEach(detach);
      t18 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", {});
      var div9_nodes = children(div9);
      i1 = claim_element(div9_nodes, "I", { class: true });
      var i1_nodes = children(i1);
      t19 = claim_text(i1_nodes, t19_value);
      i1_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      div12_nodes.forEach(detach);
      t20 = claim_space(div13_nodes);
      div13_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, (img_src_value = ctx[19].images[0].url)))
        attr(img, "src", img_src_value);
      attr(img, "class", "card-img-top");
      attr(img, "height", "200");
      attr(img, "alt", (img_alt_value = ctx[19].name + " image"));
      attr(a0, "href", (a0_href_value = path(`/products/${ctx[19]._id}`)));
      attr(a1, "href", (a1_href_value = path(`/products/${ctx[19]._id}`)));
      attr(a1, "class", "link-dark");
      attr(h5, "class", "card-title text-truncate");
      attr(h6, "class", "card-subtitle mb-2 text-muted text-truncate");
      attr(i0, "class", "bi bi-currency-euro");
      attr(
        div2,
        "class",
        "d-flex justify-content-between orange fw-bolder fst-italic"
      );
      attr(
        div5,
        "class",
        "d-flex justify-content-between text-muted fs-6 fst-italic py-1"
      );
      attr(button, "type", "button");
      attr(button, "class", "btn btn-warning rounded-3");
      attr(div6, "class", "text-end mt-5");
      attr(div7, "class", "card-body");
      attr(i1, "class", "bi bi-currency-euro");
      attr(
        div10,
        "class",
        "d-flex justify-content-between fw-bolder fst-italic"
      );
      attr(div11, "class", "card-footer");
      attr(div12, "class", "card h-100");
      attr(div13, "class", "col");
    },
    m(target, anchor) {
      insert_hydration(target, div13, anchor);
      append_hydration(div13, div12);
      append_hydration(div12, a0);
      append_hydration(a0, img);
      append_hydration(div12, t0);
      append_hydration(div12, div7);
      append_hydration(div7, h5);
      append_hydration(h5, a1);
      append_hydration(a1, t1);
      append_hydration(div7, t2);
      append_hydration(div7, h6);
      append_hydration(h6, t3);
      append_hydration(div7, t4);
      append_hydration(div7, div2);
      append_hydration(div2, div0);
      append_hydration(div0, t5);
      append_hydration(div2, t6);
      append_hydration(div2, div1);
      append_hydration(div1, span);
      append_hydration(span, t7);
      append_hydration(span, t8);
      append_hydration(div1, t9);
      append_hydration(div1, i0);
      append_hydration(i0, t10);
      append_hydration(div7, t11);
      append_hydration(div7, div5);
      append_hydration(div5, div3);
      append_hydration(div3, small);
      append_hydration(small, t12);
      append_hydration(div5, t13);
      append_hydration(div5, div4);
      if_block.m(div4, null);
      append_hydration(div7, t14);
      append_hydration(div7, div6);
      append_hydration(div6, button);
      append_hydration(button, t15);
      append_hydration(div12, t16);
      append_hydration(div12, div11);
      append_hydration(div11, div10);
      append_hydration(div10, div8);
      append_hydration(div8, t17);
      append_hydration(div10, t18);
      append_hydration(div10, div9);
      append_hydration(div9, i1);
      append_hydration(i1, t19);
      append_hydration(div13, t20);
      if (!mounted) {
        dispose = listen(button, "click", click_handler_1);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (
        dirty & 128 &&
        !src_url_equal(img.src, (img_src_value = ctx[19].images[0].url))
      ) {
        attr(img, "src", img_src_value);
      }
      if (
        dirty & 128 &&
        img_alt_value !== (img_alt_value = ctx[19].name + " image")
      ) {
        attr(img, "alt", img_alt_value);
      }
      if (
        dirty & 128 &&
        a0_href_value !== (a0_href_value = path(`/products/${ctx[19]._id}`))
      ) {
        attr(a0, "href", a0_href_value);
      }
      if (dirty & 128 && t1_value !== (t1_value = ctx[19].name + ""))
        set_data(t1, t1_value);
      if (
        dirty & 128 &&
        a1_href_value !== (a1_href_value = path(`/products/${ctx[19]._id}`))
      ) {
        attr(a1, "href", a1_href_value);
      }
      if (dirty & 128 && t3_value !== (t3_value = ctx[19].status + ""))
        set_data(t3, t3_value);
      if (dirty & 32) set_data(t7, ctx[5]);
      if (
        dirty & 128 &&
        t10_value !== (t10_value = ctx[19].dailyPrice.toFixed(2) + "")
      )
        set_data(t10, t10_value);
      if (
        current_block_type ===
          (current_block_type = select_block_type_1(ctx)) &&
        if_block
      ) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(div4, null);
        }
      }
      if (
        dirty & 160 &&
        t19_value !==
          (t19_value =
            (
              Math.max(ctx[19].basePrice - ctx[19].discountPrice, 0) +
              ctx[5] * ctx[19].dailyPrice
            ).toFixed(2) + "")
      )
        set_data(t19, t19_value);
    },
    d(detaching) {
      if (detaching) detach(div13);
      if_block.d();
      mounted = false;
      dispose();
    },
  };
}
function create_fragment(ctx) {
  let t0;
  let main;
  let alert_1;
  let t1;
  let div13;
  let div11;
  let div1;
  let div0;
  let h2;
  let t2;
  let t3;
  let span0;
  let t4_value = ctx[7].length + "";
  let t4;
  let t5;
  let t6;
  let div4;
  let div3;
  let form0;
  let div2;
  let button0;
  let t7;
  let t8;
  let input;
  let t9;
  let h5;
  let t10;
  let t11;
  let ul;
  let t12;
  let div8;
  let div5;
  let span1;
  let t13;
  let t14;
  let span2;
  let i0;
  let t15_value = ctx[2].toFixed(2) + "";
  let t15;
  let t16;
  let div6;
  let span3;
  let t17;
  let t18;
  let span4;
  let i1;
  let t19_value = ctx[3].toFixed(2) + "";
  let t19;
  let t20;
  let div7;
  let span5;
  let t21;
  let t22;
  let span6;
  let i2;
  let t23_value = ctx[4].toFixed(2) + "";
  let t23;
  let t24;
  let div10;
  let div9;
  let hr;
  let t25;
  let form1;
  let small;
  let t26;
  let t27;
  let button1;
  let t28;
  let button1_disabled_value;
  let t29;
  let div12;
  let t30;
  let current;
  let mounted;
  let dispose;
  let alert_1_props = {};
  alert_1 = new Alert({ props: alert_1_props });
  ctx[12](alert_1);
  let each_value_1 = ctx[6];
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(
      get_each_context_1(ctx, each_value_1, i)
    );
  }
  function select_block_type(ctx2, dirty) {
    if (ctx2[7].length > 0) return create_if_block;
    return create_else_block_1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  return {
    c() {
      t0 = space();
      main = element("main");
      create_component(alert_1.$$.fragment);
      t1 = space();
      div13 = element("div");
      div11 = element("div");
      div1 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t2 = text("Summary");
      t3 = space();
      span0 = element("span");
      t4 = text(t4_value);
      t5 = text(" items");
      t6 = space();
      div4 = element("div");
      div3 = element("div");
      form0 = element("form");
      div2 = element("div");
      button0 = element("button");
      t7 = text("+");
      t8 = space();
      input = element("input");
      t9 = space();
      h5 = element("h5");
      t10 = text("Coupon codes");
      t11 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t12 = space();
      div8 = element("div");
      div5 = element("div");
      span1 = element("span");
      t13 = text("Subtotal");
      t14 = space();
      span2 = element("span");
      i0 = element("i");
      t15 = text(t15_value);
      t16 = space();
      div6 = element("div");
      span3 = element("span");
      t17 = text("Coupon");
      t18 = space();
      span4 = element("span");
      i1 = element("i");
      t19 = text(t19_value);
      t20 = space();
      div7 = element("div");
      span5 = element("span");
      t21 = text("Total");
      t22 = space();
      span6 = element("span");
      i2 = element("i");
      t23 = text(t23_value);
      t24 = space();
      div10 = element("div");
      div9 = element("div");
      hr = element("hr");
      t25 = space();
      form1 = element("form");
      small = element("small");
      t26 = text("* Charges may be applied");
      t27 = space();
      button1 = element("button");
      t28 = text("Checkout");
      t29 = space();
      div12 = element("div");
      if_block.c();
      t30 = space();
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all(
        '[data-svelte="svelte-ktpcnj"]',
        document.head
      );
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      claim_component(alert_1.$$.fragment, main_nodes);
      t1 = claim_space(main_nodes);
      div13 = claim_element(main_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      div11 = claim_element(div13_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div1 = claim_element(div11_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {});
      var h2_nodes = children(h2);
      t2 = claim_text(h2_nodes, "Summary");
      h2_nodes.forEach(detach);
      t3 = claim_space(div0_nodes);
      span0 = claim_element(div0_nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t4 = claim_text(span0_nodes, t4_value);
      t5 = claim_text(span0_nodes, " items");
      span0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t6 = claim_space(div11_nodes);
      div4 = claim_element(div11_nodes, "DIV", { class: true, style: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      form0 = claim_element(div3_nodes, "FORM", {});
      var form0_nodes = children(form0);
      div2 = claim_element(form0_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      button0 = claim_element(div2_nodes, "BUTTON", {
        class: true,
        type: true,
        id: true,
      });
      var button0_nodes = children(button0);
      t7 = claim_text(button0_nodes, "+");
      button0_nodes.forEach(detach);
      t8 = claim_space(div2_nodes);
      input = claim_element(div2_nodes, "INPUT", {
        type: true,
        class: true,
        placeholder: true,
        "aria-label": true,
        "aria-describedby": true,
      });
      div2_nodes.forEach(detach);
      form0_nodes.forEach(detach);
      t9 = claim_space(div3_nodes);
      h5 = claim_element(div3_nodes, "H5", { class: true });
      var h5_nodes = children(h5);
      t10 = claim_text(h5_nodes, "Coupon codes");
      h5_nodes.forEach(detach);
      t11 = claim_space(div3_nodes);
      ul = claim_element(div3_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t12 = claim_space(div11_nodes);
      div8 = claim_element(div11_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      div5 = claim_element(div8_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      span1 = claim_element(div5_nodes, "SPAN", {});
      var span1_nodes = children(span1);
      t13 = claim_text(span1_nodes, "Subtotal");
      span1_nodes.forEach(detach);
      t14 = claim_space(div5_nodes);
      span2 = claim_element(div5_nodes, "SPAN", {});
      var span2_nodes = children(span2);
      i0 = claim_element(span2_nodes, "I", { class: true });
      var i0_nodes = children(i0);
      t15 = claim_text(i0_nodes, t15_value);
      i0_nodes.forEach(detach);
      span2_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      t16 = claim_space(div8_nodes);
      div6 = claim_element(div8_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      span3 = claim_element(div6_nodes, "SPAN", {});
      var span3_nodes = children(span3);
      t17 = claim_text(span3_nodes, "Coupon");
      span3_nodes.forEach(detach);
      t18 = claim_space(div6_nodes);
      span4 = claim_element(div6_nodes, "SPAN", {});
      var span4_nodes = children(span4);
      i1 = claim_element(span4_nodes, "I", { class: true });
      var i1_nodes = children(i1);
      t19 = claim_text(i1_nodes, t19_value);
      i1_nodes.forEach(detach);
      span4_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      t20 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      span5 = claim_element(div7_nodes, "SPAN", {});
      var span5_nodes = children(span5);
      t21 = claim_text(span5_nodes, "Total");
      span5_nodes.forEach(detach);
      t22 = claim_space(div7_nodes);
      span6 = claim_element(div7_nodes, "SPAN", {});
      var span6_nodes = children(span6);
      i2 = claim_element(span6_nodes, "I", { class: true });
      var i2_nodes = children(i2);
      t23 = claim_text(i2_nodes, t23_value);
      i2_nodes.forEach(detach);
      span6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      div8_nodes.forEach(detach);
      t24 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      hr = claim_element(div9_nodes, "HR", {});
      t25 = claim_space(div9_nodes);
      form1 = claim_element(div9_nodes, "FORM", {});
      var form1_nodes = children(form1);
      small = claim_element(form1_nodes, "SMALL", { class: true });
      var small_nodes = children(small);
      t26 = claim_text(small_nodes, "* Charges may be applied");
      small_nodes.forEach(detach);
      t27 = claim_space(form1_nodes);
      button1 = claim_element(form1_nodes, "BUTTON", {
        type: true,
        class: true,
      });
      var button1_nodes = children(button1);
      t28 = claim_text(button1_nodes, "Checkout");
      button1_nodes.forEach(detach);
      form1_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      t29 = claim_space(div13_nodes);
      div12 = claim_element(div13_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      if_block.l(div12_nodes);
      div12_nodes.forEach(detach);
      div13_nodes.forEach(detach);
      main_nodes.forEach(detach);
      t30 = claim_space(nodes);
      if (default_slot) default_slot.l(nodes);
      this.h();
    },
    h() {
      document.title = "Cart";
      attr(
        div0,
        "class",
        "col d-flex align-items-center justify-content-between"
      );
      attr(div1, "class", "row");
      attr(button0, "class", "btn btn-info");
      attr(button0, "type", "submit");
      attr(button0, "id", "addCoupon");
      attr(input, "type", "text");
      attr(input, "class", "form-control");
      attr(input, "placeholder", "Coupon code");
      attr(input, "aria-label", "Enter coupon code");
      attr(input, "aria-describedby", "addCoupon");
      attr(div2, "class", "input-group");
      attr(h5, "class", "my-2");
      attr(ul, "class", "list-group mb-2");
      attr(div3, "class", "col");
      attr(div4, "class", "row");
      set_style(div4, "min-height", "28vh");
      attr(i0, "class", "bi bi-currency-euro black");
      attr(
        div5,
        "class",
        "col d-flex justify-content-between fst-italic text-muted"
      );
      attr(i1, "class", "bi bi-currency-euro black");
      attr(
        div6,
        "class",
        "col d-flex justify-content-between fst-italic text-muted"
      );
      attr(i2, "class", "bi bi-currency-euro black");
      attr(
        div7,
        "class",
        "col d-flex justify-content-between fw-bold fst-italic"
      );
      attr(div8, "class", "row row-cols-1");
      attr(small, "class", "text-muted ");
      attr(button1, "type", "submit");
      attr(button1, "class", "btn btn-warning btn-lg w-100 mt-2");
      button1.disabled = button1_disabled_value = ctx[7].length <= 0;
      attr(div9, "class", "col");
      attr(div10, "class", "row");
      attr(div11, "class", "col-lg-3");
      attr(div12, "class", "col-lg-9");
      attr(div13, "class", "row g-4");
      attr(main, "class", "container w-100 h-100");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, main, anchor);
      mount_component(alert_1, main, null);
      append_hydration(main, t1);
      append_hydration(main, div13);
      append_hydration(div13, div11);
      append_hydration(div11, div1);
      append_hydration(div1, div0);
      append_hydration(div0, h2);
      append_hydration(h2, t2);
      append_hydration(div0, t3);
      append_hydration(div0, span0);
      append_hydration(span0, t4);
      append_hydration(span0, t5);
      append_hydration(div11, t6);
      append_hydration(div11, div4);
      append_hydration(div4, div3);
      append_hydration(div3, form0);
      append_hydration(form0, div2);
      append_hydration(div2, button0);
      append_hydration(button0, t7);
      append_hydration(div2, t8);
      append_hydration(div2, input);
      set_input_value(input, ctx[1]);
      append_hydration(div3, t9);
      append_hydration(div3, h5);
      append_hydration(h5, t10);
      append_hydration(div3, t11);
      append_hydration(div3, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      append_hydration(div11, t12);
      append_hydration(div11, div8);
      append_hydration(div8, div5);
      append_hydration(div5, span1);
      append_hydration(span1, t13);
      append_hydration(div5, t14);
      append_hydration(div5, span2);
      append_hydration(span2, i0);
      append_hydration(i0, t15);
      append_hydration(div8, t16);
      append_hydration(div8, div6);
      append_hydration(div6, span3);
      append_hydration(span3, t17);
      append_hydration(div6, t18);
      append_hydration(div6, span4);
      append_hydration(span4, i1);
      append_hydration(i1, t19);
      append_hydration(div8, t20);
      append_hydration(div8, div7);
      append_hydration(div7, span5);
      append_hydration(span5, t21);
      append_hydration(div7, t22);
      append_hydration(div7, span6);
      append_hydration(span6, i2);
      append_hydration(i2, t23);
      append_hydration(div11, t24);
      append_hydration(div11, div10);
      append_hydration(div10, div9);
      append_hydration(div9, hr);
      append_hydration(div9, t25);
      append_hydration(div9, form1);
      append_hydration(form1, small);
      append_hydration(small, t26);
      append_hydration(form1, t27);
      append_hydration(form1, button1);
      append_hydration(button1, t28);
      append_hydration(div13, t29);
      append_hydration(div13, div12);
      if_block.m(div12, null);
      insert_hydration(target, t30, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[13]),
          listen(form0, "submit", prevent_default(ctx[8])),
          listen(form1, "submit", prevent_default(ctx[9])),
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const alert_1_changes = {};
      alert_1.$set(alert_1_changes);
      if (
        (!current || dirty & 128) &&
        t4_value !== (t4_value = ctx2[7].length + "")
      )
        set_data(t4, t4_value);
      if (dirty & 2 && input.value !== ctx2[1]) {
        set_input_value(input, ctx2[1]);
      }
      if (dirty & 64) {
        each_value_1 = ctx2[6];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
      if (
        (!current || dirty & 4) &&
        t15_value !== (t15_value = ctx2[2].toFixed(2) + "")
      )
        set_data(t15, t15_value);
      if (
        (!current || dirty & 8) &&
        t19_value !== (t19_value = ctx2[3].toFixed(2) + "")
      )
        set_data(t19, t19_value);
      if (
        (!current || dirty & 16) &&
        t23_value !== (t23_value = ctx2[4].toFixed(2) + "")
      )
        set_data(t23, t23_value);
      if (
        !current ||
        (dirty & 128 &&
          button1_disabled_value !==
            (button1_disabled_value = ctx2[7].length <= 0))
      ) {
        button1.disabled = button1_disabled_value;
      }
      if (
        current_block_type === (current_block_type = select_block_type(ctx2)) &&
        if_block
      ) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div12, null);
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[10],
            !current
              ? get_all_dirty_from_scope(ctx2[10])
              : get_slot_changes(default_slot_template, ctx2[10], dirty, null),
            null
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(alert_1.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(alert_1.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(t0);
      if (detaching) detach(main);
      ctx[12](null);
      destroy_component(alert_1);
      destroy_each(each_blocks, detaching);
      if_block.d();
      if (detaching) detach(t30);
      if (default_slot) default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    },
  };
}
function load({ page: page2 }) {
  return isAuth()
    ? {}
    : {
        status: 302,
        redirect: path("/signin", {
          returnTo: path(page2.path),
          required: true,
        }),
      };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  let $rentalPeriod;
  let $couponItems;
  let $cartItems;
  component_subscribe($$self, page, ($$value) =>
    $$invalidate(16, ($page = $$value))
  );
  component_subscribe($$self, rentalPeriod, ($$value) =>
    $$invalidate(17, ($rentalPeriod = $$value))
  );
  component_subscribe($$self, couponItems, ($$value) =>
    $$invalidate(6, ($couponItems = $$value))
  );
  component_subscribe($$self, cartItems, ($$value) =>
    $$invalidate(7, ($cartItems = $$value))
  );
  let { $$slots: slots = {}, $$scope } = $$props;
  let alert;
  let couponCode;
  let subtotalPrice = 0;
  let couponPrice = 0;
  let totalPrice = 0;
  let days = 0;
  rentalPeriod.subscribe((range) => {
    $$invalidate(
      5,
      (days = range.length === 2 ? datediff(range[0], range[1]) : 0)
    );
    computePrices(days, $cartItems, $couponItems);
  });
  cart.subscribe((cart2) => {
    computePrices(days, Object.values(cart2), $couponItems);
  });
  coupons.subscribe((coupons2) => {
    computePrices(days, $cartItems, Object.values(coupons2));
  });
  function computePrices(days2, products, coupons2) {
    $$invalidate(
      2,
      (subtotalPrice = products
        .map(
          (product) =>
            Math.max(product.basePrice - product.discountPrice, 0) +
            product.dailyPrice * days2
        )
        .reduce((acc, val) => acc + val, 0))
    );
    $$invalidate(
      3,
      (couponPrice = coupons2
        .map((coupon) => coupon.value)
        .reduce((acc, val) => acc + val, 0))
    );
    $$invalidate(4, (totalPrice = Math.max(subtotalPrice - couponPrice, 0)));
  }
  function fetchCoupon() {
    getJSON(`/api/store/coupons/${couponCode}`)
      .then(addCoupon)
      .catch(
        redirectOnStatus(
          401,
          goto,
          path("/signin", {
            returnTo: path($page.path),
            required: true,
          })
        )
      )
      .catch(
        onStatus(404, () => alert.error(`Unknown coupon code: ${couponCode}`))
      )
      .catch((err) => {
        console.error(err);
        alert.error("Something went wrong");
      })
      .finally(() => $$invalidate(1, (couponCode = "")));
  }
  function createOrder() {
    if ($rentalPeriod.length !== 2) {
      alert.error("Please, specify a valid rental period");
      return;
    }
    postJSON("/api/store/orders", {
      products: $cartItems.map((p) => p._id),
      coupons: $couponItems.map((c) => c._id),
      startDate: $rentalPeriod[0],
      endDate: $rentalPeriod[1],
    })
      .then(() => {
        alert.info("Success");
        clearFilters();
        clearCoupons();
        clearCart();
      })
      .catch(
        redirectOnStatus(
          401,
          goto,
          path("/signin", {
            returnTo: path($page.path),
            required: true,
          })
        )
      )
      .catch((err) => {
        console.error(err);
        alert.error("Something went wrong");
      });
  }
  function alert_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      alert = $$value;
      $$invalidate(0, alert);
    });
  }
  function input_input_handler() {
    couponCode = this.value;
    $$invalidate(1, couponCode);
  }
  const click_handler = (coupon) => removeCoupon(coupon);
  const click_handler_1 = (product) => removeFromCart(product);
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2) $$invalidate(10, ($$scope = $$props2.$$scope));
  };
  return [
    alert,
    couponCode,
    subtotalPrice,
    couponPrice,
    totalPrice,
    days,
    $couponItems,
    $cartItems,
    fetchCoupon,
    createOrder,
    $$scope,
    slots,
    alert_1_binding,
    input_input_handler,
    click_handler,
    click_handler_1,
  ];
}
class Cart extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Cart as default, load };
