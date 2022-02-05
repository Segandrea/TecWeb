import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, k as space, c as claim_element, a as children, g as claim_text, d as detach, n as claim_space, b as attr, f as insert_hydration, F as append_hydration, h as set_data, P as destroy_each, E as src_url_equal, N as noop } from "../../chunks/vendor-e8a33165.js";
import { i as isAuth, p as path, f as formatDate } from "../../chunks/utils-af6e44bf.js";
import { g as getJSON, o as onStatus } from "../../chunks/http-cb35e292.js";
import "../../chunks/paths-28a87002.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_if_block_1(ctx) {
  let div2;
  let div1;
  let h5;
  let t0;
  let t1;
  let div0;
  let t2;
  let t3_value = ctx[0].penaltyPrice.toFixed(2) + "";
  let t3;
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      h5 = element("h5");
      t0 = text("Penalty");
      t1 = space();
      div0 = element("div");
      t2 = text("\u20AC ");
      t3 = text(t3_value);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h5 = claim_element(div1_nodes, "H5", { class: true });
      var h5_nodes = children(h5);
      t0 = claim_text(h5_nodes, "Penalty");
      h5_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t2 = claim_text(div0_nodes, "\u20AC ");
      t3 = claim_text(div0_nodes, t3_value);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h5, "class", "card-title");
      attr(div0, "class", "card-text");
      attr(div1, "class", "card-body");
      attr(div2, "class", "card");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, h5);
      append_hydration(h5, t0);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      append_hydration(div0, t2);
      append_hydration(div0, t3);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t3_value !== (t3_value = ctx2[0].penaltyPrice.toFixed(2) + ""))
        set_data(t3, t3_value);
    },
    d(detaching) {
      if (detaching)
        detach(div2);
    }
  };
}
function create_if_block(ctx) {
  let h3;
  let t0;
  let t1;
  let div;
  let table;
  let thead;
  let tr;
  let th0;
  let t2;
  let t3;
  let th1;
  let t4;
  let t5;
  let tbody;
  let each_value_1 = ctx[0].coupons;
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  return {
    c() {
      h3 = element("h3");
      t0 = text("Coupons");
      t1 = space();
      div = element("div");
      table = element("table");
      thead = element("thead");
      tr = element("tr");
      th0 = element("th");
      t2 = text("Code");
      t3 = space();
      th1 = element("th");
      t4 = text("Value");
      t5 = space();
      tbody = element("tbody");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      h3 = claim_element(nodes, "H3", { class: true });
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, "Coupons");
      h3_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      table = claim_element(div_nodes, "TABLE", { class: true });
      var table_nodes = children(table);
      thead = claim_element(table_nodes, "THEAD", {});
      var thead_nodes = children(thead);
      tr = claim_element(thead_nodes, "TR", {});
      var tr_nodes = children(tr);
      th0 = claim_element(tr_nodes, "TH", { scope: true });
      var th0_nodes = children(th0);
      t2 = claim_text(th0_nodes, "Code");
      th0_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      th1 = claim_element(tr_nodes, "TH", { scope: true });
      var th1_nodes = children(th1);
      t4 = claim_text(th1_nodes, "Value");
      th1_nodes.forEach(detach);
      tr_nodes.forEach(detach);
      thead_nodes.forEach(detach);
      t5 = claim_space(table_nodes);
      tbody = claim_element(table_nodes, "TBODY", {});
      var tbody_nodes = children(tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(tbody_nodes);
      }
      tbody_nodes.forEach(detach);
      table_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h3, "class", "text-center mt-5");
      attr(th0, "scope", "col");
      attr(th1, "scope", "col");
      attr(table, "class", "table text-center");
      attr(div, "class", "table-responsive");
    },
    m(target, anchor) {
      insert_hydration(target, h3, anchor);
      append_hydration(h3, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, table);
      append_hydration(table, thead);
      append_hydration(thead, tr);
      append_hydration(tr, th0);
      append_hydration(th0, t2);
      append_hydration(tr, t3);
      append_hydration(tr, th1);
      append_hydration(th1, t4);
      append_hydration(table, t5);
      append_hydration(table, tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value_1 = ctx2[0].coupons;
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(tbody, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(h3);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block_1(ctx) {
  let tr;
  let td0;
  let t0_value = ctx[4].code + "";
  let t0;
  let t1;
  let td1;
  let t2;
  let t3_value = ctx[4].value.toFixed(2) + "";
  let t3;
  let t4;
  return {
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text("\u20AC ");
      t3 = text(t3_value);
      t4 = space();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", {});
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", {});
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", {});
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, "\u20AC ");
      t3 = claim_text(td1_nodes, t3_value);
      td1_nodes.forEach(detach);
      t4 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(td1, t3);
      append_hydration(tr, t4);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t0_value !== (t0_value = ctx2[4].code + ""))
        set_data(t0, t0_value);
      if (dirty & 1 && t3_value !== (t3_value = ctx2[4].value.toFixed(2) + ""))
        set_data(t3, t3_value);
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block(ctx) {
  let div11;
  let div10;
  let img;
  let img_src_value;
  let img_alt_value;
  let t0;
  let div9;
  let h5;
  let t1_value = ctx[1].name + "";
  let t1;
  let t2;
  let div2;
  let div0;
  let t3;
  let t4;
  let div1;
  let i0;
  let t5_value = ctx[1].dailyPrice.toFixed(2) + "";
  let t5;
  let t6;
  let div5;
  let div3;
  let small0;
  let t7;
  let t8;
  let div4;
  let small1;
  let i1;
  let t9_value = ctx[1].basePrice.toFixed(2) + "";
  let t9;
  let t10;
  let div8;
  let div6;
  let small2;
  let t11;
  let t12;
  let div7;
  let small3;
  let i2;
  let t13_value = ctx[1].discountPrice.toFixed(2) + "";
  let t13;
  let t14;
  return {
    c() {
      div11 = element("div");
      div10 = element("div");
      img = element("img");
      t0 = space();
      div9 = element("div");
      h5 = element("h5");
      t1 = text(t1_value);
      t2 = space();
      div2 = element("div");
      div0 = element("div");
      t3 = text("Daily");
      t4 = space();
      div1 = element("div");
      i0 = element("i");
      t5 = text(t5_value);
      t6 = space();
      div5 = element("div");
      div3 = element("div");
      small0 = element("small");
      t7 = text("Base");
      t8 = space();
      div4 = element("div");
      small1 = element("small");
      i1 = element("i");
      t9 = text(t9_value);
      t10 = space();
      div8 = element("div");
      div6 = element("div");
      small2 = element("small");
      t11 = text("Discount");
      t12 = space();
      div7 = element("div");
      small3 = element("small");
      i2 = element("i");
      t13 = text(t13_value);
      t14 = space();
      this.h();
    },
    l(nodes) {
      div11 = claim_element(nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      img = claim_element(div10_nodes, "IMG", {
        src: true,
        class: true,
        height: true,
        alt: true
      });
      t0 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      h5 = claim_element(div9_nodes, "H5", { class: true });
      var h5_nodes = children(h5);
      t1 = claim_text(h5_nodes, t1_value);
      h5_nodes.forEach(detach);
      t2 = claim_space(div9_nodes);
      div2 = claim_element(div9_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      t3 = claim_text(div0_nodes, "Daily");
      div0_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      i0 = claim_element(div1_nodes, "I", { class: true });
      var i0_nodes = children(i0);
      t5 = claim_text(i0_nodes, t5_value);
      i0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t6 = claim_space(div9_nodes);
      div5 = claim_element(div9_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div3 = claim_element(div5_nodes, "DIV", {});
      var div3_nodes = children(div3);
      small0 = claim_element(div3_nodes, "SMALL", {});
      var small0_nodes = children(small0);
      t7 = claim_text(small0_nodes, "Base");
      small0_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t8 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {});
      var div4_nodes = children(div4);
      small1 = claim_element(div4_nodes, "SMALL", {});
      var small1_nodes = children(small1);
      i1 = claim_element(small1_nodes, "I", { class: true });
      var i1_nodes = children(i1);
      t9 = claim_text(i1_nodes, t9_value);
      i1_nodes.forEach(detach);
      small1_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      t10 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      div6 = claim_element(div8_nodes, "DIV", {});
      var div6_nodes = children(div6);
      small2 = claim_element(div6_nodes, "SMALL", {});
      var small2_nodes = children(small2);
      t11 = claim_text(small2_nodes, "Discount");
      small2_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      t12 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {});
      var div7_nodes = children(div7);
      small3 = claim_element(div7_nodes, "SMALL", {});
      var small3_nodes = children(small3);
      i2 = claim_element(small3_nodes, "I", { class: true });
      var i2_nodes = children(i2);
      t13 = claim_text(i2_nodes, t13_value);
      i2_nodes.forEach(detach);
      small3_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      div8_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      t14 = claim_space(div11_nodes);
      div11_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = ctx[1].imageUrl))
        attr(img, "src", img_src_value);
      attr(img, "class", "card-img-top");
      attr(img, "height", "228");
      attr(img, "alt", img_alt_value = ctx[1].name + " image");
      attr(h5, "class", "card-title text-center text-truncate mb-5");
      attr(i0, "class", "bi bi-currency-euro");
      attr(div2, "class", "d-flex justify-content-between orange fw-bolder fst-italic");
      attr(i1, "class", "bi bi-currency-euro");
      attr(div5, "class", "d-flex justify-content-between text-muted fs-6 fst-italic");
      attr(i2, "class", "bi bi-currency-euro");
      attr(div8, "class", "d-flex justify-content-between text-muted fs-6 fst-italic");
      attr(div9, "class", "card-body");
      attr(div10, "class", "card h-100");
      attr(div11, "class", "col");
    },
    m(target, anchor) {
      insert_hydration(target, div11, anchor);
      append_hydration(div11, div10);
      append_hydration(div10, img);
      append_hydration(div10, t0);
      append_hydration(div10, div9);
      append_hydration(div9, h5);
      append_hydration(h5, t1);
      append_hydration(div9, t2);
      append_hydration(div9, div2);
      append_hydration(div2, div0);
      append_hydration(div0, t3);
      append_hydration(div2, t4);
      append_hydration(div2, div1);
      append_hydration(div1, i0);
      append_hydration(i0, t5);
      append_hydration(div9, t6);
      append_hydration(div9, div5);
      append_hydration(div5, div3);
      append_hydration(div3, small0);
      append_hydration(small0, t7);
      append_hydration(div5, t8);
      append_hydration(div5, div4);
      append_hydration(div4, small1);
      append_hydration(small1, i1);
      append_hydration(i1, t9);
      append_hydration(div9, t10);
      append_hydration(div9, div8);
      append_hydration(div8, div6);
      append_hydration(div6, small2);
      append_hydration(small2, t11);
      append_hydration(div8, t12);
      append_hydration(div8, div7);
      append_hydration(div7, small3);
      append_hydration(small3, i2);
      append_hydration(i2, t13);
      append_hydration(div11, t14);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && !src_url_equal(img.src, img_src_value = ctx2[1].imageUrl)) {
        attr(img, "src", img_src_value);
      }
      if (dirty & 1 && img_alt_value !== (img_alt_value = ctx2[1].name + " image")) {
        attr(img, "alt", img_alt_value);
      }
      if (dirty & 1 && t1_value !== (t1_value = ctx2[1].name + ""))
        set_data(t1, t1_value);
      if (dirty & 1 && t5_value !== (t5_value = ctx2[1].dailyPrice.toFixed(2) + ""))
        set_data(t5, t5_value);
      if (dirty & 1 && t9_value !== (t9_value = ctx2[1].basePrice.toFixed(2) + ""))
        set_data(t9, t9_value);
      if (dirty & 1 && t13_value !== (t13_value = ctx2[1].discountPrice.toFixed(2) + ""))
        set_data(t13, t13_value);
    },
    d(detaching) {
      if (detaching)
        detach(div11);
    }
  };
}
function create_fragment(ctx) {
  let main;
  let h30;
  let t0;
  let t1;
  let div12;
  let div2;
  let div1;
  let h50;
  let t2;
  let t3;
  let div0;
  let t4_value = ctx[0].state + "";
  let t4;
  let t5;
  let div5;
  let div4;
  let h51;
  let t6;
  let t7;
  let div3;
  let t8_value = formatDate(ctx[0].startDate) + "";
  let t8;
  let t9;
  let div8;
  let div7;
  let h52;
  let t10;
  let t11;
  let div6;
  let t12_value = formatDate(ctx[0].endDate) + "";
  let t12;
  let t13;
  let div11;
  let div10;
  let h53;
  let t14;
  let t15;
  let div9;
  let t16_value = ctx[0].days + "";
  let t16;
  let t17;
  let h31;
  let t18;
  let t19;
  let div25;
  let div15;
  let div14;
  let h54;
  let t20;
  let t21;
  let div13;
  let t22;
  let t23_value = ctx[0].subtotalPrice.toFixed(2) + "";
  let t23;
  let t24;
  let div18;
  let div17;
  let h55;
  let t25;
  let t26;
  let div16;
  let t27;
  let t28_value = ctx[0].discountsPrice.toFixed(2) + "";
  let t28;
  let t29;
  let div21;
  let div20;
  let h56;
  let t30;
  let t31;
  let div19;
  let t32;
  let t33_value = ctx[0].couponsPrice.toFixed(2) + "";
  let t33;
  let t34;
  let t35;
  let div24;
  let div23;
  let h57;
  let t36;
  let t37;
  let div22;
  let t38;
  let t39_value = ctx[0].totalPrice.toFixed(2) + "";
  let t39;
  let t40;
  let t41;
  let h32;
  let t42;
  let t43;
  let div26;
  let if_block0 = ctx[0].penaltyPrice > 0 && create_if_block_1(ctx);
  let if_block1 = ctx[0].coupons && ctx[0].coupons.length > 0 && create_if_block(ctx);
  let each_value = ctx[0].products;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      main = element("main");
      h30 = element("h3");
      t0 = text("Rental Period");
      t1 = space();
      div12 = element("div");
      div2 = element("div");
      div1 = element("div");
      h50 = element("h5");
      t2 = text("State");
      t3 = space();
      div0 = element("div");
      t4 = text(t4_value);
      t5 = space();
      div5 = element("div");
      div4 = element("div");
      h51 = element("h5");
      t6 = text("Start date");
      t7 = space();
      div3 = element("div");
      t8 = text(t8_value);
      t9 = space();
      div8 = element("div");
      div7 = element("div");
      h52 = element("h5");
      t10 = text("End date");
      t11 = space();
      div6 = element("div");
      t12 = text(t12_value);
      t13 = space();
      div11 = element("div");
      div10 = element("div");
      h53 = element("h5");
      t14 = text("Days");
      t15 = space();
      div9 = element("div");
      t16 = text(t16_value);
      t17 = space();
      h31 = element("h3");
      t18 = text("Pricing");
      t19 = space();
      div25 = element("div");
      div15 = element("div");
      div14 = element("div");
      h54 = element("h5");
      t20 = text("Subtotal");
      t21 = space();
      div13 = element("div");
      t22 = text("\u20AC ");
      t23 = text(t23_value);
      t24 = space();
      div18 = element("div");
      div17 = element("div");
      h55 = element("h5");
      t25 = text("Discounts");
      t26 = space();
      div16 = element("div");
      t27 = text("\u20AC ");
      t28 = text(t28_value);
      t29 = space();
      div21 = element("div");
      div20 = element("div");
      h56 = element("h5");
      t30 = text("Coupons");
      t31 = space();
      div19 = element("div");
      t32 = text("\u20AC ");
      t33 = text(t33_value);
      t34 = space();
      if (if_block0)
        if_block0.c();
      t35 = space();
      div24 = element("div");
      div23 = element("div");
      h57 = element("h5");
      t36 = text("Total");
      t37 = space();
      div22 = element("div");
      t38 = text("\u20AC ");
      t39 = text(t39_value);
      t40 = space();
      if (if_block1)
        if_block1.c();
      t41 = space();
      h32 = element("h3");
      t42 = text("Products");
      t43 = space();
      div26 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      h30 = claim_element(main_nodes, "H3", { class: true });
      var h30_nodes = children(h30);
      t0 = claim_text(h30_nodes, "Rental Period");
      h30_nodes.forEach(detach);
      t1 = claim_space(main_nodes);
      div12 = claim_element(main_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      div2 = claim_element(div12_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h50 = claim_element(div1_nodes, "H5", { class: true });
      var h50_nodes = children(h50);
      t2 = claim_text(h50_nodes, "State");
      h50_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t4 = claim_text(div0_nodes, t4_value);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t5 = claim_space(div12_nodes);
      div5 = claim_element(div12_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h51 = claim_element(div4_nodes, "H5", { class: true });
      var h51_nodes = children(h51);
      t6 = claim_text(h51_nodes, "Start date");
      h51_nodes.forEach(detach);
      t7 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t8 = claim_text(div3_nodes, t8_value);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      t9 = claim_space(div12_nodes);
      div8 = claim_element(div12_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      div7 = claim_element(div8_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      h52 = claim_element(div7_nodes, "H5", { class: true });
      var h52_nodes = children(h52);
      t10 = claim_text(h52_nodes, "End date");
      h52_nodes.forEach(detach);
      t11 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      t12 = claim_text(div6_nodes, t12_value);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      div8_nodes.forEach(detach);
      t13 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      h53 = claim_element(div10_nodes, "H5", { class: true });
      var h53_nodes = children(h53);
      t14 = claim_text(h53_nodes, "Days");
      h53_nodes.forEach(detach);
      t15 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      t16 = claim_text(div9_nodes, t16_value);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      div12_nodes.forEach(detach);
      t17 = claim_space(main_nodes);
      h31 = claim_element(main_nodes, "H3", { class: true });
      var h31_nodes = children(h31);
      t18 = claim_text(h31_nodes, "Pricing");
      h31_nodes.forEach(detach);
      t19 = claim_space(main_nodes);
      div25 = claim_element(main_nodes, "DIV", { class: true });
      var div25_nodes = children(div25);
      div15 = claim_element(div25_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      div14 = claim_element(div15_nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      h54 = claim_element(div14_nodes, "H5", { class: true });
      var h54_nodes = children(h54);
      t20 = claim_text(h54_nodes, "Subtotal");
      h54_nodes.forEach(detach);
      t21 = claim_space(div14_nodes);
      div13 = claim_element(div14_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      t22 = claim_text(div13_nodes, "\u20AC ");
      t23 = claim_text(div13_nodes, t23_value);
      div13_nodes.forEach(detach);
      div14_nodes.forEach(detach);
      div15_nodes.forEach(detach);
      t24 = claim_space(div25_nodes);
      div18 = claim_element(div25_nodes, "DIV", { class: true });
      var div18_nodes = children(div18);
      div17 = claim_element(div18_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      h55 = claim_element(div17_nodes, "H5", { class: true });
      var h55_nodes = children(h55);
      t25 = claim_text(h55_nodes, "Discounts");
      h55_nodes.forEach(detach);
      t26 = claim_space(div17_nodes);
      div16 = claim_element(div17_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      t27 = claim_text(div16_nodes, "\u20AC ");
      t28 = claim_text(div16_nodes, t28_value);
      div16_nodes.forEach(detach);
      div17_nodes.forEach(detach);
      div18_nodes.forEach(detach);
      t29 = claim_space(div25_nodes);
      div21 = claim_element(div25_nodes, "DIV", { class: true });
      var div21_nodes = children(div21);
      div20 = claim_element(div21_nodes, "DIV", { class: true });
      var div20_nodes = children(div20);
      h56 = claim_element(div20_nodes, "H5", { class: true });
      var h56_nodes = children(h56);
      t30 = claim_text(h56_nodes, "Coupons");
      h56_nodes.forEach(detach);
      t31 = claim_space(div20_nodes);
      div19 = claim_element(div20_nodes, "DIV", { class: true });
      var div19_nodes = children(div19);
      t32 = claim_text(div19_nodes, "\u20AC ");
      t33 = claim_text(div19_nodes, t33_value);
      div19_nodes.forEach(detach);
      div20_nodes.forEach(detach);
      div21_nodes.forEach(detach);
      t34 = claim_space(div25_nodes);
      if (if_block0)
        if_block0.l(div25_nodes);
      t35 = claim_space(div25_nodes);
      div24 = claim_element(div25_nodes, "DIV", { class: true });
      var div24_nodes = children(div24);
      div23 = claim_element(div24_nodes, "DIV", { class: true });
      var div23_nodes = children(div23);
      h57 = claim_element(div23_nodes, "H5", { class: true });
      var h57_nodes = children(h57);
      t36 = claim_text(h57_nodes, "Total");
      h57_nodes.forEach(detach);
      t37 = claim_space(div23_nodes);
      div22 = claim_element(div23_nodes, "DIV", { class: true });
      var div22_nodes = children(div22);
      t38 = claim_text(div22_nodes, "\u20AC ");
      t39 = claim_text(div22_nodes, t39_value);
      div22_nodes.forEach(detach);
      div23_nodes.forEach(detach);
      div24_nodes.forEach(detach);
      div25_nodes.forEach(detach);
      t40 = claim_space(main_nodes);
      if (if_block1)
        if_block1.l(main_nodes);
      t41 = claim_space(main_nodes);
      h32 = claim_element(main_nodes, "H3", { class: true });
      var h32_nodes = children(h32);
      t42 = claim_text(h32_nodes, "Products");
      h32_nodes.forEach(detach);
      t43 = claim_space(main_nodes);
      div26 = claim_element(main_nodes, "DIV", { class: true });
      var div26_nodes = children(div26);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div26_nodes);
      }
      div26_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h30, "class", "text-center");
      attr(h50, "class", "card-title");
      attr(div0, "class", "card-text");
      attr(div1, "class", "card-body");
      attr(div2, "class", "card");
      attr(h51, "class", "card-title");
      attr(div3, "class", "card-text");
      attr(div4, "class", "card-body");
      attr(div5, "class", "card");
      attr(h52, "class", "card-title");
      attr(div6, "class", "card-text");
      attr(div7, "class", "card-body");
      attr(div8, "class", "card");
      attr(h53, "class", "card-title");
      attr(div9, "class", "card-text");
      attr(div10, "class", "card-body");
      attr(div11, "class", "card");
      attr(div12, "class", "card-group text-center");
      attr(h31, "class", "text-center mt-5");
      attr(h54, "class", "card-title");
      attr(div13, "class", "card-text");
      attr(div14, "class", "card-body");
      attr(div15, "class", "card");
      attr(h55, "class", "card-title");
      attr(div16, "class", "card-text");
      attr(div17, "class", "card-body");
      attr(div18, "class", "card");
      attr(h56, "class", "card-title");
      attr(div19, "class", "card-text");
      attr(div20, "class", "card-body");
      attr(div21, "class", "card");
      attr(h57, "class", "card-title");
      attr(div22, "class", "card-text");
      attr(div23, "class", "card-body");
      attr(div24, "class", "card");
      attr(div25, "class", "card-group text-center");
      attr(h32, "class", "text-center mt-5");
      attr(div26, "class", "row row-cols-1 row-cols-md-3 row-cols-lg-4 g-1");
      attr(main, "class", "container");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, h30);
      append_hydration(h30, t0);
      append_hydration(main, t1);
      append_hydration(main, div12);
      append_hydration(div12, div2);
      append_hydration(div2, div1);
      append_hydration(div1, h50);
      append_hydration(h50, t2);
      append_hydration(div1, t3);
      append_hydration(div1, div0);
      append_hydration(div0, t4);
      append_hydration(div12, t5);
      append_hydration(div12, div5);
      append_hydration(div5, div4);
      append_hydration(div4, h51);
      append_hydration(h51, t6);
      append_hydration(div4, t7);
      append_hydration(div4, div3);
      append_hydration(div3, t8);
      append_hydration(div12, t9);
      append_hydration(div12, div8);
      append_hydration(div8, div7);
      append_hydration(div7, h52);
      append_hydration(h52, t10);
      append_hydration(div7, t11);
      append_hydration(div7, div6);
      append_hydration(div6, t12);
      append_hydration(div12, t13);
      append_hydration(div12, div11);
      append_hydration(div11, div10);
      append_hydration(div10, h53);
      append_hydration(h53, t14);
      append_hydration(div10, t15);
      append_hydration(div10, div9);
      append_hydration(div9, t16);
      append_hydration(main, t17);
      append_hydration(main, h31);
      append_hydration(h31, t18);
      append_hydration(main, t19);
      append_hydration(main, div25);
      append_hydration(div25, div15);
      append_hydration(div15, div14);
      append_hydration(div14, h54);
      append_hydration(h54, t20);
      append_hydration(div14, t21);
      append_hydration(div14, div13);
      append_hydration(div13, t22);
      append_hydration(div13, t23);
      append_hydration(div25, t24);
      append_hydration(div25, div18);
      append_hydration(div18, div17);
      append_hydration(div17, h55);
      append_hydration(h55, t25);
      append_hydration(div17, t26);
      append_hydration(div17, div16);
      append_hydration(div16, t27);
      append_hydration(div16, t28);
      append_hydration(div25, t29);
      append_hydration(div25, div21);
      append_hydration(div21, div20);
      append_hydration(div20, h56);
      append_hydration(h56, t30);
      append_hydration(div20, t31);
      append_hydration(div20, div19);
      append_hydration(div19, t32);
      append_hydration(div19, t33);
      append_hydration(div25, t34);
      if (if_block0)
        if_block0.m(div25, null);
      append_hydration(div25, t35);
      append_hydration(div25, div24);
      append_hydration(div24, div23);
      append_hydration(div23, h57);
      append_hydration(h57, t36);
      append_hydration(div23, t37);
      append_hydration(div23, div22);
      append_hydration(div22, t38);
      append_hydration(div22, t39);
      append_hydration(main, t40);
      if (if_block1)
        if_block1.m(main, null);
      append_hydration(main, t41);
      append_hydration(main, h32);
      append_hydration(h32, t42);
      append_hydration(main, t43);
      append_hydration(main, div26);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div26, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && t4_value !== (t4_value = ctx2[0].state + ""))
        set_data(t4, t4_value);
      if (dirty & 1 && t8_value !== (t8_value = formatDate(ctx2[0].startDate) + ""))
        set_data(t8, t8_value);
      if (dirty & 1 && t12_value !== (t12_value = formatDate(ctx2[0].endDate) + ""))
        set_data(t12, t12_value);
      if (dirty & 1 && t16_value !== (t16_value = ctx2[0].days + ""))
        set_data(t16, t16_value);
      if (dirty & 1 && t23_value !== (t23_value = ctx2[0].subtotalPrice.toFixed(2) + ""))
        set_data(t23, t23_value);
      if (dirty & 1 && t28_value !== (t28_value = ctx2[0].discountsPrice.toFixed(2) + ""))
        set_data(t28, t28_value);
      if (dirty & 1 && t33_value !== (t33_value = ctx2[0].couponsPrice.toFixed(2) + ""))
        set_data(t33, t33_value);
      if (ctx2[0].penaltyPrice > 0) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          if_block0.m(div25, t35);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (dirty & 1 && t39_value !== (t39_value = ctx2[0].totalPrice.toFixed(2) + ""))
        set_data(t39, t39_value);
      if (ctx2[0].coupons && ctx2[0].coupons.length > 0) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(main, t41);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty & 1) {
        each_value = ctx2[0].products;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div26, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(main);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      destroy_each(each_blocks, detaching);
    }
  };
}
async function load({ page, fetch }) {
  const orderId = page.params.id;
  if (isAuth()) {
    return await getJSON(`/api/store/orders/${orderId}`, { fetch }).then((order) => ({ props: { order } })).catch(onStatus(401, () => ({
      status: 302,
      redirect: path("/signin", {
        returnTo: path(page.path),
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
      returnTo: path(page.path),
      required: true
    })
  };
}
function instance($$self, $$props, $$invalidate) {
  let { order } = $$props;
  $$self.$$set = ($$props2) => {
    if ("order" in $$props2)
      $$invalidate(0, order = $$props2.order);
  };
  return [order];
}
class U5Bidu5D extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { order: 0 });
  }
}
export { U5Bidu5D as default, load };
