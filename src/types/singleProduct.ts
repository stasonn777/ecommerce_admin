export interface SingleProductState {
  title: string
  description: string
  featuredImg: string
  images: string[]
  brand: string
  price: number
  newPrice: number
  countInStock: number
  color: string
  size: string
  options:  {id: string, name: string, value: string, type: string}[]
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
  SET_OPTIONS_FIELDS = 'SET_OPTIONS_FIELDS',
  POST_NEW_PRODUCT = 'POST_NEW_PRODUCT',
  CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR',
  DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS',
  DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR',
  UPLOAD_PRODUCT_IMAGE = 'UPLOAD_PRODUCT_IMAGE',
  UPLOAD_PRODUCT_IMAGE_SUCCESS = 'UPLOAD_PRODUCT_IMAGE_SUCCESS',
  UPLOAD_PRODUCT_IMAGE_ERROR = 'UPLOAD_PRODUCT_IMAGE_ERROR'
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
  payload: {id: string, name: string, value: string, type: string}
}
interface SetOptionsFieldsAction {
  type: SingleProductActionTypes.SET_OPTIONS_FIELDS
  payload: {id: string, name: string, value: string, type: string}
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
interface UploadProductImageAction {
  type: SingleProductActionTypes.UPLOAD_PRODUCT_IMAGE
}
interface UploadProductImageSuccessAction {
  type: SingleProductActionTypes.UPLOAD_PRODUCT_IMAGE_SUCCESS
  payload: string
}
interface UploadProductImageErrorAction {
  type: SingleProductActionTypes.UPLOAD_PRODUCT_IMAGE_ERROR
  payload: string
}

export type SingleProductAction = FetchedProductAction | FetchedProductSuccessAction | FetchedProductErrorAction | CreateNewProductAction | SetProductFieldsAction | SetProductOptionsAction | SetOptionsFieldsAction | PostNewProductAction | CreateProductSuccessAction | CreateProductErrorAction | DeleteProductAction | DeleteProductErrorAction | UploadProductImageAction |UploadProductImageSuccessAction | UploadProductImageErrorAction
