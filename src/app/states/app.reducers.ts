import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { productsReducer } from "./products/products.reducers";
import { cartReducer } from "./cart/cart.reducer";
import { modalReducer } from "./modal/modal.reducers";

export const appReducers: ActionReducerMap<AppState> = {
  products: productsReducer,
  cart: cartReducer,
  modal: modalReducer
}