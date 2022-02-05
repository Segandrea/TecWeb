import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, e as element, t as text, k as space, j as create_component, P as query_selector_all, c as claim_element, a as children, g as claim_text, d as detach, n as claim_space, m as claim_component, E as src_url_equal, b as attr, F as append_hydration, f as insert_hydration, o as mount_component, W as set_input_value, G as listen, X as prevent_default, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, x as transition_in, u as transition_out, v as destroy_component, K as run_all, L as component_subscribe, A as onMount, M as binding_callbacks } from "../../chunks/vendor-15d99854.js";
import { A as Alert, g as goto } from "../../chunks/navigation-67443bd6.js";
import { p as page } from "../../chunks/stores-5878e4bb.js";
import { p as postJSON, o as onStatus } from "../../chunks/http-cb35e292.js";
import { p as path } from "../../chunks/utils-af6e44bf.js";
import "../../chunks/singletons-12a22614.js";
import "../../chunks/paths-28a87002.js";
var index_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let style;
  let t0;
  let t1;
  let main;
  let div3;
  let div2;
  let a0;
  let img;
  let img_src_value;
  let t2;
  let h1;
  let t3;
  let t4;
  let form;
  let alert_1;
  let t5;
  let div0;
  let input0;
  let t6;
  let label0;
  let t7;
  let t8;
  let div1;
  let input1;
  let t9;
  let label1;
  let t10;
  let t11;
  let button;
  let t12;
  let t13;
  let p;
  let t14;
  let a1;
  let t15;
  let t16;
  let current;
  let mounted;
  let dispose;
  let alert_1_props = {};
  alert_1 = new Alert({ props: alert_1_props });
  ctx[6](alert_1);
  const default_slot_template = ctx[5].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[4], null);
  return {
    c() {
      style = element("style");
      t0 = text("body {\n      background-color: #f5f5f5;\n    }");
      t1 = space();
      main = element("main");
      div3 = element("div");
      div2 = element("div");
      a0 = element("a");
      img = element("img");
      t2 = space();
      h1 = element("h1");
      t3 = text("Welcome back!");
      t4 = space();
      form = element("form");
      create_component(alert_1.$$.fragment);
      t5 = space();
      div0 = element("div");
      input0 = element("input");
      t6 = space();
      label0 = element("label");
      t7 = text("Email");
      t8 = space();
      div1 = element("div");
      input1 = element("input");
      t9 = space();
      label1 = element("label");
      t10 = text("Password");
      t11 = space();
      button = element("button");
      t12 = text("Sign in");
      t13 = space();
      p = element("p");
      t14 = text("Don't have an account yet? ");
      a1 = element("a");
      t15 = text("Sign up");
      t16 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-lc09lw"]', document.head);
      style = claim_element(head_nodes, "STYLE", {});
      var style_nodes = children(style);
      t0 = claim_text(style_nodes, "body {\n      background-color: #f5f5f5;\n    }");
      style_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      div3 = claim_element(main_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      a0 = claim_element(div2_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", { src: true, alt: true });
      a0_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      h1 = claim_element(div2_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t3 = claim_text(h1_nodes, "Welcome back!");
      h1_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      form = claim_element(div2_nodes, "FORM", { class: true });
      var form_nodes = children(form);
      claim_component(alert_1.$$.fragment, form_nodes);
      t5 = claim_space(form_nodes);
      div0 = claim_element(form_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      input0 = claim_element(div0_nodes, "INPUT", {
        id: true,
        type: true,
        name: true,
        autocomplete: true,
        placeholder: true,
        class: true
      });
      t6 = claim_space(div0_nodes);
      label0 = claim_element(div0_nodes, "LABEL", { for: true });
      var label0_nodes = children(label0);
      t7 = claim_text(label0_nodes, "Email");
      label0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t8 = claim_space(form_nodes);
      div1 = claim_element(form_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      input1 = claim_element(div1_nodes, "INPUT", {
        id: true,
        type: true,
        name: true,
        autocomplete: true,
        placeholder: true,
        class: true,
        minlength: true
      });
      t9 = claim_space(div1_nodes);
      label1 = claim_element(div1_nodes, "LABEL", { for: true });
      var label1_nodes = children(label1);
      t10 = claim_text(label1_nodes, "Password");
      label1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t11 = claim_space(form_nodes);
      button = claim_element(form_nodes, "BUTTON", { class: true, type: true });
      var button_nodes = children(button);
      t12 = claim_text(button_nodes, "Sign in");
      button_nodes.forEach(detach);
      t13 = claim_space(form_nodes);
      p = claim_element(form_nodes, "P", { class: true });
      var p_nodes = children(p);
      t14 = claim_text(p_nodes, "Don't have an account yet? ");
      a1 = claim_element(p_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t15 = claim_text(a1_nodes, "Sign up");
      a1_nodes.forEach(detach);
      p_nodes.forEach(detach);
      form_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      main_nodes.forEach(detach);
      t16 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = path("/nolonoloplus-dark.png")))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Nolo Nolo Plus Logo");
      attr(a0, "href", path("/"));
      attr(h1, "class", "my-4 fw-normal");
      attr(input0, "id", "email");
      attr(input0, "type", "email");
      attr(input0, "name", "email");
      attr(input0, "autocomplete", "email");
      attr(input0, "placeholder", "email@example.com");
      attr(input0, "class", "form-control rounded-0 rounded-top");
      input0.required = true;
      attr(label0, "for", "email");
      attr(div0, "class", "form-floating svelte-1m6hkte");
      attr(input1, "id", "password");
      attr(input1, "type", "password");
      attr(input1, "name", "password");
      attr(input1, "autocomplete", "current-password");
      attr(input1, "placeholder", "Password");
      attr(input1, "class", "form-control rounded-0 rounded-bottom");
      attr(input1, "minlength", "4");
      input1.required = true;
      attr(label1, "for", "password");
      attr(div1, "class", "form-floating svelte-1m6hkte");
      attr(button, "class", "btn btn-lg btn-warning w-100 mt-4");
      attr(button, "type", "submit");
      attr(a1, "href", path("/signup"));
      attr(a1, "class", "link-dark");
      attr(p, "class", "mt-2");
      attr(form, "class", "svelte-1m6hkte");
      attr(div2, "class", "col m-auto");
      attr(div3, "class", "row d-flex text-center align-items-center m-auto w-100 h-100");
      attr(main, "class", "w-100 h-100 container");
    },
    m(target, anchor) {
      append_hydration(document.head, style);
      append_hydration(style, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, main, anchor);
      append_hydration(main, div3);
      append_hydration(div3, div2);
      append_hydration(div2, a0);
      append_hydration(a0, img);
      append_hydration(div2, t2);
      append_hydration(div2, h1);
      append_hydration(h1, t3);
      append_hydration(div2, t4);
      append_hydration(div2, form);
      mount_component(alert_1, form, null);
      append_hydration(form, t5);
      append_hydration(form, div0);
      append_hydration(div0, input0);
      set_input_value(input0, ctx[2].email);
      ctx[8](input0);
      append_hydration(div0, t6);
      append_hydration(div0, label0);
      append_hydration(label0, t7);
      append_hydration(form, t8);
      append_hydration(form, div1);
      append_hydration(div1, input1);
      set_input_value(input1, ctx[2].password);
      append_hydration(div1, t9);
      append_hydration(div1, label1);
      append_hydration(label1, t10);
      append_hydration(form, t11);
      append_hydration(form, button);
      append_hydration(button, t12);
      append_hydration(form, t13);
      append_hydration(form, p);
      append_hydration(p, t14);
      append_hydration(p, a1);
      append_hydration(a1, t15);
      insert_hydration(target, t16, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(input0, "input", ctx[7]),
          listen(input1, "input", ctx[9]),
          listen(form, "submit", prevent_default(ctx[3]))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const alert_1_changes = {};
      alert_1.$set(alert_1_changes);
      if (dirty & 4 && input0.value !== ctx2[2].email) {
        set_input_value(input0, ctx2[2].email);
      }
      if (dirty & 4 && input1.value !== ctx2[2].password) {
        set_input_value(input1, ctx2[2].password);
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[4], !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(default_slot_template, ctx2[4], dirty, null), null);
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
      detach(style);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(main);
      ctx[6](null);
      destroy_component(alert_1);
      ctx[8](null);
      if (detaching)
        detach(t16);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(10, $page = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let alert;
  let emailInput;
  let customer = {};
  onMount(() => {
    if ($page.query.has("required")) {
      $page.query.delete("requied");
      alert.error("Signin required");
    }
  });
  function signin() {
    postJSON("/api/store/signin", customer).then((body) => {
      const returnTo = $page.query.get("returnTo") || path("/");
      sessionStorage.setItem("user", JSON.stringify(body));
      goto(returnTo);
    }).catch(onStatus(401, () => {
      $$invalidate(2, customer = {});
      emailInput.focus();
      alert.error("Signin required");
    })).catch((err) => {
      console.error(err);
      alert.error("Something went wrong!");
    });
  }
  function alert_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      alert = $$value;
      $$invalidate(0, alert);
    });
  }
  function input0_input_handler() {
    customer.email = this.value;
    $$invalidate(2, customer);
  }
  function input0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      emailInput = $$value;
      $$invalidate(1, emailInput);
    });
  }
  function input1_input_handler() {
    customer.password = this.value;
    $$invalidate(2, customer);
  }
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [
    alert,
    emailInput,
    customer,
    signin,
    $$scope,
    slots,
    alert_1_binding,
    input0_input_handler,
    input0_binding,
    input1_input_handler
  ];
}
class Signin extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Signin as default };
