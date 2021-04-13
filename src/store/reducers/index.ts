import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { singleProductReducer } from "./singleProductReducer";


export const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer 
})

export type RootState = ReturnType<typeof rootReducer>