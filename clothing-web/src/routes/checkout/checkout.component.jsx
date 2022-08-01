import React from "react";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { CheckoutContainer,CheckoutHeader,HeaderBlock,Total } from "./checkout.styles";
import { CheckoutItem } from "../../components/checkoutItem/checkoutitem.component";
export const CheckoutPage = ()=>{
    const {cartItems,TotalValue} = useContext(CartContext)
    return(
        <CheckoutContainer>
        <CheckoutHeader>
        <HeaderBlock>
        <span>Product</span></HeaderBlock>
        <HeaderBlock>
        <span>Description</span></HeaderBlock>
        <HeaderBlock>
        <span>Price</span></HeaderBlock>
        <HeaderBlock>
        <span>Remove</span></HeaderBlock>
        </CheckoutHeader>
        <div >
        {cartItems.map((cartItem)=>(<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))}
        </div>
        <Total>Total: {TotalValue}</Total>
        </CheckoutContainer>
    )
}