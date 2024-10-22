import { Component, computed, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';
import { EmptyButtonComponent } from '../add-cart-button/empty-button/empty-button.component';

@Component({
  selector: 'li[app-product-cart]',
  standalone: true,
  imports: [
    EmptyButtonComponent,
    CurrencyPipe
  ],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
  product = input.required<Product>();
  // imageThumbnail = computed<string>(() => `/assets/${}` )
}
