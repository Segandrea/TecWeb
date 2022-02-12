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
  O as noop,
  D as create_slot,
  j as create_component,
  m as claim_component,
  o as mount_component,
  W as set_input_value,
  G as listen,
  X as prevent_default,
  h as set_data,
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
  Y as to_number,
} from "../../../chunks/vendor-15d99854.js";
import { p as path } from "../../../chunks/utils-af6e44bf.js";
import {
  g as getJSON,
  o as onStatus,
  p as postJSON,
  r as redirectOnStatus,
} from "../../../chunks/http-cb35e292.js";
import { A as Alert } from "../../../chunks/Alert-0c6938a7.js";
import { g as goto } from "../../../chunks/navigation-51f4a605.js";
import { p as page } from "../../../chunks/stores-5878e4bb.js";
import "../../../chunks/paths-28a87002.js";
import "../../../chunks/singletons-12a22614.js";
var reviews_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  child_ctx[13] = i;
  return child_ctx;
}
function create_each_block(ctx) {
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
      if (!src_url_equal(img.src, (img_src_value = ctx[11].url)))
        attr(img, "src", img_src_value);
      attr(img, "class", "d-block m-auto h-100");
      attr(img, "alt", (img_alt_value = `${ctx[0].name} image ${ctx[13]}`));
      attr(div, "class", "carousel-item h-100");
      toggle_class(div, "active", ctx[13] === 0);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, img);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (
        dirty & 1 &&
        !src_url_equal(img.src, (img_src_value = ctx2[11].url))
      ) {
        attr(img, "src", img_src_value);
      }
      if (
        dirty & 1 &&
        img_alt_value !== (img_alt_value = `${ctx2[0].name} image ${ctx2[13]}`)
      ) {
        attr(img, "alt", img_alt_value);
      }
    },
    d(detaching) {
      if (detaching) detach(div);
    },
  };
}
function create_if_block_1(ctx) {
  let div1;
  let div0;
  let button;
  let t;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      button = element("button");
      t = text("Submit");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", { class: true, type: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Submit");
      button_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "btn btn-lg btn-warning my-2 w-100");
      attr(button, "type", "submit");
      toggle_class(button, "disabled", ctx[3]);
      attr(div0, "class", "col-auto");
      attr(div1, "class", "row justify-content-center");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, button);
      append_hydration(button, t);
    },
    p(ctx2, dirty) {
      if (dirty & 8) {
        toggle_class(button, "disabled", ctx2[3]);
      }
    },
    d(detaching) {
      if (detaching) detach(div1);
    },
  };
}
function create_if_block(ctx) {
  let div;
  let a;
  let t;
  let a_href_value;
  return {
    c() {
      div = element("div");
      a = element("a");
      t = text("Back to shopping");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", { class: true, href: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "Back to shopping");
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "class", "card-link");
      attr(a, "href", (a_href_value = path("/")));
      attr(div, "class", "text-center");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, a);
      append_hydration(a, t);
    },
    p: noop,
    d(detaching) {
      if (detaching) detach(div);
    },
  };
}
function create_fragment(ctx) {
  let main;
  let alert_1;
  let t0;
  let div1;
  let div0;
  let t1;
  let button0;
  let span0;
  let t2;
  let span1;
  let t3;
  let t4;
  let button1;
  let span2;
  let t5;
  let span3;
  let t6;
  let t7;
  let h2;
  let t8_value = ctx[0].name + "";
  let t8;
  let t9;
  let form;
  let div3;
  let div2;
  let label0;
  let t10;
  let t11;
  let starrating;
  let t12;
  let input;
  let t13;
  let div5;
  let div4;
  let label1;
  let t14;
  let t15;
  let textarea;
  let t16;
  let t17;
  let t18;
  let current;
  let mounted;
  let dispose;
  let alert_1_props = {};
  alert_1 = new Alert({ props: alert_1_props });
  ctx[7](alert_1);
  let each_value = ctx[0].images;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  starrating = new StarRating({
    props: {
      rating: ctx[2].rating,
      config: {
        emptyColor: "rgba(127, 127, 127, 0.1)",
        size: 16,
      },
      style: "justify-content: center;",
    },
  });
  let if_block0 = !ctx[3] && create_if_block_1(ctx);
  let if_block1 = ctx[3] && create_if_block();
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  return {
    c() {
      main = element("main");
      create_component(alert_1.$$.fragment);
      t0 = space();
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      button0 = element("button");
      span0 = element("span");
      t2 = space();
      span1 = element("span");
      t3 = text("Previous");
      t4 = space();
      button1 = element("button");
      span2 = element("span");
      t5 = space();
      span3 = element("span");
      t6 = text("Next");
      t7 = space();
      h2 = element("h2");
      t8 = text(t8_value);
      t9 = space();
      form = element("form");
      div3 = element("div");
      div2 = element("div");
      label0 = element("label");
      t10 = text("Rating");
      t11 = space();
      create_component(starrating.$$.fragment);
      t12 = space();
      input = element("input");
      t13 = space();
      div5 = element("div");
      div4 = element("div");
      label1 = element("label");
      t14 = text("Write your review");
      t15 = space();
      textarea = element("textarea");
      t16 = space();
      if (if_block0) if_block0.c();
      t17 = space();
      if (if_block1) if_block1.c();
      t18 = space();
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      claim_component(alert_1.$$.fragment, main_nodes);
      t0 = claim_space(main_nodes);
      div1 = claim_element(main_nodes, "DIV", {
        id: true,
        class: true,
        "data-bs-touch": true,
        "data-bs-interval": true,
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
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
      t2 = claim_space(button0_nodes);
      span1 = claim_element(button0_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t3 = claim_text(span1_nodes, "Previous");
      span1_nodes.forEach(detach);
      button0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
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
      t5 = claim_space(button1_nodes);
      span3 = claim_element(button1_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      t6 = claim_text(span3_nodes, "Next");
      span3_nodes.forEach(detach);
      button1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t7 = claim_space(main_nodes);
      h2 = claim_element(main_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t8 = claim_text(h2_nodes, t8_value);
      h2_nodes.forEach(detach);
      t9 = claim_space(main_nodes);
      form = claim_element(main_nodes, "FORM", { class: true });
      var form_nodes = children(form);
      div3 = claim_element(form_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      label0 = claim_element(div2_nodes, "LABEL", { for: true, class: true });
      var label0_nodes = children(label0);
      t10 = claim_text(label0_nodes, "Rating");
      label0_nodes.forEach(detach);
      t11 = claim_space(div2_nodes);
      claim_component(starrating.$$.fragment, div2_nodes);
      t12 = claim_space(div2_nodes);
      input = claim_element(div2_nodes, "INPUT", {
        id: true,
        name: true,
        type: true,
        class: true,
        min: true,
        max: true,
        step: true,
        placeholder: true,
      });
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t13 = claim_space(form_nodes);
      div5 = claim_element(form_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      label1 = claim_element(div4_nodes, "LABEL", { for: true, class: true });
      var label1_nodes = children(label1);
      t14 = claim_text(label1_nodes, "Write your review");
      label1_nodes.forEach(detach);
      t15 = claim_space(div4_nodes);
      textarea = claim_element(div4_nodes, "TEXTAREA", {
        class: true,
        id: true,
        name: true,
        rows: true,
        placeholder: true,
      });
      children(textarea).forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      t16 = claim_space(form_nodes);
      if (if_block0) if_block0.l(form_nodes);
      form_nodes.forEach(detach);
      t17 = claim_space(main_nodes);
      if (if_block1) if_block1.l(main_nodes);
      main_nodes.forEach(detach);
      t18 = claim_space(nodes);
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
      attr(h2, "class", "text-center text-decoration-underline mt-5");
      attr(label0, "for", "rating");
      attr(label0, "class", "fs-5");
      attr(input, "id", "rating");
      attr(input, "name", "rating");
      attr(input, "type", "range");
      attr(input, "class", "form-range");
      attr(input, "min", "0");
      attr(input, "max", "5");
      attr(input, "step", "0.1");
      attr(input, "placeholder", "rating value");
      input.required = true;
      attr(div2, "class", "col-auto");
      attr(div3, "class", "row justify-content-center text-center");
      attr(label1, "for", "content");
      attr(label1, "class", "fs-5 mt-3 mb-2");
      attr(textarea, "class", "form-control mb-3");
      attr(textarea, "id", "content");
      attr(textarea, "name", "content");
      attr(textarea, "rows", "6");
      attr(textarea, "placeholder", "How was your order?");
      textarea.required = true;
      attr(div4, "class", "col-md-10");
      attr(div5, "class", "row justify-content-center text-center");
      attr(form, "class", "mt-4");
      attr(main, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      mount_component(alert_1, main, null);
      append_hydration(main, t0);
      append_hydration(main, div1);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      append_hydration(div1, t1);
      append_hydration(div1, button0);
      append_hydration(button0, span0);
      append_hydration(button0, t2);
      append_hydration(button0, span1);
      append_hydration(span1, t3);
      append_hydration(div1, t4);
      append_hydration(div1, button1);
      append_hydration(button1, span2);
      append_hydration(button1, t5);
      append_hydration(button1, span3);
      append_hydration(span3, t6);
      append_hydration(main, t7);
      append_hydration(main, h2);
      append_hydration(h2, t8);
      append_hydration(main, t9);
      append_hydration(main, form);
      append_hydration(form, div3);
      append_hydration(div3, div2);
      append_hydration(div2, label0);
      append_hydration(label0, t10);
      append_hydration(div2, t11);
      mount_component(starrating, div2, null);
      append_hydration(div2, t12);
      append_hydration(div2, input);
      set_input_value(input, ctx[2].rating);
      append_hydration(form, t13);
      append_hydration(form, div5);
      append_hydration(div5, div4);
      append_hydration(div4, label1);
      append_hydration(label1, t14);
      append_hydration(div4, t15);
      append_hydration(div4, textarea);
      set_input_value(textarea, ctx[2].content);
      append_hydration(form, t16);
      if (if_block0) if_block0.m(form, null);
      append_hydration(main, t17);
      if (if_block1) if_block1.m(main, null);
      insert_hydration(target, t18, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "change", ctx[8]),
          listen(input, "input", ctx[8]),
          listen(textarea, "input", ctx[9]),
          listen(form, "submit", prevent_default(ctx[4])),
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const alert_1_changes = {};
      alert_1.$set(alert_1_changes);
      if (dirty & 1) {
        each_value = ctx2[0].images;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (
        (!current || dirty & 1) &&
        t8_value !== (t8_value = ctx2[0].name + "")
      )
        set_data(t8, t8_value);
      const starrating_changes = {};
      if (dirty & 4) starrating_changes.rating = ctx2[2].rating;
      starrating.$set(starrating_changes);
      if (dirty & 4) {
        set_input_value(input, ctx2[2].rating);
      }
      if (dirty & 4) {
        set_input_value(textarea, ctx2[2].content);
      }
      if (!ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          if_block0.m(form, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[3]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block();
          if_block1.c();
          if_block1.m(main, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[5],
            !current
              ? get_all_dirty_from_scope(ctx2[5])
              : get_slot_changes(default_slot_template, ctx2[5], dirty, null),
            null
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(alert_1.$$.fragment, local);
      transition_in(starrating.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(alert_1.$$.fragment, local);
      transition_out(starrating.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(main);
      ctx[7](null);
      destroy_component(alert_1);
      destroy_each(each_blocks, detaching);
      destroy_component(starrating);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (detaching) detach(t18);
      if (default_slot) default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
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
  let $page;
  component_subscribe($$self, page, ($$value) =>
    $$invalidate(10, ($page = $$value))
  );
  let { $$slots: slots = {}, $$scope } = $$props;
  let { product } = $$props;
  let alert;
  let review = { content: "", rating: 2.5 };
  let submitted = false;
  function createReview() {
    postJSON(`/api/store/products/${product._id}/reviews`, review)
      .then((body) => {
        $$invalidate(0, (product = body));
        $$invalidate(3, (submitted = true));
        alert.info("Thanks for your feedback");
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
      $$invalidate(1, alert);
    });
  }
  function input_change_input_handler() {
    review.rating = to_number(this.value);
    $$invalidate(2, review);
  }
  function textarea_input_handler() {
    review.content = this.value;
    $$invalidate(2, review);
  }
  $$self.$$set = ($$props2) => {
    if ("product" in $$props2) $$invalidate(0, (product = $$props2.product));
    if ("$$scope" in $$props2) $$invalidate(5, ($$scope = $$props2.$$scope));
  };
  return [
    product,
    alert,
    review,
    submitted,
    createReview,
    $$scope,
    slots,
    alert_1_binding,
    input_change_input_handler,
    textarea_input_handler,
  ];
}
class Reviews extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      product: 0,
    });
  }
}
export { Reviews as default, load };
