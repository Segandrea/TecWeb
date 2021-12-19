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
export const cartItems = derived(cart, ($cart) => Object.keys($cart).length);
