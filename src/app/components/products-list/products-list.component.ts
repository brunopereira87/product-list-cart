import { Component, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import productsJson from '../../../assets/products.json';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { Store } from '@ngrx/store';
import { getProducts } from '../../states/products/products.selector';
import { AsyncPipe } from '@angular/common';
import { AppState } from '../../states/app.state';

@Component({
  selector: 'ul[app-products-list]',
  standalone: true,
  imports: [
    ProductCartComponent,
    AsyncPipe
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  store = inject(Store<AppState>);
  products!: Product[];

  ngOnInit(): void {
    this.store.select(getProducts).subscribe( productsState => {
      console.log(productsState)
      this.products = productsState
    })

    // this.products = productsJson
  }
}
