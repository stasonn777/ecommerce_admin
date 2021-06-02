import axios from 'axios'
import { Dispatch } from 'redux'
import { ProductsAction, ProductsActionTypes } from '../../types/products'
import {
  SingleProductAction,
  SingleProductActionTypes,
  SingleProductState,
} from '../../types/singleProduct'
import { AppThunk } from '../../types/thunk'
import setAuthToken from '../../utils/setAuthToken'
import { setAlert } from './alert'

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
export const setProductFields = (data: {}) => ({
  type: SingleProductActionTypes.SET_PRODUCT_FIELDS,
  payload: data,
})
export const setProductOptions = (data: {}) => ({
  type: SingleProductActionTypes.SET_PRODUCT_OPTIONS,
  payload: data,
})
export const setOptionsFields = (data: {}) => ({
  type: SingleProductActionTypes.SET_OPTIONS_FIELDS,
  payload: data,
})
export const updateProduct = (product: SingleProductState) => {
  return async (dispatch: Dispatch<SingleProductAction | AppThunk>) => {
    dispatch({ type: SingleProductActionTypes.UPDATE_PRODUCT })
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await axios.put(
        `http://localhost:5000/api/products/${product._id}`,
        product,
        config
      )
      dispatch({
        type: SingleProductActionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: response.data._id,
      })
      dispatch(setAlert('Product updated successfully', 'success'))
    } catch (err) {
      dispatch({
        type: SingleProductActionTypes.UPDATE_PRODUCT_ERROR,
        payload: 'Error',
      })
    }
  }
}
export const postNewProduct = (product: SingleProductState) => {
  return async (dispatch: Dispatch<SingleProductAction | AppThunk>) => {
    dispatch({ type: SingleProductActionTypes.POST_NEW_PRODUCT })
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await axios.post(
        `http://localhost:5000/api/products/`,
        product,
        config
      )
      dispatch({
        type: SingleProductActionTypes.CREATE_PRODUCT_SUCCESS,
        payload: response.data._id,
      })
      dispatch(setAlert('Product saved successfully', 'success'))
    } catch (err) {
      dispatch({
        type: SingleProductActionTypes.CREATE_PRODUCT_ERROR,
        payload: 'Error',
      })
    }
  }
}
export const removeProduct = (id: string) => {
  return async (
    dispatch: Dispatch<SingleProductAction | ProductsAction | AppThunk>
  ) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`)
      dispatch({ type: ProductsActionTypes.DELETE_PRODUCTS, payload: id })
      dispatch({ type: SingleProductActionTypes.DELETE_PRODUCT_SUCCESS })
      dispatch(setAlert('Product removed successfully', 'success'))
    } catch (err) {
      dispatch({
        type: SingleProductActionTypes.DELETE_PRODUCT_ERROR,
        payload: 'Error',
      })
    }
  }
}

export const setProductFuturedImage = (data: string | Blob) => {
  return async (dispatch: Dispatch<SingleProductAction>) => {
    try {
      dispatch({type: SingleProductActionTypes.UPLOAD_PRODUCT_IMAGE})
      const formData = new FormData()
      formData.append('file', data)
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const result = await axios.post('http://localhost:5000/upload', formData, config)
      dispatch({type: SingleProductActionTypes.UPLOAD_PRODUCT_IMAGE_SUCCESS, payload: result.data.filepath})
    } catch (err) {
      console.log(err)
    }
  }
}
