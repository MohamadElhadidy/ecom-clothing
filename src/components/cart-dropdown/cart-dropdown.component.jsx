import { CartDropdownContainer , EmptyMessage, CartItems} from './cart-dropdown.styles'
import Button from '../button/button.component'
import { useContext } from 'react'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
import { Link } from 'react-router-dom';

function CartDropdown() {
  const { cartItems } = useContext(CartContext)
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