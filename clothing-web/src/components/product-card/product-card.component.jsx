import Button from "../button/button.component"
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import './product-card.styles.scss'
export const ProductCard = ({ product }) => {
    const{addItemToCart}=useContext(CartContext)
    const handleChange=()=>addItemToCart(product)
    const { name, price, imageUrl } = product;
    return (
      <div className='product-card-container'>
        <img src={imageUrl} alt={name} />
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{`${price}$`}</span>
        </div>
        <Button buttonType='inverted' onClick={handleChange}>Add to cart</Button>
      </div>
    );
  };
  
