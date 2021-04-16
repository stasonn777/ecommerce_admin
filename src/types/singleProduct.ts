export interface SingleProductTypes {
  title: string
  description: string
  featuredImg: string
  images: string[]
  brand: string
<<<<<<< HEAD
  price: number
  newPrice: number
=======
  price: string
  newPrice: string
>>>>>>> cf314fb20e0c308034597f54b844f76c8a81c32d
  countInStock: number
  options: {
    color: string
    size: string
    others: { key: string; value: string }[]
  }[]
  createdAt: Date
  categories: string[]
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
  CREATE_NEW_PRODUCT = 'CREATE_NEW_PRODUCT',
  CREATE_PRODUCT = 'CREATE_PRODUCT',
  POST_NEW_PRODUCT = 'POST_NEW_PRODUCT',
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
interface CreateNewProductAction {
  type: SingleProductActionTypes.CREATE_NEW_PRODUCT
}
interface CreateProductAction {
  type: SingleProductActionTypes.CREATE_PRODUCT
  payload: SingleProductTypes
}
interface PostNewProductAction {
  type: SingleProductActionTypes.POST_NEW_PRODUCT
}
interface CreateProductSuccessAction {
  type: SingleProductActionTypes.CREATE_PRODUCT_SUCCESS
  payload: SingleProductTypes
}
interface CreateProductErrorAction {
  type: SingleProductActionTypes.CREATE_PRODUCT_ERROR
  payload: string
}

export type SingleProductAction = FetchedProductAction | FetchedProductSuccessAction | FetchedProductErrorAction | CreateNewProductAction | CreateProductAction | PostNewProductAction | CreateProductSuccessAction | CreateProductErrorAction
