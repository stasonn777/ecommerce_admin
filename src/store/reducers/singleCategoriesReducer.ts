import {SingleCategoryActionTypes, SingleCategoryAction, CategoryTypes} from "../../types/singleCategory"

const initialState: CategoryTypes = {
  _id: '',
  image: '',
  name: '',
  slug: '',
  products: [],
  parent: '',
  description: '',
  loading: false,
  error: null
}

export const singleCategoriesReducer = (state = initialState, action: SingleCategoryAction): CategoryTypes => {
  switch (action.type) {
    case SingleCategoryActionTypes.FETCH_SINGLE_CATEGORY:
    case SingleCategoryActionTypes.POST_NEW_CATEGORY:
      return {...state, loading: true}
    case SingleCategoryActionTypes.SET_CATEGORY_FIELDS:
      return {...state, ...action.payload}
    case SingleCategoryActionTypes.FETCH_SINGLE_CATEGORY_SUCCESS:
        return {...state, ...action.payload, loading: false }
    case SingleCategoryActionTypes.POST_NEW_CATEGORY_SUCCESS:
      return {...initialState, loading: false}
    case SingleCategoryActionTypes.SET_CATEGORY_IMAGE:
      return {...state, image: action.payload}
    case SingleCategoryActionTypes.FETCH_SINGLE_CATEGORY_ERROR:
    case SingleCategoryActionTypes.POST_NEW_CATEGORY_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}
