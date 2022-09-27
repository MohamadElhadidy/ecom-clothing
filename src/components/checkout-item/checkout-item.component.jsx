import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
function CheckoutItem({ item }) {
     const { addItemToCart, removeItemCart, clearItemFromCart } = useContext(CartContext)
     const { name, price, quantity, imageUrl } = item
     const clearItemHandler = () => clearItemFromCart(item)
     const addItemToCartHandler = () => addItemToCart(item)
     const removeItemCartHandler = () => removeItemCart(item)
     return (
          <div className='checkout-item-container'>
               <div className='image-container'>
                    <img src={imageUrl} alt={name} />
               </div>
               <span className='name'>{name}</span>
               <span className='quantity'>
                    <div className='arrow' onClick={removeItemCartHandler}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                    <div className='arrow' onClick={addItemToCartHandler}>&#10095;</div>
               </span>
               <span className='price'>${price}</span>
               <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
          </div>

     )
}

export default CheckoutItem