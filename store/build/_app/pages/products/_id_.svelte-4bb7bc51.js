import {
  S as SvelteComponent,
  i as init,
  s as safe_not_equal,
  e as element,
  k as space,
  c as claim_element,
  a as children,
  n as claim_space,
  d as detach,
  E as src_url_equal,
  b as attr,
  V as toggle_class,
  f as insert_hydration,
  F as append_hydration,
  U as StarRating,
  t as text,
  g as claim_text,
  x as transition_in,
  j as create_component,
  m as claim_component,
  o as mount_component,
  h as set_data,
  u as transition_out,
  v as destroy_component,
  w as check_outros,
  Q as destroy_each,
  D as create_slot,
  H as update_slot_base,
  I as get_all_dirty_from_scope,
  J as get_slot_changes,
  L as component_subscribe,
  r as group_outros,
  G as listen,
} from "../../chunks/vendor-15d99854.js";
import { p as path, i as isAuth } from "../../chunks/utils-af6e44bf.js";
import { g as getJSON, o as onStatus } from "../../chunks/http-cb35e292.js";
import { b as cart, d as addToCart } from "../../chunks/stores-01e7ca86.js";
import { p as page } from "../../chunks/stores-5878e4bb.js";
import "../../chunks/paths-28a87002.js";
var _id__svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  child_ctx[11] = i;
  return child_ctx;
}
function create_each_block_1(ctx) {
  let div;
  let img;
  let img_src_value;
  let img_alt_value;
  let t;
  return {
    c() {
      div = element("div");
      img = element("img");
      t = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      img = claim_element(div_nodes, "IMG", {
        src: true,
        class: true,
        alt: true,
      });
      t = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, (img_src_value = ctx[9].url)))
        attr(img, "src", img_src_value);
      attr(img, "class", "d-block m-auto h-100");
      attr(img, "alt", (img_alt_value = `${ctx[0].name} image ${ctx[11]}`));
      attr(div, "class", "carousel-item h-100");
      toggle_class(div, "active", ctx[11] === 0);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, img);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && !src_url_equal(img.src, (img_src_value = ctx2[9].url))) {
        attr(img, "src", img_src_value);
      }
      if (
        dirty & 1 &&
        img_alt_value !== (img_alt_value = `${ctx2[0].name} image ${ctx2[11]}`)
      ) {
        attr(img, "alt", img_alt_value);
      }
    },
    d(detaching) {
      if (detaching) detach(div);
    },
  };
}
function create_else_block_1(ctx) {
  let a;
  let t;
  let a_href_value;
  return {
    c() {
      a = element("a");
      t = text("Add to cart");
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true, class: true, role: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "Add to cart");
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        a,
        "href",
        (a_href_value = path("/signin", {
          returnTo: path(ctx[2].path),
          required: true,
        }))
      );
      attr(a, "class", "btn btn-warning rounded-3");
      attr(a, "role", "button");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t);
    },
    p(ctx2, dirty) {
      if (
        dirty & 4 &&
        a_href_value !==
          (a_href_value = path("/signin", {
            returnTo: path(ctx2[2].path),
            required: true,
          }))
      ) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching) detach(a);
    },
  };
}
function create_if_block_2(ctx) {
  let button;
  let t;
  let button_disabled_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text("Add to cart");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true, class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Add to cart");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "type", "button");
      attr(button, "class", "btn btn-warning rounded-3");
      button.disabled = button_disabled_value = ctx[0]._id in ctx[1];
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", ctx[5]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (
        dirty & 3 &&
        button_disabled_value !==
          (button_disabled_value = ctx2[0]._id in ctx2[1])
      ) {
        button.disabled = button_disabled_value;
      }
    },
    d(detaching) {
      if (detaching) detach(button);
      mounted = false;
      dispose();
    },
  };
}
function create_else_block(ctx) {
  let i;
  let t_value = ctx[0].basePrice.toFixed(2) + "";
  let t;
  return {
    c() {
      i = element("i");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      i = claim_element(nodes, "I", { class: true });
      var i_nodes = children(i);
      t = claim_text(i_nodes, t_value);
      i_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "bi bi-currency-euro");
    },
    m(target, anchor) {
      insert_hydration(target, i, anchor);
      append_hydration(i, t);
    },
    p(ctx2, dirty) {
      if (
        dirty & 1 &&
        t_value !== (t_value = ctx2[0].basePrice.toFixed(2) + "")
      )
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching) detach(i);
    },
  };
}
function create_if_block_1(ctx) {
  let i0;
  let t0_value =
    (ctx[0].basePrice > ctx[0].discountPrice
      ? (ctx[0].basePrice - ctx[0].discountPrice).toFixed(2)
      : 0) + "";
  let t0;
  let t1;
  let i1;
  let t2_value = ctx[0].basePrice.toFixed(2) + "";
  let t2;
  return {
    c() {
      i0 = element("i");
      t0 = text(t0_value);
      t1 = space();
      i1 = element("i");
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      i0 = claim_element(nodes, "I", { class: true });
      var i0_nodes = children(i0);
      t0 = claim_text(i0_nodes, t0_value);
      i0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      i1 = claim_element(nodes, "I", { class: true });
      var i1_nodes = children(i1);
      t2 = claim_text(i1_nodes, t2_value);
      i1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i0, "class", "bi bi-currency-euro text-success");
      attr(
        i1,
        "class",
        "bi bi-currency-euro text-decoration-line-through text-danger"
      );
    },
    m(target, anchor) {
      insert_hydration(target, i0, anchor);
      append_hydration(i0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, i1, anchor);
      append_hydration(i1, t2);
    },
    p(ctx2, dirty) {
      if (
        dirty & 1 &&
        t0_value !==
          (t0_value =
            (ctx2[0].basePrice > ctx2[0].discountPrice
              ? (ctx2[0].basePrice - ctx2[0].discountPrice).toFixed(2)
              : 0) + "")
      )
        set_data(t0, t0_value);
      if (
        dirty & 1 &&
        t2_value !== (t2_value = ctx2[0].basePrice.toFixed(2) + "")
      )
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching) detach(i0);
      if (detaching) detach(t1);
      if (detaching) detach(i1);
    },
  };
}
function create_if_block(ctx) {
  let div2;
  let h2;
  let t0;
  let t1;
  let div0;
  let t2;
  let div1;
  let a;
  let t3;
  let current;
  let each_value = ctx[0].reviews;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) =>
    transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
  return {
    c() {
      div2 = element("div");
      h2 = element("h2");
      t0 = text("Reviews");
      t1 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      div1 = element("div");
      a = element("a");
      t3 = text("Back to top");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h2 = claim_element(div2_nodes, "H2", {});
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Reviews");
      h2_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a = claim_element(div1_nodes, "A", { href: true });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "Back to top");
      a_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "row row-cols-1 row-cols-md-3");
      attr(a, "href", "#carouselControls");
      attr(div1, "class", "row mt-4 d-md-none");
      attr(div2, "class", "row g-4 text-center");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, h2);
      append_hydration(h2, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      append_hydration(div2, t2);
      append_hydration(div2, div1);
      append_hydration(div1, a);
      append_hydration(a, t3);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value = ctx2[0].reviews;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) detach(div2);
      destroy_each(each_blocks, detaching);
    },
  };
}
function create_each_block(ctx) {
  let div2;
  let div1;
  let h3;
  let t0_value = ctx[6].username + "";
  let t0;
  let t1;
  let div0;
  let starrating;
  let t2;
  let p;
  let t3_value = ctx[6].content + "";
  let t3;
  let t4;
  let current;
  starrating = new StarRating({
    props: {
      rating: ctx[6].rating,
      config: {
        emptyColor: "rgba(127, 127, 127, 0.1)",
        size: 16,
      },
    },
  });
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = space();
      div0 = element("div");
      create_component(starrating.$$.fragment);
      t2 = space();
      p = element("p");
      t3 = text(t3_value);
      t4 = space();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h3 = claim_element(div1_nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, t0_value);
      h3_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(starrating.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      p = claim_element(div1_nodes, "P", { class: true });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, t3_value);
      p_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", "card-title");
      attr(
        div0,
        "class",
        "card-subtitle d-flex justify-content-center mt-2 mb-1 fs-6"
      );
      attr(p, "class", "card-text");
      attr(div1, "class", "card-body");
      attr(div2, "class", "col");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, h3);
      append_hydration(h3, t0);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      mount_component(starrating, div0, null);
      append_hydration(div1, t2);
      append_hydration(div1, p);
      append_hydration(p, t3);
      append_hydration(div2, t4);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        (!current || dirty & 1) &&
        t0_value !== (t0_value = ctx2[6].username + "")
      )
        set_data(t0, t0_value);
      const starrating_changes = {};
      if (dirty & 1) starrating_changes.rating = ctx2[6].rating;
      starrating.$set(starrating_changes);
      if (
        (!current || dirty & 1) &&
        t3_value !== (t3_value = ctx2[6].content + "")
      )
        set_data(t3, t3_value);
    },
    i(local) {
      if (current) return;
      transition_in(starrating.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(starrating.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(div2);
      destroy_component(starrating);
    },
  };
}
function create_fragment(ctx) {
  let main;
  let div1;
  let div0;
  let t0;
  let button0;
  let span0;
  let t1;
  let span1;
  let t2;
  let t3;
  let button1;
  let span2;
  let t4;
  let span3;
  let t5;
  let t6;
  let h20;
  let t7_value = ctx[0].name + "";
  let t7;
  let t8;
  let div2;
  let small0;
  let t9_value = ctx[0].status + "";
  let t9;
  let t10;
  let div18;
  let div8;
  let div7;
  let div6;
  let div3;
  let t11;
  let t12;
  let div4;
  let starrating;
  let t13;
  let div5;
  let a;
  let t14;
  let a_href_value;
  let t15;
  let div11;
  let div10;
  let div9;
  let t16;
  let div17;
  let div16;
  let div15;
  let div12;
  let t17;
  let t18;
  let div13;
  let span4;
  let i;
  let t19_value = ctx[0].dailyPrice.toFixed(2) + "";
  let t19;
  let small1;
  let sub0;
  let t20;
  let t21;
  let div14;
  let small2;
  let sub1;
  let t22;
  let t23;
  let div19;
  let h21;
  let t24;
  let t25;
  let p;
  let t26_value = ctx[0].description + "";
  let t26;
  let t27;
  let t28;
  let current;
  let each_value_1 = ctx[0].images;
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value_1.length; i2 += 1) {
    each_blocks[i2] = create_each_block_1(
      get_each_context_1(ctx, each_value_1, i2)
    );
  }
  starrating = new StarRating({
    props: {
      rating: ctx[0].rating,
      config: {
        emptyColor: "rgba(127, 127, 127, 0.1)",
        size: 16,
      },
    },
  });
  function select_block_type(ctx2, dirty) {
    if (isAuth()) return create_if_block_2;
    return create_else_block_1;
  }
  let current_block_type = select_block_type();
  let if_block0 = current_block_type(ctx);
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[0].discountPrice && ctx2[0].discountPrice > 0)
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type_1 = select_block_type_1(ctx);
  let if_block1 = current_block_type_1(ctx);
  let if_block2 =
    ctx[0].reviews && ctx[0].reviews.length > 0 && create_if_block(ctx);
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  return {
    c() {
      main = element("main");
      div1 = element("div");
      div0 = element("div");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      t0 = space();
      button0 = element("button");
      span0 = element("span");
      t1 = space();
      span1 = element("span");
      t2 = text("Previous");
      t3 = space();
      button1 = element("button");
      span2 = element("span");
      t4 = space();
      span3 = element("span");
      t5 = text("Next");
      t6 = space();
      h20 = element("h2");
      t7 = text(t7_value);
      t8 = space();
      div2 = element("div");
      small0 = element("small");
      t9 = text(t9_value);
      t10 = space();
      div18 = element("div");
      div8 = element("div");
      div7 = element("div");
      div6 = element("div");
      div3 = element("div");
      t11 = text("Rating");
      t12 = space();
      div4 = element("div");
      create_component(starrating.$$.fragment);
      t13 = space();
      div5 = element("div");
      a = element("a");
      t14 = text("leave a review");
      t15 = space();
      div11 = element("div");
      div10 = element("div");
      div9 = element("div");
      if_block0.c();
      t16 = space();
      div17 = element("div");
      div16 = element("div");
      div15 = element("div");
      div12 = element("div");
      t17 = text("Pricing");
      t18 = space();
      div13 = element("div");
      span4 = element("span");
      i = element("i");
      t19 = text(t19_value);
      small1 = element("small");
      sub0 = element("sub");
      t20 = text("/daily");
      t21 = space();
      div14 = element("div");
      small2 = element("small");
      if_block1.c();
      sub1 = element("sub");
      t22 = text("/base");
      t23 = space();
      div19 = element("div");
      h21 = element("h2");
      t24 = text("Description");
      t25 = space();
      p = element("p");
      t26 = text(t26_value);
      t27 = space();
      if (if_block2) if_block2.c();
      t28 = space();
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      div1 = claim_element(main_nodes, "DIV", {
        id: true,
        class: true,
        "data-bs-touch": true,
        "data-bs-interval": true,
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      button0 = claim_element(div1_nodes, "BUTTON", {
        class: true,
        type: true,
        "data-bs-target": true,
        "data-bs-slide": true,
      });
      var button0_nodes = children(button0);
      span0 = claim_element(button0_nodes, "SPAN", {
        class: true,
        "aria-hidden": true,
      });
      children(span0).forEach(detach);
      t1 = claim_space(button0_nodes);
      span1 = claim_element(button0_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, "Previous");
      span1_nodes.forEach(detach);
      button0_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      button1 = claim_element(div1_nodes, "BUTTON", {
        class: true,
        type: true,
        "data-bs-target": true,
        "data-bs-slide": true,
      });
      var button1_nodes = children(button1);
      span2 = claim_element(button1_nodes, "SPAN", {
        class: true,
        "aria-hidden": true,
      });
      children(span2).forEach(detach);
      t4 = claim_space(button1_nodes);
      span3 = claim_element(button1_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      t5 = claim_text(span3_nodes, "Next");
      span3_nodes.forEach(detach);
      button1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t6 = claim_space(main_nodes);
      h20 = claim_element(main_nodes, "H2", { class: true });
      var h20_nodes = children(h20);
      t7 = claim_text(h20_nodes, t7_value);
      h20_nodes.forEach(detach);
      t8 = claim_space(main_nodes);
      div2 = claim_element(main_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      small0 = claim_element(div2_nodes, "SMALL", {});
      var small0_nodes = children(small0);
      t9 = claim_text(small0_nodes, t9_value);
      small0_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t10 = claim_space(main_nodes);
      div18 = claim_element(main_nodes, "DIV", { class: true });
      var div18_nodes = children(div18);
      div8 = claim_element(div18_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      div7 = claim_element(div8_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div3 = claim_element(div6_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t11 = claim_text(div3_nodes, "Rating");
      div3_nodes.forEach(detach);
      t12 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      claim_component(starrating.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach);
      t13 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      a = claim_element(div5_nodes, "A", { href: true });
      var a_nodes = children(a);
      t14 = claim_text(a_nodes, "leave a review");
      a_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      div8_nodes.forEach(detach);
      t15 = claim_space(div18_nodes);
      div11 = claim_element(div18_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      if_block0.l(div9_nodes);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      t16 = claim_space(div18_nodes);
      div17 = claim_element(div18_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      div16 = claim_element(div17_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      div15 = claim_element(div16_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      div12 = claim_element(div15_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      t17 = claim_text(div12_nodes, "Pricing");
      div12_nodes.forEach(detach);
      t18 = claim_space(div15_nodes);
      div13 = claim_element(div15_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      span4 = claim_element(div13_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      i = claim_element(span4_nodes, "I", { class: true });
      var i_nodes = children(i);
      t19 = claim_text(i_nodes, t19_value);
      i_nodes.forEach(detach);
      small1 = claim_element(span4_nodes, "SMALL", {});
      var small1_nodes = children(small1);
      sub0 = claim_element(small1_nodes, "SUB", {});
      var sub0_nodes = children(sub0);
      t20 = claim_text(sub0_nodes, "/daily");
      sub0_nodes.forEach(detach);
      small1_nodes.forEach(detach);
      span4_nodes.forEach(detach);
      div13_nodes.forEach(detach);
      t21 = claim_space(div15_nodes);
      div14 = claim_element(div15_nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      small2 = claim_element(div14_nodes, "SMALL", { class: true });
      var small2_nodes = children(small2);
      if_block1.l(small2_nodes);
      sub1 = claim_element(small2_nodes, "SUB", {});
      var sub1_nodes = children(sub1);
      t22 = claim_text(sub1_nodes, "/base");
      sub1_nodes.forEach(detach);
      small2_nodes.forEach(detach);
      div14_nodes.forEach(detach);
      div15_nodes.forEach(detach);
      div16_nodes.forEach(detach);
      div17_nodes.forEach(detach);
      div18_nodes.forEach(detach);
      t23 = claim_space(main_nodes);
      div19 = claim_element(main_nodes, "DIV", { class: true });
      var div19_nodes = children(div19);
      h21 = claim_element(div19_nodes, "H2", { class: true });
      var h21_nodes = children(h21);
      t24 = claim_text(h21_nodes, "Description");
      h21_nodes.forEach(detach);
      t25 = claim_space(div19_nodes);
      p = claim_element(div19_nodes, "P", { class: true });
      var p_nodes = children(p);
      t26 = claim_text(p_nodes, t26_value);
      p_nodes.forEach(detach);
      div19_nodes.forEach(detach);
      t27 = claim_space(main_nodes);
      if (if_block2) if_block2.l(main_nodes);
      main_nodes.forEach(detach);
      t28 = claim_space(nodes);
      if (default_slot) default_slot.l(nodes);
      this.h();
    },
    h() {
      attr(div0, "class", "carousel-inner h-100");
      attr(span0, "class", "carousel-control-prev-icon");
      attr(span0, "aria-hidden", "true");
      attr(span1, "class", "visually-hidden");
      attr(button0, "class", "carousel-control-prev");
      attr(button0, "type", "button");
      attr(button0, "data-bs-target", "#carouselControls");
      attr(button0, "data-bs-slide", "prev");
      attr(span2, "class", "carousel-control-next-icon");
      attr(span2, "aria-hidden", "true");
      attr(span3, "class", "visually-hidden");
      attr(button1, "class", "carousel-control-next");
      attr(button1, "type", "button");
      attr(button1, "data-bs-target", "#carouselControls");
      attr(button1, "data-bs-slide", "next");
      attr(div1, "id", "carouselControls");
      attr(div1, "class", "carousel carousel-dark slide my-2 svelte-1o98mmw");
      attr(div1, "data-bs-touch", "false");
      attr(div1, "data-bs-interval", "false");
      attr(h20, "class", "text-center text-decoration-underline mt-5");
      attr(div2, "class", "w-100 text-center text-muted");
      attr(div3, "class", "card-title fs-5 fw-bold");
      attr(div4, "class", "mt-2 d-flex justify-content-center text-center");
      attr(a, "href", (a_href_value = path(`/products/${ctx[0]._id}/reviews`)));
      attr(div5, "class", "d-flex justify-content-center text-center");
      attr(div6, "class", "card-body");
      attr(div7, "class", "card h-100 text-center");
      attr(div8, "class", "col");
      attr(
        div9,
        "class",
        "card-body d-flex align-items-center justify-content-center"
      );
      attr(div10, "class", "card h-100 text-center");
      attr(div11, "class", "col");
      attr(div12, "class", "card-title fs-5 fw-bold");
      attr(i, "class", "bi bi-currency-euro");
      attr(span4, "class", "orange fw-bolder fs-4");
      attr(div13, "class", "text-center");
      attr(small2, "class", "text-muted fw-bold");
      attr(div14, "class", "text-center");
      attr(div15, "class", "card-body");
      attr(div16, "class", "card h-100 text-center");
      attr(div17, "class", "col");
      attr(div18, "class", "row row-cols-1 row-cols-md-3 mt-3 g-4");
      attr(h21, "class", "text-center");
      attr(p, "class", "lead");
      attr(div19, "class", "row mt-4");
      attr(main, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, div1);
      append_hydration(div1, div0);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(div0, null);
      }
      append_hydration(div1, t0);
      append_hydration(div1, button0);
      append_hydration(button0, span0);
      append_hydration(button0, t1);
      append_hydration(button0, span1);
      append_hydration(span1, t2);
      append_hydration(div1, t3);
      append_hydration(div1, button1);
      append_hydration(button1, span2);
      append_hydration(button1, t4);
      append_hydration(button1, span3);
      append_hydration(span3, t5);
      append_hydration(main, t6);
      append_hydration(main, h20);
      append_hydration(h20, t7);
      append_hydration(main, t8);
      append_hydration(main, div2);
      append_hydration(div2, small0);
      append_hydration(small0, t9);
      append_hydration(main, t10);
      append_hydration(main, div18);
      append_hydration(div18, div8);
      append_hydration(div8, div7);
      append_hydration(div7, div6);
      append_hydration(div6, div3);
      append_hydration(div3, t11);
      append_hydration(div6, t12);
      append_hydration(div6, div4);
      mount_component(starrating, div4, null);
      append_hydration(div6, t13);
      append_hydration(div6, div5);
      append_hydration(div5, a);
      append_hydration(a, t14);
      append_hydration(div18, t15);
      append_hydration(div18, div11);
      append_hydration(div11, div10);
      append_hydration(div10, div9);
      if_block0.m(div9, null);
      append_hydration(div18, t16);
      append_hydration(div18, div17);
      append_hydration(div17, div16);
      append_hydration(div16, div15);
      append_hydration(div15, div12);
      append_hydration(div12, t17);
      append_hydration(div15, t18);
      append_hydration(div15, div13);
      append_hydration(div13, span4);
      append_hydration(span4, i);
      append_hydration(i, t19);
      append_hydration(span4, small1);
      append_hydration(small1, sub0);
      append_hydration(sub0, t20);
      append_hydration(div15, t21);
      append_hydration(div15, div14);
      append_hydration(div14, small2);
      if_block1.m(small2, null);
      append_hydration(small2, sub1);
      append_hydration(sub1, t22);
      append_hydration(main, t23);
      append_hydration(main, div19);
      append_hydration(div19, h21);
      append_hydration(h21, t24);
      append_hydration(div19, t25);
      append_hydration(div19, p);
      append_hydration(p, t26);
      append_hydration(main, t27);
      if (if_block2) if_block2.m(main, null);
      insert_hydration(target, t28, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        each_value_1 = ctx2[0].images;
        let i2;
        for (i2 = 0; i2 < each_value_1.length; i2 += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block_1(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(div0, null);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
      if (
        (!current || dirty & 1) &&
        t7_value !== (t7_value = ctx2[0].name + "")
      )
        set_data(t7, t7_value);
      if (
        (!current || dirty & 1) &&
        t9_value !== (t9_value = ctx2[0].status + "")
      )
        set_data(t9, t9_value);
      const starrating_changes = {};
      if (dirty & 1) starrating_changes.rating = ctx2[0].rating;
      starrating.$set(starrating_changes);
      if (
        !current ||
        (dirty & 1 &&
          a_href_value !==
            (a_href_value = path(`/products/${ctx2[0]._id}/reviews`)))
      ) {
        attr(a, "href", a_href_value);
      }
      if_block0.p(ctx2, dirty);
      if (
        (!current || dirty & 1) &&
        t19_value !== (t19_value = ctx2[0].dailyPrice.toFixed(2) + "")
      )
        set_data(t19, t19_value);
      if (
        current_block_type_1 ===
          (current_block_type_1 = select_block_type_1(ctx2)) &&
        if_block1
      ) {
        if_block1.p(ctx2, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type_1(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(small2, sub1);
        }
      }
      if (
        (!current || dirty & 1) &&
        t26_value !== (t26_value = ctx2[0].description + "")
      )
        set_data(t26, t26_value);
      if (ctx2[0].reviews && ctx2[0].reviews.length > 0) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(main, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[3],
            !current
              ? get_all_dirty_from_scope(ctx2[3])
              : get_slot_changes(default_slot_template, ctx2[3], dirty, null),
            null
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(starrating.$$.fragment, local);
      transition_in(if_block2);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(starrating.$$.fragment, local);
      transition_out(if_block2);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(main);
      destroy_each(each_blocks, detaching);
      destroy_component(starrating);
      if_block0.d();
      if_block1.d();
      if (if_block2) if_block2.d();
      if (detaching) detach(t28);
      if (default_slot) default_slot.d(detaching);
    },
  };
}
function load({ page: page2, fetch }) {
  const productId = page2.params.id;
  return getJSON(`/api/store/products/${productId}`, { fetch })
    .then((product) => ({ props: { product } }))
    .catch(
      onStatus(401, () => ({
        status: 302,
        redirect: path("/signin", {
          returnTo: path(page2.path),
          required: true,
        }),
      }))
    )
    .catch(([err, req]) => {
      console.error(err);
      return {
        status: req ? req.status : 500,
        error: "Unable to reach the server",
      };
    });
}
function instance($$self, $$props, $$invalidate) {
  let $cart;
  let $page;
  component_subscribe($$self, cart, ($$value) =>
    $$invalidate(1, ($cart = $$value))
  );
  component_subscribe($$self, page, ($$value) =>
    $$invalidate(2, ($page = $$value))
  );
  let { $$slots: slots = {}, $$scope } = $$props;
  let { product } = $$props;
  const click_handler = () => addToCart(product);
  $$self.$$set = ($$props2) => {
    if ("product" in $$props2) $$invalidate(0, (product = $$props2.product));
    if ("$$scope" in $$props2) $$invalidate(3, ($$scope = $$props2.$$scope));
  };
  return [product, $cart, $page, $$scope, slots, click_handler];
}
class U5Bidu5D extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      product: 0,
    });
  }
}
export { U5Bidu5D as default, load };
