import axios from "axios"
import { Dispatch } from "redux"
import { ProductsAction, ProductsActionTypes } from "../../types/products"

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({type: ProductsActionTypes.FETCH_PRODUCTS})
      const response = await axios.get('http://localhost:5000/api/products')
      dispatch({type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
    } catch (err) {
      dispatch({type: ProductsActionTypes.FETCH_PRODUCTS_ERROR, payload: 'Products loaded with error'})
    }
  }
}

