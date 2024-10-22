import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product.model";

const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product}>()
)

export const cartActions = {
  addProduct
}