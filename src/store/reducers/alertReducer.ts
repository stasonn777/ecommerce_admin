import { AlertTypes, AlertAction, AlertActionTypes } from "../../types/alerts";

const initialState: AlertTypes = {
  msg: null,
  type: '',
}

export const alertReducer = (state = initialState, action: AlertAction): AlertTypes => {
  switch (action.type) {
    case AlertActionTypes.SET_ALERT:
      return {msg: action.payload.msg, type: action.payload.type}
    case AlertActionTypes.REMOVE_ALERT:
      return {msg: null, type: ''}
    default:
      return state
  }
}