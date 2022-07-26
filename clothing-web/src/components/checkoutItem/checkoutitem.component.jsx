import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkoutitem.styles.scss'
export const CheckoutItem=({cartItem})=>{
    const {imageUrl, price, name, quantity}=cartItem;
    const {addItemToCart,removeItemFromCart,deleteItemFromCart} = useContext(CartContext)
    const handleaddItem=()=>addItemToCart(cartItem)
    const handleremoveItem=()=>removeItemFromCart(cartItem)
    const handledeleteItem=()=>deleteItemFromCart(cartItem)
    return(
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={handleremoveItem} >
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={handleaddItem} >
          &#10095;
        </div>
      </span>
      <span className='price'>{quantity} * {price}</span>
      <div className='remove-button' onClick={handledeleteItem}>
        &#10005;
      </div>
    </div>
    )

}