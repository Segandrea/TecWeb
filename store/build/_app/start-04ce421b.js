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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, c as claim_element, a as children, d as detach, b as attr, f as insert_hydration, t as text, g as claim_text, h as set_data, j as create_component, k as space, l as empty, m as claim_component, n as claim_space, o as mount_component, p as get_spread_update, q as get_spread_object, r as group_outros, u as transition_out, v as destroy_component, w as check_outros, x as transition_in, y as setContext, z as afterUpdate, A as onMount, B as assign, C as writable } from "./chunks/vendor-15d99854.js";
import { i as init$1 } from "./chunks/singletons-12a22614.js";
import { s as set_paths } from "./chunks/paths-28a87002.js";
var root_svelte_svelte_type_style_lang = "";
function create_if_block_2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [ctx[2] || {}];
  var switch_value = ctx[0][1];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty & 4 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(ctx2[2] || {})]) : {};
      if (dirty & 521) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[0][1])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [ctx[3] || {}];
  var switch_value = ctx[0][2];
  function switch_props(ctx2) {
    let switch_instance_props = {};
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty & 8 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(ctx2[3] || {})]) : {};
      if (switch_value !== (switch_value = ctx2[0][2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0][2] && create_if_block_3(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[0][2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_3(ctx2);
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
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0][1] && create_if_block_2(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[0][1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2(ctx2);
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
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let if_block = ctx[5] && create_if_block_1(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {
        id: true,
        "aria-live": true,
        "aria-atomic": true,
        class: true
      });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", "svelte-announcer");
      attr(div, "aria-live", "assertive");
      attr(div, "aria-atomic", "true");
      attr(div, "class", "svelte-1j55zn5");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (ctx2[5]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_1(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[6]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[6]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 64)
        set_data(t, ctx2[6]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment(ctx) {
  let switch_instance;
  let t;
  let if_block_anchor;
  let current;
  const switch_instance_spread_levels = [ctx[1] || {}];
  var switch_value = ctx[0][0];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  let if_block = ctx[4] && create_if_block(ctx);
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const switch_instance_changes = dirty & 2 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(ctx2[1] || {})]) : {};
      if (dirty & 525) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[0][0])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, t.parentNode, t);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
      if (ctx2[4]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (switch_instance)
        destroy_component(switch_instance, detaching);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        $$invalidate(5, navigated = true);
        $$invalidate(6, title = document.title || "untitled page");
      }
    });
    $$invalidate(4, mounted = true);
    return unsubscribe;
  });
  $$self.$$set = ($$props2) => {
    if ("stores" in $$props2)
      $$invalidate(7, stores = $$props2.stores);
    if ("page" in $$props2)
      $$invalidate(8, page = $$props2.page);
    if ("components" in $$props2)
      $$invalidate(0, components = $$props2.components);
    if ("props_0" in $$props2)
      $$invalidate(1, props_0 = $$props2.props_0);
    if ("props_1" in $$props2)
      $$invalidate(2, props_1 = $$props2.props_1);
    if ("props_2" in $$props2)
      $$invalidate(3, props_2 = $$props2.props_2);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 384) {
      stores.page.set(page);
    }
  };
  return [components, props_0, props_1, props_2, mounted, navigated, title, stores, page];
}
class Root extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      stores: 7,
      page: 8,
      components: 0,
      props_0: 1,
      props_1: 2,
      props_2: 3
    });
  }
}
const scriptRel = "modulepreload";
const seen = {};
const base = "/store/_app/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
const c = [
  () => __vitePreload(() => import("./pages/__layout.svelte-ecdda64d.js"), true ? ["pages/__layout.svelte-ecdda64d.js","assets/pages/__layout.svelte-7419ba8c.css","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css","chunks/stores-01e7ca86.js","chunks/utils-af6e44bf.js","chunks/paths-28a87002.js"] : void 0),
  () => __vitePreload(() => import("./pages/__error.svelte-26d7fa2f.js"), true ? ["pages/__error.svelte-26d7fa2f.js","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css"] : void 0),
  () => __vitePreload(() => import("./pages/index.svelte-00e11bd6.js"), true ? ["pages/index.svelte-00e11bd6.js","assets/pages/index.svelte-a76809cf.css","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css","chunks/http-cb35e292.js","chunks/Alert-0c6938a7.js","chunks/stores-01e7ca86.js","chunks/utils-af6e44bf.js","chunks/paths-28a87002.js"] : void 0),
  () => __vitePreload(() => import("./pages/products/_id_/reviews.svelte-f54b3806.js"), true ? ["pages/products/_id_/reviews.svelte-f54b3806.js","assets/pages/products/_id_/reviews.svelte-ec4ac2a0.css","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css","chunks/utils-af6e44bf.js","chunks/paths-28a87002.js","chunks/http-cb35e292.js","chunks/Alert-0c6938a7.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js","chunks/stores-5878e4bb.js"] : void 0),
  () => __vitePreload(() => import("./pages/products/_id_.svelte-4bb7bc51.js"), true ? ["pages/products/_id_.svelte-4bb7bc51.js","assets/pages/products/_id_/reviews.svelte-ec4ac2a0.css","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css","chunks/utils-af6e44bf.js","chunks/paths-28a87002.js","chunks/http-cb35e292.js","chunks/stores-01e7ca86.js","chunks/stores-5878e4bb.js"] : void 0),
  () => __vitePreload(() => import("./pages/profile.svelte-55f9adbc.js"), true ? ["pages/profile.svelte-55f9adbc.js","assets/pages/profile.svelte-bc367d25.css","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css","chunks/utils-af6e44bf.js","chunks/paths-28a87002.js","chunks/http-cb35e292.js","chunks/Alert-0c6938a7.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js","chunks/stores-5878e4bb.js","chunks/stores-01e7ca86.js"] : void 0),
  () => __vitePreload(() => import("./pages/orders/_id_.svelte-d499444f.js"), true ? ["pages/orders/_id_.svelte-d499444f.js","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css","chunks/utils-af6e44bf.js","chunks/paths-28a87002.js","chunks/http-cb35e292.js"] : void 0),
  () => __vitePreload(() => import("./pages/signin/__layout.reset.svelte-7b2f226d.js"), true ? ["pages/signin/__layout.reset.svelte-7b2f226d.js","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css"] : void 0),
  () => __vitePreload(() => import("./pages/signin/index.svelte-1d16d905.js"), true ? ["pages/signin/index.svelte-1d16d905.js","assets/pages/signin/index.svelte-4a33711b.css","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css","chunks/Alert-0c6938a7.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js","chunks/stores-5878e4bb.js","chunks/http-cb35e292.js","chunks/utils-af6e44bf.js","chunks/paths-28a87002.js"] : void 0),
  () => __vitePreload(() => import("./pages/signup/__layout.reset.svelte-fefd56be.js"), true ? ["pages/signup/__layout.reset.svelte-fefd56be.js","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css"] : void 0),
  () => __vitePreload(() => import("./pages/signup/index.svelte-1e6d5b2e.js"), true ? ["pages/signup/index.svelte-1e6d5b2e.js","assets/pages/signin/index.svelte-4a33711b.css","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css","chunks/Alert-0c6938a7.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js","chunks/stores-5878e4bb.js","chunks/http-cb35e292.js","chunks/utils-af6e44bf.js","chunks/paths-28a87002.js"] : void 0),
  () => __vitePreload(() => import("./pages/cart.svelte-ff0a0536.js"), true ? ["pages/cart.svelte-ff0a0536.js","chunks/vendor-15d99854.js","assets/vendor-53fd1125.css","chunks/utils-af6e44bf.js","chunks/paths-28a87002.js","chunks/Alert-0c6938a7.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js","chunks/stores-5878e4bb.js","chunks/http-cb35e292.js","chunks/stores-01e7ca86.js"] : void 0)
];
const d = decodeURIComponent;
const routes = [
  [/^\/$/, [c[0], c[2]], [c[1]]],
  [/^\/products\/([^/]+?)\/reviews\/?$/, [c[0], c[3]], [c[1]], (m) => ({ id: d(m[1]) })],
  [/^\/products\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ id: d(m[1]) })],
  [/^\/profile\/?$/, [c[0], c[5]], [c[1]]],
  [/^\/orders\/([^/]+?)\/?$/, [c[0], c[6]], [c[1]], (m) => ({ id: d(m[1]) })],
  [/^\/signin\/?$/, [c[7], c[8]], []],
  [/^\/signup\/?$/, [c[9], c[10]], []],
  [/^\/cart\/?$/, [c[0], c[11]], [c[1]]]
];
const fallback = [c[0](), c[1]()];
function get_base_uri(doc) {
  let baseURI = doc.baseURI;
  if (!baseURI) {
    const baseTags = doc.getElementsByTagName("base");
    baseURI = baseTags.length ? baseTags[0].href : doc.URL;
  }
  return baseURI;
}
function scroll_state() {
  return {
    x: pageXOffset,
    y: pageYOffset
  };
}
function find_anchor(node) {
  while (node && node.nodeName.toUpperCase() !== "A")
    node = node.parentNode;
  return node;
}
function get_href(node) {
  return node instanceof SVGAElement ? new URL(node.href.baseVal, document.baseURI) : new URL(node.href);
}
class Router {
  constructor({ base: base2, routes: routes2, trailing_slash, renderer }) {
    this.base = base2;
    this.routes = routes2;
    this.trailing_slash = trailing_slash;
    this.navigating = 0;
    this.renderer = renderer;
    renderer.router = this;
    this.enabled = true;
    document.body.setAttribute("tabindex", "-1");
    history.replaceState(history.state || {}, "", location.href);
  }
  init_listeners() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    addEventListener("beforeunload", () => {
      history.scrollRestoration = "auto";
    });
    addEventListener("load", () => {
      history.scrollRestoration = "manual";
    });
    let scroll_timer;
    addEventListener("scroll", () => {
      clearTimeout(scroll_timer);
      scroll_timer = setTimeout(() => {
        const new_state = __spreadProps(__spreadValues({}, history.state || {}), {
          "sveltekit:scroll": scroll_state()
        });
        history.replaceState(new_state, document.title, window.location.href);
      }, 200);
    });
    const trigger_prefetch = (event) => {
      const a = find_anchor(event.target);
      if (a && a.href && a.hasAttribute("sveltekit:prefetch")) {
        this.prefetch(get_href(a));
      }
    };
    let mousemove_timeout;
    const handle_mousemove = (event) => {
      clearTimeout(mousemove_timeout);
      mousemove_timeout = setTimeout(() => {
        trigger_prefetch(event);
      }, 20);
    };
    addEventListener("touchstart", trigger_prefetch);
    addEventListener("mousemove", handle_mousemove);
    addEventListener("click", (event) => {
      if (!this.enabled)
        return;
      if (event.button || event.which !== 1)
        return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      if (event.defaultPrevented)
        return;
      const a = find_anchor(event.target);
      if (!a)
        return;
      if (!a.href)
        return;
      const url = get_href(a);
      const url_string = url.toString();
      if (url_string === location.href) {
        if (!location.hash)
          event.preventDefault();
        return;
      }
      const rel = (a.getAttribute("rel") || "").split(/\s+/);
      if (a.hasAttribute("download") || rel && rel.includes("external")) {
        return;
      }
      if (a instanceof SVGAElement ? a.target.baseVal : a.target)
        return;
      if (!this.owns(url))
        return;
      const noscroll = a.hasAttribute("sveltekit:noscroll");
      const i1 = url_string.indexOf("#");
      const i2 = location.href.indexOf("#");
      const u1 = i1 >= 0 ? url_string.substring(0, i1) : url_string;
      const u2 = i2 >= 0 ? location.href.substring(0, i2) : location.href;
      history.pushState({}, "", url.href);
      if (u1 === u2) {
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
      this._navigate(url, noscroll ? scroll_state() : null, false, [], url.hash);
      event.preventDefault();
    });
    addEventListener("popstate", (event) => {
      if (event.state && this.enabled) {
        const url = new URL(location.href);
        this._navigate(url, event.state["sveltekit:scroll"], false, []);
      }
    });
  }
  owns(url) {
    return url.origin === location.origin && url.pathname.startsWith(this.base);
  }
  parse(url) {
    if (this.owns(url)) {
      const path = url.pathname.slice(this.base.length) || "/";
      const decoded_path = decodeURI(path);
      const routes2 = this.routes.filter(([pattern]) => pattern.test(decoded_path));
      const query = new URLSearchParams(url.search);
      const id = `${path}?${query}`;
      return { id, routes: routes2, path, decoded_path, query };
    }
  }
  async goto(href, { noscroll = false, replaceState = false, keepfocus = false, state = {} } = {}, chain) {
    const url = new URL(href, get_base_uri(document));
    if (this.enabled && this.owns(url)) {
      history[replaceState ? "replaceState" : "pushState"](state, "", href);
      return this._navigate(url, noscroll ? scroll_state() : null, keepfocus, chain, url.hash);
    }
    location.href = url.href;
    return new Promise(() => {
    });
  }
  enable() {
    this.enabled = true;
  }
  disable() {
    this.enabled = false;
  }
  async prefetch(url) {
    const info = this.parse(url);
    if (!info) {
      throw new Error("Attempted to prefetch a URL that does not belong to this app");
    }
    return this.renderer.load(info);
  }
  async _navigate(url, scroll, keepfocus, chain, hash2) {
    const info = this.parse(url);
    if (!info) {
      throw new Error("Attempted to navigate to a URL that does not belong to this app");
    }
    if (!this.navigating) {
      dispatchEvent(new CustomEvent("sveltekit:navigation-start"));
    }
    this.navigating++;
    if (info.path !== "/") {
      const has_trailing_slash = info.path.endsWith("/");
      const incorrect = has_trailing_slash && this.trailing_slash === "never" || !has_trailing_slash && this.trailing_slash === "always" && !(info.path.split("/").pop() || "").includes(".");
      if (incorrect) {
        info.path = has_trailing_slash ? info.path.slice(0, -1) : info.path + "/";
        history.replaceState({}, "", `${this.base}${info.path}${location.search}`);
      }
    }
    await this.renderer.handle_navigation(info, chain, false, { hash: hash2, scroll, keepfocus });
    this.navigating--;
    if (!this.navigating) {
      dispatchEvent(new CustomEvent("sveltekit:navigation-end"));
    }
  }
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
function normalize(loaded) {
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return {
        status: status || 500,
        error: new Error()
      };
    }
    const error = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error };
    }
    return { status, error };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  if (loaded.context) {
    throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
  }
  return loaded;
}
function page_store(value) {
  const store = writable(value);
  let ready = true;
  function notify() {
    ready = true;
    store.update((val) => val);
  }
  function set(new_value) {
    ready = false;
    store.set(new_value);
  }
  function subscribe(run) {
    let old_value;
    return store.subscribe((new_value) => {
      if (old_value === void 0 || ready && new_value !== old_value) {
        run(old_value = new_value);
      }
    });
  }
  return { notify, set, subscribe };
}
function initial_fetch(resource, opts) {
  const url = typeof resource === "string" ? resource : resource.url;
  let selector = `script[data-type="svelte-data"][data-url=${JSON.stringify(url)}]`;
  if (opts && typeof opts.body === "string") {
    selector += `[data-body="${hash(opts.body)}"]`;
  }
  const script = document.querySelector(selector);
  if (script && script.textContent) {
    const _a = JSON.parse(script.textContent), { body } = _a, init2 = __objRest(_a, ["body"]);
    return Promise.resolve(new Response(body, init2));
  }
  return fetch(resource, opts);
}
class Renderer {
  constructor({ Root: Root2, fallback: fallback2, target, session, host }) {
    this.Root = Root2;
    this.fallback = fallback2;
    this.host = host;
    this.router;
    this.target = target;
    this.started = false;
    this.session_id = 1;
    this.invalid = new Set();
    this.invalidating = null;
    this.current = {
      page: null,
      session_id: 0,
      branch: []
    };
    this.cache = new Map();
    this.loading = {
      id: null,
      promise: null
    };
    this.stores = {
      page: page_store({}),
      navigating: writable(null),
      session: writable(session)
    };
    this.$session = null;
    this.root = null;
    let ready = false;
    this.stores.session.subscribe(async (value) => {
      this.$session = value;
      if (!ready || !this.router)
        return;
      this.session_id += 1;
      const info = this.router.parse(new URL(location.href));
      if (info)
        this.update(info, [], true);
    });
    ready = true;
  }
  async start({ status, error, nodes, page }) {
    const branch = [];
    let stuff = {};
    let result;
    let error_args;
    try {
      for (let i = 0; i < nodes.length; i += 1) {
        const is_leaf = i === nodes.length - 1;
        const node = await this._load_node({
          module: await nodes[i],
          page,
          stuff,
          status: is_leaf ? status : void 0,
          error: is_leaf ? error : void 0
        });
        branch.push(node);
        if (node && node.loaded) {
          if (node.loaded.error) {
            if (error)
              throw node.loaded.error;
            error_args = {
              status: node.loaded.status,
              error: node.loaded.error,
              path: page.path,
              query: page.query
            };
          } else if (node.loaded.stuff) {
            stuff = __spreadValues(__spreadValues({}, stuff), node.loaded.stuff);
          }
        }
      }
      result = error_args ? await this._load_error(error_args) : await this._get_navigation_result_from_branch({ page, branch });
    } catch (e) {
      if (error)
        throw e;
      result = await this._load_error({
        status: 500,
        error: coalesce_to_error(e),
        path: page.path,
        query: page.query
      });
    }
    if (result.redirect) {
      location.href = new URL(result.redirect, location.href).href;
      return;
    }
    this._init(result);
  }
  async handle_navigation(info, chain, no_cache, opts) {
    if (this.started) {
      this.stores.navigating.set({
        from: {
          path: this.current.page.path,
          query: this.current.page.query
        },
        to: {
          path: info.path,
          query: info.query
        }
      });
    }
    await this.update(info, chain, no_cache, opts);
  }
  async update(info, chain, no_cache, opts) {
    var _a;
    const token = this.token = {};
    let navigation_result = await this._get_navigation_result(info, no_cache);
    if (token !== this.token)
      return;
    this.invalid.clear();
    if (navigation_result.redirect) {
      if (chain.length > 10 || chain.includes(info.path)) {
        navigation_result = await this._load_error({
          status: 500,
          error: new Error("Redirect loop"),
          path: info.path,
          query: info.query
        });
      } else {
        if (this.router) {
          this.router.goto(navigation_result.redirect, { replaceState: true }, [
            ...chain,
            info.path
          ]);
        } else {
          location.href = new URL(navigation_result.redirect, location.href).href;
        }
        return;
      }
    }
    if (navigation_result.reload) {
      location.reload();
    } else if (this.started) {
      this.current = navigation_result.state;
      this.root.$set(navigation_result.props);
      this.stores.navigating.set(null);
    } else {
      this._init(navigation_result);
    }
    (_a = getSelection()) == null ? void 0 : _a.removeAllRanges();
    if (!opts) {
      await 0;
    } else {
      const { hash: hash2, scroll, keepfocus } = opts;
      if (!keepfocus) {
        document.body.focus();
      }
      const old_page_y_offset = Math.round(pageYOffset);
      const old_max_page_y_offset = document.documentElement.scrollHeight - innerHeight;
      await 0;
      const new_page_y_offset = Math.round(pageYOffset);
      const new_max_page_y_offset = document.documentElement.scrollHeight - innerHeight;
      const no_scroll_happened = new_page_y_offset === Math.min(old_page_y_offset, new_max_page_y_offset) || old_max_page_y_offset - old_page_y_offset === new_max_page_y_offset - new_page_y_offset;
      if (no_scroll_happened) {
        const deep_linked = hash2 && document.getElementById(hash2.slice(1));
        if (scroll) {
          scrollTo(scroll.x, scroll.y);
        } else if (deep_linked) {
          deep_linked.scrollIntoView();
        } else {
          scrollTo(0, 0);
        }
      }
    }
    this.loading.promise = null;
    this.loading.id = null;
    if (!this.router)
      return;
    const leaf_node = navigation_result.state.branch[navigation_result.state.branch.length - 1];
    if (leaf_node && leaf_node.module.router === false) {
      this.router.disable();
    } else {
      this.router.enable();
    }
  }
  load(info) {
    this.loading.promise = this._get_navigation_result(info, false);
    this.loading.id = info.id;
    return this.loading.promise;
  }
  invalidate(href) {
    this.invalid.add(href);
    if (!this.invalidating) {
      this.invalidating = Promise.resolve().then(async () => {
        const info = this.router && this.router.parse(new URL(location.href));
        if (info)
          await this.update(info, [], true);
        this.invalidating = null;
      });
    }
    return this.invalidating;
  }
  _init(result) {
    this.current = result.state;
    const style = document.querySelector("style[data-svelte]");
    if (style)
      style.remove();
    this.root = new this.Root({
      target: this.target,
      props: __spreadValues({
        stores: this.stores
      }, result.props),
      hydrate: true
    });
    this.started = true;
  }
  async _get_navigation_result(info, no_cache) {
    if (this.loading.id === info.id && this.loading.promise) {
      return this.loading.promise;
    }
    for (let i = 0; i < info.routes.length; i += 1) {
      const route = info.routes[i];
      let j = i + 1;
      while (j < info.routes.length) {
        const next = info.routes[j];
        if (next[0].toString() === route[0].toString()) {
          next[1].forEach((loader) => loader());
          j += 1;
        } else {
          break;
        }
      }
      const result = await this._load({
        route,
        info
      }, no_cache);
      if (result)
        return result;
    }
    return await this._load_error({
      status: 404,
      error: new Error(`Not found: ${info.path}`),
      path: info.path,
      query: info.query
    });
  }
  async _get_navigation_result_from_branch({ page, branch }) {
    const filtered = branch.filter(Boolean);
    const redirect = filtered.find((f) => f.loaded && f.loaded.redirect);
    const result = {
      redirect: redirect && redirect.loaded ? redirect.loaded.redirect : void 0,
      state: {
        page,
        branch,
        session_id: this.session_id
      },
      props: {
        components: filtered.map((node) => node.module.default)
      }
    };
    for (let i = 0; i < filtered.length; i += 1) {
      const loaded = filtered[i].loaded;
      result.props[`props_${i}`] = loaded ? await loaded.props : null;
    }
    if (!this.current.page || page.path !== this.current.page.path || page.query.toString() !== this.current.page.query.toString()) {
      result.props.page = page;
    }
    const leaf = filtered[filtered.length - 1];
    const maxage = leaf.loaded && leaf.loaded.maxage;
    if (maxage) {
      const key = `${page.path}?${page.query}`;
      let ready = false;
      const clear = () => {
        if (this.cache.get(key) === result) {
          this.cache.delete(key);
        }
        unsubscribe();
        clearTimeout(timeout);
      };
      const timeout = setTimeout(clear, maxage * 1e3);
      const unsubscribe = this.stores.session.subscribe(() => {
        if (ready)
          clear();
      });
      ready = true;
      this.cache.set(key, result);
    }
    return result;
  }
  async _load_node({ status, error, module, page, stuff }) {
    const node = {
      module,
      uses: {
        params: new Set(),
        path: false,
        query: false,
        session: false,
        stuff: false,
        dependencies: []
      },
      loaded: null,
      stuff
    };
    const params = {};
    for (const key in page.params) {
      Object.defineProperty(params, key, {
        get() {
          node.uses.params.add(key);
          return page.params[key];
        },
        enumerable: true
      });
    }
    const session = this.$session;
    if (module.load) {
      const { started } = this;
      const load_input = {
        page: {
          host: page.host,
          params,
          get path() {
            node.uses.path = true;
            return page.path;
          },
          get query() {
            node.uses.query = true;
            return page.query;
          }
        },
        get session() {
          node.uses.session = true;
          return session;
        },
        get stuff() {
          node.uses.stuff = true;
          return __spreadValues({}, stuff);
        },
        fetch(resource, info) {
          const url = typeof resource === "string" ? resource : resource.url;
          const { href } = new URL(url, new URL(page.path, document.baseURI));
          node.uses.dependencies.push(href);
          return started ? fetch(resource, info) : initial_fetch(resource, info);
        }
      };
      if (error) {
        load_input.status = status;
        load_input.error = error;
      }
      const loaded = await module.load.call(null, load_input);
      if (!loaded)
        return;
      node.loaded = normalize(loaded);
      if (node.loaded.stuff)
        node.stuff = node.loaded.stuff;
    }
    return node;
  }
  async _load({ route, info: { path, decoded_path, query } }, no_cache) {
    const key = `${decoded_path}?${query}`;
    if (!no_cache) {
      const cached = this.cache.get(key);
      if (cached)
        return cached;
    }
    const [pattern, a, b, get_params] = route;
    const params = get_params ? get_params(pattern.exec(decoded_path)) : {};
    const changed = this.current.page && {
      path: path !== this.current.page.path,
      params: Object.keys(params).filter((key2) => this.current.page.params[key2] !== params[key2]),
      query: query.toString() !== this.current.page.query.toString(),
      session: this.session_id !== this.current.session_id
    };
    const page = { host: this.host, path, query, params };
    let branch = [];
    let stuff = {};
    let stuff_changed = false;
    let status = 200;
    let error;
    a.forEach((loader) => loader());
    load:
      for (let i = 0; i < a.length; i += 1) {
        let node;
        try {
          if (!a[i])
            continue;
          const module = await a[i]();
          const previous = this.current.branch[i];
          const changed_since_last_render = !previous || module !== previous.module || changed.path && previous.uses.path || changed.params.some((param) => previous.uses.params.has(param)) || changed.query && previous.uses.query || changed.session && previous.uses.session || previous.uses.dependencies.some((dep) => this.invalid.has(dep)) || stuff_changed && previous.uses.stuff;
          if (changed_since_last_render) {
            node = await this._load_node({
              module,
              page,
              stuff
            });
            const is_leaf = i === a.length - 1;
            if (node && node.loaded) {
              if (node.loaded.error) {
                status = node.loaded.status;
                error = node.loaded.error;
              }
              if (node.loaded.redirect) {
                return {
                  redirect: node.loaded.redirect,
                  props: {},
                  state: this.current
                };
              }
              if (node.loaded.stuff) {
                stuff_changed = true;
              }
            } else if (is_leaf && module.load) {
              return;
            }
          } else {
            node = previous;
          }
        } catch (e) {
          status = 500;
          error = coalesce_to_error(e);
        }
        if (error) {
          while (i--) {
            if (b[i]) {
              let error_loaded;
              let node_loaded;
              let j = i;
              while (!(node_loaded = branch[j])) {
                j -= 1;
              }
              try {
                error_loaded = await this._load_node({
                  status,
                  error,
                  module: await b[i](),
                  page,
                  stuff: node_loaded.stuff
                });
                if (error_loaded && error_loaded.loaded && error_loaded.loaded.error) {
                  continue;
                }
                branch = branch.slice(0, j + 1).concat(error_loaded);
                break load;
              } catch (e) {
                continue;
              }
            }
          }
          return await this._load_error({
            status,
            error,
            path,
            query
          });
        } else {
          if (node && node.loaded && node.loaded.stuff) {
            stuff = __spreadValues(__spreadValues({}, stuff), node.loaded.stuff);
          }
          branch.push(node);
        }
      }
    return await this._get_navigation_result_from_branch({ page, branch });
  }
  async _load_error({ status, error, path, query }) {
    const page = {
      host: this.host,
      path,
      query,
      params: {}
    };
    const node = await this._load_node({
      module: await this.fallback[0],
      page,
      stuff: {}
    });
    const branch = [
      node,
      await this._load_node({
        status,
        error,
        module: await this.fallback[1],
        page,
        stuff: node && node.loaded && node.loaded.stuff || {}
      })
    ];
    return await this._get_navigation_result_from_branch({ page, branch });
  }
}
async function start({ paths, target, session, host, route, spa, trailing_slash, hydrate }) {
  const renderer = new Renderer({
    Root,
    fallback,
    target,
    session,
    host
  });
  const router = route ? new Router({
    base: paths.base,
    routes,
    trailing_slash,
    renderer
  }) : null;
  init$1(router);
  set_paths(paths);
  if (hydrate)
    await renderer.start(hydrate);
  if (router) {
    if (spa)
      router.goto(location.href, { replaceState: true }, []);
    router.init_listeners();
  }
  dispatchEvent(new CustomEvent("sveltekit:start"));
}
export { start };
