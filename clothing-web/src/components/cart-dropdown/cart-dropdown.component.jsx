import React, { useContext } from "react";
import Button from '../button/button.component'
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../cart-item/cart-item.component";
import { CartDropDownContainer,EmptyMessage,CartItems } from "./cart-dropdown.styles";
import { useNavigate } from 'react-router-dom';
export const CartDropDown = ()=>{
    const navigate = useNavigate()
    const handlecheckout = ()=>{
        navigate('/checkout')
    }
    const{cartItems}=useContext(CartContext)
    return (
    <CartDropDownContainer>
    <CartItems>
    {
        cartItems.length? (cartItems.map((item)=>(
        <CartItem key={item.id} cartItem={item}/>))
        ):(<EmptyMessage>Your Cart is empty</EmptyMessage>)
    }
    </CartItems>
    <Button onClick={handlecheckout}>Go to checkout</Button>
    </CartDropDownContainer>)
}