import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';


import { Title, CategoryContainer } from './category.styles';

export const Category = ()=>{
    const Categories = useSelector(selectCategoriesMap)
    const {category} = useParams();
    console.log(category)
    console.log(category)
    const [itemstoshow,setitems] = useState(Categories[category])
   
    useEffect(()=>{
        setitems(Categories[category])
    },[Categories,category])
    console.log(Categories)

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