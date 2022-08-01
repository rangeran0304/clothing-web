import { CategoryPreviewContainer,PreviewTitle,Preview } from './category-preview';
import { ProductCard } from '../product-card/product-card.component';

export const CategoryPreview = ({title,products})=>{
    return(
        <CategoryPreviewContainer>
        <h2>
        <PreviewTitle to={title}>
        {title.toUpperCase()}
        </PreviewTitle>
        </h2>
        <Preview>
        {products.filter((_,idx)=>(idx<4)).map((product)=>(
            <ProductCard key={product.id} product={product} />
        ))}
        </Preview>
        </CategoryPreviewContainer>
    )
} 