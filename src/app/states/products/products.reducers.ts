import { createReducer, on } from "@ngrx/store";
import { productInitialState } from "./products.state";
import { productsActions } from "./products.actions";

export const productsReducer = createReducer(
  productInitialState,
  on(productsActions.getProducts, state => ({
    ...state
  }))
)