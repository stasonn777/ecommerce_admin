import axios from 'axios'
import { Dispatch } from 'redux'
import {
  SingleProductAction,
  SingleProductActionTypes,
  SingleProductTypes,
} from '../../types/singleProduct'

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
  return (dispatch: Dispatch<SingleProductAction>) => {

      dispatch({
        type: SingleProductActionTypes.POST_NEW_PRODUCT,
      })
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA2YzZjZjNhZTk4OGM0MjgwNzY5OWVmIn0sImlhdCI6MTYxODM4NzM2OCwiZXhwIjoxNjE4Mzk0NTY4fQ.3vRnPuBjVj0KXnD_MmZUasZsWl8xgL02E4HJ1Xwy7PY",
          data: JSON.stringify(product)
        },
      }
      axios
        .post(`http://localhost:5000/api/products/`, config)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))

  }
}
// export const postNewProduct = (product: SingleProductTypes) => {
//   return async (dispatch: Dispatch<SingleProductAction>) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           "x-auth-token":
//             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA2YzZjZjNhZTk4OGM0MjgwNzY5OWVmIn0sImlhdCI6MTYxODM4NzM2OCwiZXhwIjoxNjE4Mzk0NTY4fQ.3vRnPuBjVj0KXnD_MmZUasZsWl8xgL02E4HJ1Xwy7PY",
//         },
//       }
//       await axios.post(
//         `http://localhost:5000/api/products/`,
//         product, config
//       ).then(res => dispatch({
//         type: SingleProductActionTypes.FETCH_PRODUCT_SUCCESS,
//         payload: res.data,
//       }))

//     } catch (err) {
//       dispatch({
//         type: SingleProductActionTypes.CREATE_PRODUCT_ERROR,
//         payload: 'Error',
//       })
//     }
//   }
// }
