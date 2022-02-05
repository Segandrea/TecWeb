import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, c as claim_element, a as children, g as claim_text, d as detach, b as attr, f as insert_hydration, F as append_hydration, k as space, n as claim_space, E as src_url_equal, h as set_data, u as transition_out, w as check_outros, x as transition_in, D as create_slot, O as query_selector_all, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, P as destroy_each, K as component_subscribe, Q as onDestroy, r as group_outros, R as set_style, N as noop, T as StarRating, j as create_component, m as claim_component, o as mount_component, v as destroy_component, G as listen } from "../chunks/vendor-e8a33165.js";
import { g as getJSON } from "../chunks/http-cb35e292.js";
import { r as rentalPeriod, a as cart, b as addToCart } from "../chunks/stores-49d762e0.js";
import { p as path, i as isAuth } from "../chunks/utils-af6e44bf.js";
import "../chunks/paths-28a87002.js";
var index_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_if_block_3(ctx) {
  let div2;
  let div1;
  let div0;
  let h5;
  let t;
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      h5 = element("h5");
      t = text("Oops... Seems like there are no games for this rental period \u{1F62D}");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h5 = claim_element(div0_nodes, "H5", { class: true });
      var h5_nodes = children(h5);
      t = claim_text(h5_nodes, "Oops... Seems like there are no games for this rental period \u{1F62D}");
      h5_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h5, "class", "card-title text-center py-5");
      attr(div0, "class", "card-body");
      attr(div1, "class", "card w-100 h-100");
      attr(div2, "class", "col w-100 h-100");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      append_hydration(div0, h5);
      append_hydration(h5, t);
    },
    d(detaching) {
      if (detaching)
        detach(div2);
    }
  };
}
function create_else_block_2(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { style: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      set_style(div, "height", "16px");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_2(ctx) {
  let starrating;
  let current;
  starrating = new StarRating({
    props: {
      rating: ctx[6].rating,
      config: {
        emptyColor: "rgba(127, 127, 127, 0.1)",
        size: 16
      }
    }
  });
  return {
    c() {
      create_component(starrating.$$.fragment);
    },
    l(nodes) {
      claim_component(starrating.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(starrating, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const starrating_changes = {};
      if (dirty & 1)
        starrating_changes.rating = ctx2[6].rating;
      starrating.$set(starrating_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(starrating.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(starrating.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(starrating, detaching);
    }
  };
}
function create_else_block_1(ctx) {
  let a;
  let t;
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
      attr(a, "href", path("/signin"));
      attr(a, "class", "btn btn-warning rounded-3");
      attr(a, "role", "button");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_if_block_1(ctx) {
  let button;
  let t;
  let button_disabled_value;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[4](ctx[6]);
  }
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
      button.disabled = button_disabled_value = ctx[6]._id in ctx[1];
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 3 && button_disabled_value !== (button_disabled_value = ctx[6]._id in ctx[1])) {
        button.disabled = button_disabled_value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_else_block(ctx) {
  let small;
  let i;
  let t_value = ctx[6].basePrice.toFixed(2) + "";
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
      if (dirty & 1 && t_value !== (t_value = ctx2[6].basePrice.toFixed(2) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(small);
    }
  };
}
function create_if_block(ctx) {
  let span;
  let i0;
  let t0_value = ctx[6].basePrice.toFixed(2) + "";
  let t0;
  let t1;
  let small;
  let i1;
  let t2_value = Math.max(ctx[6].basePrice - ctx[6].discountPrice, 0).toFixed(2) + "";
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
      attr(span, "class", "badge rounded-pill bg-danger text-decoration-line-through");
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
      if (dirty & 1 && t0_value !== (t0_value = ctx2[6].basePrice.toFixed(2) + ""))
        set_data(t0, t0_value);
      if (dirty & 1 && t2_value !== (t2_value = Math.max(ctx2[6].basePrice - ctx2[6].discountPrice, 0).toFixed(2) + ""))
        set_data(t2, t2_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(small);
    }
  };
}
function create_each_block(ctx) {
  let div11;
  let div10;
  let a0;
  let img;
  let img_src_value;
  let img_alt_value;
  let a0_href_value;
  let t0;
  let div2;
  let h5;
  let a1;
  let t1_value = ctx[6].name + "";
  let t1;
  let a1_href_value;
  let t2;
  let h6;
  let t3_value = ctx[6].status + "";
  let t3;
  let t4;
  let div0;
  let current_block_type_index;
  let if_block0;
  let t5;
  let p;
  let t6_value = ctx[6].description + "";
  let t6;
  let t7;
  let div1;
  let t8;
  let div9;
  let div5;
  let div3;
  let t9;
  let t10;
  let div4;
  let i;
  let t11_value = ctx[6].dailyPrice.toFixed(2) + "";
  let t11;
  let t12;
  let div8;
  let div6;
  let small;
  let t13;
  let t14;
  let div7;
  let t15;
  let current;
  const if_block_creators = [create_if_block_2, create_else_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[6].rating)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  function select_block_type_1(ctx2, dirty) {
    if (isAuth())
      return create_if_block_1;
    return create_else_block_1;
  }
  let current_block_type = select_block_type_1();
  let if_block1 = current_block_type(ctx);
  function select_block_type_2(ctx2, dirty) {
    if (ctx2[6].discountPrice && ctx2[6].discountPrice > 0)
      return create_if_block;
    return create_else_block;
  }
  let current_block_type_1 = select_block_type_2(ctx);
  let if_block2 = current_block_type_1(ctx);
  return {
    c() {
      div11 = element("div");
      div10 = element("div");
      a0 = element("a");
      img = element("img");
      t0 = space();
      div2 = element("div");
      h5 = element("h5");
      a1 = element("a");
      t1 = text(t1_value);
      t2 = space();
      h6 = element("h6");
      t3 = text(t3_value);
      t4 = space();
      div0 = element("div");
      if_block0.c();
      t5 = space();
      p = element("p");
      t6 = text(t6_value);
      t7 = space();
      div1 = element("div");
      if_block1.c();
      t8 = space();
      div9 = element("div");
      div5 = element("div");
      div3 = element("div");
      t9 = text("Daily");
      t10 = space();
      div4 = element("div");
      i = element("i");
      t11 = text(t11_value);
      t12 = space();
      div8 = element("div");
      div6 = element("div");
      small = element("small");
      t13 = text("Base");
      t14 = space();
      div7 = element("div");
      if_block2.c();
      t15 = space();
      this.h();
    },
    l(nodes) {
      div11 = claim_element(nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      a0 = claim_element(div10_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", {
        src: true,
        class: true,
        height: true,
        alt: true
      });
      a0_nodes.forEach(detach);
      t0 = claim_space(div10_nodes);
      div2 = claim_element(div10_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h5 = claim_element(div2_nodes, "H5", { class: true });
      var h5_nodes = children(h5);
      a1 = claim_element(h5_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t1 = claim_text(a1_nodes, t1_value);
      a1_nodes.forEach(detach);
      h5_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      h6 = claim_element(div2_nodes, "H6", { class: true });
      var h6_nodes = children(h6);
      t3 = claim_text(h6_nodes, t3_value);
      h6_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      p = claim_element(div2_nodes, "P", { class: true });
      var p_nodes = children(p);
      t6 = claim_text(p_nodes, t6_value);
      p_nodes.forEach(detach);
      t7 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t8 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      div5 = claim_element(div9_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div3 = claim_element(div5_nodes, "DIV", {});
      var div3_nodes = children(div3);
      t9 = claim_text(div3_nodes, "Daily");
      div3_nodes.forEach(detach);
      t10 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {});
      var div4_nodes = children(div4);
      i = claim_element(div4_nodes, "I", { class: true });
      var i_nodes = children(i);
      t11 = claim_text(i_nodes, t11_value);
      i_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      t12 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      div6 = claim_element(div8_nodes, "DIV", {});
      var div6_nodes = children(div6);
      small = claim_element(div6_nodes, "SMALL", {});
      var small_nodes = children(small);
      t13 = claim_text(small_nodes, "Base");
      small_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      t14 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {});
      var div7_nodes = children(div7);
      if_block2.l(div7_nodes);
      div7_nodes.forEach(detach);
      div8_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      t15 = claim_space(div11_nodes);
      div11_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = ctx[6].images[0].url))
        attr(img, "src", img_src_value);
      attr(img, "class", "card-img-top");
      attr(img, "height", "200");
      attr(img, "alt", img_alt_value = ctx[6].name + " image");
      attr(a0, "href", a0_href_value = path(`/products/${ctx[6]._id}`));
      attr(a1, "href", a1_href_value = path(`/products/${ctx[6]._id}`));
      attr(a1, "class", "link-dark");
      attr(h5, "class", "card-title text-truncate");
      attr(h6, "class", "card-subtitle mb-2 text-muted text-truncate");
      attr(div0, "class", "mt-2 mb-4");
      attr(p, "class", "card-text text-clamp svelte-1h4w944");
      attr(div1, "class", "text-end mt-4 mb-2");
      attr(div2, "class", "card-body");
      attr(i, "class", "bi bi-currency-euro");
      attr(div5, "class", "d-flex justify-content-between orange fw-bolder fst-italic");
      attr(div8, "class", "d-flex justify-content-between text-muted fs-6 fst-italic");
      attr(div9, "class", "card-footer");
      attr(div10, "class", "card h-100");
      attr(div11, "class", "col");
    },
    m(target, anchor) {
      insert_hydration(target, div11, anchor);
      append_hydration(div11, div10);
      append_hydration(div10, a0);
      append_hydration(a0, img);
      append_hydration(div10, t0);
      append_hydration(div10, div2);
      append_hydration(div2, h5);
      append_hydration(h5, a1);
      append_hydration(a1, t1);
      append_hydration(div2, t2);
      append_hydration(div2, h6);
      append_hydration(h6, t3);
      append_hydration(div2, t4);
      append_hydration(div2, div0);
      if_blocks[current_block_type_index].m(div0, null);
      append_hydration(div2, t5);
      append_hydration(div2, p);
      append_hydration(p, t6);
      append_hydration(div2, t7);
      append_hydration(div2, div1);
      if_block1.m(div1, null);
      append_hydration(div10, t8);
      append_hydration(div10, div9);
      append_hydration(div9, div5);
      append_hydration(div5, div3);
      append_hydration(div3, t9);
      append_hydration(div5, t10);
      append_hydration(div5, div4);
      append_hydration(div4, i);
      append_hydration(i, t11);
      append_hydration(div9, t12);
      append_hydration(div9, div8);
      append_hydration(div8, div6);
      append_hydration(div6, small);
      append_hydration(small, t13);
      append_hydration(div8, t14);
      append_hydration(div8, div7);
      if_block2.m(div7, null);
      append_hydration(div11, t15);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 1 && !src_url_equal(img.src, img_src_value = ctx2[6].images[0].url)) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & 1 && img_alt_value !== (img_alt_value = ctx2[6].name + " image")) {
        attr(img, "alt", img_alt_value);
      }
      if (!current || dirty & 1 && a0_href_value !== (a0_href_value = path(`/products/${ctx2[6]._id}`))) {
        attr(a0, "href", a0_href_value);
      }
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[6].name + ""))
        set_data(t1, t1_value);
      if (!current || dirty & 1 && a1_href_value !== (a1_href_value = path(`/products/${ctx2[6]._id}`))) {
        attr(a1, "href", a1_href_value);
      }
      if ((!current || dirty & 1) && t3_value !== (t3_value = ctx2[6].status + ""))
        set_data(t3, t3_value);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(div0, null);
      }
      if ((!current || dirty & 1) && t6_value !== (t6_value = ctx2[6].description + ""))
        set_data(t6, t6_value);
      if_block1.p(ctx2, dirty);
      if ((!current || dirty & 1) && t11_value !== (t11_value = ctx2[6].dailyPrice.toFixed(2) + ""))
        set_data(t11, t11_value);
      if (current_block_type_1 === (current_block_type_1 = select_block_type_2(ctx2)) && if_block2) {
        if_block2.p(ctx2, dirty);
      } else {
        if_block2.d(1);
        if_block2 = current_block_type_1(ctx2);
        if (if_block2) {
          if_block2.c();
          if_block2.m(div7, null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div11);
      if_blocks[current_block_type_index].d();
      if_block1.d();
      if_block2.d();
    }
  };
}
function create_fragment(ctx) {
  let t0;
  let main;
  let div;
  let t1;
  let t2;
  let current;
  let if_block = ctx[0].length <= 0 && create_if_block_3();
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
  return {
    c() {
      t0 = space();
      main = element("main");
      div = element("div");
      if (if_block)
        if_block.c();
      t1 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-cl8ipj"]', document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      div = claim_element(main_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      t1 = claim_space(div_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      main_nodes.forEach(detach);
      t2 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      document.title = "Games Room";
      attr(div, "class", "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4");
      attr(main, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, main, anchor);
      append_hydration(main, div);
      if (if_block)
        if_block.m(div, null);
      append_hydration(div, t1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      insert_hydration(target, t2, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[0].length <= 0) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_3();
          if_block.c();
          if_block.m(div, t1);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 3) {
        each_value = ctx2[0];
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
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(main);
      if (if_block)
        if_block.d();
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t2);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function load({ fetch }) {
  return getJSON("/api/store/products", { fetch }).then((products) => ({ props: products })).catch(([err, req]) => {
    console.error(err);
    return {
      status: req ? req.status : 500,
      error: "Unable to reach the server"
    };
  });
}
function instance($$self, $$props, $$invalidate) {
  let $cart;
  component_subscribe($$self, cart, ($$value) => $$invalidate(1, $cart = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let { products } = $$props;
  const unsubscribe = rentalPeriod.subscribe((range) => {
    if (range && range.length === 2) {
      const query = new URLSearchParams({
        params: JSON.stringify({ rentalPeriod: range })
      });
      getJSON(`/api/store/products?${query}`).then((body) => $$invalidate(0, products = body.products)).catch((err) => {
        console.error(err);
        alert.error("Something went wrong");
      });
    }
  });
  onDestroy(unsubscribe);
  const click_handler = (product) => addToCart(product);
  $$self.$$set = ($$props2) => {
    if ("products" in $$props2)
      $$invalidate(0, products = $$props2.products);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [products, $cart, $$scope, slots, click_handler];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { products: 0 });
  }
}
export { Routes as default, load };
