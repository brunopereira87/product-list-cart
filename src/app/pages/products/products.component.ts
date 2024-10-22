import { Component } from '@angular/core';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { CartComponent } from '../../components/cart/cart.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductsListComponent,
    CartComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
