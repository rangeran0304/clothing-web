import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
export const CartIcon = ()=>{
    const {isCartOpen,setCart,Itemscount} = useContext(CartContext)
    const handleChange =()=>{
        setCart(!isCartOpen)
    }
    return(
        <div className='cart-icon-container' onClick={handleChange}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{Itemscount}</span>
        </div>
    )
}