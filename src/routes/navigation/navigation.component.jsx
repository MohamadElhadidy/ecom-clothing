import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import {ReactComponent as  Logo} from '../../assets/crown.svg' 
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { SignOutUser } from '../../utils/firebase/firebase.utils'


const Navigation = () => {
     const { currentUser } = useContext(UserContext)
     const SignOutHandler = async () =>{
          await SignOutUser();
     }
     return (
          <>
               <div className='navigation'>
                    <Link className='logo-container' to='/'>
                         <div ><Logo/></div>

                    </Link>
                    <div className='nav-links-container'>
                         <Link className='nav-link' to='/shop'>
                              Shop
                         </Link> 
                         {currentUser ? 
                              <Link className='nav-link' onClick={SignOutHandler}>
                              SignOut
                         </Link>
                         :
                         <Link className='nav-link' to='/auth'>
                              SignIn
                         </Link>
                         }
                    </div>
               </div>
               <Outlet />
          </>
     )
}

export default Navigation