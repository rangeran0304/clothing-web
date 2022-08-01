import Button from "../button/button.component"
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { ProductCartContainer, Footer ,Name, Price } from "./product-card.styles";
export const ProductCard = ({ product }) => {
    const{addItemToCart}=useContext(CartContext)
    const handleChange=()=>addItemToCart(product)
    const { name, price, imageUrl } = product;
    return (
      <ProductCartContainer>
        <img src={imageUrl} alt={name} />
        <Footer>
          <Name>{name}</Name>
          <Price>{`${price}$`}</Price>
        </Footer>
        <Button buttonType='inverted' onClick={handleChange}>Add to cart</Button>
      </ProductCartContainer>
    );
  };
  
