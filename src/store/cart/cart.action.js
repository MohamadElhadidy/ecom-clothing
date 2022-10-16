import { CreateAction } from "../../utils/reducer/reducer.utils";
import CART_ACTION_TYPES from './cart.types'

const addCartItem = (cartItems, productToAdd) => {
  const exist = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
  if (exist) {
    return cartItems.map(cartItem => (
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]

}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)
  if (existCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map(cartItem => (
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  ))
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)



export const setIsCartOpen = (bool) => CreateAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return  CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const removeItemCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove)
  return CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear)
  return CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
