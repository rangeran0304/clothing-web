import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { NavigationContainer,LogoContainer,Navlinks,Navlink } from './navigation.styles';
import { useContext } from 'react';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../contexts/cart.context';
import { CartDropDown } from '../../components/cart-dropdown/cart-dropdown.component';
import { UserSelector } from '../../store/user/user.selector';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const Navigation = ()=>{
  const currentUser = useSelector(UserSelector)
  const {isCartOpen} = useContext(CartContext)

  const signoutHandler = async () =>{
    await signOutAuthUser();
  }
    return(
        <Fragment>
           <NavigationContainer>
             <LogoContainer to='/'>
               <CrwnLogo className='logo' />
             </LogoContainer>
             <Navlinks>
               <Navlink to='/shop'>
               Shop
               </Navlink>
               {
                currentUser? (
                <Navlink to='/' onClick={signoutHandler}>
                {' '}Sign Out {' '}
                </Navlink>)
                :
               (<Navlink to='/auth'>
               Sign In
               </Navlink>)
              }
              <CartIcon  />
             </Navlinks>
             {isCartOpen&&<CartDropDown/>}
           </NavigationContainer>
           <Outlet/>
        </Fragment>
    )
}
export default Navigation