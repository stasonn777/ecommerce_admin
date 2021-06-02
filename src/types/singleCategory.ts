export interface CategoryTypes {
  img: string
  title: string
  description: string
  slug: string
  count: number
}

export enum SingleCategoryActionTypes {
  FETCH_SINGLE_CATEGORY = 'FETCH_SINGLE_CATEGORY',
  FETCH_SINGLE_CATEGORY_SUCCESS = 'FETCH_SINGLE_CATEGORY_SUCCESS',
  FETCH_SINGLE_CATEGORY_ERROR = 'FETCH_SINGLE_CATEGORY_ERROR',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
  UPDATE_CATEGORY = 'UPDATE_CATEGORY',
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

export type SingleCategoryAction = FetchSingleCategoryAction | FetchSingleCategorySuccessAction | FetchSingleCategoryErrorAction