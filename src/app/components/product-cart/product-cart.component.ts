import { Component, computed, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';
import { EmptyButtonComponent } from '../add-cart-button/empty-button/empty-button.component';
import { SelectedButtonComponent } from '../add-cart-button/selected-button/selected-button.component';
import { Store } from '@ngrx/store';

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
export class ProductCartComponent {
  product = input.required<Product>();
  productQty!:number;
  store = inject(Store);
  
  // imageThumbnail = computed<string>(() => `/assets/${}` )
}
