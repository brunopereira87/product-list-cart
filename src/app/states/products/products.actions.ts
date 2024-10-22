import { createAction } from "@ngrx/store";

const getProducts = createAction('[Products] getProducts');

export const productsActions = {
  getProducts
}