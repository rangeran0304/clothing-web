import { Routes, Route } from 'react-router-dom';
import { CategoriesPreview } from '../category-preview/category-preview.component';
import { Category } from '../Category/category.component';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { SetCategoriesReducer } from '../../store/categories/categories.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
const Shop = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        const GetCategoriesMap = async()=>{
            const CategoriesMap = await getCategoriesAndDocuments('categories')  
            dispatch(SetCategoriesReducer(CategoriesMap))  } 
        GetCategoriesMap()
        }
    ,[])
    return(<Routes>
     <Route index element= {<CategoriesPreview/>}/>
     <Route path=':category' element={<Category/>}/>
    </Routes>)
}
export default Shop