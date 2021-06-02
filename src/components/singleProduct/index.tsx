import React, { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Main from './Main';
import Aside from './Aside';
import { Wrapper } from '../../styles';
import { Redirect } from 'react-router-dom';
import Spinner from '../layout/Spinner';

interface MatchParams {
  match: {
    params: { id: string }
  }
}

const SingleProduct = ({ match }: MatchParams) => {
  const { ...singleProduct } = useTypedSelector(state => state.singleProduct)

  const { fetchSingleProduct, postNewProduct, updateProduct } = useActions()

  useEffect(() => {
    if (match.params.id) {
      fetchSingleProduct(match.params.id)
    }
    // eslint-disable-next-line
  }, [])

  const postProduct = () => {
    postNewProduct(singleProduct)
  }

  const updateCurrentProduct = () => {
    updateProduct(singleProduct)
  }
  if (singleProduct.loading) { return <Spinner /> }

  return (
    <Wrapper>
      {singleProduct._id !== '' && <Redirect to={`/products/${singleProduct._id}`} />}
      <Main />
      <Aside postProduct={postProduct} updateCurrentProduct={updateCurrentProduct} />
    </Wrapper>
  )
}

export default SingleProduct
