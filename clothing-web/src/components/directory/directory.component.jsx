import './directory.styles.scss'
import CategoryItem from "../category-item/category_item";
const Directory = ({categories})=>{
    return(
        <div className='directory-container'>
        {categories.map(
          (category)=>(
              <CategoryItem key = {category.id} category={category}/>
          ))}
        </div>
        );
    };
export default Directory;