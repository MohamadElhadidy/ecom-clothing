import { CreateAction } from "../../utils/reducer/reducer.utils";
import CATEGORIES_ACTION_TYPES  from './categories.types'


export const setCategories = (categories) => CreateAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories)
