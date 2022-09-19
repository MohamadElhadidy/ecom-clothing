import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import {ReactComponent as  Logo} from '../../assets/crown.svg' 

const Navigation = () => {
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
                         <Link className='nav-link' to='/sign-in'>
                              SignIn
                         </Link>
                    </div>
               </div>
               <Outlet />
          </>
     )
}

export default Navigation