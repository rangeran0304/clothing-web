import { createContext, useState } from "react";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
export const CategoriesContext = createContext({
    products:{},
})

export const CategoriesProvider = ({children})=>{
    const [products,setproducts] = useState({})
     useEffect(()=>{
        const getdata = async()=>{
            const data=await getCategoriesAndDocuments('collections')
            setproducts(data)
        }
        getdata()
     },[])
     const value = {products};
    return(
        <CategoriesContext.Provider value = {value}>{children}</CategoriesContext.Provider>

    )
}