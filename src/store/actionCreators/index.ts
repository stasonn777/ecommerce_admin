import * as ProductsActionCreators from './products'
import * as SingleProductActionCreators from './singleProduct'

export default {
  ...ProductsActionCreators,
  ...SingleProductActionCreators
}