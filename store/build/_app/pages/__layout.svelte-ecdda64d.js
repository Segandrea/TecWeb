var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, e as element, k as space, t as text, c as claim_element, a as children, d as detach, n as claim_space, g as claim_text, E as src_url_equal, b as attr, f as insert_hydration, F as append_hydration, G as listen, h as set_data, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, x as transition_in, u as transition_out, K as run_all, L as component_subscribe, A as onMount, M as binding_callbacks } from "../chunks/vendor-15d99854.js";
import { c as cartItems, s as sortBy, r as rentalPeriod, a as category } from "../chunks/stores-01e7ca86.js";
import { p as path } from "../chunks/utils-af6e44bf.js";
import "../chunks/paths-28a87002.js";
var __layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let header;
  let nav0;
  let div3;
  let div0;
  let a0;
  let img;
  let img_src_value;
  let t0;
  let ul0;
  let li0;
  let a1;
  let i0;
  let t1;
  let sup0;
  let t2_value = ctx[1].length + "";
  let t2;
  let t3;
  let li1;
  let a2;
  let i1;
  let t4;
  let div2;
  let div1;
  let input;
  let t5;
  let button0;
  let i2;
  let t6;
  let ul1;
  let li2;
  let h5;
  let t7;
  let t8;
  let li3;
  let button1;
  let t9;
  let t10;
  let li4;
  let button2;
  let t11;
  let t12;
  let li5;
  let button3;
  let t13;
  let t14;
  let li6;
  let button4;
  let t15;
  let t16;
  let li7;
  let button5;
  let t17;
  let t18;
  let li8;
  let button6;
  let t19;
  let t20;
  let li9;
  let hr;
  let t21;
  let li10;
  let button7;
  let i3;
  let i3_class_value;
  let t22;
  let t23;
  let li11;
  let button8;
  let i4;
  let i4_class_value;
  let t24;
  let t25;
  let li12;
  let button9;
  let i5;
  let i5_class_value;
  let t26;
  let t27;
  let t28;
  let footer;
  let nav1;
  let ul2;
  let li13;
  let a3;
  let i6;
  let t29;
  let li14;
  let a4;
  let i7;
  let t30;
  let li15;
  let a5;
  let i8;
  let t31;
  let sup1;
  let t32_value = ctx[1].length + "";
  let t32;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  return {
    c() {
      header = element("header");
      nav0 = element("nav");
      div3 = element("div");
      div0 = element("div");
      a0 = element("a");
      img = element("img");
      t0 = space();
      ul0 = element("ul");
      li0 = element("li");
      a1 = element("a");
      i0 = element("i");
      t1 = space();
      sup0 = element("sup");
      t2 = text(t2_value);
      t3 = space();
      li1 = element("li");
      a2 = element("a");
      i1 = element("i");
      t4 = space();
      div2 = element("div");
      div1 = element("div");
      input = element("input");
      t5 = space();
      button0 = element("button");
      i2 = element("i");
      t6 = space();
      ul1 = element("ul");
      li2 = element("li");
      h5 = element("h5");
      t7 = text("Category");
      t8 = space();
      li3 = element("li");
      button1 = element("button");
      t9 = text("All");
      t10 = space();
      li4 = element("li");
      button2 = element("button");
      t11 = text("Party");
      t12 = space();
      li5 = element("li");
      button3 = element("button");
      t13 = text("Cards");
      t14 = space();
      li6 = element("li");
      button4 = element("button");
      t15 = text("Dices");
      t16 = space();
      li7 = element("li");
      button5 = element("button");
      t17 = text("Puzzle");
      t18 = space();
      li8 = element("li");
      button6 = element("button");
      t19 = text("Mistery");
      t20 = space();
      li9 = element("li");
      hr = element("hr");
      t21 = space();
      li10 = element("li");
      button7 = element("button");
      i3 = element("i");
      t22 = text(" Rating");
      t23 = space();
      li11 = element("li");
      button8 = element("button");
      i4 = element("i");
      t24 = text(" Base Price");
      t25 = space();
      li12 = element("li");
      button9 = element("button");
      i5 = element("i");
      t26 = text("\n                Daily Price");
      t27 = space();
      if (default_slot)
        default_slot.c();
      t28 = space();
      footer = element("footer");
      nav1 = element("nav");
      ul2 = element("ul");
      li13 = element("li");
      a3 = element("a");
      i6 = element("i");
      t29 = space();
      li14 = element("li");
      a4 = element("a");
      i7 = element("i");
      t30 = space();
      li15 = element("li");
      a5 = element("a");
      i8 = element("i");
      t31 = space();
      sup1 = element("sup");
      t32 = text(t32_value);
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", {});
      var header_nodes = children(header);
      nav0 = claim_element(header_nodes, "NAV", { class: true });
      var nav0_nodes = children(nav0);
      div3 = claim_element(nav0_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", { src: true, alt: true, height: true });
      a0_nodes.forEach(detach);
      t0 = claim_space(div0_nodes);
      ul0 = claim_element(div0_nodes, "UL", { class: true });
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", { class: true });
      var li0_nodes = children(li0);
      a1 = claim_element(li0_nodes, "A", { class: true, href: true });
      var a1_nodes = children(a1);
      i0 = claim_element(a1_nodes, "I", { class: true });
      children(i0).forEach(detach);
      t1 = claim_space(a1_nodes);
      sup0 = claim_element(a1_nodes, "SUP", { class: true });
      var sup0_nodes = children(sup0);
      t2 = claim_text(sup0_nodes, t2_value);
      sup0_nodes.forEach(detach);
      a1_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t3 = claim_space(ul0_nodes);
      li1 = claim_element(ul0_nodes, "LI", { class: true });
      var li1_nodes = children(li1);
      a2 = claim_element(li1_nodes, "A", { class: true, href: true });
      var a2_nodes = children(a2);
      i1 = claim_element(a2_nodes, "I", { class: true });
      children(i1).forEach(detach);
      a2_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      input = claim_element(div1_nodes, "INPUT", {
        id: true,
        type: true,
        class: true,
        "aria-label": true,
        "aria-describedby": true,
        placeholder: true
      });
      t5 = claim_space(div1_nodes);
      button0 = claim_element(div1_nodes, "BUTTON", {
        class: true,
        type: true,
        "data-bs-toggle": true,
        "aria-expanded": true
      });
      var button0_nodes = children(button0);
      i2 = claim_element(button0_nodes, "I", { class: true });
      children(i2).forEach(detach);
      button0_nodes.forEach(detach);
      t6 = claim_space(div1_nodes);
      ul1 = claim_element(div1_nodes, "UL", { class: true });
      var ul1_nodes = children(ul1);
      li2 = claim_element(ul1_nodes, "LI", {});
      var li2_nodes = children(li2);
      h5 = claim_element(li2_nodes, "H5", { class: true });
      var h5_nodes = children(h5);
      t7 = claim_text(h5_nodes, "Category");
      h5_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      t8 = claim_space(ul1_nodes);
      li3 = claim_element(ul1_nodes, "LI", {});
      var li3_nodes = children(li3);
      button1 = claim_element(li3_nodes, "BUTTON", { type: true, class: true });
      var button1_nodes = children(button1);
      t9 = claim_text(button1_nodes, "All");
      button1_nodes.forEach(detach);
      li3_nodes.forEach(detach);
      t10 = claim_space(ul1_nodes);
      li4 = claim_element(ul1_nodes, "LI", {});
      var li4_nodes = children(li4);
      button2 = claim_element(li4_nodes, "BUTTON", { type: true, class: true });
      var button2_nodes = children(button2);
      t11 = claim_text(button2_nodes, "Party");
      button2_nodes.forEach(detach);
      li4_nodes.forEach(detach);
      t12 = claim_space(ul1_nodes);
      li5 = claim_element(ul1_nodes, "LI", {});
      var li5_nodes = children(li5);
      button3 = claim_element(li5_nodes, "BUTTON", { type: true, class: true });
      var button3_nodes = children(button3);
      t13 = claim_text(button3_nodes, "Cards");
      button3_nodes.forEach(detach);
      li5_nodes.forEach(detach);
      t14 = claim_space(ul1_nodes);
      li6 = claim_element(ul1_nodes, "LI", {});
      var li6_nodes = children(li6);
      button4 = claim_element(li6_nodes, "BUTTON", { type: true, class: true });
      var button4_nodes = children(button4);
      t15 = claim_text(button4_nodes, "Dices");
      button4_nodes.forEach(detach);
      li6_nodes.forEach(detach);
      t16 = claim_space(ul1_nodes);
      li7 = claim_element(ul1_nodes, "LI", {});
      var li7_nodes = children(li7);
      button5 = claim_element(li7_nodes, "BUTTON", { type: true, class: true });
      var button5_nodes = children(button5);
      t17 = claim_text(button5_nodes, "Puzzle");
      button5_nodes.forEach(detach);
      li7_nodes.forEach(detach);
      t18 = claim_space(ul1_nodes);
      li8 = claim_element(ul1_nodes, "LI", {});
      var li8_nodes = children(li8);
      button6 = claim_element(li8_nodes, "BUTTON", { type: true, class: true });
      var button6_nodes = children(button6);
      t19 = claim_text(button6_nodes, "Mistery");
      button6_nodes.forEach(detach);
      li8_nodes.forEach(detach);
      t20 = claim_space(ul1_nodes);
      li9 = claim_element(ul1_nodes, "LI", {});
      var li9_nodes = children(li9);
      hr = claim_element(li9_nodes, "HR", { class: true });
      li9_nodes.forEach(detach);
      t21 = claim_space(ul1_nodes);
      li10 = claim_element(ul1_nodes, "LI", {});
      var li10_nodes = children(li10);
      button7 = claim_element(li10_nodes, "BUTTON", { type: true, class: true });
      var button7_nodes = children(button7);
      i3 = claim_element(button7_nodes, "I", { class: true });
      children(i3).forEach(detach);
      t22 = claim_text(button7_nodes, " Rating");
      button7_nodes.forEach(detach);
      li10_nodes.forEach(detach);
      t23 = claim_space(ul1_nodes);
      li11 = claim_element(ul1_nodes, "LI", {});
      var li11_nodes = children(li11);
      button8 = claim_element(li11_nodes, "BUTTON", { type: true, class: true });
      var button8_nodes = children(button8);
      i4 = claim_element(button8_nodes, "I", { class: true });
      children(i4).forEach(detach);
      t24 = claim_text(button8_nodes, " Base Price");
      button8_nodes.forEach(detach);
      li11_nodes.forEach(detach);
      t25 = claim_space(ul1_nodes);
      li12 = claim_element(ul1_nodes, "LI", {});
      var li12_nodes = children(li12);
      button9 = claim_element(li12_nodes, "BUTTON", { type: true, class: true });
      var button9_nodes = children(button9);
      i5 = claim_element(button9_nodes, "I", { class: true });
      children(i5).forEach(detach);
      t26 = claim_text(button9_nodes, "\n                Daily Price");
      button9_nodes.forEach(detach);
      li12_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      nav0_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t27 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      t28 = claim_space(nodes);
      footer = claim_element(nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      nav1 = claim_element(footer_nodes, "NAV", { class: true });
      var nav1_nodes = children(nav1);
      ul2 = claim_element(nav1_nodes, "UL", { class: true });
      var ul2_nodes = children(ul2);
      li13 = claim_element(ul2_nodes, "LI", { class: true });
      var li13_nodes = children(li13);
      a3 = claim_element(li13_nodes, "A", { class: true, href: true });
      var a3_nodes = children(a3);
      i6 = claim_element(a3_nodes, "I", { class: true });
      children(i6).forEach(detach);
      a3_nodes.forEach(detach);
      li13_nodes.forEach(detach);
      t29 = claim_space(ul2_nodes);
      li14 = claim_element(ul2_nodes, "LI", { class: true });
      var li14_nodes = children(li14);
      a4 = claim_element(li14_nodes, "A", { class: true, href: true });
      var a4_nodes = children(a4);
      i7 = claim_element(a4_nodes, "I", { class: true });
      children(i7).forEach(detach);
      a4_nodes.forEach(detach);
      li14_nodes.forEach(detach);
      t30 = claim_space(ul2_nodes);
      li15 = claim_element(ul2_nodes, "LI", { class: true });
      var li15_nodes = children(li15);
      a5 = claim_element(li15_nodes, "A", { class: true, href: true });
      var a5_nodes = children(a5);
      i8 = claim_element(a5_nodes, "I", { class: true });
      children(i8).forEach(detach);
      t31 = claim_space(a5_nodes);
      sup1 = claim_element(a5_nodes, "SUP", { class: true });
      var sup1_nodes = children(sup1);
      t32 = claim_text(sup1_nodes, t32_value);
      sup1_nodes.forEach(detach);
      a5_nodes.forEach(detach);
      li15_nodes.forEach(detach);
      ul2_nodes.forEach(detach);
      nav1_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = path("/nolonoloplus-light.png")))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Nolo Nolo Plus Logo");
      attr(img, "height", "32");
      attr(a0, "class", "navbar-brand");
      attr(a0, "href", path("/"));
      attr(i0, "class", "bi bi-handbag white");
      attr(sup0, "class", "fw-bolder orange");
      attr(a1, "class", "nav-link");
      attr(a1, "href", path("/cart"));
      attr(li0, "class", "nav-item");
      attr(i1, "class", "bi bi-person white");
      attr(a2, "class", "nav-link");
      attr(a2, "href", path("/profile"));
      attr(li1, "class", "nav-item");
      attr(ul0, "class", "navbar-nav d-none d-md-flex");
      attr(div0, "class", "d-flex");
      attr(input, "id", "rangeInput");
      attr(input, "type", "text");
      attr(input, "class", "form-control px-1 px-sm-2 svelte-u5uji9");
      attr(input, "aria-label", "Rental period");
      attr(input, "aria-describedby", "calendarRange");
      attr(input, "placeholder", "Select dates");
      input.readOnly = true;
      input.required = true;
      attr(i2, "class", "bi bi-funnel");
      attr(button0, "class", "btn btn-warning dropdown-toggle");
      attr(button0, "type", "button");
      attr(button0, "data-bs-toggle", "dropdown");
      attr(button0, "aria-expanded", "false");
      attr(h5, "class", "dropdown-header");
      attr(button1, "type", "button");
      attr(button1, "class", "dropdown-item");
      attr(button2, "type", "button");
      attr(button2, "class", "dropdown-item");
      attr(button3, "type", "button");
      attr(button3, "class", "dropdown-item");
      attr(button4, "type", "button");
      attr(button4, "class", "dropdown-item");
      attr(button5, "type", "button");
      attr(button5, "class", "dropdown-item");
      attr(button6, "type", "button");
      attr(button6, "class", "dropdown-item");
      attr(hr, "class", "dropdown-divider");
      attr(i3, "class", i3_class_value = "bi " + ctx[4][ctx[2].rating + 1]);
      attr(button7, "type", "button");
      attr(button7, "class", "dropdown-item");
      attr(i4, "class", i4_class_value = "bi " + ctx[4][ctx[2].basePrice + 1]);
      attr(button8, "type", "button");
      attr(button8, "class", "dropdown-item");
      attr(i5, "class", i5_class_value = "bi " + ctx[4][ctx[2].dailyPrice + 1]);
      attr(button9, "type", "button");
      attr(button9, "class", "dropdown-item");
      attr(ul1, "class", "dropdown-menu dropdown-menu-end dropdown-menu-dark");
      attr(div1, "class", "input-group");
      attr(div3, "class", "container-fluid");
      attr(nav0, "class", "navbar navbar-expand navbar-dark bg-dark fixed-top");
      attr(i6, "class", "bi bi-person black");
      attr(a3, "class", "nav-link");
      attr(a3, "href", path("/profile"));
      attr(li13, "class", "nav-item");
      attr(i7, "class", "bi bi-house black");
      attr(a4, "class", "nav-link");
      attr(a4, "href", path("/"));
      attr(li14, "class", "nav-item");
      attr(i8, "class", "bi bi-handbag black");
      attr(sup1, "class", "fw-bolder orange");
      attr(a5, "class", "nav-link");
      attr(a5, "href", path("/cart"));
      attr(li15, "class", "nav-item");
      attr(ul2, "class", "navbar-nav w-100 justify-content-evenly");
      attr(nav1, "class", "navbar navbar-expand navbar-light bg-light fixed-bottom");
      attr(footer, "class", "d-md-none");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, nav0);
      append_hydration(nav0, div3);
      append_hydration(div3, div0);
      append_hydration(div0, a0);
      append_hydration(a0, img);
      append_hydration(div0, t0);
      append_hydration(div0, ul0);
      append_hydration(ul0, li0);
      append_hydration(li0, a1);
      append_hydration(a1, i0);
      append_hydration(a1, t1);
      append_hydration(a1, sup0);
      append_hydration(sup0, t2);
      append_hydration(ul0, t3);
      append_hydration(ul0, li1);
      append_hydration(li1, a2);
      append_hydration(a2, i1);
      append_hydration(div3, t4);
      append_hydration(div3, div2);
      append_hydration(div2, div1);
      append_hydration(div1, input);
      ctx[7](input);
      append_hydration(div1, t5);
      append_hydration(div1, button0);
      append_hydration(button0, i2);
      append_hydration(div1, t6);
      append_hydration(div1, ul1);
      append_hydration(ul1, li2);
      append_hydration(li2, h5);
      append_hydration(h5, t7);
      append_hydration(ul1, t8);
      append_hydration(ul1, li3);
      append_hydration(li3, button1);
      append_hydration(button1, t9);
      append_hydration(ul1, t10);
      append_hydration(ul1, li4);
      append_hydration(li4, button2);
      append_hydration(button2, t11);
      append_hydration(ul1, t12);
      append_hydration(ul1, li5);
      append_hydration(li5, button3);
      append_hydration(button3, t13);
      append_hydration(ul1, t14);
      append_hydration(ul1, li6);
      append_hydration(li6, button4);
      append_hydration(button4, t15);
      append_hydration(ul1, t16);
      append_hydration(ul1, li7);
      append_hydration(li7, button5);
      append_hydration(button5, t17);
      append_hydration(ul1, t18);
      append_hydration(ul1, li8);
      append_hydration(li8, button6);
      append_hydration(button6, t19);
      append_hydration(ul1, t20);
      append_hydration(ul1, li9);
      append_hydration(li9, hr);
      append_hydration(ul1, t21);
      append_hydration(ul1, li10);
      append_hydration(li10, button7);
      append_hydration(button7, i3);
      append_hydration(button7, t22);
      append_hydration(ul1, t23);
      append_hydration(ul1, li11);
      append_hydration(li11, button8);
      append_hydration(button8, i4);
      append_hydration(button8, t24);
      append_hydration(ul1, t25);
      append_hydration(ul1, li12);
      append_hydration(li12, button9);
      append_hydration(button9, i5);
      append_hydration(button9, t26);
      insert_hydration(target, t27, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert_hydration(target, t28, anchor);
      insert_hydration(target, footer, anchor);
      append_hydration(footer, nav1);
      append_hydration(nav1, ul2);
      append_hydration(ul2, li13);
      append_hydration(li13, a3);
      append_hydration(a3, i6);
      append_hydration(ul2, t29);
      append_hydration(ul2, li14);
      append_hydration(li14, a4);
      append_hydration(a4, i7);
      append_hydration(ul2, t30);
      append_hydration(ul2, li15);
      append_hydration(li15, a5);
      append_hydration(a5, i8);
      append_hydration(a5, t31);
      append_hydration(a5, sup1);
      append_hydration(sup1, t32);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "click", ctx[8]),
          listen(button1, "click", ctx[9]),
          listen(button2, "click", ctx[10]),
          listen(button3, "click", ctx[11]),
          listen(button4, "click", ctx[12]),
          listen(button5, "click", ctx[13]),
          listen(button6, "click", ctx[14]),
          listen(button7, "click", ctx[15]),
          listen(button8, "click", ctx[16]),
          listen(button9, "click", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 2) && t2_value !== (t2_value = ctx2[1].length + ""))
        set_data(t2, t2_value);
      if (!current || dirty & 4 && i3_class_value !== (i3_class_value = "bi " + ctx2[4][ctx2[2].rating + 1])) {
        attr(i3, "class", i3_class_value);
      }
      if (!current || dirty & 4 && i4_class_value !== (i4_class_value = "bi " + ctx2[4][ctx2[2].basePrice + 1])) {
        attr(i4, "class", i4_class_value);
      }
      if (!current || dirty & 4 && i5_class_value !== (i5_class_value = "bi " + ctx2[4][ctx2[2].dailyPrice + 1])) {
        attr(i5, "class", i5_class_value);
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
        }
      }
      if ((!current || dirty & 2) && t32_value !== (t32_value = ctx2[1].length + ""))
        set_data(t32, t32_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(header);
      ctx[7](null);
      if (detaching)
        detach(t27);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t28);
      if (detaching)
        detach(footer);
      mounted = false;
      run_all(dispose);
    }
  };
}
function today(additionalDays = 0) {
  const today2 = new Date();
  today2.setDate(today2.getDate() + additionalDays);
  return today2;
}
function instance($$self, $$props, $$invalidate) {
  let $cartItems;
  let $sortBy;
  component_subscribe($$self, cartItems, ($$value) => $$invalidate(1, $cartItems = $$value));
  component_subscribe($$self, sortBy, ($$value) => $$invalidate(2, $sortBy = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let rangeInput;
  const sortSeq = [0, 1, -1];
  const sortSeqClass = ["bi-sort-down", "bi-filter", "bi-sort-up"];
  onMount(() => {
    const pickr = flatpickr(rangeInput, {
      mode: "range",
      minDate: "today",
      dateFormat: "M j Y",
      defaultDate: [today(1), today(2)],
      onChange: (selectedDates) => {
        rentalPeriod.set(selectedDates);
      },
      onReady: (selectedDates) => {
        rentalPeriod.set(selectedDates);
      },
      clickOpens: false,
      locale: { rangeSeparator: " - " }
    });
    document.addEventListener("scroll", () => pickr.close());
  });
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      rangeInput = $$value;
      $$invalidate(0, rangeInput);
    });
  }
  const click_handler = () => rangeInput._flatpickr.toggle();
  const click_handler_1 = () => category.set(void 0);
  const click_handler_2 = () => category.set("party");
  const click_handler_3 = () => category.set("cards");
  const click_handler_4 = () => category.set("dices");
  const click_handler_5 = () => category.set("puzzle");
  const click_handler_6 = () => category.set("mistery");
  const click_handler_7 = () => sortBy.update((o) => __spreadProps(__spreadValues({}, o), { rating: sortSeq[o.rating + 1] }));
  const click_handler_8 = () => sortBy.update((o) => __spreadProps(__spreadValues({}, o), {
    basePrice: sortSeq[o.basePrice + 1]
  }));
  const click_handler_9 = () => sortBy.update((o) => __spreadProps(__spreadValues({}, o), {
    dailyPrice: sortSeq[o.dailyPrice + 1]
  }));
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  return [
    rangeInput,
    $cartItems,
    $sortBy,
    sortSeq,
    sortSeqClass,
    $$scope,
    slots,
    input_binding,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4,
    click_handler_5,
    click_handler_6,
    click_handler_7,
    click_handler_8,
    click_handler_9
  ];
}
class _layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { _layout as default };
