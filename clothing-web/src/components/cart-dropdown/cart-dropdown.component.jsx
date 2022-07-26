import React, { useContext } from "react";
import Button from '../button/button.component'
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss"
import { useNavigate } from 'react-router-dom';
export const CartDropDown = ()=>{
    const navigate = useNavigate()
    const handlecheckout = ()=>{
        navigate('/checkout')
    }
    const{cartItems}=useContext(CartContext)
    return (
    <div className="cart-dropdown-container">
    <div className="cart-items">
    {
        cartItems.length? (cartItems.map((item)=>(
        <CartItem key={item.id} cartItem={item}/>))
        ):(<span className="empty-message">Your Cart is empty</span>)
    }
    <Button onClick={handlecheckout}>Go to checkout</Button>
    </div>
    </div>)
}