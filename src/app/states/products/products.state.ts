import { ProductState } from "../../models/product.model";
import productsJson from '../../../assets/products.json';

export const productInitialState: ProductState = {
  products: productsJson
} 