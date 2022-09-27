import { createContext, useEffect, useState } from "react";


const addCartItem = (cartItems, productToAdd) =>{
     const exist = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
     if (exist){
          return cartItems.map(cartItem =>(
               cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          )    
          )
     }
     return [...cartItems, { ...productToAdd, quantity : 1}]
     
}

const removeCartItem = (cartItems, cartItemToRemove)=>{
     const existCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)
     if (existCartItem.quantity === 1 ){
          return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
     }

     return cartItems.map(cartItem => (
          cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
     ))
}

const clearCartItem = (cartItems, cartItemToClear)=> cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)


export const CartContext = createContext({
     isCartOpen: false,
     setIsCartOpen:()=> null,
     cartItems:[],
     addItemToCart:()=>{},
     removeItemCart:()=>{},
     clearItemFromCart:()=>{},
     count:0,
     total:0
});



export const CartProvider = ({ children }) => {
     const [isCartOpen, setIsCartOpen] = useState(false)
     const [cartItems, setCartItems] = useState([])
     const [count, setCount] = useState(0)
     const [total, setTotal] = useState(0)

     useEffect(()=>{
          const cartCount = cartItems.reduce((total, item) => total + item.quantity,0)
          setCount(cartCount)
     }, [cartItems])

     useEffect(() => {
          const newCartTotal = cartItems.reduce((total, item) => total + item.quantity * item.price , 0)
          setTotal(newCartTotal)
     }, [cartItems])

     const addItemToCart = (productToAdd) =>{
          setCartItems(addCartItem(cartItems, productToAdd))
     }
     const removeItemCart = (cartItemToRemove) =>{
          setCartItems(removeCartItem(cartItems, cartItemToRemove))
     }  
     const clearItemFromCart = (cartItemToClear) =>{
          setCartItems(clearCartItem(cartItems, cartItemToClear))
     }

     
     const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, count, removeItemCart, clearItemFromCart, total }
     return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}