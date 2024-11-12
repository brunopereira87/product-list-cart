import { CartItem } from "./cart-item.model";


export type Cart = {
  cartItems: CartItem[];
  totalPrice: number;
  totalProductsQty: number;
}

export type CartState = {
  cart: Cart
}