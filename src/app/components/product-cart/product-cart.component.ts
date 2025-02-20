import { Component, computed, inject, input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';
import { EmptyButtonComponent } from '../add-cart-button/empty-button/empty-button.component';
import { SelectedButtonComponent } from '../add-cart-button/selected-button/selected-button.component';
import { Store } from '@ngrx/store';
import { getCartItems } from '../../states/cart/cart.selectors';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'li[app-product-cart]',
  standalone: true,
  imports: [
    EmptyButtonComponent,
    SelectedButtonComponent,
    CurrencyPipe
  ],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent implements OnInit {
  product = input.required<Product>();
  store = inject(Store);
  cartItem!: CartItem;
  productQty = 0;
  
  ngOnInit(): void {
    this.store.select(getCartItems).subscribe(items => {
      const productCartItem = this.findItemInCart(this.product(), items);
      this.cartItem = productCartItem as CartItem;
    })
  }

  findItemInCart(product: Product, cartItems: CartItem[]) {
    return cartItems.find(item => item.product.id === product.id)
  }
}
