import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "../../models/cart.model";

const getCartState = createFeatureSelector<CartState>('cart')

export const getCart = createSelector(
  getCartState, state => state.cart
)

export const getCartItems = createSelector(
  getCartState, state => state.cart.cartItems
)