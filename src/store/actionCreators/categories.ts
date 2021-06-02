import axios from 'axios'
import {Dispatch} from 'redux'
import { CategoryAction, CategoryActionTypes } from '../../types/categories'

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    try {
      dispatch({type: CategoryActionTypes.FETCH_CATEGORIES})
      const response = await axios.get('http://localhost:5000/api/ca')
    } catch (err) {
      
    }
  }
}