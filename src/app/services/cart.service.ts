import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { cartInitialState } from '../states/cart/cart.state';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  async saveCartStorage(cart: Cart){
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  async deleteCartStorage(){
    localStorage.removeItem('cart');
  }
}
