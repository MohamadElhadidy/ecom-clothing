import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CreateAction } from "../../utils/reducer/reducer.utils";
import CATEGORIES_ACTION_TYPES from './categories.types'



export const fetchCategoriesStart = () => CreateAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categories) => CreateAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)

export const fetchCategoriesFail = (error) => CreateAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error)


export const fetchCategoriesAsync = () => async dispatch => {
  dispatch(fetchCategoriesStart())
  try {
    const categoriesArray = await getCategoriesAndDocuments('categories')
    dispatch(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    dispatch(fetchCategoriesFail(error))
  }
}