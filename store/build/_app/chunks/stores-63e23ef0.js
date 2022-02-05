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
import { N as derived, C as writable } from "./vendor-15d99854.js";
const rentalPeriod = writable([]);
const category = writable(void 0);
const basePriceSort = writable(-1);
const dailyPriceSort = writable(-1);
const ratingSort = writable(-1);
const cart = writable({});
function addToCart(product) {
  cart.update((cart2) => __spreadProps(__spreadValues({}, cart2), { [product._id]: product }));
}
function removeFromCart(product) {
  cart.update((cart2) => {
    delete cart2[product._id];
    return cart2;
  });
}
function clearCart() {
  cart.set({});
}
const cartItems = derived(cart, ($cart) => Object.values($cart));
const coupons = writable({});
function addCoupon(coupon) {
  coupons.update((coupons2) => __spreadProps(__spreadValues({}, coupons2), { [coupon._id]: coupon }));
}
function removeCoupon(coupon) {
  coupons.update((coupons2) => {
    delete coupons2[coupon._id];
    return coupons2;
  });
}
function clearCoupons() {
  coupons.set({});
}
const couponItems = derived(coupons, ($coupons) => Object.values($coupons));
rentalPeriod.subscribe(() => clearCart());
export { rentalPeriod as a, basePriceSort as b, cartItems as c, dailyPriceSort as d, category as e, cart as f, addToCart as g, clearCoupons as h, clearCart as i, coupons as j, couponItems as k, addCoupon as l, removeCoupon as m, removeFromCart as n, ratingSort as r };
