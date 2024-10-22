import { CartItem } from "./cart-item.model";


export type Cart = {
  cartItems: CartItem[];
  totalPrice: number;
}

export type CartState = {
  cart: Cart
}