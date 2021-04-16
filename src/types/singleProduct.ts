export interface SingleProductState {
  title: string
  description: string
  featuredImg: string
  images: string[]
  brand: string
  price: number
  newPrice: number
  countInStock: number
  options: {
    color: string
    size: string
    others: { key: string; value: string }[]
  }
  status: string
  createdAt: Date
  categories: string[]
  _id: string
  loading: boolean
  error: null | string
}

export enum SingleProductActionTypes {
  FETCH_PRODUCT = 'FETCH_PRODUCT',
  FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
  CREATE_NEW_PRODUCT = 'CREATE_NEW_PRODUCT',
  SET_PRODUCT_FIELDS = 'SET_PRODUCT_FIELDS',
  SET_PRODUCT_OPTIONS = 'SET_PRODUCT_OPTIONS',
  POST_NEW_PRODUCT = 'POST_NEW_PRODUCT',
  CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR',
  DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS',
  DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR',
}

interface FetchedProductAction {
  type: SingleProductActionTypes.FETCH_PRODUCT
}
interface FetchedProductSuccessAction {
  type: SingleProductActionTypes.FETCH_PRODUCT_SUCCESS
  payload: SingleProductState
}
interface FetchedProductErrorAction {
  type: SingleProductActionTypes.FETCH_PRODUCT_ERROR
  payload: string
}
interface CreateNewProductAction {
  type: SingleProductActionTypes.CREATE_NEW_PRODUCT
}
interface SetProductFieldsAction {
  type: SingleProductActionTypes.SET_PRODUCT_FIELDS
  payload: SingleProductState
}
interface SetProductOptionsAction {
  type: SingleProductActionTypes.SET_PRODUCT_OPTIONS
  payload: SingleProductState
}
interface PostNewProductAction {
  type: SingleProductActionTypes.POST_NEW_PRODUCT
}
interface CreateProductSuccessAction {
  type: SingleProductActionTypes.CREATE_PRODUCT_SUCCESS
  payload: string
}
interface CreateProductErrorAction {
  type: SingleProductActionTypes.CREATE_PRODUCT_ERROR
  payload: string
}
interface DeleteProductAction {
  type: SingleProductActionTypes.DELETE_PRODUCT_SUCCESS
}
interface DeleteProductErrorAction {
  type: SingleProductActionTypes.DELETE_PRODUCT_ERROR
  payload: string
}

export type SingleProductAction = FetchedProductAction | FetchedProductSuccessAction | FetchedProductErrorAction | CreateNewProductAction | SetProductFieldsAction | SetProductOptionsAction | PostNewProductAction | CreateProductSuccessAction | CreateProductErrorAction | DeleteProductAction | DeleteProductErrorAction
