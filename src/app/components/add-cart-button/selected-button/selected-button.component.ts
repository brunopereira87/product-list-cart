import { Component, inject, input } from '@angular/core';
import { CartItem } from '../../../models/cart-item.model';
import { Store } from '@ngrx/store';
import { cartActions } from '../../../states/cart/cart.actions';

@Component({
  selector: 'app-selected-add-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './selected-button.component.html',
  styleUrl: './selected-button.component.scss'
})
export class SelectedButtonComponent {
  cartItem = input<CartItem>();
  store = inject(Store);

  onAddClick() {
    this.store.dispatch(cartActions.incrementProductOnCartItem({ productId: this.cartItem()?.product.id || 0 }))
  }

  onSubtractClick() {
    this.store.dispatch(cartActions.decrementProductOnCartItem({ productId: this.cartItem()?.product.id || 0 }))
  }

}
