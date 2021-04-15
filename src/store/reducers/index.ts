import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { productsReducer } from "./productsReducer";
import { singleProductReducer } from "./singleProductReducer";
import { userAuthReducer } from "./userAuthReducer";


export const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  userAuth: userAuthReducer,
  alert: alertReducer
})

export type RootState = ReturnType<typeof rootReducer>