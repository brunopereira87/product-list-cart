import { AfterViewInit, Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent } from 'rxjs';
import { modalActions } from '../../states/modal/modal.actions';
import { Cart } from '../../models/cart.model';
import { getCart } from '../../states/cart/cart.selectors';
import { CartItemListComponent } from '../cart/cart-item-list/cart-item-list.component';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { cartActions } from '../../states/cart/cart.actions';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CartItemListComponent, ClickOutsideDirective],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss'
})
export class ConfirmModalComponent implements OnInit, AfterViewInit {
private dialogEl = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  store = inject(Store);
  cart = signal<Cart>({} as Cart)
  
  ngAfterViewInit(): void {
    this.dialogEl().nativeElement.showModal();
    fromEvent(this.dialogEl().nativeElement,'close')
      .subscribe(() => {
        this.store.dispatch(modalActions.closeConfirmModal());
      })
  }

  ngOnInit(): void {
    this.store.select(getCart).subscribe(cartState => {
      this.cart.set(cartState) 
    })
  }


  closeModal() {
    console.log('close modal');
    this.store.dispatch(modalActions.closeConfirmModal());
  }

  onStartNewOrder() {
    this.store.dispatch(cartActions.resetCart())
    this.store.dispatch(modalActions.closeConfirmModal());
  }
}
