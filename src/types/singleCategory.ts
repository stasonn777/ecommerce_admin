export interface CategoryTypes {
  _id: string
  image: string
  name: string
  slug: string
  products: []
  parent: string
  description: string
  loading: boolean
  error: null | string
}

export enum SingleCategoryActionTypes {
  FETCH_SINGLE_CATEGORY = 'FETCH_SINGLE_CATEGORY',
  FETCH_SINGLE_CATEGORY_SUCCESS = 'FETCH_SINGLE_CATEGORY_SUCCESS',
  FETCH_SINGLE_CATEGORY_ERROR = 'FETCH_SINGLE_CATEGORY_ERROR',
  POST_NEW_CATEGORY = 'POST_NEW_CATEGORY',
  POST_NEW_CATEGORY_SUCCESS = 'POST_NEW_CATEGORY_SUCCESS',
  POST_NEW_CATEGORY_ERROR = 'POST_NEW_CATEGORY_ERROR',
  UPDATE_CATEGORY = 'UPDATE_CATEGORY',
  SET_CATEGORY_FIELDS = 'SET_CATEGORY_FIELDS',
  SET_CATEGORY_IMAGE = 'SET_CATEGORY_IMAGE',
}


interface FetchSingleCategoryAction {
  type: SingleCategoryActionTypes.FETCH_SINGLE_CATEGORY
}
interface FetchSingleCategorySuccessAction {
  type: SingleCategoryActionTypes.FETCH_SINGLE_CATEGORY_SUCCESS
  payload: CategoryTypes
}
interface FetchSingleCategoryErrorAction {
  type: SingleCategoryActionTypes.FETCH_SINGLE_CATEGORY_ERROR
  payload: string
}
interface PostNewCategoryAction {
  type: SingleCategoryActionTypes.POST_NEW_CATEGORY
}
interface PostNewCategorySuccessAction {
  type: SingleCategoryActionTypes.POST_NEW_CATEGORY_SUCCESS
}
interface SetCategoryFieldsAction {
  type: SingleCategoryActionTypes.SET_CATEGORY_FIELDS
  payload: CategoryTypes
}
interface PostNewCategoryErrorAction {
  type: SingleCategoryActionTypes.POST_NEW_CATEGORY_ERROR
  payload: string
}
interface SetCategoryImageAction {
  type: SingleCategoryActionTypes.SET_CATEGORY_IMAGE
  payload: string
}

export type SingleCategoryAction = FetchSingleCategoryAction | FetchSingleCategorySuccessAction | FetchSingleCategoryErrorAction | PostNewCategoryAction | PostNewCategorySuccessAction | PostNewCategoryErrorAction | SetCategoryFieldsAction | SetCategoryImageAction