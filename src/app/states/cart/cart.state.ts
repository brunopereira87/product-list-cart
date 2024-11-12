import { CartState } from "../../models/cart.model";


export const cartInitialState: CartState = {
  cart: {
    cartItems: [],
    totalPrice: 0,
    totalProductsQty: 0
  }
} 