import React, { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from 'react-redux';
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

  const { fetchSingleProduct } = useActions()

  useEffect(() => {
    fetchSingleProduct(match.params.id)
  }, [])

  return (
    <Wrapper>
      <Main title={product.title} description={product.description} options={product.options} />
      <Aside brand={product.brand} price={product.price} newPrice={product.newPrice} countInStock={product.countInStock} featuredImg={product.featuredImg} categories={product.categories} />
    </Wrapper>
  )
}

export default SingleProduct
