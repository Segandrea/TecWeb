import { writable, derived } from "svelte/store";

/**
 * Rental Period
 */
export const rentalPeriod = writable([]);

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
 * Discounts
 */
export const discounts = writable({});

export function addDiscount(discount) {
  discounts.update((discounts) => ({ ...discounts, [discount._id]: discount }));
}

export function removeDiscount(discount) {
  discounts.update((discounts) => {
    delete discounts[discount._id];
    return discounts;
  });
}

export function clearDiscounts() {
  discounts.set({});
}

/**
 * Discount Items
 */
export const discountItems = derived(discounts, ($discounts) =>
  Object.values($discounts)
);
