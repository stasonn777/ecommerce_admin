import {CategoryActionTypes, CategoryAction, CategoriesState} from "../../types/categories"

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null
}

export const categoriesReducer = (state = initialState, action: CategoryAction): CategoriesState => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES:
      return {...state, loading: true}
    case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {...state, loading: false, categories: action.payload}
    case CategoryActionTypes.FETCH_CATEGORIES_ERROR: 
      return {...state, error: action.payload}
    case CategoryActionTypes.DELETE_CATEGORY:
      return {...state, categories: state.categories.filter(c => c._id !== action.payload)}
    default:
      return state
  }
}
