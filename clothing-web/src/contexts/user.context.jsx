import { createContext, useEffect, useReducer} from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserProfileDocument } from "../utils/firebase/firebase.utils";
export const UserContext = createContext(
    {
        currentUser : null,
        setCurrentUser : ()=>null,
        
    }
)
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
  };
const Initial_State = {
    currentUser:null,
} 
const UserReducer = (state,action)=>{
    const {type,payload} = action
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{...state,currentUser:payload}
        default:
            break;
    }

}
export const UserProvider = ({children})=>{
    const [{currentUser},dispatch] = useReducer(UserReducer,Initial_State)
    const setCurrentUser = (user)=>{
            dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user})
    }
    useEffect( ()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                 createUserProfileDocument(user)
            }
            setCurrentUser(user)
        });
        return unsubscribe;
    },[])
    const value= {currentUser,setCurrentUser}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}