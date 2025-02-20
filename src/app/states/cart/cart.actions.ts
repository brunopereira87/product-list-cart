import { createAction, props } from "@ngrx/store";
import { CartItem } from "../../models/cart-item.model";

const fetchCart = createAction(
  '[Cart] Fetch Cart'
)
const addCartItem = createAction(
  '[CartItem] Add CartItem',
  props<{ cartItem: CartItem }>()
)

const incrementProductOnCartItem = createAction(
  '[CartItem] Increment Product Quantity on CartItem',
  props<{ productId:number }>()
)

const decrementProductOnCartItem = createAction(
  '[CartItem] Decrement Product Quantity on CartItem',
  props<{ productId:number }>()
)

const removeCartItem = createAction(
  '[CartItem] Remove CartItem',
  props<{ productId:number }>()
)
export const cartActions = {
  fetchCart,
  addCartItem,
  incrementProductOnCartItem,
  decrementProductOnCartItem,
  removeCartItem
}