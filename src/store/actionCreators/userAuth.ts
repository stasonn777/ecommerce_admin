import axios from 'axios'
import { Dispatch } from 'redux'
import { UserAction, UserActionTypes } from '../../types/userAuth'
import setAuthToken from '../../utils/setAuthToken'

export const logoutUser = () => ({type: UserActionTypes.LOGOUT, payload: "User logged out"})

export const setUserFields = (data: {}) => ({
  type: UserActionTypes.SET_USER_FIELDS,
  payload: data,
})

export const loadUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    if(localStorage.token) {
      setAuthToken(localStorage.token)
    }
    try {
      const response = await axios.get('http://localhost:5000/api/auth') 
      dispatch({type: UserActionTypes.USER_LOADED, payload: response.data})
    } catch (err) {
      dispatch({type: UserActionTypes.AUTH_ERROR, payload: err.response.data.msg})
    }
  }
}

export const registerUser = (data: {}) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await axios.post('http://localhost:5000/api/users', data, config)

      dispatch({type: UserActionTypes.REGICTER_SUCCESS, payload: response.data.token})
    } catch (err) {
      dispatch({type: UserActionTypes.REGISTER_FAIL, payload: err.response.data.msg})
    }
  }
}

export const loginUser = (data: {}) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth', data, config)
      dispatch({type: UserActionTypes.LOGIN_SUCCESS, payload: response.data.token})
    } catch (err) {
      dispatch({type: UserActionTypes.LOGIN_FAIL, payload: err.response.data.msg})
    }
  }
}