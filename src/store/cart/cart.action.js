import { CreateAction } from "../../utils/reducer/reducer.utils";
import CATEGORIES_ACTION_TYPES from './categories.types'

export const setIsCartOpen = (bool) => CreateAction(CATEGORIES_ACTION_TYPES.SET_IS_CART_OPEN, bool)
