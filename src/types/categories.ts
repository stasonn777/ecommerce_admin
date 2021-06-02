export interface CategoryTypes {
  img: string
  title: string
  slug: string
  count: number
}
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


export type CategoryAction = FetchCategoriesAction | FetchCategoriesSuccessAction | FetchCategoriesErrorAction