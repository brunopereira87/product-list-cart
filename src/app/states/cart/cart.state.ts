import { Cart, CartState } from "../../models/cart.model";

function initCart() {
  const cartStorage = localStorage.getItem('cart') ?? '' 
  let cartStorageParsed

  if(cartStorage) {
    cartStorageParsed = JSON.parse(cartStorage);
  }

  const cart: Cart = cartStorageParsed 
    ? cartStorageParsed 
    : defaultCartState

  return cart;

}

export const defaultCartState =  {
  cartItems: [],
  totalPrice: 0,
  totalProductsQty: 0
}
export const cartInitialState: CartState = {
  cart: initCart()
} 