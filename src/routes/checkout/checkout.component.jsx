import './checkout.styles.scss'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectTotal, selectCartItems } from '../../store/cart/cart.selector'
import { useSelector } from 'react-redux'

function Checkout() {
     const cartItems = useSelector(selectCartItems)
     const total = useSelector(selectTotal)
     return (
          <div className='checkout-container '>
               <div className='checkout-header'>
                    <div className="header-block">
                         <span>Product</span>
                    </div>  
                    <div className="header-block">
                         <span>Name</span>
                    </div>
                    <div className="header-block">
                         <span>Quantity</span>
                    </div>
                    <div className="header-block">
                         <span>Price</span>
                    </div>
                    <div className="header-block">
                         <span>Remove</span>
                    </div>
               </div>
               {cartItems.map((item) => <CheckoutItem key={item.id} item={item}/>)}
               <span className='total'>Total : ${total}</span>
          </div>
     )
}

export default Checkout