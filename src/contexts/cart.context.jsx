// import { createContext, useReducer } from "react";
// import { CreateAction } from "../utils/reducer/reducer.utils";

// const addCartItem = (cartItems, productToAdd) => {
//      const exist = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
//      if (exist) {
//           return cartItems.map(cartItem => (
//                cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//           )
//           )
//      }
//      return [...cartItems, { ...productToAdd, quantity: 1 }]

// }

// const removeCartItem = (cartItems, cartItemToRemove) => {
//      const existCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)
//      if (existCartItem.quantity === 1) {
//           return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
//      }

//      return cartItems.map(cartItem => (
//           cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//      ))
// }

// const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)


// export const CartContext = createContext({
//      isCartOpen: false,
//      setIsCartOpen: () => null,
//      cartItems: [],
//      addItemToCart: () => { },
//      removeItemCart: () => { },
//      clearItemFromCart: () => { },
//      count: 0,
//      total: 0
// });




// export const CartProvider = ({ children }) => {
//      const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
//      const { cartItems, count, total, isCartOpen } = state
     
//      const updateCartItemsReducer = (newCartItems)=>{
//           const newCartTotal = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0)
//           const cartCount = newCartItems.reduce((total, item) => total + item.quantity, 0)
//           dispatch(CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS,{ cartItems: newCartItems, count: cartCount, total: newCartTotal }))
          
//      }
     
//      const setIsCartOpen = (bool)=>{
//           dispatch(CreateAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
//      }

//      const addItemToCart = (productToAdd) => {
//           const newCartItems = addCartItem(cartItems, productToAdd)
//           updateCartItemsReducer(newCartItems)
//      }
//      const removeItemCart = (cartItemToRemove) => {
//           const newCartItems = removeCartItem(cartItems, cartItemToRemove)
//           updateCartItemsReducer(newCartItems)
//      }
//      const clearItemFromCart = (cartItemToClear) => {
//           const newCartItems = clearCartItem(cartItems, cartItemToClear)
//           updateCartItemsReducer(newCartItems)
//      }


//      const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, count, removeItemCart, clearItemFromCart, total }
//      return <CartContext.Provider value={value}>{children}</CartContext.Provider>
// }