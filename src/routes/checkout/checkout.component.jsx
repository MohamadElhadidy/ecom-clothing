import './checkout.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
function Checkout() {
     const { cartItems, addItemToCart, removeItemCart } = useContext(CartContext)

     return (
          <div className='products-container'>
               {cartItems.map((item) => (
                    <div>
                         <h2>{item.name}</h2>
                         <span>{item.price}</span>
                         <br />
                         <span>{item.quantity}</span>
                         <br/>
                         <span onClick={() => removeItemCart(item)}>decrement</span>
                         <br />
                         <span onClick={() => addItemToCart(item)}>increment</span>
                    </div>
               ))}
          </div>
     )
}

export default Checkout