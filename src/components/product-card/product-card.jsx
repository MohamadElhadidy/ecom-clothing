import './product-card.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { addItemToCart } from '../../store/cart/cart.action'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';

function ProductCard({ product }) {
     const dispatch = useDispatch()
     const cartItems = useSelector(selectCartItems)
     const {name, price, imageUrl } = product
     const addProduct= () =>{
          dispatch(addItemToCart(cartItems,product))
     }
     return (
          <div className='product-card-container' >
               <img src={imageUrl} alt={name} />
               <div className='footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
               </div>
               <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProduct}>Add to cart</Button>
          </div>
     )
}

export default ProductCard