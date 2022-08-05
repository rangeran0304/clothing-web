import { createContext, useState , useReducer} from "react";
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

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_OPEN: 'SET_CART_OPEN'
}

const Initial_State = {
    isCartOpen:false,
    cartItems :[],
    Itemscount:0,
    TotalValue:0,
}

const CartReducer = (state,action)=>{
    const {type,payload} = action;
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return(
                {
                    ...state,...payload
                }
            )
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return(
                {
                    ...state,isCartOpen:payload
                }
            )
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`)
    }

}
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
    const [{cartItems,Itemscount,TotalValue,isCartOpen},dispatch] = useReducer(CartReducer,Initial_State)
    
    const UpdateReducer = (cartItems)=>{
        const counts=cartItems.reduce((total, cartItem)=>(total+cartItem.quantity),
        0)
        const Total=cartItems.reduce((total, cartItem)=>(total+cartItem.quantity*cartItem.price),
        0)
        const payload = {cartItems:cartItems,Itemscount:counts,TotalValue:Total}
        dispatch({type:CART_ACTION_TYPES.SET_CART_ITEMS,payload:payload})
    }
    const setCart = (Boolean)=>{
        dispatch({type:CART_ACTION_TYPES.SET_CART_OPEN,payload:Boolean})
    }
    const addItemToCart = (Item)=>{
        UpdateReducer((addFunction(cartItems, Item)))
    }
    const removeItemFromCart = (Item)=>{
        UpdateReducer((removeFunction(cartItems,Item)))
    }
    const deleteItemFromCart = (Item)=>{
        UpdateReducer((deleFunction(cartItems,Item)))
    }
    const value ={setCart,cartItems,addItemToCart,Itemscount,removeItemFromCart,deleteItemFromCart,TotalValue,isCartOpen}
    return<CartContext.Provider value = {value}>{children}</CartContext.Provider>
}