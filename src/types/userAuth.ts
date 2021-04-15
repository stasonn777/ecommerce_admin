interface USerData { 
  name: string
  email: string
  _id: string
  role: string 
}

export interface UserTypes {
  name: string
  password: string
  password2: string
  email: string
  user: USerData | null
  token: string
  isAuthenticated: boolean
  loading: boolean
  error: null | string
}

export enum UserActionTypes {
  SET_USER_FIELDS = 'SET_USER_FIELDS',
  REGISTER_USER = 'REGISTER_USER',
  REGICTER_SUCCESS = 'REGICTER_SUCCESS',
  REGISTER_FAIL = 'REGISTER_FAIL',
  USER_LOADED = 'USER_LOADED',
  AUTH_ERROR = 'AUTH_ERROR',
  LOGIN_USER = 'LOGIN_USER',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOGOUT = 'LOGOUT',
  CLEAR_ERRORS = 'CLEAR_ERRORS',
}

interface SetUserValuesAction {
  type: UserActionTypes.SET_USER_FIELDS
  payload: UserTypes
}
interface RegisterUserAction {
  type: UserActionTypes.REGISTER_USER
  payload: UserTypes
}
interface RegisterSuccessAction {
  type: UserActionTypes.REGICTER_SUCCESS
  payload: string
}
interface RegisterFailAction {
  type: UserActionTypes.REGISTER_FAIL
  payload: string
}
interface UserLoadedAction {
  type: UserActionTypes.USER_LOADED
  payload: USerData
}
interface AuthErrordAction {
  type: UserActionTypes.AUTH_ERROR
  payload: string
}
interface LoginUserAction {
  type: UserActionTypes.LOGIN_USER
  payload: UserTypes
}
interface LoginSuccessAction {
  type: UserActionTypes.LOGIN_SUCCESS
  payload: string
}
interface LoginFailedAction {
  type: UserActionTypes.LOGIN_FAIL
  payload: string
}
interface UserLogoutAction {
  type: UserActionTypes.LOGOUT
  payload: string
}
interface ClearErrorsAction {
  type: UserActionTypes.CLEAR_ERRORS
}

export type UserAction =
  | SetUserValuesAction
  | RegisterUserAction
  | RegisterSuccessAction
  | RegisterFailAction
  | UserLoadedAction
  | AuthErrordAction
  | LoginUserAction
  | LoginSuccessAction
  | LoginFailedAction
  | UserLogoutAction
  | ClearErrorsAction
