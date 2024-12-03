import { Component, input } from '@angular/core';
import { Cart } from '../../../models/cart.model';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-item-list',
  standalone: true,
  imports: [
    CartItemComponent
  ],
  templateUrl: './cart-item-list.component.html',
  styleUrl: './cart-item-list.component.scss'
})
export class CartItemListComponent {
  cart = input.required<Cart>();
}
