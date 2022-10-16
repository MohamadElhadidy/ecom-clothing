import { ShoppingIcon, CartIconContainer, ItemIcon } from './cart-icon.styles.jsx'
import { useSelector } from 'react-redux'
import { selectCount } from '../../store/cart/cart.selector.js'
function CartIcon({ onClick }) {
  const count = useSelector(selectCount)
  return (
    <CartIconContainer onClick={onClick}>
            <ShoppingIcon/>
      <ItemIcon>{count}</ItemIcon>
    </CartIconContainer>
  )
}

export default CartIcon