import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context';
import { useContext } from 'react';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../contexts/cart.context';
import { CartDropDown } from '../../components/cart-dropdown/cart-dropdown.component';
const Navigation = ()=>{
  const {currentUser,setCurrentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  const signoutHandler = async () =>{
    await signOutAuthUser();
    setCurrentUser(null)
  }
    return(
        <Fragment>
           <div className='navigation'>
             <Link className='logo-container' to='/'>
               <CrwnLogo className='logo' />
             </Link>
             <div className='nav-links-container'>
               <Link className='nav-link' to='/shop'>
               Shop
               </Link>
               {
                currentUser? (
                <span className='nav-link' onClick={signoutHandler}>
                {' '}Sign Out {' '}
                </span>)
                :
               (<Link className='nav-link' to='/auth'>
               Sign In
               </Link>)
              }
              <CartIcon  />
             </div>
             {isCartOpen&&<CartDropDown/>}
           </div>
           <Outlet/>
        </Fragment>
    )
}
export default Navigation