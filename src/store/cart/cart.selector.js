import { createSelector } from "reselect"

export const selectIsCartOpen = (state) => state.cart.isCartOpen

export const selectCartReducer  = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
)
export const  selectTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
)

export const selectCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
)




