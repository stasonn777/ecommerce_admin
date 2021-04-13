import axios from "axios"
import { Dispatch } from "redux"
import { SingleProductAction, SingleProductActionTypes, SingleProductTypes } from "../../types/singleProduct"

export const fetchSingleProduct = (id: string) => {
  return async (dispatch: Dispatch<SingleProductAction>) => {
    try {
      dispatch({type: SingleProductActionTypes.FETCH_PRODUCT})
      const response = await axios.get(`http://localhost:5000/api/products/${id}`)
      dispatch({type: SingleProductActionTypes.FETCH_PRODUCT_SUCCESS, payload: response.data})
    } catch (err) {
      dispatch({type: SingleProductActionTypes.FETCH_PRODUCT_ERROR, payload: "Error"})
    }
  }
}

export const createProduct = (data : {}) => ({type: SingleProductActionTypes.CREATE_PRODUCT, payload: data})