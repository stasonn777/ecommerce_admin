import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Create, Section } from '../../styles'
import Spinner from '../layout/Spinner'
import ProductItem from './ProductItem'
import { Grid, Header } from './styles'

const Products: React.FC = () => {
  const { products, error, loading } = useTypedSelector(state => state.products)

  const { fetchProducts, createNewProduct, removeProduct } = useActions()

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line
  }, [])

  const removeItem = (id: string) => {
    removeProduct(id)
  }

  const showProducts = products.map(product => {
    return <ProductItem key={product._id} state={product} removeItem={removeItem}/>
  })

  if (loading) { return <Spinner /> }
  if (error) { return <h1>{error}</h1> }

  return (
    <Section width="100%">
      <Header>
        <span>Products</span>
        <NavLink onClick={() => createNewProduct()} to="/new-product"><Create>Create New Product</Create></NavLink>
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
