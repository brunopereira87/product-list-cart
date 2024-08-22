import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product.model';
import productsJson from '../assets/products.json';
import { ProductCartComponent } from './product-cart/product-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductCartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'product-list-cart';
  products: Product[] = productsJson;

  ngOnInit(): void {
    console.log(productsJson)

    // this.products = productsJson
  }
}
