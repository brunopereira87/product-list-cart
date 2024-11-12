import { createAction, props } from "@ngrx/store";
import { CartItem } from "../../models/cart-item.model";

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
export const cartActions = {
  addCartItem,
  incrementProductOnCartItem,
  decrementProductOnCartItem
}