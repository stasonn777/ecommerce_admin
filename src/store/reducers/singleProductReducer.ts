import {
  SingleProductAction,
  SingleProductActionTypes,
  SingleProductState,
} from '../../types/singleProduct'

const initialState: SingleProductState = {
  title: '',
  description: '',
  featuredImg: '',
  images: [],
  brand: '',
  price: 0,
  newPrice: 0,
  countInStock: 0,
  options: { color: '', size: '', others: [] },
  categories: [],
  createdAt: new Date(),
  status: '',
  _id: '',
  loading: false,
  error: null,
}

export const singleProductReducer = (state = initialState, action: SingleProductAction): SingleProductState => {
  switch (action.type) {
    case SingleProductActionTypes.FETCH_PRODUCT:
    case SingleProductActionTypes.POST_NEW_PRODUCT:
      return { ...state, loading: true }
    case SingleProductActionTypes.FETCH_PRODUCT_SUCCESS:
      return { ...state, ...action.payload, loading: false }
    case SingleProductActionTypes.CREATE_NEW_PRODUCT:
    case SingleProductActionTypes.DELETE_PRODUCT_SUCCESS:
      return { ...initialState }
    case SingleProductActionTypes.SET_PRODUCT_FIELDS:
      return { ...state,  ...action.payload }
    case SingleProductActionTypes.SET_PRODUCT_OPTIONS:
      return { ...state,  options: {...state.options, ...action.payload} }
    case SingleProductActionTypes.CREATE_PRODUCT_SUCCESS:
      return { ...state, loading: false, _id: action.payload }
    case SingleProductActionTypes.CREATE_PRODUCT_ERROR:
    case SingleProductActionTypes.FETCH_PRODUCT_ERROR:
    case SingleProductActionTypes.DELETE_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
