import { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Main from './Main';
import Aside from './Aside';
import { Wrapper } from '../../styles';

interface MatchParams {
  match: {
    isExact: boolean
    params: { id: string }
    path: string
    url: string
  }
}

const SingleProduct = ({ match }: MatchParams) => {
  const product = useTypedSelector(state => state.singleProduct.singleProduct)

  const { fetchSingleProduct, createNewProduct, postNewProduct } = useActions()

  useEffect(() => {
    if (!match.params.id) {
      createNewProduct()
    } else {
      fetchSingleProduct(match.params.id)
    }
    // eslint-disable-next-line
  }, [])

  const postProduct = () => {
    console.log(product)
    
    // postNewProduct(product)
  }

  return (
    <Wrapper>
      <Main title={product.title} description={product.description} options={product.options} />
      <Aside brand={product.brand} price={product.price} newPrice={product.newPrice} countInStock={product.countInStock} featuredImg={product.featuredImg} categories={product.categories} postProduct={postProduct} />
    </Wrapper>
  )
}

export default SingleProduct
