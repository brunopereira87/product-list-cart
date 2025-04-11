import { Component, inject, input } from '@angular/core';
import { CartItem, CartItemListType } from '../../../models/cart-item.model';
import { CurrencyPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { cartActions } from '../../../states/cart/cart.actions';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  cartItem = input<CartItem>();
  store = inject(Store);
  type = input<CartItemListType>("cart");
  
  removeItem(){
    const item = this.cartItem();
    
    if(item){
      this.store.dispatch(cartActions.removeCartItem({ productId: item.product.id}));
    }
  }
}
