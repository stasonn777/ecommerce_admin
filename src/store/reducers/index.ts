import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { categoriesReducer } from "./categoriesReducer";
import { productsReducer } from "./productsReducer";
import { singleCategoriesReducer } from "./singleCategoriesReducer";
import { singleProductReducer } from "./singleProductReducer";
import { userAuthReducer } from "./userAuthReducer";


export const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  categories: categoriesReducer,
  category: singleCategoriesReducer,
  userAuth: userAuthReducer,
  alert: alertReducer
})

export type RootState = ReturnType<typeof rootReducer>