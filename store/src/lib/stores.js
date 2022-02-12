import { writable, derived } from "svelte/store";

/**
 * Rental Period
 */
export const rentalPeriod = writable([]);

/**
 * Filtering
 */
export const category = writable(undefined);
export const sortBy = writable({ rating: -1, basePrice: 0, dailyPrice: 0 });

export function clearFilters() {
  sortBy.set({ rating: -1, basePrice: 0, dailyPrice: 0 });
  category.set(undefined);
}

/**
 * Cart
 */
export const cart = writable({});

export function addToCart(product) {
  cart.update((cart) => ({ ...cart, [product._id]: product }));
}

export function removeFromCart(product) {
  cart.update((cart) => {
    delete cart[product._id];
    return cart;
  });
}

export function clearCart() {
  cart.set({});
}

/**
 * Cart Items
 */
export const cartItems = derived(cart, ($cart) => Object.values($cart));

/**
 * Coupons
 */
export const coupons = writable({});

export function addCoupon(coupon) {
  coupons.update((coupons) => ({ ...coupons, [coupon._id]: coupon }));
}

export function removeCoupon(coupon) {
  coupons.update((coupons) => {
    delete coupons[coupon._id];
    return coupons;
  });
}

export function clearCoupons() {
  coupons.set({});
}

/**
 * Coupon Items
 */
export const couponItems = derived(coupons, ($coupons) =>
  Object.values($coupons)
);

/**
 * Subscriptions
 */
rentalPeriod.subscribe(() => clearCart());
