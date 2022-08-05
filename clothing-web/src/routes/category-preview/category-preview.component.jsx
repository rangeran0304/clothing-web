import { Fragment, useContext } from "react"
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import './category.preview.scss'
import { CategoryPreview } from "../../components/category-preview/category-preview.component"
export const CategoriesPreview = ()=>{
    const categories = useSelector(selectCategoriesMap)
    console.log(categories)
    return(
        <Fragment>
        {Object.keys(categories).map((title)=>{
            const previewproducts = categories[title]
            return(
                <CategoryPreview key={title} title={title} products={previewproducts}/>
            )
        })}
        </Fragment>
    
    )
}