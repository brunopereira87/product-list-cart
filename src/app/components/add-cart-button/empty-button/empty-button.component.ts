import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartItem } from '../../../models/cart-item.model';
import { Cart } from '../../../models/cart.model';
import { Store } from '@ngrx/store';
import { cartActions } from '../../../states/cart/cart.actions';

@Component({
  selector: 'app-empty-add-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './empty-button.component.html',
  styleUrl: './empty-button.component.scss',
  host: {
    '(click)': 'addToCart()'
  }
})
export class EmptyButtonComponent {
  product = input.required<Product>()
  store = inject(Store);
  
  addToCart(){
    const cartItem = new CartItem(this.product());
    this.store.dispatch(cartActions.addCartItem({ cartItem }))
    
  }
}
