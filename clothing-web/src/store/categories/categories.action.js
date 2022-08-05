import { CATEGORIES_ACTION_TYPES } from "./categories.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const SetCategoriesReducer = (categories)=>{
      return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categories)
}