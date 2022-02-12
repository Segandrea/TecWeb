function noop() {}
function assign(tar, src) {
  for (const k in src) tar[k] = src[k];
  return tar;
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a
    ? b == b
    : a !== b || (a && typeof a === "object") || typeof a === "function";
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement("a");
  }
  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn
    ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
    : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === void 0) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot_base(
  slot,
  slot_definition,
  ctx,
  $$scope,
  slot_changes,
  get_slot_context_fn
) {
  if (slot_changes) {
    const slot_context = get_slot_context(
      slot_definition,
      ctx,
      $$scope,
      get_slot_context_fn
    );
    slot.p(slot_context, slot_changes);
  }
}
function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length = $$scope.ctx.length / 32;
    for (let i = 0; i < length; i++) {
      dirty[i] = -1;
    }
    return dirty;
  }
  return -1;
}
let is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function upper_bound(low, high, key, value) {
  while (low < high) {
    const mid = low + ((high - low) >> 1);
    if (key(mid) <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}
function init_hydrate(target) {
  if (target.hydrate_init) return;
  target.hydrate_init = true;
  let children2 = target.childNodes;
  if (target.nodeName === "HEAD") {
    const myChildren = [];
    for (let i = 0; i < children2.length; i++) {
      const node = children2[i];
      if (node.claim_order !== void 0) {
        myChildren.push(node);
      }
    }
    children2 = myChildren;
  }
  const m = new Int32Array(children2.length + 1);
  const p = new Int32Array(children2.length);
  m[0] = -1;
  let longest = 0;
  for (let i = 0; i < children2.length; i++) {
    const current = children2[i].claim_order;
    const seqLen =
      (longest > 0 && children2[m[longest]].claim_order <= current
        ? longest + 1
        : upper_bound(
            1,
            longest,
            (idx) => children2[m[idx]].claim_order,
            current
          )) - 1;
    p[i] = m[seqLen] + 1;
    const newLen = seqLen + 1;
    m[newLen] = i;
    longest = Math.max(newLen, longest);
  }
  const lis = [];
  const toMove = [];
  let last = children2.length - 1;
  for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
    lis.push(children2[cur - 1]);
    for (; last >= cur; last--) {
      toMove.push(children2[last]);
    }
    last--;
  }
  for (; last >= 0; last--) {
    toMove.push(children2[last]);
  }
  lis.reverse();
  toMove.sort((a, b) => a.claim_order - b.claim_order);
  for (let i = 0, j = 0; i < toMove.length; i++) {
    while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
      j++;
    }
    const anchor = j < lis.length ? lis[j] : null;
    target.insertBefore(toMove[i], anchor);
  }
}
function append_hydration(target, node) {
  if (is_hydrating) {
    init_hydrate(target);
    if (
      target.actual_end_child === void 0 ||
      (target.actual_end_child !== null &&
        target.actual_end_child.parentElement !== target)
    ) {
      target.actual_end_child = target.firstChild;
    }
    while (
      target.actual_end_child !== null &&
      target.actual_end_child.claim_order === void 0
    ) {
      target.actual_end_child = target.actual_end_child.nextSibling;
    }
    if (node !== target.actual_end_child) {
      if (node.claim_order !== void 0 || node.parentNode !== target) {
        target.insertBefore(node, target.actual_end_child);
      }
    } else {
      target.actual_end_child = node.nextSibling;
    }
  } else if (node.parentNode !== target || node.nextSibling !== null) {
    target.appendChild(node);
  }
}
function insert_hydration(target, node, anchor) {
  if (is_hydrating && !anchor) {
    append_hydration(target, node);
  } else if (node.parentNode !== target || node.nextSibling != anchor) {
    target.insertBefore(node, anchor || null);
  }
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
  return function (event) {
    event.preventDefault();
    return fn.call(this, event);
  };
}
function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function to_number(value) {
  return value === "" ? null : +value;
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function init_claim_info(nodes) {
  if (nodes.claim_info === void 0) {
    nodes.claim_info = { last_index: 0, total_claimed: 0 };
  }
}
function claim_node(
  nodes,
  predicate,
  processNode,
  createNode,
  dontUpdateLastIndex = false
) {
  init_claim_info(nodes);
  const resultNode = (() => {
    for (let i = nodes.claim_info.last_index; i < nodes.length; i++) {
      const node = nodes[i];
      if (predicate(node)) {
        const replacement = processNode(node);
        if (replacement === void 0) {
          nodes.splice(i, 1);
        } else {
          nodes[i] = replacement;
        }
        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = i;
        }
        return node;
      }
    }
    for (let i = nodes.claim_info.last_index - 1; i >= 0; i--) {
      const node = nodes[i];
      if (predicate(node)) {
        const replacement = processNode(node);
        if (replacement === void 0) {
          nodes.splice(i, 1);
        } else {
          nodes[i] = replacement;
        }
        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = i;
        } else if (replacement === void 0) {
          nodes.claim_info.last_index--;
        }
        return node;
      }
    }
    return createNode();
  })();
  resultNode.claim_order = nodes.claim_info.total_claimed;
  nodes.claim_info.total_claimed += 1;
  return resultNode;
}
function claim_element_base(nodes, name, attributes, create_element) {
  return claim_node(
    nodes,
    (node) => node.nodeName === name,
    (node) => {
      const remove = [];
      for (let j = 0; j < node.attributes.length; j++) {
        const attribute = node.attributes[j];
        if (!attributes[attribute.name]) {
          remove.push(attribute.name);
        }
      }
      remove.forEach((v) => node.removeAttribute(v));
      return void 0;
    },
    () => create_element(name)
  );
}
function claim_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, element);
}
function claim_svg_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, svg_element);
}
function claim_text(nodes, data) {
  return claim_node(
    nodes,
    (node) => node.nodeType === 3,
    (node) => {
      const dataStr = "" + data;
      if (node.data.startsWith(dataStr)) {
        if (node.data.length !== dataStr.length) {
          return node.splitText(dataStr.length);
        }
      } else {
        node.data = dataStr;
      }
    },
    () => text(data),
    true
  );
}
function claim_space(nodes) {
  return claim_text(nodes, " ");
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.wholeText !== data) text2.data = data;
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? "important" : "");
}
function toggle_class(element2, name, toggle) {
  element2.classList[toggle ? "add" : "remove"](name);
}
function query_selector_all(selector, parent = document.body) {
  return Array.from(parent.querySelectorAll(selector));
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
  if (flushing) return;
  flushing = true;
  do {
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    while (binding_callbacks.length) binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const outroing = new Set();
let outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros,
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2)) update2[key] = void 0;
  }
  return update2;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null
    ? spread_props
    : {};
}
function create_component(block) {
  block && block.c();
}
function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, on_mount, on_destroy, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[(i / 31) | 0] |= 1 << i % 31;
}
function init(
  component,
  options,
  instance2,
  create_fragment2,
  not_equal,
  props,
  append_styles,
  dirty = [-1]
) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = (component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(
      options.context || (parent_component ? parent_component.$$.context : [])
    ),
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root,
  });
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance2
    ? instance2(component, options.props || {}, (i, ret, ...rest) => {
        const value = rest.length ? rest[0] : ret;
        if ($$.ctx && not_equal($$.ctx[i], ($$.ctx[i] = value))) {
          if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
          if (ready) make_dirty(component, i);
        }
        return ret;
      })
    : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro) transition_in(component.$$.fragment);
    mount_component(
      component,
      options.target,
      options.anchor,
      options.customElement
    );
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
}
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe,
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) =>
      subscribe(
        store,
        (value) => {
          values[i] = value;
          pending &= ~(1 << i);
          if (inited) {
            sync();
          }
        },
        () => {
          pending |= 1 << i;
        }
      )
    );
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
var isNumber = (n) =>
  typeof n === "number" && n === Number(n) && Number.isFinite(n);
var makeUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);
var Star_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let defs;
  let linearGradient;
  let stop0;
  let stop1;
  let stop1_offset_value;
  let stop2;
  let stop2_offset_value;
  let linearGradient_id_value;
  return {
    c() {
      defs = svg_element("defs");
      linearGradient = svg_element("linearGradient");
      stop0 = svg_element("stop");
      stop1 = svg_element("stop");
      stop2 = svg_element("stop");
      this.h();
    },
    l(nodes) {
      defs = claim_svg_element(nodes, "defs", {});
      var defs_nodes = children(defs);
      linearGradient = claim_svg_element(defs_nodes, "linearGradient", {
        id: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
      });
      var linearGradient_nodes = children(linearGradient);
      stop0 = claim_svg_element(linearGradient_nodes, "stop", {
        offset: true,
        style: true,
      });
      children(stop0).forEach(detach);
      stop1 = claim_svg_element(linearGradient_nodes, "stop", {
        offset: true,
        style: true,
      });
      children(stop1).forEach(detach);
      stop2 = claim_svg_element(linearGradient_nodes, "stop", {
        offset: true,
        style: true,
      });
      children(stop2).forEach(detach);
      linearGradient_nodes.forEach(detach);
      defs_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(stop0, "offset", "0%");
      set_style(stop0, "stop-color", ctx[3]);
      set_style(stop0, "stop-opacity", "1");
      attr(stop1, "offset", (stop1_offset_value = "" + (ctx[0] * 100 + "%")));
      set_style(stop1, "stop-color", ctx[3]);
      set_style(stop1, "stop-opacity", "1");
      attr(stop2, "offset", (stop2_offset_value = "" + (ctx[0] * 100 + "%")));
      set_style(stop2, "stop-color", ctx[4]);
      set_style(stop2, "stop-opacity", "1");
      attr(linearGradient, "id", (linearGradient_id_value = "grad-" + ctx[1]));
      attr(linearGradient, "x1", "0%");
      attr(linearGradient, "y1", "0%");
      attr(linearGradient, "x2", "100%");
      attr(linearGradient, "y2", "0%");
    },
    m(target, anchor) {
      insert_hydration(target, defs, anchor);
      append_hydration(defs, linearGradient);
      append_hydration(linearGradient, stop0);
      append_hydration(linearGradient, stop1);
      append_hydration(linearGradient, stop2);
    },
    p(ctx2, dirty) {
      if (
        dirty & 1 &&
        stop1_offset_value !== (stop1_offset_value = "" + (ctx2[0] * 100 + "%"))
      ) {
        attr(stop1, "offset", stop1_offset_value);
      }
      if (
        dirty & 1 &&
        stop2_offset_value !== (stop2_offset_value = "" + (ctx2[0] * 100 + "%"))
      ) {
        attr(stop2, "offset", stop2_offset_value);
      }
      if (
        dirty & 2 &&
        linearGradient_id_value !==
          (linearGradient_id_value = "grad-" + ctx2[1])
      ) {
        attr(linearGradient, "id", linearGradient_id_value);
      }
    },
    d(detaching) {
      if (detaching) detach(defs);
    },
  };
}
function create_fragment$1(ctx) {
  let svg;
  let path;
  let path_fill_value;
  let if_block = ctx[0] !== 1 && ctx[0] !== 0 && create_if_block$1(ctx);
  return {
    c() {
      svg = svg_element("svg");
      if (if_block) if_block.c();
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        viewBox: true,
        height: true,
        style: true,
        class: true,
      });
      var svg_nodes = children(svg);
      if (if_block) if_block.l(svg_nodes);
      path = claim_svg_element(svg_nodes, "path", { fill: true, d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        path,
        "fill",
        (path_fill_value =
          ctx[0] === 1
            ? ctx[3]
            : ctx[0] === 0
            ? ctx[4]
            : `url(#grad-${ctx[1]})`)
      );
      attr(
        path,
        "d",
        "M187.183 57.47a9.955 9.955 0\n    00-8.587-6.86l-54.167-4.918-21.42-50.134a9.978 9.978 0 00-9.172-6.052 9.972\n    9.972 0 00-9.172 6.061l-21.42 50.125L9.07 50.611a9.973 9.973 0 00-8.578\n    6.858 9.964 9.964 0 002.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0\n    003.878 10.298A9.953 9.953 0 0042 169.357a9.937 9.937 0\n    005.114-1.424l46.724-27.925 46.707 27.925a9.936 9.936 0 0010.964-.478 9.979\n    9.979 0 003.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0\n    002.925-10.604zm0 0"
      );
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "249.748");
      attr(svg, "viewBox", "0 -10 187.673 179.503");
      attr(svg, "height", "239.338");
      set_style(svg, "--width", ctx[2]);
      set_style(svg, "--height", ctx[5]);
      attr(svg, "class", "svelte-7nhlqv");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      if (if_block) if_block.m(svg, null);
      append_hydration(svg, path);
    },
    p(ctx2, [dirty]) {
      if (ctx2[0] !== 1 && ctx2[0] !== 0) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(svg, path);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (
        dirty & 3 &&
        path_fill_value !==
          (path_fill_value =
            ctx2[0] === 1
              ? ctx2[3]
              : ctx2[0] === 0
              ? ctx2[4]
              : `url(#grad-${ctx2[1]})`)
      ) {
        attr(path, "fill", path_fill_value);
      }
      if (dirty & 4) {
        set_style(svg, "--width", ctx2[2]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) detach(svg);
      if (if_block) if_block.d();
    },
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { full } = $$props;
  let { id } = $$props;
  let { config = {} } = $$props;
  const fullColor = config.fullColor || "#ffcf00";
  const emptyColor = config.emptyColor || "#7f7f7f";
  let width = config.size && isNumber(config.size) ? config.size : 20;
  width = width + "px";
  const height = width;
  $$self.$$set = ($$props2) => {
    if ("full" in $$props2) $$invalidate(0, (full = $$props2.full));
    if ("id" in $$props2) $$invalidate(1, (id = $$props2.id));
    if ("config" in $$props2) $$invalidate(6, (config = $$props2.config));
  };
  return [full, id, width, fullColor, emptyColor, height, config];
}
class Star extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      full: 0,
      id: 1,
      config: 6,
    });
  }
}
var StarRating_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let star;
  let current;
  star = new Star({
    props: {
      id: ctx[0],
      full: ctx[12],
      config: ctx[3],
    },
  });
  return {
    c() {
      create_component(star.$$.fragment);
    },
    l(nodes) {
      claim_component(star.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(star, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const star_changes = {};
      if (dirty & 1) star_changes.id = ctx2[0];
      if (dirty & 32) star_changes.full = ctx2[12];
      if (dirty & 8) star_changes.config = ctx2[3];
      star.$set(star_changes);
    },
    i(local) {
      if (current) return;
      transition_in(star.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(star.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(star, detaching);
    },
  };
}
function create_if_block(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[1]);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { style: true, class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, ctx[1]);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(span, "font-size", ctx[4] + "px");
      attr(span, "class", "svelte-g1srw1");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2) set_data(t, ctx2[1]);
      if (dirty & 16) {
        set_style(span, "font-size", ctx2[4] + "px");
      }
    },
    d(detaching) {
      if (detaching) detach(span);
    },
  };
}
function create_fragment(ctx) {
  let div;
  let t;
  let current;
  let each_value = ctx[5];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) =>
    transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
  let if_block = ctx[3].showText && create_if_block(ctx);
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t = space();
      if (if_block) if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { style: true, class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      t = claim_space(div_nodes);
      if (if_block) if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "style", ctx[2]);
      attr(div, "class", "svelte-g1srw1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      append_hydration(div, t);
      if (if_block) if_block.m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & 41) {
        each_value = ctx2[5];
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
            each_blocks[i].m(div, t);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (ctx2[3].showText) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (!current || dirty & 4) {
        attr(div, "style", ctx2[2]);
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
      if (detaching) detach(div);
      destroy_each(each_blocks, detaching);
      if (if_block) if_block.d();
    },
  };
}
function instance($$self, $$props, $$invalidate) {
  let full;
  let half;
  let empty2;
  let fullArr;
  let halfArr;
  let emptyArr;
  let stars;
  let { id = makeUniqueId() } = $$props;
  let { rating } = $$props;
  let { style = "" } = $$props;
  let { config = {} } = $$props;
  let fontSize = config.size && isNumber(config.size) ? config.size : 20;
  fontSize = fontSize / 2 < 16 ? 16 : fontSize / 2;
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2) $$invalidate(0, (id = $$props2.id));
    if ("rating" in $$props2) $$invalidate(1, (rating = $$props2.rating));
    if ("style" in $$props2) $$invalidate(2, (style = $$props2.style));
    if ("config" in $$props2) $$invalidate(3, (config = $$props2.config));
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      if (!isNumber(rating) || rating < 0 || rating > 5) {
        throw new Error(
          "rating value is not valid! \u{1F645}\u200D\u2640\uFE0F"
        );
      }
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(11, (full = Math.floor(rating)));
    }
    if ($$self.$$.dirty & 2050) {
      $$invalidate(10, (half = Math.round((rating - full) * 100) / 100));
    }
    if ($$self.$$.dirty & 2) {
      $$invalidate(9, (empty2 = Math.floor(5 - rating)));
    }
    if ($$self.$$.dirty & 2048) {
      $$invalidate(8, (fullArr = Array(full).fill(1)));
    }
    if ($$self.$$.dirty & 1024) {
      $$invalidate(7, (halfArr = half !== 0 ? [half] : []));
    }
    if ($$self.$$.dirty & 512) {
      $$invalidate(6, (emptyArr = Array(empty2).fill(0)));
    }
    if ($$self.$$.dirty & 448) {
      $$invalidate(5, (stars = fullArr.concat(halfArr).concat(emptyArr)));
    }
  };
  return [
    id,
    rating,
    style,
    config,
    fontSize,
    stars,
    emptyArr,
    halfArr,
    fullArr,
    empty2,
    half,
    full,
  ];
}
class StarRating extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      id: 0,
      rating: 1,
      style: 2,
      config: 3,
    });
  }
}
export {
  onMount as A,
  assign as B,
  writable as C,
  create_slot as D,
  src_url_equal as E,
  append_hydration as F,
  listen as G,
  update_slot_base as H,
  get_all_dirty_from_scope as I,
  get_slot_changes as J,
  run_all as K,
  component_subscribe as L,
  binding_callbacks as M,
  derived as N,
  noop as O,
  query_selector_all as P,
  destroy_each as Q,
  onDestroy as R,
  SvelteComponent as S,
  set_style as T,
  StarRating as U,
  toggle_class as V,
  set_input_value as W,
  prevent_default as X,
  to_number as Y,
  getContext as Z,
  children as a,
  attr as b,
  claim_element as c,
  detach as d,
  element as e,
  insert_hydration as f,
  claim_text as g,
  set_data as h,
  init as i,
  create_component as j,
  space as k,
  empty as l,
  claim_component as m,
  claim_space as n,
  mount_component as o,
  get_spread_update as p,
  get_spread_object as q,
  group_outros as r,
  safe_not_equal as s,
  text as t,
  transition_out as u,
  destroy_component as v,
  check_outros as w,
  transition_in as x,
  setContext as y,
  afterUpdate as z,
};
