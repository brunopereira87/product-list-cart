import { Cart, CartState } from "../../models/cart.model";

function initCart() {
  const cartStorage = JSON.parse(localStorage.getItem('cart') ?? '');
  const cart: Cart = cartStorage 
    ? cartStorage 
    : {
      cartItems: [],
      totalPrice: 0,
      totalProductsQty: 0
    }

  return cart;

}
export const cartInitialState: CartState = {
  cart: initCart()
} 