import { createReducer, on } from "@ngrx/store";
import { cartInitialState } from "./cart.state";
import { cartActions } from "./cart.actions";
import { Cart } from "../../models/cart.model";
import { CartItem } from "../../models/cart-item.model";

function getCartIndex(stateCart: Cart, productId: number): number {
  const cart: Cart = JSON.parse(JSON.stringify(stateCart))
    const cartItems = cart.cartItems
    return cartItems.findIndex( item => item.product.id === productId)
}

function getCartItem(stateCart: Cart, productId: number): CartItem{
  const cartItemIndex = getCartIndex(stateCart, productId)
  
  return stateCart.cartItems[cartItemIndex]
}
export const cartReducer = createReducer(
  cartInitialState,
  on(cartActions.addCartItem, (state, action) => {
    const cart = state.cart
    return {
      ...state,
      cart: {
        cartItems: [...cart.cartItems, action.cartItem],
        totalPrice: cart.totalPrice + action.cartItem.totalPriceProduct,
        totalProductsQty: cart.totalProductsQty + action.cartItem.totalProductQty
      }
    }
  }),

  on(cartActions.incrementProductOnCartItem, (state, action) =>{
    const cart = JSON.parse(JSON.stringify(state.cart)) as Cart
    const cartItems = cart.cartItems
    const cartItemIndex = cartItems.findIndex( item => item.product.id === action.productId)
    
    if(cartItemIndex >= 0) {
      const newCartItem = JSON.parse(JSON.stringify(cartItems[cartItemIndex])) as CartItem
      
      newCartItem.totalProductQty++;
      newCartItem.totalPriceProduct += newCartItem.product.price;

      cartItems[cartItemIndex] = newCartItem;
      cart.totalProductsQty++
      cart.totalPrice += newCartItem.product.price;
    }
    return {
      ...state,
      cart: { ...cart, cartItems }
    }
  }),

  on(cartActions.decrementProductOnCartItem, (state, action) =>{
    const cart = JSON.parse(JSON.stringify(state.cart)) as Cart
    const cartItems = cart.cartItems
    const cartItemIndex = cartItems.findIndex( item => item.product.id === action.productId)
    
    if((cartItemIndex >= 0) && (cartItems[cartItemIndex].totalProductQty > 1)) {
      const newCartItem = JSON.parse(JSON.stringify(cartItems[cartItemIndex]))
      newCartItem.totalProductQty--;

      cartItems[cartItemIndex] = newCartItem
      newCartItem.totalPriceProduct -= newCartItem.product.price;

      cartItems[cartItemIndex] = newCartItem;
      cart.totalProductsQty--
      cart.totalPrice -= newCartItem.product.price;
    }
    
    return {
      ...state,
      cart: { ...cart }
    }
  }),

  on(cartActions.removeCartItem, (state, action) => {
    const cart = JSON.parse(JSON.stringify(state.cart)) as Cart
    const cartItem = getCartItem(cart, action.productId)
    return {
      ...state,
      cart: {
        totalPrice: cart.totalPrice - cartItem.totalPriceProduct,
        totalProductsQty: cart.totalProductsQty - cartItem.totalProductQty,
        cartItems: cart.cartItems.filter( item => item.product.id !== action.productId)
      }
    }
  })
)