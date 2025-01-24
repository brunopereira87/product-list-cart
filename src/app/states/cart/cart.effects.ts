import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { cartActions } from "./cart.actions";
import { from, switchMap, withLatestFrom } from "rxjs";
import { getCart } from "./cart.selectors";
import { Store } from "@ngrx/store";
import { CartService } from "../../services/cart.service";


const { 
  addCartItem, 
  incrementProductOnCartItem, 
  decrementProductOnCartItem 
} = cartActions;

export const saveCartToStorageEffect = createEffect(
  (actions$ = inject(Actions), store = inject(Store), cartService = inject(CartService)) => {
    return actions$.pipe(
      ofType(addCartItem, incrementProductOnCartItem, decrementProductOnCartItem),
      withLatestFrom(store.select(getCart)),
      switchMap(([actions, cart]) => from(cartService.saveCartStorage(cart)))
    )
  }, 
  { dispatch: false, functional: true },
)
