export interface SingleProductTypes {
  title: string
  description: string
  featuredImg: string
  images: string[]
  brand: string
  price: string
  newPrice: string
  countInStock: 0
  options: {
    color: string
    size: string
    others: { key: string; value: string }[]
  }[]
  createdAt: Date
  categories: string[]
  loading: boolean
  error: null | string
}

export interface SingleProductState {
  singleProduct: SingleProductTypes
  loading: boolean
  error: null | string
}

export enum SingleProductActionTypes {
  FETCH_PRODUCT = 'FETCH_PRODUCT',
  FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
  CREATE_PRODUCT = 'CREATE_PRODUCT',
  CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR',
}

interface FetchedProductAction {
  type: SingleProductActionTypes.FETCH_PRODUCT
}
interface FetchedProductSuccessAction {
  type: SingleProductActionTypes.FETCH_PRODUCT_SUCCESS
  payload: SingleProductTypes
}
interface FetchedProductErrorAction {
  type: SingleProductActionTypes.FETCH_PRODUCT_ERROR
  payload: string
}
interface CreateProductAction {
  type: SingleProductActionTypes.CREATE_PRODUCT
  payload: any
}
interface CreateProductSuccessAction {
  type: SingleProductActionTypes.CREATE_PRODUCT_SUCCESS
  payload: SingleProductTypes
}
interface CreateProductErrorAction {
  type: SingleProductActionTypes.CREATE_PRODUCT_ERROR
  payload: string
}

export type SingleProductAction = FetchedProductAction | FetchedProductSuccessAction | FetchedProductErrorAction | CreateProductAction | CreateProductSuccessAction | CreateProductErrorAction
