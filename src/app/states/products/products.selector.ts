import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../../models/product.model";

const selectProductsState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
  selectProductsState,
  (state: ProductState) => {
    console.log(state)
    return state.products
  }
)