import { UserAction, UserActionTypes, UserTypes } from "../../types/userAuth";

const initialState: UserTypes = {
  name: '',
  password: '',
  password2: '',
  email: '',
  user: null,
  token: '',
  isAuthenticated: false,
  loading: true,
  error: null
}

export const userAuthReducer = (state = initialState, action: UserAction): UserTypes => {
  switch (action.type) {
    case UserActionTypes.USER_LOADED: 
      return {...state, isAuthenticated: true, loading: false, user: { ...action.payload}}
    case UserActionTypes.SET_USER_FIELDS: 
      return {...state, ...action.payload}
    case UserActionTypes.REGICTER_SUCCESS:
    case UserActionTypes.LOGIN_SUCCESS:
    localStorage.setItem('token', action.payload)
      return {...state, token: action.payload, isAuthenticated: true, error: null, loading: false}
    case UserActionTypes.REGISTER_FAIL:
    case UserActionTypes.LOGIN_FAIL:
    case UserActionTypes.AUTH_ERROR:
    case UserActionTypes.LOGOUT:
      localStorage.removeItem('token')
      return {...state, token: '', isAuthenticated: false, loading: false, user: null, error: action.payload}
    case UserActionTypes.CLEAR_ERRORS:
      return {...state, error: null}
    default:
      return state
  }
}