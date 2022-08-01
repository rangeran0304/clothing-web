import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CheckOutItemContainer,ImageContainer,BaseSpan,Quantity,Arrow,Value,RemoveButton } from "./checkoutitem.styles";
export const CheckoutItem=({cartItem})=>{
    const {imageUrl, price, name, quantity}=cartItem;
    const {addItemToCart,removeItemFromCart,deleteItemFromCart} = useContext(CartContext)
    const handleaddItem=()=>addItemToCart(cartItem)
    const handleremoveItem=()=>removeItemFromCart(cartItem)
    const handledeleteItem=()=>deleteItemFromCart(cartItem)
    return(
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan className='name'> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={handleremoveItem} >
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleaddItem} >
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan>{quantity} * {price}</BaseSpan>
      <RemoveButton onClick={handledeleteItem}>
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>
    )

}