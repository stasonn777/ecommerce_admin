import * as ProductsActionCreators from './products'
import * as SingleProductActionCreators from './singleProduct'
import * as UserAuthActionCreators from './userAuth'
import * as alertActionCreators from './alert'

export default {
  ...ProductsActionCreators,
  ...SingleProductActionCreators,
  ...UserAuthActionCreators,
  ...alertActionCreators
}