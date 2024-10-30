import { createReducer, on } from "@ngrx/store";
import { cartInitialState } from "./cart.state";
import { cartActions } from "./cart.actions";

export const cartReducer = createReducer(
  cartInitialState,
  on(cartActions.addCartItem, (state, action) => {
    const cart = state.cart
    return {
      ...state,
      cart: {
        cartItems: [...cart.cartItems, action.cartItem],
        totalPrice: cart.totalPrice + action.cartItem.totalPriceProduct
      }
    }
  })
)