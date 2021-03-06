import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss'
import SignIn from '../sign-in/sign-in.component';
const Navigation = ()=>{
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
             </div>
             <div className='nav-links-container'>
               <Link className='nav-link' to='/sign-in'>
               Sign In
               </Link>
             </div>
           </div>
           <Outlet/>
        </Fragment>
    )
}
export default Navigation