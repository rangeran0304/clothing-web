import { createContext, useState ,useEffect} from "react";

export const CartContext = createContext({
    isCartOpen:false,
    setCart:()=>null,
    cartItems :[],
    addItemToCart: ()=>{},
    Itemscount:0,
    removeItemFromCart:()=>{},
    deleteItemFromCart:()=>{},
    TotalValue:0,
})

const addFunction = (cartItems, Itemtoadd)=>{
    const isItemexist = cartItems.find((item)=>{return(item.id===Itemtoadd.id)})
    if(isItemexist){
        return cartItems.map((item)=>
        (item.id===Itemtoadd.id?
            {...item,quantity:item.quantity+1}:item
        ))
    }
    return [...cartItems,{...Itemtoadd,quantity:1}]
}
const removeFunction = (cartItems, itemtoremove)=>{

    console.log(itemtoremove)
    if (itemtoremove.quantity===1){
        return (cartItems.filter((cartItem)=>cartItem.id!==itemtoremove.id))
    }
    return cartItems.map((item)=>
    (item.id===itemtoremove.id?
        {...item,quantity:item.quantity-1}:item
    ))
}
const deleFunction = (cartItems, itemtodelete)=>{
        return (cartItems.filter((cartItem)=>cartItem.id!==itemtodelete.id))
}

export const CartProvider = ({children})=>{
    const [isCartOpen,setCart] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [Itemscount,setItemscount] = useState(0)
    const [TotalValue,setTotalValuie] = useState(0)
    const addItemToCart = (Item)=>{
        setCartItems(addFunction(cartItems, Item))
    }
    const removeItemFromCart = (Item)=>{
        setCartItems(removeFunction(cartItems,Item))
    }
    const deleteItemFromCart = (Item)=>{
        setCartItems(deleFunction(cartItems,Item))
    }
    useEffect(()=>{
        const counts=cartItems.reduce((total, cartItem)=>(total+cartItem.quantity),
        0)
        setItemscount(counts)
    },[cartItems])
    useEffect(()=>{
        const Total=cartItems.reduce((total, cartItem)=>(total+cartItem.quantity*cartItem.price),
        0)
        setTotalValuie(Total)
    },[cartItems])
    const value ={isCartOpen,setCart,cartItems,addItemToCart,Itemscount,removeItemFromCart,deleteItemFromCart,TotalValue}
    return<CartContext.Provider value = {value}>{children}</CartContext.Provider>
}