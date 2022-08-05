export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
  };
export const Initial_State = {
    currentUser:null,
  } 
export const UserReducer = (state=Initial_State,action={})=>{
    const {type,payload} = action
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{...state,currentUser:payload}
        default:
            return state
    }
}