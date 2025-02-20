import { Cart, CartState } from "../../models/cart.model";

function initCart() {
  const cartStorage = localStorage.getItem('cart') ?? '' 
  let cartStorageParsed

  if(cartStorage) {
    cartStorageParsed = JSON.parse(cartStorage);
  }

  const cart: Cart = cartStorageParsed 
    ? cartStorageParsed 
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