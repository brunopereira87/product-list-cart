import { Product } from "./product.model";

export class CartItem {
  readonly product!: Product;
  totalPriceProduct!: number;
  totalProductQty!: number;

  constructor(product: Product) {
    this.product = product;
    this.totalProductQty = 1;
    this.totalPriceProduct = product.price;
  }

  updateQuantity(quantity: number) {
    this.totalProductQty += quantity; 
  }

  updateTotalPrice() {
    this.totalPriceProduct = this.product.price * this.totalProductQty;
  }
  
}

export type CartItemListType = 'cart' | 'confirm';