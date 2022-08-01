import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import { ProductCard } from '../../components/product-card/product-card.component';


import { Title, CategoryContainer } from './category.styles';

export const Category = ()=>{
    const {products} = useContext(CategoriesContext)
    const {category} = useParams();
    console.log(category)
    console.log(category)
    const [itemstoshow,setitems] = useState(products[category])
   
    useEffect(()=>{
        setitems(products[category])
    },[products,category])
    console.log(products)

    return(
        <Fragment>
        <Title>{category.toUpperCase()}</Title>
        <CategoryContainer>
        {itemstoshow&&
            itemstoshow.map((item)=>(
            <ProductCard key={item.id} product={item}/>
    ))}
        </CategoryContainer>
    )
        </Fragment>
)
    }