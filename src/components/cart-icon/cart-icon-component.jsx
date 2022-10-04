import { ShoppingIcon, CartIconContainer, ItemIcon } from './cart-icon.styles.jsx'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'

function CartIcon({ onClick }) {
  const { count } = useContext(CartContext)

  return (
    <CartIconContainer onClick={onClick}>
            <ShoppingIcon/>
      <ItemIcon>{count}</ItemIcon>
    </CartIconContainer>
  )
}

export default CartIcon