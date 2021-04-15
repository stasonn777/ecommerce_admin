import { Dispatch } from 'redux'
import { AlertAction, AlertActionTypes } from '../../types/alerts'

export const setAlert = (msg: null | string, type: string) => {
  return (dispatch: Dispatch<AlertAction>) => {
    dispatch({ type: AlertActionTypes.SET_ALERT, payload: { msg, type } })

    setTimeout(() => {
      dispatch({ type: AlertActionTypes.REMOVE_ALERT })
    }, 5000)
  }
}
