import axios from 'axios'
import {Dispatch} from 'redux'
import { CategoryAction, CategoryActionTypes } from '../../types/categories'
import { CategoryTypes, SingleCategoryAction, SingleCategoryActionTypes } from '../../types/singleCategory'
import { AppThunk } from '../../types/thunk'
import setAuthToken from '../../utils/setAuthToken'
import { setAlert } from './alert'

export const setCategoryFields = (data: {}) => ({
  type: SingleCategoryActionTypes.SET_CATEGORY_FIELDS,
  payload: data,
})

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      dispatch({type: CategoryActionTypes.FETCH_CATEGORIES})
      const response = await axios.get('http://localhost:5000/api/categories')
      dispatch({type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS, payload: response.data})
    } catch (err) {
      dispatch({type: CategoryActionTypes.FETCH_CATEGORIES_ERROR, payload: err})
    }
  }
}

export const fetchSingleCategory = (id: string) => {
  return async (dispatch: Dispatch<SingleCategoryAction>) => {
    try {
      dispatch({type: SingleCategoryActionTypes.FETCH_SINGLE_CATEGORY})
      const response = await axios.get(`http://localhost:5000/api/categories/${id}`)
      dispatch({type:SingleCategoryActionTypes.FETCH_SINGLE_CATEGORY_SUCCESS, payload: response.data})
    } catch (err) {
      dispatch({type:SingleCategoryActionTypes.FETCH_SINGLE_CATEGORY_ERROR, payload: err})
    }
  }
}

export const deleteCategory = (id: string) => {
  return async (dispatch: Dispatch<CategoryAction | AppThunk>) => {
    try {
      await axios.delete(`http://localhost:5000/api/categories/${id}`)
      dispatch({type: CategoryActionTypes.DELETE_CATEGORY, payload: id})
      dispatch(setAlert('Category deleted successfully', 'success'))
    } catch (err) {
      dispatch({type:CategoryActionTypes.DELETE_CATEGORY_ERROR, payload: err})
    }
  }
}

export const postNewCategory = (category: CategoryTypes) => {
  return async (dispatch: Dispatch<SingleCategoryAction | AppThunk>) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    try {
      dispatch({type: SingleCategoryActionTypes.POST_NEW_CATEGORY})
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.post(
        `http://localhost:5000/api/categories/`,
        category,
        config
      )
      dispatch({type:SingleCategoryActionTypes.POST_NEW_CATEGORY_SUCCESS})
      dispatch(fetchCategories())
    } catch (err) {
      dispatch({type:SingleCategoryActionTypes.POST_NEW_CATEGORY_ERROR, payload: err})
    }
  }
}

export const setCategoryFuturedImage = (data: string | Blob) => {
  return async (dispatch: Dispatch<SingleCategoryAction>) => {
    try {
      const formData = new FormData()
      formData.append('file', data)
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const result = await axios.post('http://localhost:5000/upload', formData, config)
      dispatch({type: SingleCategoryActionTypes.SET_CATEGORY_IMAGE, payload: result.data.filepath})
    } catch (err) {
      console.log(err)
    }
  }
}