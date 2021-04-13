import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Create, Section } from '../../styles'
import Spinner from '../layout/Spinner'
import ProductItem from './ProductItem'
import { Grid, Header } from './styles'

const Products: React.FC = () => {
  const { products, error, loading } = useTypedSelector(state => state.products)

  const { fetchProducts } = useActions()

  useEffect(() => {
    fetchProducts()
  }, [])

  const showProducts = products.map(product => {
    return <ProductItem key={product._id} {...product} />
  })

  if (loading) { return <Spinner /> }
  if (error) { return <h1>{error}</h1> }

  return (
    <Section width="100%">
      <Header>
        <span>Products</span>
        <NavLink to="/new-product"><Create>Create New Product</Create></NavLink>
      </Header>
      <Grid>
        <span><input type="checkbox" name="" id=""/></span>
        <span>Img</span>
        <span>Title</span>
        <span>In stock</span>
        <span>Price</span>
        <span>Category</span>
        <span>Brand</span>
        <span>Date</span>
        <span></span>
        {showProducts}
      </Grid>
    </Section>
  )
}

export default Products
