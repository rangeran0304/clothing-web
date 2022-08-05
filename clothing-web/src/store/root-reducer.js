import { combineReducers } from "redux";
import { UserReducer } from "./user/user.reducer";
import { Categories_reducer } from "./categories/categories.reducer";
export const rootReducer = combineReducers(
    {
        user:UserReducer,
        categories:Categories_reducer
    }
)