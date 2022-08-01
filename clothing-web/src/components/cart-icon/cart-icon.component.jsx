import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
export const CartIcon = ()=>{
    const {isCartOpen,setCart,Itemscount} = useContext(CartContext)
    const handleChange =()=>{
        setCart(!isCartOpen)
    }
    return(
        <CartIconContainer onClick={handleChange}>
        <ShoppingIcon />
        <ItemCount>{Itemscount}</ItemCount>
        </CartIconContainer>
    )
}