import React, { ChangeEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { removeProduct } from '../../store/actionCreators/singleProduct'
import { GridBox, Add, Edit, Section, Input } from '../../styles'
import { FeaturedImg, FormWrapper, H3 } from './styles'

interface Props {
  id: string
  featuredImg: string
  brand: string
  price: number
  newPrice: number
  countInStock: number
  categories: string[]
  postProduct: any
}

const Aside = ({countInStock, brand, price, newPrice, featuredImg, postProduct, id} : Props) => {

  const { setProductFields, removeProduct, setAlert } = useActions()

  const setData = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
    const data = { [e.target.name]: e.target.value }
    setProductFields(data)
  }

  const onRemove = () => {
    removeProduct(id)
    setAlert('Product removed successfully', 'success') 
  }

  return (
    <Section width='25%'>
      <FormWrapper>
        <GridBox grid="auto auto" margin="20px">
          <Add onClick={postProduct}>Save</Add>
          <Edit>Publish</Edit>
          <NavLink onClick={onRemove} to='/products'>Remove</NavLink>
        </GridBox>
        <label htmlFor="brand">Brand</label>
        <Input onChange={setData} type="text" name="brand" placeholder="Brand" value={brand} />
        <GridBox grid="auto auto" margin="20px">
          <div><label htmlFor="price">Standart Price</label>
            <Input onChange={setData} type="text" name="price" placeholder="Standart Price" value={price} /></div>
          <div><label htmlFor="new_price">New Price</label>
            <Input onChange={setData} type="text" name="newPrice" placeholder="New Price" value={newPrice}/></div>
        </GridBox>
        <label htmlFor="stock">In stock</label>
        <Input onChange={setData} type="number" name="countInStock" placeholder="In stock" value={countInStock} />
        <H3>Featured image</H3>
        <FeaturedImg src={featuredImg} alt="" />
        <Add>Set image</Add>
      </FormWrapper>
    </Section>
  )
}

export default Aside
