import { CATEGORIES_ACTION_TYPES } from "./categories.type";

const CATEGORIES_INITIAL_STATE = {categories:[]}
export const Categories_reducer = (
    state = CATEGORIES_INITIAL_STATE,
    action = {}
)=>{
    const {type,payload} = action
    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return({...state,categories:payload})
        default:
            return state
    }
}