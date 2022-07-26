import { Fragment, useContext } from "react"
import { CategoriesContext } from "../../contexts/categories.context"
import './category.preview.scss'
import { CategoryPreview } from "../../components/category-preview/category-preview.component"
export const CategoriesPreview = ()=>{
    const {products} = useContext(CategoriesContext)
    console.log(products)
    return(
        <Fragment>
        {Object.keys(products).map((title)=>{
            const previewproducts = products[title]
            return(
                <CategoryPreview key={title} title={title} products={previewproducts}/>
            )
        })}
        </Fragment>
    
    )
}