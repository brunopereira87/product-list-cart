import { Component, inject, OnInit, signal } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';
import { EmptyCardComponent } from './empty-card/empty-card.component';
import { Cart } from '../../models/cart.model';
import { Store } from '@ngrx/store';
import { getCart } from '../../states/cart/cart.selectors';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartItemComponent,
    EmptyCardComponent,
    CartItemListComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  store = inject(Store)
  cart = signal<Cart>({} as Cart)

  ngOnInit(): void {
    this.store.select(getCart).subscribe(cartState => {
      this.cart.set(cartState) 
    })
  }
}
