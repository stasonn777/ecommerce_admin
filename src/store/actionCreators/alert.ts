import { AlertActionTypes } from '../../types/alerts'
import { AppThunk } from '../../types/thunk'

export const setAlert = (msg: null | string, type: string): AppThunk => {
  return (dispatch) => {
    dispatch({ type: AlertActionTypes.SET_ALERT, payload: { msg, type } })

    setTimeout(() => {
      dispatch({ type: AlertActionTypes.REMOVE_ALERT })
    }, 3000)
  }
}
