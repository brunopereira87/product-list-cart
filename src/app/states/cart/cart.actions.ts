import { createAction, props } from "@ngrx/store";
import { CartItem } from "../../models/cart-item.model";

const addCartItem = createAction(
  '[CartItem] Add CartItem',
  props<{ cartItem: CartItem }>()
)

export const cartActions = {
  addCartItem
}