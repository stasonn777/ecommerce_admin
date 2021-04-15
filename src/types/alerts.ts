export interface AlertTypes {
  msg: null | string
  type: string
}

export enum AlertActionTypes {
  SET_ALERT = 'SET_ALERT',
  REMOVE_ALERT = 'REMOVE_ALERT'
}

interface SetAlertAction {
  type: AlertActionTypes.SET_ALERT
  payload: AlertTypes
}

interface RemoveAlertAction {
  type: AlertActionTypes.REMOVE_ALERT
}

export type AlertAction = SetAlertAction | RemoveAlertAction