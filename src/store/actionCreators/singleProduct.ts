import axios from 'axios'
import { Dispatch } from 'redux'
import {
  SingleProductAction,
  SingleProductActionTypes,
  SingleProductTypes,
} from '../../types/singleProduct'
import setAuthToken from '../../utils/setAuthToken'

export const fetchSingleProduct = (id: string) => {
  return async (dispatch: Dispatch<SingleProductAction>) => {
    try {
      dispatch({ type: SingleProductActionTypes.FETCH_PRODUCT })
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`
      )
      dispatch({
        type: SingleProductActionTypes.FETCH_PRODUCT_SUCCESS,
        payload: response.data,
      })
    } catch (err) {
      dispatch({
        type: SingleProductActionTypes.FETCH_PRODUCT_ERROR,
        payload: 'Error',
      })
    }
  }
}

export const createNewProduct = () => ({
  type: SingleProductActionTypes.CREATE_NEW_PRODUCT,
})

export const createProduct = (data: {}) => ({
  type: SingleProductActionTypes.CREATE_PRODUCT,
  payload: data,
})

export const postNewProduct = (product: SingleProductTypes) => {
  console.log(product)
  return async (dispatch: Dispatch<SingleProductAction>) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await axios.post(`http://localhost:5000/api/products/`, product, config)
      dispatch({
        type: SingleProductActionTypes.FETCH_PRODUCT_SUCCESS,
        payload: response.data,
      })
    } catch (err) {
      dispatch({
        type: SingleProductActionTypes.CREATE_PRODUCT_ERROR,
        payload: 'Error',
      })
    }
  }
}
