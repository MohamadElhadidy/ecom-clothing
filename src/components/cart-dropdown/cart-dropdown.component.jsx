import { CartDropdownContainer , EmptyMessage, CartItems} from './cart-dropdown.styles'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { Link } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector'
import { useSelector } from 'react-redux'
function CartDropdown() {
  const cartItems  = useSelector(selectCartItems)
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ?  cartItems.map((item) => (<CartItem key={item.id} cartItem={item} />))
          : <EmptyMessage>Your cart is empty</EmptyMessage>
        }
      </CartItems>
      <Link to='checkout'> <Button>Go to checkout</Button></Link>

    </CartDropdownContainer>
  )
}

export default CartDropdown