import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import { ProductCard } from '../../components/product-card/product-card.component';


import './category.styles.scss';

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
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
        {itemstoshow&&
            itemstoshow.map((item)=>(
            <ProductCard key={item.id} product={item}/>
    ))}
        </div>
    )
        </Fragment>
)
    }