import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as space, e as element, j as create_component, t as text, O as query_selector_all, d as detach, n as claim_space, c as claim_element, a as children, m as claim_component, g as claim_text, b as attr, f as insert_hydration, o as mount_component, F as append_hydration, V as set_input_value, G as listen, W as prevent_default, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, x as transition_in, u as transition_out, v as destroy_component, X as run_all, K as component_subscribe, L as binding_callbacks, N as noop, h as set_data, P as destroy_each } from "../chunks/vendor-e8a33165.js";
import { i as isAuth, p as path, f as formatDate } from "../chunks/utils-af6e44bf.js";
import { g as getJSON, o as onStatus, p as postJSON, a as putJSON, r as redirectOnStatus, d as deleteJSON } from "../chunks/http-cb35e292.js";
import { A as Alert, g as goto } from "../chunks/navigation-275794ee.js";
import { p as page } from "../chunks/stores-659b5a58.js";
import { d as clearCoupons, e as clearCart } from "../chunks/stores-49d762e0.js";
import "../chunks/paths-28a87002.js";
import "../chunks/singletons-12a22614.js";
var profile_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  return child_ctx;
}
function create_else_block(ctx) {
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
      t0 = text("You don't have any orders yet \u{1F605}");
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
      t0 = claim_text(h5_nodes, "You don't have any orders yet \u{1F605}");
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
      attr(h5, "class", "card-title svelte-ou1abz");
      attr(a, "class", "card-link svelte-ou1abz");
      attr(a, "href", path("/"));
      attr(div0, "class", "card-body svelte-ou1abz");
      attr(div1, "class", "card h-100 svelte-ou1abz");
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
      if (detaching)
        detach(div1);
    }
  };
}
function create_if_block(ctx) {
  let ul;
  let each_value = ctx[1];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(ul, "class", "list-group svelte-ou1abz");
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 34) {
        each_value = ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let div;
  let button;
  let t;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[12](ctx[14]);
  }
  return {
    c() {
      div = element("div");
      button = element("button");
      t = text("Delete Order");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { type: true, class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Delete Order");
      button_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "type", "button");
      attr(button, "class", "btn btn-outline-warning mt-2 svelte-ou1abz");
      attr(div, "class", "col svelte-ou1abz");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block(ctx) {
  let div6;
  let div5;
  let div0;
  let h60;
  let t0;
  let t1;
  let a;
  let small0;
  let t2_value = ctx[14]._id + "";
  let t2;
  let a_href_value;
  let t3;
  let div1;
  let h61;
  let t4;
  let t5;
  let small1;
  let t6_value = ctx[14].state + "";
  let t6;
  let t7;
  let div2;
  let h62;
  let t8;
  let t9;
  let small2;
  let t10_value = formatDate(ctx[14].startDate) + "";
  let t10;
  let t11;
  let div3;
  let h63;
  let t12;
  let t13;
  let small3;
  let t14_value = formatDate(ctx[14].endDate) + "";
  let t14;
  let t15;
  let div4;
  let h64;
  let t16;
  let t17;
  let i;
  let t18_value = ctx[14].totalPrice.toFixed(2) + "";
  let t18;
  let t19;
  let show_if = ctx[14].state === "open" && new Date() < new Date(ctx[14].startDate);
  let t20;
  let if_block = show_if && create_if_block_1(ctx);
  return {
    c() {
      div6 = element("div");
      div5 = element("div");
      div0 = element("div");
      h60 = element("h6");
      t0 = text("Order No.");
      t1 = space();
      a = element("a");
      small0 = element("small");
      t2 = text(t2_value);
      t3 = space();
      div1 = element("div");
      h61 = element("h6");
      t4 = text("State");
      t5 = space();
      small1 = element("small");
      t6 = text(t6_value);
      t7 = space();
      div2 = element("div");
      h62 = element("h6");
      t8 = text("Start Date");
      t9 = space();
      small2 = element("small");
      t10 = text(t10_value);
      t11 = space();
      div3 = element("div");
      h63 = element("h6");
      t12 = text("End Date");
      t13 = space();
      small3 = element("small");
      t14 = text(t14_value);
      t15 = space();
      div4 = element("div");
      h64 = element("h6");
      t16 = text("Total");
      t17 = space();
      i = element("i");
      t18 = text(t18_value);
      t19 = space();
      if (if_block)
        if_block.c();
      t20 = space();
      this.h();
    },
    l(nodes) {
      div6 = claim_element(nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h60 = claim_element(div0_nodes, "H6", { class: true });
      var h60_nodes = children(h60);
      t0 = claim_text(h60_nodes, "Order No.");
      h60_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      a = claim_element(div0_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      small0 = claim_element(a_nodes, "SMALL", { class: true });
      var small0_nodes = children(small0);
      t2 = claim_text(small0_nodes, t2_value);
      small0_nodes.forEach(detach);
      a_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t3 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h61 = claim_element(div1_nodes, "H6", { class: true });
      var h61_nodes = children(h61);
      t4 = claim_text(h61_nodes, "State");
      h61_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      small1 = claim_element(div1_nodes, "SMALL", { class: true });
      var small1_nodes = children(small1);
      t6 = claim_text(small1_nodes, t6_value);
      small1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t7 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h62 = claim_element(div2_nodes, "H6", { class: true });
      var h62_nodes = children(h62);
      t8 = claim_text(h62_nodes, "Start Date");
      h62_nodes.forEach(detach);
      t9 = claim_space(div2_nodes);
      small2 = claim_element(div2_nodes, "SMALL", { class: true });
      var small2_nodes = children(small2);
      t10 = claim_text(small2_nodes, t10_value);
      small2_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t11 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h63 = claim_element(div3_nodes, "H6", { class: true });
      var h63_nodes = children(h63);
      t12 = claim_text(h63_nodes, "End Date");
      h63_nodes.forEach(detach);
      t13 = claim_space(div3_nodes);
      small3 = claim_element(div3_nodes, "SMALL", { class: true });
      var small3_nodes = children(small3);
      t14 = claim_text(small3_nodes, t14_value);
      small3_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t15 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h64 = claim_element(div4_nodes, "H6", { class: true });
      var h64_nodes = children(h64);
      t16 = claim_text(h64_nodes, "Total");
      h64_nodes.forEach(detach);
      t17 = claim_space(div4_nodes);
      i = claim_element(div4_nodes, "I", { class: true });
      var i_nodes = children(i);
      t18 = claim_text(i_nodes, t18_value);
      i_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t19 = claim_space(div5_nodes);
      if (if_block)
        if_block.l(div5_nodes);
      div5_nodes.forEach(detach);
      t20 = claim_space(div6_nodes);
      div6_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h60, "class", "svelte-ou1abz");
      attr(small0, "class", "svelte-ou1abz");
      attr(a, "href", a_href_value = path(`/orders/${ctx[14]._id}`));
      attr(a, "class", "svelte-ou1abz");
      attr(div0, "class", "col text-truncate svelte-ou1abz");
      attr(h61, "class", "svelte-ou1abz");
      attr(small1, "class", "text-muted svelte-ou1abz");
      attr(div1, "class", "col svelte-ou1abz");
      attr(h62, "class", "svelte-ou1abz");
      attr(small2, "class", "text-muted svelte-ou1abz");
      attr(div2, "class", "col svelte-ou1abz");
      attr(h63, "class", "svelte-ou1abz");
      attr(small3, "class", "text-muted svelte-ou1abz");
      attr(div3, "class", "col svelte-ou1abz");
      attr(h64, "class", "svelte-ou1abz");
      attr(i, "class", "bi bi-currency-euro svelte-ou1abz");
      attr(div4, "class", "col svelte-ou1abz");
      attr(div5, "class", "row row-cols-1 row-cols-lg-6 g-1 svelte-ou1abz");
      attr(div6, "class", "list-group-item svelte-ou1abz");
    },
    m(target, anchor) {
      insert_hydration(target, div6, anchor);
      append_hydration(div6, div5);
      append_hydration(div5, div0);
      append_hydration(div0, h60);
      append_hydration(h60, t0);
      append_hydration(div0, t1);
      append_hydration(div0, a);
      append_hydration(a, small0);
      append_hydration(small0, t2);
      append_hydration(div5, t3);
      append_hydration(div5, div1);
      append_hydration(div1, h61);
      append_hydration(h61, t4);
      append_hydration(div1, t5);
      append_hydration(div1, small1);
      append_hydration(small1, t6);
      append_hydration(div5, t7);
      append_hydration(div5, div2);
      append_hydration(div2, h62);
      append_hydration(h62, t8);
      append_hydration(div2, t9);
      append_hydration(div2, small2);
      append_hydration(small2, t10);
      append_hydration(div5, t11);
      append_hydration(div5, div3);
      append_hydration(div3, h63);
      append_hydration(h63, t12);
      append_hydration(div3, t13);
      append_hydration(div3, small3);
      append_hydration(small3, t14);
      append_hydration(div5, t15);
      append_hydration(div5, div4);
      append_hydration(div4, h64);
      append_hydration(h64, t16);
      append_hydration(div4, t17);
      append_hydration(div4, i);
      append_hydration(i, t18);
      append_hydration(div5, t19);
      if (if_block)
        if_block.m(div5, null);
      append_hydration(div6, t20);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t2_value !== (t2_value = ctx2[14]._id + ""))
        set_data(t2, t2_value);
      if (dirty & 2 && a_href_value !== (a_href_value = path(`/orders/${ctx2[14]._id}`))) {
        attr(a, "href", a_href_value);
      }
      if (dirty & 2 && t6_value !== (t6_value = ctx2[14].state + ""))
        set_data(t6, t6_value);
      if (dirty & 2 && t10_value !== (t10_value = formatDate(ctx2[14].startDate) + ""))
        set_data(t10, t10_value);
      if (dirty & 2 && t14_value !== (t14_value = formatDate(ctx2[14].endDate) + ""))
        set_data(t14, t14_value);
      if (dirty & 2 && t18_value !== (t18_value = ctx2[14].totalPrice.toFixed(2) + ""))
        set_data(t18, t18_value);
      if (dirty & 2)
        show_if = ctx2[14].state === "open" && new Date() < new Date(ctx2[14].startDate);
      if (show_if) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(div5, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div6);
      if (if_block)
        if_block.d();
    }
  };
}
function create_fragment(ctx) {
  let t0;
  let main;
  let alert_1;
  let t1;
  let div6;
  let div4;
  let h20;
  let t2;
  let t3;
  let form;
  let div0;
  let input0;
  let t4;
  let label0;
  let t5;
  let t6;
  let div1;
  let input1;
  let t7;
  let label1;
  let t8;
  let t9;
  let div2;
  let input2;
  let t10;
  let label2;
  let t11;
  let t12;
  let button0;
  let t13;
  let t14;
  let div3;
  let span;
  let t15;
  let t16;
  let button1;
  let t17;
  let t18;
  let div5;
  let h21;
  let t19;
  let t20;
  let t21;
  let current;
  let mounted;
  let dispose;
  let alert_1_props = {};
  alert_1 = new Alert({ props: alert_1_props });
  ctx[8](alert_1);
  function select_block_type(ctx2, dirty) {
    if (ctx2[1] && ctx2[1].length > 0)
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  const default_slot_template = ctx[7].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
  return {
    c() {
      t0 = space();
      main = element("main");
      create_component(alert_1.$$.fragment);
      t1 = space();
      div6 = element("div");
      div4 = element("div");
      h20 = element("h2");
      t2 = text("Profile");
      t3 = space();
      form = element("form");
      div0 = element("div");
      input0 = element("input");
      t4 = space();
      label0 = element("label");
      t5 = text("Email");
      t6 = space();
      div1 = element("div");
      input1 = element("input");
      t7 = space();
      label1 = element("label");
      t8 = text("Username");
      t9 = space();
      div2 = element("div");
      input2 = element("input");
      t10 = space();
      label2 = element("label");
      t11 = text("Billing Address");
      t12 = space();
      button0 = element("button");
      t13 = text("Save changes");
      t14 = space();
      div3 = element("div");
      span = element("span");
      t15 = text("Or");
      t16 = space();
      button1 = element("button");
      t17 = text("Sign out");
      t18 = space();
      div5 = element("div");
      h21 = element("h2");
      t19 = text("Your Orders");
      t20 = space();
      if_block.c();
      t21 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-h1cjtk"]', document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      claim_component(alert_1.$$.fragment, main_nodes);
      t1 = claim_space(main_nodes);
      div6 = claim_element(main_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div4 = claim_element(div6_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h20 = claim_element(div4_nodes, "H2", { class: true });
      var h20_nodes = children(h20);
      t2 = claim_text(h20_nodes, "Profile");
      h20_nodes.forEach(detach);
      t3 = claim_space(div4_nodes);
      form = claim_element(div4_nodes, "FORM", { class: true });
      var form_nodes = children(form);
      div0 = claim_element(form_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      input0 = claim_element(div0_nodes, "INPUT", {
        id: true,
        name: true,
        type: true,
        class: true,
        placeholder: true
      });
      t4 = claim_space(div0_nodes);
      label0 = claim_element(div0_nodes, "LABEL", { for: true, class: true });
      var label0_nodes = children(label0);
      t5 = claim_text(label0_nodes, "Email");
      label0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t6 = claim_space(form_nodes);
      div1 = claim_element(form_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      input1 = claim_element(div1_nodes, "INPUT", {
        id: true,
        name: true,
        type: true,
        class: true,
        placeholder: true,
        minlength: true
      });
      t7 = claim_space(div1_nodes);
      label1 = claim_element(div1_nodes, "LABEL", { for: true, class: true });
      var label1_nodes = children(label1);
      t8 = claim_text(label1_nodes, "Username");
      label1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t9 = claim_space(form_nodes);
      div2 = claim_element(form_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      input2 = claim_element(div2_nodes, "INPUT", {
        id: true,
        name: true,
        type: true,
        class: true
      });
      t10 = claim_space(div2_nodes);
      label2 = claim_element(div2_nodes, "LABEL", { for: true, class: true });
      var label2_nodes = children(label2);
      t11 = claim_text(label2_nodes, "Billing Address");
      label2_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t12 = claim_space(form_nodes);
      button0 = claim_element(form_nodes, "BUTTON", { class: true, type: true });
      var button0_nodes = children(button0);
      t13 = claim_text(button0_nodes, "Save changes");
      button0_nodes.forEach(detach);
      form_nodes.forEach(detach);
      t14 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      span = claim_element(div3_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t15 = claim_text(span_nodes, "Or");
      span_nodes.forEach(detach);
      t16 = claim_space(div3_nodes);
      button1 = claim_element(div3_nodes, "BUTTON", { type: true, class: true });
      var button1_nodes = children(button1);
      t17 = claim_text(button1_nodes, "Sign out");
      button1_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t18 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      h21 = claim_element(div5_nodes, "H2", { class: true });
      var h21_nodes = children(h21);
      t19 = claim_text(h21_nodes, "Your Orders");
      h21_nodes.forEach(detach);
      t20 = claim_space(div5_nodes);
      if_block.l(div5_nodes);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      main_nodes.forEach(detach);
      t21 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      document.title = "Profile";
      attr(h20, "class", "py-4 svelte-ou1abz");
      attr(input0, "id", "email");
      attr(input0, "name", "email");
      attr(input0, "type", "email");
      attr(input0, "class", "form-control border-bottom-0 rounded-0 rounded-top svelte-ou1abz");
      attr(input0, "placeholder", "domain@example.com");
      input0.required = true;
      attr(label0, "for", "email");
      attr(label0, "class", "svelte-ou1abz");
      attr(div0, "class", "form-floating svelte-ou1abz");
      attr(input1, "id", "username");
      attr(input1, "name", "username");
      attr(input1, "type", "text");
      attr(input1, "class", "form-control rounded-0 svelte-ou1abz");
      attr(input1, "placeholder", "username");
      attr(input1, "minlength", "4");
      input1.required = true;
      attr(label1, "for", "username");
      attr(label1, "class", "svelte-ou1abz");
      attr(div1, "class", "form-floating svelte-ou1abz");
      attr(input2, "id", "billingAddress");
      attr(input2, "name", "billingAddress");
      attr(input2, "type", "text");
      attr(input2, "class", "form-control border-top-0 rounded-0 rounded-bottom svelte-ou1abz");
      input2.required = true;
      attr(label2, "for", "billingAddress");
      attr(label2, "class", "svelte-ou1abz");
      attr(div2, "class", "form-floating svelte-ou1abz");
      attr(button0, "class", "btn btn-lg btn-warning my-2 w-100 svelte-ou1abz");
      attr(button0, "type", "submit");
      attr(form, "class", "svelte-ou1abz");
      attr(span, "class", "svelte-ou1abz");
      attr(button1, "type", "button");
      attr(button1, "class", "btn btn-link svelte-ou1abz");
      attr(div3, "class", "d-flex align-items-center justify-content-center svelte-ou1abz");
      attr(div4, "class", "col col-lg-3 text-center svelte-ou1abz");
      attr(h21, "class", "py-4 svelte-ou1abz");
      attr(div5, "class", "col col-lg-9 text-center svelte-ou1abz");
      attr(div6, "class", "row row-cols-1 svelte-ou1abz");
      attr(main, "class", "container svelte-ou1abz");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, main, anchor);
      mount_component(alert_1, main, null);
      append_hydration(main, t1);
      append_hydration(main, div6);
      append_hydration(div6, div4);
      append_hydration(div4, h20);
      append_hydration(h20, t2);
      append_hydration(div4, t3);
      append_hydration(div4, form);
      append_hydration(form, div0);
      append_hydration(div0, input0);
      set_input_value(input0, ctx[0].email);
      append_hydration(div0, t4);
      append_hydration(div0, label0);
      append_hydration(label0, t5);
      append_hydration(form, t6);
      append_hydration(form, div1);
      append_hydration(div1, input1);
      set_input_value(input1, ctx[0].username);
      append_hydration(div1, t7);
      append_hydration(div1, label1);
      append_hydration(label1, t8);
      append_hydration(form, t9);
      append_hydration(form, div2);
      append_hydration(div2, input2);
      set_input_value(input2, ctx[0].billingAddress);
      append_hydration(div2, t10);
      append_hydration(div2, label2);
      append_hydration(label2, t11);
      append_hydration(form, t12);
      append_hydration(form, button0);
      append_hydration(button0, t13);
      append_hydration(div4, t14);
      append_hydration(div4, div3);
      append_hydration(div3, span);
      append_hydration(span, t15);
      append_hydration(div3, t16);
      append_hydration(div3, button1);
      append_hydration(button1, t17);
      append_hydration(div6, t18);
      append_hydration(div6, div5);
      append_hydration(div5, h21);
      append_hydration(h21, t19);
      append_hydration(div5, t20);
      if_block.m(div5, null);
      insert_hydration(target, t21, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(input0, "input", ctx[9]),
          listen(input1, "input", ctx[10]),
          listen(input2, "input", ctx[11]),
          listen(form, "submit", prevent_default(ctx[4])),
          listen(button1, "click", ctx[3])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const alert_1_changes = {};
      alert_1.$set(alert_1_changes);
      if (dirty & 1 && input0.value !== ctx2[0].email) {
        set_input_value(input0, ctx2[0].email);
      }
      if (dirty & 1 && input1.value !== ctx2[0].username) {
        set_input_value(input1, ctx2[0].username);
      }
      if (dirty & 1 && input2.value !== ctx2[0].billingAddress) {
        set_input_value(input2, ctx2[0].billingAddress);
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div5, null);
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 64)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
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
      if (detaching)
        detach(t0);
      if (detaching)
        detach(main);
      ctx[8](null);
      destroy_component(alert_1);
      if_block.d();
      if (detaching)
        detach(t21);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
async function load({ page: page2, fetch }) {
  if (isAuth()) {
    return await getJSON("/api/store/profile", { fetch }).then((profile) => getJSON("/api/store/orders", { fetch }).then(({ orders }) => ({ props: { profile, orders } }))).catch(onStatus(401, () => ({
      status: 302,
      redirect: path("/signin", {
        returnTo: path(page2.path),
        required: true
      })
    }))).catch(([err, req]) => {
      console.error(err);
      return {
        status: req ? req.status : 500,
        error: "Unable to reach the server"
      };
    });
  }
  return {
    status: 302,
    redirect: path("/signin", {
      returnTo: path(page2.path),
      required: true
    })
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(13, $page = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let alert;
  let { profile } = $$props;
  let { orders } = $$props;
  function signout() {
    postJSON("/api/store/signout", {}, { parse: false }).catch(onStatus(401, () => {
    })).then(() => {
      sessionStorage.removeItem("user");
      clearCoupons();
      clearCart();
      goto(path("/"));
    }).catch((err) => {
      console.error(err);
      alert.error("Something went wrong");
    });
  }
  function updateProfile() {
    putJSON("/api/store/profile", profile).then((body) => {
      $$invalidate(0, profile = body);
      alert.info("Profile updated successfully");
    }).catch(onStatus(400, () => alert.error("Invalid profile data"))).catch(redirectOnStatus(401, goto, path("/signin", {
      returnTo: path($page.path),
      required: true
    }))).catch((err) => {
      console.error(err);
      alert.error("Something went wrong");
    });
  }
  function deleteOrder(order) {
    deleteJSON(`/api/store/orders/${order._id}`, { parse: false }).then(() => {
      const index = orders.indexOf(order);
      orders.splice(index, 1);
      $$invalidate(1, orders);
      alert.info("Order cancelled");
    }).catch(redirectOnStatus(401, goto, path("/signin", {
      returnTo: path($page.path),
      required: true
    }))).catch((err) => {
      console.error(err);
      alert.error("Something went wrong");
    });
  }
  function alert_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      alert = $$value;
      $$invalidate(2, alert);
    });
  }
  function input0_input_handler() {
    profile.email = this.value;
    $$invalidate(0, profile);
  }
  function input1_input_handler() {
    profile.username = this.value;
    $$invalidate(0, profile);
  }
  function input2_input_handler() {
    profile.billingAddress = this.value;
    $$invalidate(0, profile);
  }
  const click_handler = (order) => deleteOrder(order);
  $$self.$$set = ($$props2) => {
    if ("profile" in $$props2)
      $$invalidate(0, profile = $$props2.profile);
    if ("orders" in $$props2)
      $$invalidate(1, orders = $$props2.orders);
    if ("$$scope" in $$props2)
      $$invalidate(6, $$scope = $$props2.$$scope);
  };
  return [
    profile,
    orders,
    alert,
    signout,
    updateProfile,
    deleteOrder,
    $$scope,
    slots,
    alert_1_binding,
    input0_input_handler,
    input1_input_handler,
    input2_input_handler,
    click_handler
  ];
}
class Profile extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { profile: 0, orders: 1 });
  }
}
export { Profile as default, load };