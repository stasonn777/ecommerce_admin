// export interface CategoryTypes {
//   _id: string
//   name: string
//   image: string
//   slug: string
//   products: []
//   parent: []

import { CategoryTypes } from "./singleCategory";

// }
export interface CategoriesState{
  categories: CategoryTypes[]
  loading: boolean
  error: string | null
}

export enum CategoryActionTypes {
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
  FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
  DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR',
  UPDATE_CATEGORY = 'UPDATE_CATEGORY',
}

interface FetchCategoriesAction {
  type: CategoryActionTypes.FETCH_CATEGORIES
}
interface FetchCategoriesSuccessAction {
  type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS
  payload: CategoryTypes[]
}
interface FetchCategoriesErrorAction {
  type: CategoryActionTypes.FETCH_CATEGORIES_ERROR
  payload: string
}
interface DeleteCategoryAction {
  type: CategoryActionTypes.DELETE_CATEGORY
  payload: string
}
interface DeleteCategoryErrorAction {
  type: CategoryActionTypes.DELETE_CATEGORY_ERROR
  payload: string
}


export type CategoryAction = FetchCategoriesAction | FetchCategoriesSuccessAction | FetchCategoriesErrorAction | DeleteCategoryAction | DeleteCategoryErrorAction