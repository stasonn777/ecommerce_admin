import {
  SingleProductAction,
  SingleProductActionTypes,
  SingleProductState,
} from '../../types/singleProduct'

const initialState: SingleProductState = {
  singleProduct: {
    title: '',
    description: '',
    featuredImg: '',
    images: [],
    brand: '',
    price: '',
    newPrice: '',
    countInStock: 0,
    options: [{ color: '', size: '', others: [] }],
    categories: [],
    createdAt: new Date(),
    loading: false,
    error: null,
  },
  loading: false,
  error: null,
}

export const singleProductReducer = (state = initialState, action: SingleProductAction): SingleProductState => {
  switch (action.type) {
    case SingleProductActionTypes.FETCH_PRODUCT:
      return { ...state, loading: true }
    case SingleProductActionTypes.FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, singleProduct: action.payload }
    case SingleProductActionTypes.FETCH_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload }
    case SingleProductActionTypes.CREATE_PRODUCT:
      return { ...state, singleProduct: {...state.singleProduct, ...action.payload} }
    case SingleProductActionTypes.CREATE_PRODUCT_SUCCESS:
      return { ...state, loading: true, singleProduct: action.payload }
    case SingleProductActionTypes.CREATE_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
