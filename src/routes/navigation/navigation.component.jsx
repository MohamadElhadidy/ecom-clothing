import { Outlet } from 'react-router-dom';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { SignOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon-component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
     const { currentUser } = useContext(UserContext)
     const { isCartOpen, setIsCartOpen } = useContext(CartContext)
     const SignOutHandler = async () => {
          await SignOutUser();
     }
     const toggleDropDown = () => {
          setIsCartOpen(!isCartOpen)
     }
     return (
          <>
               <NavigationContainer>
                    <LogoContainer to='/'>
                         <div ><Logo /></div>

                    </LogoContainer>
                    <NavLinks>
                         <NavLink to='/shop'>
                              Shop
                         </NavLink>
                         {currentUser ?
                              <NavLink as='span' onClick={SignOutHandler}>
                                   SignOut
                              </NavLink>
                              :
                              <NavLink to='/auth'>
                                   SignIn
                              </NavLink>
                         }
                         <CartIcon onClick={toggleDropDown} />
                    </NavLinks>
                    {isCartOpen && <CartDropdown />}
               </NavigationContainer>
               <Outlet />
          </>
     )
}

export default Navigation