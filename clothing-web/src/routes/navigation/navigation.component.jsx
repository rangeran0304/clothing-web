import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { NavigationContainer,LogoContainer,Navlinks,Navlink } from './navigation.styles';
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
                <Navlink onClick={signoutHandler}>
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