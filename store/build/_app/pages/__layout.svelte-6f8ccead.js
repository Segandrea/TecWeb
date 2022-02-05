import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, e as element, k as space, t as text, c as claim_element, a as children, d as detach, n as claim_space, g as claim_text, E as src_url_equal, b as attr, f as insert_hydration, F as append_hydration, G as listen, h as set_data, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, x as transition_in, u as transition_out, K as component_subscribe, A as onMount, L as binding_callbacks } from "../chunks/vendor-e8a33165.js";
import { c as cartItems, r as rentalPeriod } from "../chunks/stores-49d762e0.js";
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
  let span;
  let i2;
  let t6;
  let t7;
  let footer;
  let nav1;
  let ul1;
  let li2;
  let a3;
  let i3;
  let t8;
  let li3;
  let a4;
  let i4;
  let t9;
  let li4;
  let a5;
  let i5;
  let t10;
  let sup1;
  let t11_value = ctx[1].length + "";
  let t11;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
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
      span = element("span");
      i2 = element("i");
      t6 = space();
      if (default_slot)
        default_slot.c();
      t7 = space();
      footer = element("footer");
      nav1 = element("nav");
      ul1 = element("ul");
      li2 = element("li");
      a3 = element("a");
      i3 = element("i");
      t8 = space();
      li3 = element("li");
      a4 = element("a");
      i4 = element("i");
      t9 = space();
      li4 = element("li");
      a5 = element("a");
      i5 = element("i");
      t10 = space();
      sup1 = element("sup");
      t11 = text(t11_value);
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
      span = claim_element(div1_nodes, "SPAN", { id: true, class: true });
      var span_nodes = children(span);
      i2 = claim_element(span_nodes, "I", { class: true });
      children(i2).forEach(detach);
      span_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      nav0_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t6 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      t7 = claim_space(nodes);
      footer = claim_element(nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      nav1 = claim_element(footer_nodes, "NAV", { class: true });
      var nav1_nodes = children(nav1);
      ul1 = claim_element(nav1_nodes, "UL", { class: true });
      var ul1_nodes = children(ul1);
      li2 = claim_element(ul1_nodes, "LI", { class: true });
      var li2_nodes = children(li2);
      a3 = claim_element(li2_nodes, "A", { class: true, href: true });
      var a3_nodes = children(a3);
      i3 = claim_element(a3_nodes, "I", { class: true });
      children(i3).forEach(detach);
      a3_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      t8 = claim_space(ul1_nodes);
      li3 = claim_element(ul1_nodes, "LI", { class: true });
      var li3_nodes = children(li3);
      a4 = claim_element(li3_nodes, "A", { class: true, href: true });
      var a4_nodes = children(a4);
      i4 = claim_element(a4_nodes, "I", { class: true });
      children(i4).forEach(detach);
      a4_nodes.forEach(detach);
      li3_nodes.forEach(detach);
      t9 = claim_space(ul1_nodes);
      li4 = claim_element(ul1_nodes, "LI", { class: true });
      var li4_nodes = children(li4);
      a5 = claim_element(li4_nodes, "A", { class: true, href: true });
      var a5_nodes = children(a5);
      i5 = claim_element(a5_nodes, "I", { class: true });
      children(i5).forEach(detach);
      t10 = claim_space(a5_nodes);
      sup1 = claim_element(a5_nodes, "SUP", { class: true });
      var sup1_nodes = children(sup1);
      t11 = claim_text(sup1_nodes, t11_value);
      sup1_nodes.forEach(detach);
      a5_nodes.forEach(detach);
      li4_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
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
      attr(i2, "class", "bi bi-calendar-range");
      attr(span, "id", "calendarRange");
      attr(span, "class", "input-group-text bg-warning border-warning");
      attr(div1, "class", "input-group");
      attr(div3, "class", "container-fluid");
      attr(nav0, "class", "navbar navbar-expand navbar-dark bg-dark fixed-top");
      attr(i3, "class", "bi bi-person black");
      attr(a3, "class", "nav-link");
      attr(a3, "href", path("/profile"));
      attr(li2, "class", "nav-item");
      attr(i4, "class", "bi bi-house black");
      attr(a4, "class", "nav-link");
      attr(a4, "href", path("/"));
      attr(li3, "class", "nav-item");
      attr(i5, "class", "bi bi-handbag black");
      attr(sup1, "class", "fw-bolder orange");
      attr(a5, "class", "nav-link");
      attr(a5, "href", path("/cart"));
      attr(li4, "class", "nav-item");
      attr(ul1, "class", "navbar-nav w-100 justify-content-evenly");
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
      ctx[4](input);
      append_hydration(div1, t5);
      append_hydration(div1, span);
      append_hydration(span, i2);
      insert_hydration(target, t6, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert_hydration(target, t7, anchor);
      insert_hydration(target, footer, anchor);
      append_hydration(footer, nav1);
      append_hydration(nav1, ul1);
      append_hydration(ul1, li2);
      append_hydration(li2, a3);
      append_hydration(a3, i3);
      append_hydration(ul1, t8);
      append_hydration(ul1, li3);
      append_hydration(li3, a4);
      append_hydration(a4, i4);
      append_hydration(ul1, t9);
      append_hydration(ul1, li4);
      append_hydration(li4, a5);
      append_hydration(a5, i5);
      append_hydration(a5, t10);
      append_hydration(a5, sup1);
      append_hydration(sup1, t11);
      current = true;
      if (!mounted) {
        dispose = listen(input, "click", ctx[5]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 2) && t2_value !== (t2_value = ctx2[1].length + ""))
        set_data(t2, t2_value);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null), null);
        }
      }
      if ((!current || dirty & 2) && t11_value !== (t11_value = ctx2[1].length + ""))
        set_data(t11, t11_value);
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
      ctx[4](null);
      if (detaching)
        detach(t6);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(footer);
      mounted = false;
      dispose();
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
  component_subscribe($$self, cartItems, ($$value) => $$invalidate(1, $cartItems = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let rangeInput;
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
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [rangeInput, $cartItems, $$scope, slots, input_binding, click_handler];
}
class _layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { _layout as default };
