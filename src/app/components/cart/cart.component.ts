import { Component } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';
import { EmptyCardComponent } from './empty-card/empty-card.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartItemComponent,
    EmptyCardComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
