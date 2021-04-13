export interface ProductTypes {
  _id: string
  title: string
  featuredImg: string
  brand: string
  price: string
  countInStock: string
  createdAt: string
  categories: string[]
}

export interface ProductsState {
  products: ProductTypes[]
  loading: boolean
  error: null | string
}

export enum ProductsActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
}

interface FetchedProductsAction {
  type: ProductsActionTypes.FETCH_PRODUCTS
}
interface FetchedProductsSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS
  payload: ProductTypes[]
}
interface FetchedProductsErrorAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_ERROR
  payload: string
}

export type ProductsAction = FetchedProductsAction | FetchedProductsSuccessAction | FetchedProductsErrorAction