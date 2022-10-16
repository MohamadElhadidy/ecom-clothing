import './checkout-item.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart, removeItemCart, clearItemFromCart } from '../../store/cart/cart.action'
function CheckoutItem({ item }) {
     const dispatch = useDispatch()
     const { name, price, quantity, imageUrl } = item
     const cartItems = useSelector(selectCartItems)
     const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, item))
     const removeItemCartHandler = () => dispatch(removeItemCart(cartItems, item))
     const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, item))
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