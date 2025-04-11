import { CartState } from "../models/cart.model"
import { ProductState } from "../models/product.model"
import { ModalState } from "./modal/modal.state"

export type AppState = {
  products: ProductState,
  cart: CartState,
  modal: ModalState
}