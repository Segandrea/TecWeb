import {
  S as SvelteComponent,
  i as init,
  s as safe_not_equal,
  e as element,
  t as text,
  k as space,
  c as claim_element,
  a as children,
  g as claim_text,
  n as claim_space,
  d as detach,
  b as attr,
  V as toggle_class,
  f as insert_hydration,
  F as append_hydration,
  h as set_data,
  H as update_slot_base,
  I as get_all_dirty_from_scope,
  J as get_slot_changes,
  x as transition_in,
  u as transition_out,
  l as empty,
  r as group_outros,
  w as check_outros,
  D as create_slot,
} from "./vendor-15d99854.js";
function create_if_block(ctx) {
  let div;
  let t0_value = ctx[0].message + "";
  let t0;
  let t1;
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  return {
    c() {
      div = element("div");
      t0 = text(t0_value);
      t1 = space();
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, role: true });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, t0_value);
      t1 = claim_space(div_nodes);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "alert");
      attr(div, "role", "alert");
      toggle_class(div, "alert-danger", ctx[0].type === ERROR);
      toggle_class(div, "alert-success", ctx[0].type === INFO);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      append_hydration(div, t1);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (
        (!current || dirty & 1) &&
        t0_value !== (t0_value = ctx2[0].message + "")
      )
        set_data(t0, t0_value);
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
      if (dirty & 1) {
        toggle_class(div, "alert-danger", ctx2[0].type === ERROR);
      }
      if (dirty & 1) {
        toggle_class(div, "alert-success", ctx2[0].type === INFO);
      }
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) detach(div);
      if (default_slot) default_slot.d(detaching);
    },
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0].visible && create_if_block(ctx);
  return {
    c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[0].visible) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    },
  };
}
const INFO = "info";
const ERROR = "error";
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let alert = {
    type: void 0,
    message: void 0,
    visible: false,
    timeout: void 0,
  };
  function error(message, duration = 5e3) {
    clearTimeout(alert.timeout);
    $$invalidate(
      0,
      (alert = {
        type: ERROR,
        message,
        visible: true,
        timeout: setTimeout(() => {
          $$invalidate(0, (alert.visible = false), alert);
        }, duration),
      })
    );
  }
  function info(message, duration = 5e3) {
    clearTimeout(alert.timeout);
    $$invalidate(
      0,
      (alert = {
        type: INFO,
        message,
        visible: true,
        timeout: setTimeout(() => {
          $$invalidate(0, (alert.visible = false), alert);
        }, duration),
      })
    );
  }
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2) $$invalidate(3, ($$scope = $$props2.$$scope));
  };
  return [alert, error, info, $$scope, slots];
}
class Alert extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      error: 1,
      info: 2,
    });
  }
  get error() {
    return this.$$.ctx[1];
  }
  get info() {
    return this.$$.ctx[2];
  }
}
export { Alert as A };
