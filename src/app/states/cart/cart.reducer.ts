import { createReducer, on } from "@ngrx/store";
import { cartInitialState } from "./cart.state";
import { cartActions } from "./cart.actions";

export const cartReducer = createReducer(
  cartInitialState,
  on(cartActions.addProduct, (state, action) => {
    return {
      ...state
    }
  })
)