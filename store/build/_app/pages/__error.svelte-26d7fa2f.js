import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, k as space, c as claim_element, a as children, g as claim_text, d as detach, n as claim_space, b as attr, f as insert_hydration, F as append_hydration, h as set_data, O as noop } from "../chunks/vendor-15d99854.js";
function create_fragment(ctx) {
  let main;
  let div1;
  let div0;
  let h2;
  let t0;
  let t1;
  let t2;
  let h4;
  let t3;
  return {
    c() {
      main = element("main");
      div1 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t0 = text("Error ");
      t1 = text(ctx[0]);
      t2 = space();
      h4 = element("h4");
      t3 = text(ctx[1]);
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      div1 = claim_element(main_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {});
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Error ");
      t1 = claim_text(h2_nodes, ctx[0]);
      h2_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      h4 = claim_element(div0_nodes, "H4", {});
      var h4_nodes = children(h4);
      t3 = claim_text(h4_nodes, ctx[1]);
      h4_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "col text-center p-4");
      attr(div1, "class", "row");
      attr(main, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, div1);
      append_hydration(div1, div0);
      append_hydration(div0, h2);
      append_hydration(h2, t0);
      append_hydration(h2, t1);
      append_hydration(div0, t2);
      append_hydration(div0, h4);
      append_hydration(h4, t3);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1)
        set_data(t1, ctx2[0]);
      if (dirty & 2)
        set_data(t3, ctx2[1]);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(main);
    }
  };
}
function load({ error, status }) {
  return {
    props: { message: error.message, status }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { status } = $$props;
  let { message } = $$props;
  $$self.$$set = ($$props2) => {
    if ("status" in $$props2)
      $$invalidate(0, status = $$props2.status);
    if ("message" in $$props2)
      $$invalidate(1, message = $$props2.message);
  };
  return [status, message];
}
class _error extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { status: 0, message: 1 });
  }
}
export { _error as default, load };
