import { Component, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { Store } from '@ngrx/store';
import { getProducts } from '../../states/products/products.selector';
import { AppState } from '../../states/app.state';

@Component({
  selector: 'ul[app-products-list]',
  standalone: true,
  imports: [
    ProductCartComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  store = inject(Store<AppState>);
  products!: Product[];

  ngOnInit(): void {
    this.store.select(getProducts).subscribe( productsState => {
      this.products = productsState
    })
  }
}
