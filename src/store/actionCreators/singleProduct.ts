import axios from 'axios'
import { Dispatch } from 'redux'
import { ProductsAction, ProductsActionTypes } from '../../types/products'
import {
  SingleProductAction,
  SingleProductActionTypes,
  SingleProductState,
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
export const setProductFields = (data: {}) => {
  for (const [key, value] of Object.entries(data)) {
    if(key !== 'color' && key !== 'size'){
      return {type: SingleProductActionTypes.SET_PRODUCT_FIELDS, payload: data}
    }
  }
  return {
    type: SingleProductActionTypes.SET_PRODUCT_OPTIONS,
    payload: data,
  }
}
export const postNewProduct = (product: SingleProductState) => {
  console.log(product)
  return async (dispatch: Dispatch<SingleProductAction>) => {
    dispatch({type: SingleProductActionTypes.POST_NEW_PRODUCT})
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
      dispatch({type: SingleProductActionTypes.CREATE_PRODUCT_SUCCESS, payload: response.data._id})
    } catch (err) {
      dispatch({
        type: SingleProductActionTypes.CREATE_PRODUCT_ERROR,
        payload: 'Error',
      })
    }
  }
}
export const removeProduct = (id: string) => {
  return async (dispatch: Dispatch<SingleProductAction | ProductsAction>) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`)
      dispatch({type: ProductsActionTypes.DELETE_PRODUCTS, payload: id})
      dispatch({type: SingleProductActionTypes.DELETE_PRODUCT_SUCCESS})
    } catch (err) {
      dispatch({
        type: SingleProductActionTypes.DELETE_PRODUCT_ERROR,
        payload: 'Error',
      })
    }
  }
}