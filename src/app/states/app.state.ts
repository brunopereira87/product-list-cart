import { CartState } from "../models/cart.model"
import { ProductState } from "../models/product.model"

export type AppState = {
  products: ProductState,
  cart: CartState
}